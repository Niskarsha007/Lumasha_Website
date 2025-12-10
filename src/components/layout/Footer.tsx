const footerLinks = {
  Lumasha: ['About', 'Our Story', 'Careers (coming soon)'],
  'For Families': ['Learning Library', 'Games Playground', 'Free Printables'],
  Shop: ['Flashcards', 'Books & PDFs', 'Mats & Activities'],
  Help: ['Contact', 'Shipping & Returns', 'FAQ']
};

const Footer = () => (
  <footer className="bg-midnight text-slate-100 py-12 mt-10">
    <div className="section-shell grid md:grid-cols-5 gap-8">
      <div className="md:col-span-2 space-y-3">
        <div className="flex items-center gap-2">
          <img src="/lumasha-logo.svg" alt="Lumasha" className="h-10" />
          <span className="font-bold text-xl font-display">Lumaषा</span>
        </div>
        <p className="text-sm text-slate-200">
          Lumasha is a multilingual learning ecosystem for kids—mixing flashcards, games, songs, and stories to keep heritage
          languages alive.
        </p>
        <div className="flex gap-3">
          <a href="#" className="bg-white/10 px-3 py-2 rounded-xl text-sm">App Store</a>
          <a href="#" className="bg-white/10 px-3 py-2 rounded-xl text-sm">Google Play</a>
        </div>
      </div>
      {Object.entries(footerLinks).map(([title, links]) => (
        <div key={title}>
          <h3 className="font-semibold mb-3">{title}</h3>
          <ul className="space-y-2 text-sm text-slate-200">
            {links.map((link) => (
              <li key={link} className="hover:text-rose-200 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="section-shell mt-8 flex flex-wrap justify-between text-xs text-slate-400">
      <span>© {new Date().getFullYear()} Lumasha</span>
      <div className="flex gap-3">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Accessibility</a>
      </div>
    </div>
  </footer>
);

export default Footer;
