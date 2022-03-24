import { useEffect } from 'react';
import Banner from '../../components/Banner';
import Search from '../../components/Search';
import TitleList from '../../components/TitleList/intex';
import useBreakpointDevice from '../../hooks/useBreakpointDevice';
import getCharacter from '../../services/characterService';

import './styles.scss';

function HomePage() {

  const { device } = useBreakpointDevice();

  const styleCustomeBanner = device === 'desktop' ? { width: '50%'} : device === 'tablet' ? { width: '75%'} : {};

  async function getCharacters() {
    const response = await getCharacter()
    
    console.log(response)
  }

  useEffect(() => {
    getCharacters() 
  }, [])
 
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
        <TitleList title="Characters" total={190}/>
      </section>
    </>
  )

 
    
}

export default HomePage;

