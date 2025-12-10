import { useEffect, useMemo, useState } from 'react';
import { usePlayfulSound } from '../../hooks/usePlayfulSound';

type Card = { id: number; value: string; flipped: boolean; matched: boolean };

const words = ['क', 'क', 'A', 'A', 'ग', 'ग'];

const MemoryFlipGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [attempts, setAttempts] = useState(0);
  const { playTone } = usePlayfulSound();

  useEffect(() => {
    const shuffled = words
      .map((value, id) => ({ id, value, flipped: false, matched: false }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  useEffect(() => {
    if (flippedIds.length === 2) {
      const [a, b] = flippedIds;
      setAttempts((prev) => prev + 1);
      const first = cards.find((c) => c.id === a);
      const second = cards.find((c) => c.id === b);
      if (first && second && first.value === second.value) {
        playTone();
        setCards((prev) => prev.map((c) => (flippedIds.includes(c.id) ? { ...c, matched: true } : c)));
      }
      setTimeout(() => {
        setCards((prev) => prev.map((c) => (c.matched ? c : { ...c, flipped: false })));
        setFlippedIds([]);
      }, 800);
    }
  }, [flippedIds, cards, playTone]);

  const handleFlip = (card: Card) => {
    if (card.flipped || card.matched || flippedIds.length === 2) return;
    setCards((prev) => prev.map((c) => (c.id === card.id ? { ...c, flipped: true } : c)));
    setFlippedIds((prev) => [...prev, card.id]);
    playTone();
  };

  const score = useMemo(() => cards.filter((c) => c.matched).length / 2, [cards]);

  return (
    <div>
      <div className="flex items-center gap-4 mb-4 text-sm text-slate-700">
        <span>Score: {score} pairs</span>
        <span>Attempts: {attempts}</span>
      </div>
      <div className="grid grid-cols-3 gap-3 max-w-md">
        {cards.map((card) => (
          <button
            key={card.id}
            className={`aspect-square rounded-2xl shadow-soft text-2xl font-bold transition ${
              card.flipped || card.matched ? 'bg-rose-100' : 'bg-white'
            }`}
            onClick={() => handleFlip(card)}
            aria-label={`Card ${card.id}`}
          >
            {(card.flipped || card.matched) && card.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MemoryFlipGame;
