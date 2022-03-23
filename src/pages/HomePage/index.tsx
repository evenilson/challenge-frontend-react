import Banner from '../../components/Banner';
import Search from '../../components/Search';
import useBreakpointDevice from '../../hooks/useBreakpointDevice';
import './styles.scss';

function HomePage() {

  const { device } = useBreakpointDevice();

  const styleCustomeBanner = device === 'desktop' ? { width: '50%'} : device === 'tablet' ? { width: '75%'} : {};
 
  return (
    <div>
      <Banner 
        title={<>Explore the most powerful <br/> characters in Marvel</>}
        styles={styleCustomeBanner}
        children={
          <Search />
        }
      />
    </div>
  )
}

export default HomePage;