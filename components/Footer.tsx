
import React from 'react';
import { Mail, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="serif text-2xl font-bold mb-4">
              LA TRIBUNE <span className="text-gold">IESEG</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Association d'art oratoire de l'IÉSEG School of Management. 
              Promouvoir l'excellence rhétorique et le débat d'idées depuis 2017.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gold mb-4 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/#/about" className="hover:text-white transition-colors">Qui sommes-nous ?</a></li>
              <li><a href="/#/events" className="hover:text-white transition-colors">Nos Formats</a></li>
              <li><a href="/#/articles" className="hover:text-white transition-colors">Le Mag</a></li>
              <li><a href="/#/social" className="hover:text-white transition-colors">Réseaux</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gold mb-4 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} /> latribune@ieseg.fr
              </li>
              <li>Campus Paris : La Défense</li>
              <li>Campus Lille : Vauban</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-gold mb-4 uppercase tracking-wider text-xs">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Restez informé de nos prochains débats.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="bg-navy-light border border-gray-700 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-gold"
              />
              <button className="bg-gold text-navy px-4 py-2 rounded-lg font-bold text-sm hover:bg-white transition-colors">
                Ok
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} La Tribune IESEG Paris. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gold"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
