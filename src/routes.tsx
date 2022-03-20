import { 
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

import HomePage from './pages/HomePage';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/home" element={ <HomePage /> } />
        <Route path='*' element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp