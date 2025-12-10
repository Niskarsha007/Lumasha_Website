import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { usePlayfulSound } from '../../hooks/usePlayfulSound';

const alphabetFloat = Array.from({ length: 8 }).map((_, i) => (
  <motion.span
    key={`alpha-${i}`}
    className="absolute text-3xl md:text-4xl font-display text-rose-400"
    initial={{ y: 0, opacity: 0.6 }}
    animate={{ y: [0, -10, 0], rotate: [0, 4, -4, 0] }}
    transition={{ repeat: Infinity, duration: 3 + i * 0.2, ease: 'easeInOut', delay: i * 0.2 }}
    style={{ top: `${10 + i * 8}%`, left: `${20 + (i % 4) * 12}%` }}
  >
    {['क', 'A', 'अ', 'ग', 'B', 'न', 'म', 'ह'][i]}
  </motion.span>
));

const Hero = () => {
  const { t } = useTranslation();
  const { playTone } = usePlayfulSound();

  return (
    <section className="section-shell py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60">{alphabetFloat}</div>
      <div className="relative z-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-rose-400 font-semibold">Lumasha • Multilingual kids</p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-midnight font-display">
          {t('hero.headline')} 🌍
        </h1>
        <p className="text-base md:text-lg text-slate-700 max-w-xl">{t('hero.sub')}</p>
        <div className="flex flex-wrap gap-3">
          <button
            className="px-5 py-3 rounded-full bg-rose-500 text-white font-semibold shadow-playful hover:-translate-y-0.5 transition"
            onClick={playTone}
          >
            {t('ctaPlay')}
          </button>
          <button className="px-5 py-3 rounded-full border border-rose-200 font-semibold hover:-translate-y-0.5 transition" onClick={playTone}>
            {t('ctaExplore')}
          </button>
        </div>
        <p className="text-xs text-slate-500">Loved by parents & teachers. Designed for ages 2–8.</p>
      </div>
      <div className="relative z-10 flex justify-center">
        <motion.img
          src="/assets/illustrations/hero-maya-grandma.svg"
          alt="Kids learning with Lumasha"
          className="max-h-96 rounded-3xl shadow-playful"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};

export default Hero;
