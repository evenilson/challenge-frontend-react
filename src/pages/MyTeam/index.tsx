
import { useEffect, useRef, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Banner from '../../components/Banner';
import CharacterCard from '../../components/CharacterCard';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import useBreakpointDevice from '../../hooks/useBreakpointDevice';
import useMyTeam from '../../hooks/useMyTeam';
import { ICharacter } from '../../types/character';
import './styles.scss';

function MyTeam() {

  const scrollObserve = useRef<HTMLInputElement>(null)

  const { device } = useBreakpointDevice();

  const { getTeam, myTeam } = useMyTeam();

  const [team, setTeam] = useState<ICharacter[]>([])

  const [limit, setLimit] = useState(8);

  const customStyleTitle = device !== 'mobile' ? { margin: '0 2rem' } : {}

  const [isMoreCharacters, setisMoreCharacters] = useState(true);

  const [haveMoreCharacters, setHaveMoreCharacters] = useState(true);

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
    if (isMoreCharacters && haveMoreCharacters) {
      const teamOffset = getTeam(limit);
      setTeam([...teamOffset.result])
      setHaveMoreCharacters(teamOffset.haveMore)
      setLimit(limit + 8)
    }
  }, [isMoreCharacters])

  useEffect(() => {
    const teamOffset = getTeam(limit);
    setTeam([...teamOffset.result])

    setHaveMoreCharacters(teamOffset.haveMore)
  }, [myTeam])



  return (
    <>
      <Banner
        title={<>Here is your own strike<br />team choice</>}
        styleTitle={customStyleTitle}
        backButtom
      />
      <section className="container my-team">
        {
          team.length > 0 ? (
            team.map((character) => {
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
            <p className="info">Sorry, no characters available!</p>
            )
          }
      </section>
        
      <ScrollToTop smooth />

      { (!haveMoreCharacters && team.length > 0) && <p style={{margin: '1rem 0 4rem 0', textAlign: 'center'}}>All your favorite characters have already been shown!</p> }


      <Footer />
      <div ref={scrollObserve}></div>
    </>
  );
}

export default MyTeam;