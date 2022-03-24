import Banner from "../../components/Banner";
import CharacterApresentationCard from "../../components/CharacterApresentationCard/intex";

import useBreakpointDevice from "../../hooks/useBreakpointDevice";

import './styles.scss';
import ComicCard from "../../components/ComicCard";


function CharacterProfile(){

  const {device} = useBreakpointDevice();

  const customStyleTitle = device !== 'mobile' ? { margin: '0 2rem' } : {}

  return (
    <>
      <Banner
        title={<>Discover all comics this <br /> character took part in</>}
        styleTitle={customStyleTitle}
      />
      <section className="container character-profile-content">
        
      </section>

    </>
  )
}

export default CharacterProfile;