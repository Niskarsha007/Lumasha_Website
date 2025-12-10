import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      hero: {
        headline: 'Learning is Fun in Every Language',
        sub: 'Playful flashcards, stories, and games that help kids fall in love with Nepali, Hindi, Gujarati and more—one happy word at a time.'
      },
      ctaPlay: 'Play a Free Game',
      ctaExplore: 'Explore Learning Kits'
    }
  },
  ne: {
    translation: {
      hero: {
        headline: 'प्रत्येक भाषामा रमाइलो सिकाई',
        sub: 'खेल, कथा र फ्ल्यासकार्डहरूले नेपाली, हिन्दी, गुजराती र अन्य भाषामा रमाइलो सिकाइ।'
      },
      ctaPlay: 'निःशुल्क खेल खेल्नुहोस्',
      ctaExplore: 'लर्निङ किट हेर्नुहोस्'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
