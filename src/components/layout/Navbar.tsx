import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = ['services', 'work', 'about'];

  const navClass = isHomePage
    ? `fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-main/40 backdrop-blur-md py-4' : 'bg-main/transparent py-6'
      }`
    : 'fixed w-full z-40 bg-main py-6';

  return (
    <>
      <nav className={navClass}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link to={"/"} className="text-2xl font-bold text-pearl flex items-center space-x-2">
              <span>Intellycorp</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.filter(item => item !== 'contact').map((item) => (
                <Link
                  key={item}
                  to={`/#${item}`}
                  className="text-pearl px-6 py-2 rounded-full hover:bg-pearl hover:text-main transition"
                >
                  {t(`nav.${item}`)}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="bg-pearl text-main px-6 py-2 rounded-full transition hover:bg-highlight"
              >
                {t('nav.contact')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden bg-highlight z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-primary/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sidebar Menu */}
      <div 
        className={`fixed top-0 right-0 h-full bg-primary dark:bg-primary/90 w-full max-w-[520px] z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex-1 p-6 space-y-6">
            <div className="space-y-6 pt-10">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={`/#${item}`}
                  className="block text-2xl font-semibold text-pearl hover:text-pearl transition px-4 py-2 hover:bg-primary.dark rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item}`)}
                </Link>
              ))}
            </div>
            <div className="border-t border-pearl pt-6">
              <Link 
                to="/contact"
                className="w-full bg-secondary.DEFAULT hover:bg-secondary.dark px-6 py-3 rounded-full transition text-pearl text-lg font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}