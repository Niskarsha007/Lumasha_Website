import { ShoppingBag, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLumashaStore } from '../../store/useLumashaStore';

const Navbar = () => {
  const cartCount = useLumashaStore((s) => s.cart.reduce((sum, item) => sum + item.quantity, 0));

  return (
    <nav className="section-shell flex items-center justify-between py-4 px-4 md:px-0">
      <div className="flex items-center gap-2">
        <img src="/lumasha-logo.svg" alt="Lumasha" className="h-10" />
        <span className="font-bold text-xl font-display">Lumaषा</span>
      </div>
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        {['Home', 'Learning', 'Games', 'Products', 'For Parents', 'About'].map((item) => (
          <li key={item} className="hover:text-rose-500 cursor-pointer">
            <Link to="#">{item}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <button className="hidden md:inline-flex px-4 py-2 rounded-full text-sm font-semibold bg-rose-500 text-white shadow-playful">
          Download App
        </button>
        <button aria-label="Search" className="p-2 rounded-full hover:bg-rose-50">
          <Search size={18} />
        </button>
        <button aria-label="Account" className="p-2 rounded-full hover:bg-rose-50">
          <User size={18} />
        </button>
        <button aria-label="Cart" className="p-2 rounded-full hover:bg-rose-50 relative">
          <ShoppingBag size={18} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[11px] w-5 h-5 rounded-full grid place-items-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
