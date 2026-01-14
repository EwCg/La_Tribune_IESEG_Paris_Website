
import React from 'react';
import { Linkedin, Instagram, Globe, MessageCircle } from 'lucide-react';

const Social: React.FC = () => {
  return (
    <main className="py-20 animate-in fade-in duration-700">
      <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="serif text-5xl font-bold mb-6 text-navy">Suivez l'<span className="text-gold">Actualité</span></h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Restez connecté avec La Tribune sur tous nos canaux. 
            Vidéos, lives, débats et articles exclusifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LinkedIn Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#0077b5] p-3 rounded-xl">
                <Linkedin className="text-white w-6 h-6" />
              </div>
              <h2 className="serif text-3xl font-bold">LinkedIn</h2>
            </div>
            
            <div className="space-y-8">
              {/* Manual Embed Placeholders */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-navy rounded-full"></div>
                  <div>
                    <div className="font-bold text-sm">La Tribune IESEG</div>
                    <div className="text-xs text-gray-400">Il y a 2 jours</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Heureux d'annoncer notre prochain débat parlementaire ! Sujet : "La technologie nous rend-elle plus libres ?" 🚀
                </p>
                <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center text-gray-400 italic">
                  [ LinkedIn Post Embed ]
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-navy rounded-full"></div>
                  <div>
                    <div className="font-bold text-sm">La Tribune IESEG</div>
                    <div className="text-xs text-gray-400">La semaine dernière</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Retour en images sur notre formation à la prise de parole en public pour les étudiants de 1ère année.
                </p>
                <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center text-gray-400 italic">
                  [ LinkedIn Photo Embed ]
                </div>
              </div>
            </div>
            
            <a href="https://www.linkedin.com/company/la-tribune-ieseg/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="mt-8 block text-center py-4 rounded-xl border-2 border-[#0077b5] text-[#0077b5] font-bold hover:bg-[#0077b5] hover:text-white transition-all">
              Voir tout le flux LinkedIn
            </a>
          </section>

          {/* Instagram Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] p-3 rounded-xl">
                <Instagram className="text-white w-6 h-6" />
              </div>
              <h2 className="serif text-3xl font-bold">Instagram</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-gray-200 rounded-xl overflow-hidden group cursor-pointer relative">
                  <img src={`https://picsum.photos/seed/ig${i}/500/500`} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Instagram post" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Instagram className="text-white" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a 
                href="https://www.instagram.com/latribune_iesegparis/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#f09433] to-[#bc1888] text-white font-bold hover:shadow-lg transition-all"
              >
                Nous rejoindre sur Instagram
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Social;
