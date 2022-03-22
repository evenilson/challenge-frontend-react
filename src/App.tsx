import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import RoutesApp from './routes';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
