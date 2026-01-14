
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

  const secondaryLogoUrl = "https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/12%20(3).png";

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-lg border-b border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO GAUCHE : Institutionnel IÉSEG */}
          <div className="flex-1 flex justify-start items-center">
            <a 
              href="https://www.ieseg.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={secondaryLogoUrl} 
                alt="IÉSEG Logo" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* NAVIGATION CENTRALE : Remplissage optimal de l'espace */}
          <nav className="hidden md:flex flex-[2] justify-center items-center space-x-10 lg:space-x-14">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm lg:text-base font-medium tracking-wide transition-all hover:text-gold relative group ${
                  isActive(link.path) ? 'text-gold' : 'text-gray-300'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${isActive(link.path) ? 'w-full' : ''}`}></span>
              </Link>
            ))}
          </nav>

          {/* ACTIONS & LOGO DROITE : Identité La Tribune */}
          <div className="flex-1 flex justify-end items-center space-x-6">
            <a
              href="https://forms.gle/your-form-id"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block bg-gold text-navy px-6 py-2 rounded-full font-bold text-sm transform transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-gold/20"
            >
              Rejoignez-nous
            </a>

            <Link to="/" className="flex items-center space-x-3 shrink-0 border-l border-white/10 pl-6 group">
              <div className="text-right leading-tight hidden xl:block">
                <span className="serif font-bold text-sm lg:text-base uppercase tracking-tighter">
                  La Tribune <br/>
                  <span className="text-gold">IÉSEG Paris</span>
                </span>
              </div>
              <div className="bg-gold p-2.5 rounded-xl shadow-sm transition-transform group-hover:rotate-12">
                <Mic2 className="text-navy w-5 h-5" />
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none p-2"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 animate-in fade-in slide-in-from-top-4">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-lg font-medium ${
                  isActive(link.path) ? 'bg-gold text-navy' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 mt-4">
              <a
                href="https://forms.gle/your-form-id"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gold text-navy px-6 py-4 rounded-xl font-bold text-lg shadow-xl"
              >
                Rejoignez-nous
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
