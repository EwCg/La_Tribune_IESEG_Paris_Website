
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mic2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Événements', path: '/events' },
    { name: 'Articles', path: '/articles' },
    { name: 'Social', path: '/social' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-lg">
      <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gold p-2 rounded-lg">
              <Mic2 className="text-navy w-6 h-6" />
            </div>
            <span className="serif font-bold text-xl tracking-tight hidden sm:block">
              LA TRIBUNE <span className="text-gold">IESEG</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isActive(link.path) ? 'text-gold' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://forms.gle/your-form-id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy px-6 py-2 rounded-full font-bold text-sm transform transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-gold/20"
            >
              Rejoignez-nous
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t border-navy-light animate-in fade-in slide-in-from-top-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'bg-gold text-navy' : 'text-gray-300 hover:bg-navy-light hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://forms.gle/your-form-id"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-gold text-navy px-6 py-3 rounded-full font-bold text-lg"
            >
              Rejoignez-nous
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
