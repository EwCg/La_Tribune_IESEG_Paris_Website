
import React, { useState } from 'react';
import BlogPostCard from '../components/BlogPostCard';
import { Article } from '../types';
import { Send, UploadCloud, Info } from 'lucide-react';

const Articles: React.FC = () => {
  const [formData, setFormData] = useState<Partial<Article>>({
    title: '',
    author: '',
    excerpt: '',
    content: '',
    coverImage: '',
    date: new Date().toLocaleDateString('fr-FR')
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci ! Votre article a été envoyé pour relecture par le bureau.");
  };

  return (
    <main className="py-20 animate-in fade-in duration-700">
      <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="serif text-5xl font-bold mb-6 text-navy">Le Portail de <span className="text-gold">Contribution</span></h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La Tribune est ouverte à toutes les plumes. Partagez vos réflexions, vos analyses ou vos coups de gueule. 
            Votre article sera relu et potentiellement publié sur nos réseaux.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Side */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
            <h2 className="serif text-2xl font-bold mb-8 flex items-center gap-2">
              <Send className="text-gold" /> Rédiger mon article
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-wide">Titre de l'article</label>
                <input 
                  type="text" 
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="L'éloquence au service du climat..." 
                  className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-wide">Auteur</label>
                  <input 
                    type="text" 
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Jean Dupont" 
                    className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-wide">URL Image Couverture</label>
                  <input 
                    type="text" 
                    name="coverImage"
                    value={formData.coverImage}
                    onChange={handleChange}
                    placeholder="https://images..." 
                    className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-wide">Extrait (max 150 car.)</label>
                <textarea 
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  maxLength={150}
                  rows={2}
                  placeholder="Une courte phrase pour donner envie de lire..." 
                  className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-wide">Contenu de l'article</label>
                <textarea 
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={8}
                  placeholder="Écrivez votre texte ici..." 
                  className="w-full bg-off-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-navy text-gold py-4 rounded-xl font-bold text-lg hover:bg-gold hover:text-navy transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
              >
                Soumettre pour relecture <Send size={20} />
              </button>
            </form>
          </div>

          {/* Preview Side */}
          <div className="hidden lg:block sticky top-32 self-start">
            <div className="flex items-center gap-2 mb-6 text-gray-500 font-bold uppercase tracking-widest text-xs">
              <Info size={14} className="text-gold" /> Aperçu en direct
            </div>
            <div className="w-[400px] mx-auto">
              <BlogPostCard article={formData} isPreview={true} />
            </div>
            <div className="mt-8 bg-gold/10 p-6 rounded-2xl border border-gold/20">
              <p className="text-sm text-navy/70 leading-relaxed italic">
                "La parole est une force, l'écrit est un monument. En contribuant à La Tribune, vous participez 
                à la mémoire intellectuelle de notre école."
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Articles;
