import { useEffect, useRef, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Banner from '../../components/Banner';
import CharacterCard from '../../components/CharacterCard';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import Search from '../../components/Search';
import TitleList from '../../components/TitleList/intex';
import useBreakpointDevice from '../../hooks/useBreakpointDevice';
import useDebounce from '../../hooks/useDebounce';
import { getCharacters } from '../../services/characterService';
import { ICharacter } from '../../types/character';

import './styles.scss';

const LIMIT = 8;

function HomePage() {

  const { device } = useBreakpointDevice();

  const scrollObserve = useRef<HTMLInputElement>(null)

  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [isMoreCharacters, setisMoreCharacters] = useState(true);
  const [text, setText] = useState('');
  const [haveMoreCharacters, setHaveMoreCharacters] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [isFirstSearch, setIsFirstSearch] = useState(false);

  const debouncedSearchText = useDebounce(text, 500)


  const customStyleTitle = device === 'desktop' ? { width: '50%' } : device === 'tablet' ? { width: '75%' } : {};

  async function handleGetCharacters() {

    setLoading(true);
    if (debouncedSearchText) setLoadingSearch(true)
    await getCharacters(LIMIT, offset, debouncedSearchText)
      .then((res) => {
        const oldCharacters = characters
        if (offset === 0) {
          setCharacters([...res.data.results])
        } else {
          setCharacters([...oldCharacters, ...res.data.results].sort())
        }
        setHaveMoreCharacters(res.data.count > 0 ? true : false)
      })
      .finally(() => {
        setLoading(false)
        setLoadingSearch(false)
        setIsFirstSearch(false)
      })
  }

  const intersectionObserver = new IntersectionObserver(entries => {
    const radio = entries[0].intersectionRatio;
    setisMoreCharacters(radio > 0 ? true : false)
  })

  useEffect(() => {
    intersectionObserver.observe(scrollObserve.current as Element);
    return () => {
      intersectionObserver.disconnect();
    }
  }, [])

  useEffect(() => {
    setLoading(true);
    setOffset(0)
  }, [text])

  useEffect(() => {
    if (isMoreCharacters && haveMoreCharacters) {
      handleGetCharacters().then(() => { setOffset(offset + 8) });
    }
  }, [isMoreCharacters])

  useEffect(() => {
    if(debouncedSearchText) {
      setIsFirstSearch(true)
    }
    handleGetCharacters().then(() => { setOffset(offset + 8) });

  }, [debouncedSearchText])

  function onChangeText(text: string) {
    setText(text)
  }

  return (
    <>
      <Banner
        title={<>Explore the most powerful <br /> characters in Marvel</>}
        styles={customStyleTitle}
        children={
          <Search
            text={text}
            onChange={onChangeText}
          />
        }
      />
      <section className="container home">
        <TitleList title="Characters" total={characters.length} />

        <div className="home__characters-list">

          {
            loadingSearch && isFirstSearch ? (
              <Loading title={`Searching for "${text}"...`} />
            ) : (
              characters.length > 0 ? (
                characters.map((character) => {
                  return (
                    <CharacterCard
                      key={character.id} 
                      id={character.id}
                      name={character.name}
                      thumbnail={ character.thumbnail }
                      description={character.description || 'Without description'}
                    />
                  )
                })
              ) : (
                !loading && <p className="info">Sorry, no characters available!</p>
              )
            )
          }
          <ScrollToTop smooth />
        </div>
      </section>

      {(loading && !isFirstSearch) && <Loading />}
      { (!haveMoreCharacters && characters.length) && <p className="info">We have no further results to show!</p>} 

      <div ref={scrollObserve}></div>
      {(characters.length > 0 && !loadingSearch )&& <Footer />}
    </>
  )



}

export default HomePage;


