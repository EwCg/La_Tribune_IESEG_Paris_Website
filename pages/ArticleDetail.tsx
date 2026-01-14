
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MOCK_ARTICLES } from '../constants';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = MOCK_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="serif text-3xl font-bold mb-4 text-navy">Article introuvable</h2>
        <Link to="/articles" className="text-gold font-bold hover:underline">Retour aux articles</Link>
      </div>
    );
  }

  return (
    <main className="animate-in fade-in duration-700 bg-white">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={article.coverImage} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white bg-gradient-to-t from-navy/90 to-transparent">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => navigate('/articles')}
              className="flex items-center gap-2 text-gold font-bold mb-6 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={18} /> Retour aux articles
            </button>
            <h1 className="serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base font-light">
              <span className="flex items-center gap-2"><User size={20} className="text-gold" /> {article.author}</span>
              <span className="flex items-center gap-2"><Calendar size={20} className="text-gold" /> {article.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-lg md:prose-xl max-w-none">
          <p className="text-xl md:text-2xl text-gray-500 italic mb-12 border-l-4 border-gold pl-6 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="text-gray-800 leading-relaxed space-y-8 text-lg md:text-xl">
            {article.content.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Footer of article */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              className="flex items-center gap-2 text-navy hover:text-gold transition-colors font-bold"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: article.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Lien copié dans le presse-papier !');
                }
              }}
            >
              <Share2 size={20} /> Partager l'article
            </button>
          </div>
          <Link 
            to="/articles" 
            className="bg-navy text-gold px-8 py-3 rounded-full font-bold hover:bg-gold hover:text-navy transition-all shadow-lg"
          >
            Lire d'autres articles
          </Link>
        </div>
      </article>
    </main>
  );
};

export default ArticleDetail;
