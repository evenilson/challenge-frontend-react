import Banner from "../../components/Banner";
import CharacterApresentationCard from "../../components/CharacterApresentationCard/intex";

import useBreakpointDevice from "../../hooks/useBreakpointDevice";

import './styles.scss';
import ComicCard from "../../components/ComicCard";
import { ICharacter, IComic } from "../../types/character";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById, getComics } from "../../services/characterService";
import Loading from "../../components/Loading";
import TitleList from "../../components/TitleList/intex";
import Footer from "../../components/Footer";


function CharacterProfile(){

  const {device} = useBreakpointDevice();
  const { id } = useParams();

  const [characterInfo, setCharacterInfo] = useState<ICharacter>();
  const [comics, setComics] = useState<IComic[]>([]);
  const [loading, setLoading] = useState(false)

  const customStyleTitle = device !== 'mobile' ? { margin: '0 2rem' } : {}


  useEffect(() => {
    setLoading(true)
    getCharacterById(id || '')
    .then((res) => {
      setCharacterInfo(res.data.results[0])
    })
    
    getComics(id || '')
    .then((res) => {
      setComics(res.data.results)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <>
      <Banner
        title={<>Discover all comics this <br /> character took part in</>}
        styleTitle={customStyleTitle}
        backButtom
      />
      {
        loading ? ( 
          <Loading />
        ) : (
          <section className="container character-profile-content">
            <CharacterApresentationCard 
              image={`${characterInfo?.thumbnail.path}.${characterInfo?.thumbnail.extension}`}
              name={characterInfo?.name || 'unnamed'}
              key={characterInfo?.id}
              description={characterInfo?.description || 'Without description'}
            />

            <TitleList 
              title="Comics"
              total={comics.length}
            />

            {
              comics.length > 0 ? (
                comics.map((comic) => {
                  return <ComicCard 
                    key={comic.id}
                    image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    name={comic.title}
                    description={comic.description}
                    numberPages={comic.pageCount}
                    price={comic.prices}
                    releaseDate={comic.dates}

                  />
                })
              ) : (
                <p className="info">We have no further results to show!</p>
              )
            }
          </section>
        )
      }

      { !loading && <Footer /> }

    </>
  )
}

export default CharacterProfile;