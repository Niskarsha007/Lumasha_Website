import { useCallback } from 'react';
import { useLumashaStore } from '../store/useLumashaStore';

export const usePlayfulSound = () => {
  const soundEnabled = useLumashaStore((s) => s.soundEnabled);

  const playTone = useCallback(() => {
    if (!soundEnabled || typeof window === 'undefined') return;
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 740;
    gain.gain.value = 0.1;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  }, [soundEnabled]);

  return { playTone };
};
