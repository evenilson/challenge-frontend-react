import { 
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

import HomePage from './pages/HomePage';

function RoutesApp() {
  return (
    <Routes >
      <Route path="/home" element={ <HomePage /> } />
      <Route path='*' element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default RoutesApp