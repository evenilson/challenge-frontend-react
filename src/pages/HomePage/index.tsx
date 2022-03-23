import Banner from '../../components/Banner';
import './styles.scss';

function HomePage() {
  return (
    <div>
      <Banner 
        title={<>Explore the most powerful <br/> characters in Marvel</>}
        styles={{width: "75%"}}
        children={
          <p style={{color: "white"}}>react akhjss</p>
        }

      />
    </div>
  )
}

export default HomePage;