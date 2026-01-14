
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
            src="https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&q=80&w=2000" 
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
            <div className="flex flex-wrap gap-4">
              <a href="#/events" className="bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-xl">
                Découvrir nos activités
              </a>
              <a href="#/about" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-navy transition-all">
                Notre Histoire
              </a>
            </div>
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
                Plus de 500 étudiants formés à la prise de parole en public chaque année via nos ateliers.
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
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="bg-white p-4 rounded-3xl shadow-xl overflow-hidden">
             {/* Replace with actual Elfsight embed code if available, currently using placeholder for design */}
            <div className="elfsight-app-f74a0c0e-f46a-4dea-acc8-aeb8b742d84e" data-elfsight-app-lazy>
              <div className="p-20 text-center text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
                [ LinkedIn Dynamic Feed Placeholder ]
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
