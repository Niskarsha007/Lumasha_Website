import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamesHub from './components/games/GamesHub';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/games/:gameId" element={<GamesHub />} />
    </Routes>
  );
}

export default App;
