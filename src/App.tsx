import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import BreakpointDeviceContextProvider from './contexts/BreakpointDeviceContext';
import RoutesApp from './routes';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <BreakpointDeviceContextProvider>
        <Header />
        <RoutesApp />
      </BreakpointDeviceContextProvider>
    </BrowserRouter>
  );
}

export default App;
