import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import BreakpointDeviceContextProvider from './contexts/BreakpointDeviceContext';
import MyTeamContextProvider from './contexts/MyTeamContext';
import RoutesApp from './routes';
import './styles/global.scss';


import { ToastContainer } from 'react-toastify';

import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}

function App() {
  return (
    <BrowserRouter>
      <BreakpointDeviceContextProvider>
        <MyTeamContextProvider>
          <Header />
          <RoutesApp />
        </MyTeamContextProvider>
      </BreakpointDeviceContextProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
