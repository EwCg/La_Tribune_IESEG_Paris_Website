
import React from 'react';
import { TEAM_MEMBERS, PARTNERS } from '../constants';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <main className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* History Section */}
      <section className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="serif text-5xl font-bold mb-8 text-navy">
              Une Tradition d'<span className="text-gold">Éloquence</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Fondée en 2017, La Tribune IÉSEG est née de la volonté d'offrir aux étudiants un espace privilégié 
              pour cultiver l'art du discours. Ce qui n'était au départ qu'un petit cercle de passionnés est 
              devenu l'une des associations les plus dynamiques de l'école.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              En 2021, notre association a atteint les sommets en devenant Championne de France de Débat Parlementaire, 
              confirmant ainsi la rigueur et le talent de nos orateurs.
            </p>
            <div className="flex gap-12 border-t border-gray-200 pt-8">
              <div>
                <div className="text-4xl font-bold text-navy">2017</div>
                <div className="text-gray-500 text-sm uppercase font-bold mt-1">Fondation</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy">30+</div>
                <div className="text-gray-500 text-sm uppercase font-bold mt-1">Membres Actifs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-navy">2021</div>
                <div className="text-gray-500 text-sm uppercase font-bold mt-1">Titre National</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-3xl shadow-2xl relative z-10"
              alt="Bureau La Tribune"
            />
            <div className="absolute -top-6 -right-6 w-full h-full border-4 border-gold rounded-3xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-24 text-white mb-24">
        <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl font-bold mb-4">Nos Valeurs Piliers</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Partage', desc: 'L\'art oratoire ne vaut rien s\'il n\'est pas partagé pour élever les autres.' },
              { title: 'Ambition', desc: 'Repousser sans cesse ses limites pour atteindre l\'excellence rhétorique.' },
              { title: 'Respect', desc: 'Écouter l\'autre, valoriser la contradiction et cultiver la bienveillance.' }
            ].map((v, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:bg-gold hover:text-navy transition-all duration-300 group">
                <h3 className="serif text-2xl font-bold mb-4 group-hover:text-navy">{v.title}</h3>
                <p className="text-gray-400 group-hover:text-navy/80 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Bureau */}
      <section className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="serif text-4xl font-bold mb-4">Le Bureau {new Date().getFullYear()}</h2>
          <p className="text-gray-500">Les visages derrière l'excellence de La Tribune</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="group flex flex-col items-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-gold transition-colors duration-300">
                  <img src={member.photo} className="w-full h-full object-cover" alt={member.name} />
                </div>
                <a 
                  href={member.linkedin} 
                  className="absolute bottom-2 right-2 bg-gold text-navy p-3 rounded-full shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              <h3 className="serif text-xl font-bold text-navy">{member.name}</h3>
              <p className="text-gold font-bold uppercase tracking-wider text-xs mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners - Modernized and Enlarged */}
      <section className="bg-off-white py-24">
        <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-navy font-bold uppercase tracking-widest text-sm mb-16">Nos Partenaires & Fédérations</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {PARTNERS.map((p) => (
              <div 
                key={p.name} 
                className="bg-white p-12 rounded-3xl shadow-lg border border-gray-100 flex items-center justify-center group hover:shadow-2xl hover:border-gold transition-all duration-500"
              >
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="h-40 md:h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
