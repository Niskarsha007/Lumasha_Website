import { useState } from 'react';
import { usePlayfulSound } from '../../hooks/usePlayfulSound';

const matches = [
  { letter: 'क', word: 'कुकुर (Dog)', color: 'bg-rose-50' },
  { letter: 'A', word: 'Apple', color: 'bg-mint' },
  { letter: 'ग', word: 'गाइ (Cow)', color: 'bg-lemon' }
];

const AlphabetMatchGame = () => {
  const [connected, setConnected] = useState<string[]>([]);
  const { playTone } = usePlayfulSound();
  const handleDrop = (letter: string, target: string) => {
    if (letter === target && !connected.includes(letter)) {
      setConnected((prev) => [...prev, letter]);
      playTone();
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-semibold mb-3">Drag letters to the matching picture</h3>
        <div className="flex gap-3">
          {matches.map((item) => (
            <div
              key={item.letter}
              draggable={!connected.includes(item.letter)}
              onDragStart={(e) => e.dataTransfer.setData('text/plain', item.letter)}
              className={`w-16 h-16 rounded-2xl grid place-items-center text-2xl font-bold shadow-soft ${
                connected.includes(item.letter) ? 'bg-emerald-200' : 'bg-white'
              }`}
            >
              {item.letter}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {matches.map((item) => (
          <div
            key={item.word}
            className={`rounded-2xl p-4 min-h-[120px] ${item.color} shadow-soft`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e.dataTransfer.getData('text/plain'), item.letter)}
          >
            <p className="text-sm text-slate-700">{item.word}</p>
            <div className="mt-3 text-xs text-emerald-700 font-semibold">
              {connected.includes(item.letter) ? 'Great match!' : 'Drop letter here'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlphabetMatchGame;
