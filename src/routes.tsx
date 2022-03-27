import { 
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import HomePage from './pages/HomePage';
import CharacterProfile from './pages/CharacterProfile';
import MyTeam from './pages/MyTeam';

function RoutesApp() {
  return (
    <Routes >
      <Route path="/home" element={ <HomePage /> } />
      <Route path="/character-profile/:id" element={ <CharacterProfile /> } />
      <Route path="/my-team" element={ <MyTeam /> } />

      <Route path="*" element={ <Navigate to="/home" /> } />
    </Routes>
  );
}

export default RoutesApp