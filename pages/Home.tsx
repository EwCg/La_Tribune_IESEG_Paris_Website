
import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { ChevronRight, Award, Users, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <main className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://raw.githubusercontent.com/EwCg/La_Tribune_Resources/main/milky-way.jpg" 
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-navy/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Trouvez Votre Voix, <br/>
              <span className="text-gold">Inspirez le Monde.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              La Tribune IÉSEG est l'association de référence pour l'art oratoire, 
              le débat parlementaire et l'éloquence au sein de l'IÉSEG School of Management.
            </p>
          </div>
        </div>
      </section>

      {/* Infinite Carousel */}
      <section className="bg-navy py-12 overflow-hidden">
        <div className="flex space-x-8 animate-infinite-scroll">
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, index) => (
            <div key={index} className="flex-shrink-0 w-[250px] h-[180px] rounded-xl overflow-hidden shadow-lg border-2 border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
              <img src={img} className="w-full h-full object-cover" alt={`Event ${index}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Stats / Value Props */}
      <section className="py-24 bg-white">
        <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-2xl hover:bg-off-white transition-colors">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-gold w-8 h-8" />
              </div>
              <h3 className="serif text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Champions de France de débat 2021. Nous visons le plus haut niveau lors des compétitions nationales.
              </p>
            </div>
            <div className="p-8 rounded-2xl hover:bg-off-white transition-colors">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-gold w-8 h-8" />
              </div>
              <h3 className="serif text-2xl font-bold mb-4">Transmission</h3>
              <p className="text-gray-600 leading-relaxed">
                Formation régulière de nos membres en interne pour assurer une transmission du savoir efficace.
              </p>
            </div>
            <div className="p-8 rounded-2xl hover:bg-off-white transition-colors">
              <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-gold w-8 h-8" />
              </div>
              <h3 className="serif text-2xl font-bold mb-4">Engagement</h3>
              <p className="text-gray-600 leading-relaxed">
                Un espace de liberté et de débat pour forger l'esprit critique et l'écoute active des leaders de demain.
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
            <p className="text-gray-500 max-w-lg mx-auto italic">Retrouvez nos derniers débats et événements en direct sur LinkedIn.</p>
          </div>
          
          <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden min-h-[500px] relative">
            {/* Le widget Elfsight s'injecte ici de manière propre */}
            <div className="elfsight-app-f74a0c0e-f46a-4dea-acc8-aeb8b742d84e" data-elfsight-app-lazy></div>
            
            {/* Overlay discret de chargement qui disparaît quand le widget est là */}
            <div className="absolute inset-0 bg-gray-50/50 pointer-events-none -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
