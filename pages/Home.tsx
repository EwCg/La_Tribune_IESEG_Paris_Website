
import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Award, Users, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/milky-way.jpg" 
            className="w-full h-full object-cover"
            alt="Hero Background"
            loading="eager"
          />
          <div className="absolute inset-0 bg-navy/75 mix-blend-multiply"></div>
        </div>
        
        <div className="relative max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="serif text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in slide-in-from-left duration-1000">
              Trouvez Votre Voix, <br/>
              <span className="text-gold">Inspirez le Monde.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed font-light max-w-xl">
              L'association de référence pour l'art oratoire et l'éloquence au sein de l'IÉSEG School of Management. 
              Forgeons ensemble les leaders de demain.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/events" className="bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
                Découvrir nos formats <ChevronRight size={20} />
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                L'association
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Carousel */}
      <section className="bg-navy py-12 overflow-hidden border-y border-white/5">
        <div className="flex space-x-8 animate-infinite-scroll">
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, index) => (
            <div key={index} className="flex-shrink-0 w-[280px] h-[200px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                src={img} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
                alt={`Event ${index}`} 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Value Props */}
      <section className="py-24 bg-white">
        <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-3xl hover:bg-off-white transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="bg-gold/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 transform rotate-3 hover:rotate-0 transition-transform">
                <Award className="text-gold w-10 h-10" />
              </div>
              <h3 className="serif text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed italic">
                Champions de France de débat 2021. Nous cultivons la rigueur et le dépassement de soi.
              </p>
            </div>
            <div className="p-8 rounded-3xl hover:bg-off-white transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="bg-gold/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 transform -rotate-3 hover:rotate-0 transition-transform">
                <Users className="text-gold w-10 h-10" />
              </div>
              <h3 className="serif text-2xl font-bold mb-4">Transmission</h3>
              <p className="text-gray-600 leading-relaxed italic">
                Formations hebdomadaires pour garantir une progression constante de chaque membre.
              </p>
            </div>
            <div className="p-8 rounded-3xl hover:bg-off-white transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="bg-gold/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 transform rotate-6 hover:rotate-0 transition-transform">
                <BookOpen className="text-gold w-10 h-10" />
              </div>
              <h3 className="serif text-2xl font-bold mb-4">Engagement</h3>
              <p className="text-gray-600 leading-relaxed italic">
                Un espace de liberté pour forger l'esprit critique et l'écoute active des enjeux de demain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed Widget */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl font-bold mb-4">Actualités Récentes</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-lg mx-auto italic">Retrouvez nos derniers débats et événements en direct de notre page LinkedIn.</p>
          </div>
          
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden min-h-[600px] relative">
            <div className="elfsight-app-f74a0c0e-f46a-4dea-acc8-aeb8b742d84e" data-elfsight-app-lazy></div>
            <div className="absolute inset-0 bg-gray-50/50 pointer-events-none -z-10 animate-pulse flex items-center justify-center">
                <span className="text-navy/20 font-bold serif text-xl italic tracking-widest">Chargement du flux...</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
