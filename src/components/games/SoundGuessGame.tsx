import { useState } from 'react';
import { usePlayfulSound } from '../../hooks/usePlayfulSound';

const prompts = [
  { audio: 'क', options: ['क', 'ग', 'न'], answer: 'क' },
  { audio: 'A', options: ['A', 'C', 'B'], answer: 'A' }
];

const SoundGuessGame = () => {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const { playTone } = usePlayfulSound();
  const prompt = prompts[index];

  const playAudio = () => {
    const utter = new SpeechSynthesisUtterance(prompt.audio);
    utter.lang = 'ne-NP';
    window.speechSynthesis.speak(utter);
  };

  const guess = (option: string) => {
    if (option === prompt.answer) {
      setFeedback('Great job!');
      playTone();
      setTimeout(() => setIndex((i) => (i + 1) % prompts.length), 600);
    } else {
      setFeedback('Try again');
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-700">Listen to the sound and tap the matching card.</p>
      <button className="px-4 py-2 rounded-full bg-rose-500 text-white font-semibold" onClick={playAudio}>
        🔊 Play audio “say: {prompt.audio}”
      </button>
      <div className="grid grid-cols-3 gap-3 max-w-sm">
        {prompt.options.map((option) => (
          <button
            key={option}
            className="bg-white rounded-2xl shadow-soft p-4 text-xl font-bold hover:-translate-y-0.5 transition"
            onClick={() => guess(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="text-sm text-emerald-600 font-semibold">{feedback}</p>
    </div>
  );
};

export default SoundGuessGame;
