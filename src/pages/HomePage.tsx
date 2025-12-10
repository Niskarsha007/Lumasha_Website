import AnnouncementBar from '../components/layout/AnnouncementBar';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import HighlightsStrip from '../components/sections/HighlightsStrip';
import Categories from '../components/sections/Categories';
import GamesPlayground from '../components/sections/GamesPlayground';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import WhatsNew from '../components/sections/WhatsNew';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import MissionSection from '../components/sections/MissionSection';
import AppPromo from '../components/sections/AppPromo';
import NewsletterSection from '../components/sections/NewsletterSection';
import Footer from '../components/layout/Footer';

const HomePage = () => (
  <div className="bg-[#FFFDF6] text-slate-900">
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur">
      <AnnouncementBar />
      <Navbar />
    </header>
    <main>
      <Hero />
      <HighlightsStrip />
      <Categories />
      <GamesPlayground />
      <FeaturedProducts />
      <WhatsNew />
      <TestimonialsSection />
      <MissionSection />
      <AppPromo />
      <NewsletterSection />
    </main>
    <Footer />
  </div>
);

export default HomePage;
