
import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Gavel, MessageSquare, ZoomIn } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <main className="animate-in fade-in duration-700">
      {/* Page Header */}
      <section className="bg-navy py-24 text-white">
        <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="serif text-5xl font-bold mb-6">Nos Formats d'Éveil</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            De la joute verbale enflammée à la plaidoirie solennelle, 
            découvrez comment nous façonnons les orateurs de demain.
          </p>
        </div>
      </section>

      {/* Pedagogie */}
      <section className="py-24 max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Format 1 */}
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 hover:border-gold transition-colors group">
            <div className="bg-gold w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transform -rotate-6 group-hover:rotate-0 transition-transform">
              <Gavel className="text-navy w-8 h-8" />
            </div>
            <h2 className="serif text-3xl font-bold mb-6">Le Débat Parlementaire</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Le format "Choc des Idées". Deux équipes de quatre s'affrontent sur une motion de société ou géopolitique. 
              Gouvernement vs Opposition. Ici, l'écoute et la réactivité sont aussi vitales que l'éloquence.
            </p>
            <ul className="space-y-3 text-sm text-gray-500 mb-8">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gold rounded-full"></div> 7 minutes par discours</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gold rounded-full"></div> Points d'information (POI) autorisés</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gold rounded-full"></div> Structure stricte et argumentative</li>
            </ul>
            <button className="text-navy font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors">En savoir plus</button>
          </div>

          {/* Format 2 */}
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 hover:border-gold transition-colors group">
            <div className="bg-gold w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transform rotate-6 group-hover:rotate-0 transition-transform">
              <MessageSquare className="text-navy w-8 h-8" />
            </div>
            <h2 className="serif text-3xl font-bold mb-6">La Plaidoirie</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              L'art de convaincre seul face au jury. Sur un sujet souvent abstrait ou humoristique, l'orateur 
              doit déployer son univers, ses métaphores et son charisme pour emporter l'adhésion.
            </p>
            <ul className="space-y-3 text-sm text-gray-500 mb-8">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gold rounded-full"></div> 5 à 8 minutes de spectacle</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gold rounded-full"></div> Mise en scène et théâtralité</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-gold rounded-full"></div> Utilisation des figures de style</li>
            </ul>
            <button className="text-navy font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors">Voir des exemples</button>
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="bg-off-white py-24">
        <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl font-bold mb-4">Instants Choisis</h2>
            <p className="text-gray-500">Retour sur nos derniers moments forts</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" alt={`Gallery ${i}`} />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white w-8 h-8 transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
