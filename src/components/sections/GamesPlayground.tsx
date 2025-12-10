import { motion } from 'framer-motion';
import { gameTiles } from '../../data/games';
import { Link } from 'react-router-dom';
import { usePlayfulSound } from '../../hooks/usePlayfulSound';

const GamesPlayground = () => {
  const { playTone } = usePlayfulSound();

  return (
    <section className="bg-[#FFF0F5] py-12">
      <div className="section-shell grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 font-display">Games Playground 🎮</h2>
          <p className="text-sm md:text-base text-slate-600 mb-6">
            Short, screen-safe games that turn vocabulary and letters into play.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gameTiles.map((tile) => (
              <motion.div
                key={tile.id}
                className="bg-white rounded-2xl p-4 shadow-soft hover:shadow-playful cursor-pointer"
                whileHover={{ y: -6 }}
                onMouseEnter={playTone}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[11px] px-2 py-1 rounded-full bg-rose-50 text-rose-500 font-semibold">{tile.label}</p>
                  <p className="text-[11px] text-slate-500">{tile.badge}</p>
                </div>
                <div className="font-semibold mt-2">{tile.title}</div>
                <div className="text-slate-600 text-sm">{tile.description}</div>
                <Link to={`/games/${tile.id}`} className="mt-2 text-[11px] text-rose-500 font-semibold inline-block">
                  Play demo →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/illustrations/games-illustration.svg"
            alt="Kids playing Lumasha games"
            className="max-h-80 rounded-3xl shadow-playful object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default GamesPlayground;
