import { useEffect, useRef, useState } from 'react';
import Banner from '../../components/Banner';
import CharacterCard from '../../components/CharacterCard';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import Search from '../../components/Search';
import TitleList from '../../components/TitleList/intex';
import useBreakpointDevice from '../../hooks/useBreakpointDevice';
import getCharacters from '../../services/characterService';
import { ICharacter } from '../../types/character';

import './styles.scss';

const LIMIT = 8;

function HomePage() {

  const { device } = useBreakpointDevice();

  const scrollObserve = useRef<HTMLInputElement>(null)

  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [loading, setLoading] = useState(false)
  const [offset, setOffset] = useState(0)
  const [isMoreCharacters, setisMoreCharacters] = useState(true)


  const styleCustomeBanner = device === 'desktop' ? { width: '50%'} : device === 'tablet' ? { width: '75%'} : {};

  async function handleGetCharacters() {

      setLoading(true);
      await getCharacters(LIMIT, offset)
      .then((res) => {
        const oldCharacters =characters 
        setCharacters([...oldCharacters, ...res.data.results].sort())
      })
      .finally(() => { 
        setLoading(false)
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
  

  useEffect(()=> {
    if(isMoreCharacters) {
      handleGetCharacters().then(() => { setOffset(offset + 8) });
    }
  }, [isMoreCharacters])


 
  return (
    <>
      <Banner 
        title={<>Explore the most powerful <br/> characters in Marvel</>}
        styles={styleCustomeBanner}
        children={
          <Search />
        }
      />
      <section className="container home">
        <TitleList title="Characters" total={characters.length}/>

        <div className="home__characters-list">

          {
            characters.length > 0 ? (
              characters.map((character) => {
                return (
                  <CharacterCard 
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    description={character.description || 'Without description'}
                  />
                ) 
              })

            ) : (
              !loading && <p className="info">Sorry, no characters available!</p> 
            )
          }
          
        </div>
      </section>

      {loading && <Loading style={{margin: '2rem auto'}}/>}
      
      <div ref={scrollObserve}></div>
      { characters.length > 0 && <Footer/> }
    </>
  )

 
    
}

export default HomePage;


