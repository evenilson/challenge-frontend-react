import { 
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import HomePage from './pages/HomePage';
import CharacterProfile from './pages/CharacterProfile';

function RoutesApp() {
  return (
    <Routes >
      <Route path="/home" element={ <HomePage /> } />
      <Route path="/character-profile/:id" element={ <CharacterProfile /> } />
      <Route path="*" element={ <Navigate to="/home" /> } />
    </Routes>
  );
}

export default RoutesApp