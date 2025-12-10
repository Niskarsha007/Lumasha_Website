import { useParams, Link } from 'react-router-dom';
import AlphabetMatchGame from './AlphabetMatchGame';
import MemoryFlipGame from './MemoryFlipGame';
import TracingGame from './TracingGame';
import ColoringGame from './ColoringGame';
import SoundGuessGame from './SoundGuessGame';
import WordBuilderGame from './WordBuilderGame';

const gameMap: Record<string, JSX.Element> = {
  'alphabet-match': <AlphabetMatchGame />,
  'memory-flip': <MemoryFlipGame />,
  'trace-glow': <TracingGame />,
  'sound-guess': <SoundGuessGame />,
  'digital-coloring': <ColoringGame />,
  'word-builder': <WordBuilderGame />
};

const GamesHub = () => {
  const { gameId } = useParams();
  const game = gameId ? gameMap[gameId] : null;

  return (
    <div className="min-h-screen bg-[#FFFDF6] text-midnight">
      <div className="section-shell py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-rose-400 font-semibold">Mini Games Playground</p>
            <h1 className="text-3xl font-bold font-display">{gameId || 'Choose a game'}</h1>
            <p className="text-slate-600">Tap, drag, and explore bilingual play.</p>
          </div>
          <Link to="/" className="text-rose-500 font-semibold">← Back home</Link>
        </div>
        <div className="bg-white rounded-3xl shadow-playful p-6 min-h-[320px]">
          {game || (
            <p className="text-slate-600">
              Pick a game: /games/alphabet-match, /games/memory-flip, /games/trace-glow, /games/digital-coloring,
              /games/sound-guess, /games/word-builder
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamesHub;
