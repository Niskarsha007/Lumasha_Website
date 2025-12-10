import { useState } from 'react';
import { usePlayfulSound } from '../../hooks/usePlayfulSound';

const targetWord = 'MOMO';
const letters = ['M', 'O', 'M', 'O', 'A', 'K'];

const WordBuilderGame = () => {
  const [slots, setSlots] = useState<Array<string | null>>(Array(targetWord.length).fill(null));
  const { playTone } = usePlayfulSound();

  const placeLetter = (letter: string, index: number) => {
    setSlots((prev) => prev.map((value, idx) => (idx === index ? letter : value)));
  };

  const checkWin = slots.join('') === targetWord;

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-700">Drag letters to build the Nepali favorite “MOMO”.</p>
      <div className="flex gap-2">
        {letters.map((letter, idx) => (
          <div
            key={`${letter}-${idx}`}
            draggable
            onDragStart={(e) => e.dataTransfer.setData('text/plain', letter)}
            className="w-12 h-12 rounded-2xl bg-white shadow-soft grid place-items-center font-bold text-xl"
            onClick={playTone}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        {slots.map((slot, index) => (
          <div
            key={index}
            className="w-16 h-16 rounded-2xl bg-rose-50 shadow-soft grid place-items-center text-xl font-bold"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const letter = e.dataTransfer.getData('text/plain');
              placeLetter(letter, index);
              playTone();
            }}
          >
            {slot || '⬚'}
          </div>
        ))}
      </div>
      <p className="text-sm font-semibold text-emerald-600">{checkWin ? 'Yay! You built MOMO!' : 'Keep arranging letters.'}</p>
    </div>
  );
};

export default WordBuilderGame;
