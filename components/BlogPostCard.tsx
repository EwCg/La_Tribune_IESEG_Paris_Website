
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { User, Calendar, ArrowRight } from 'lucide-react';

interface Props {
  article: Partial<Article>;
  isPreview?: boolean;
}

const BlogPostCard: React.FC<Props> = ({ article, isPreview = false }) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 ${!isPreview ? 'hover:-translate-y-2 hover:shadow-2xl' : ''}`}>
      <div className="h-48 overflow-hidden relative">
        <img 
          src={article.coverImage || 'https://picsum.photos/seed/default/800/400'} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {isPreview && (
          <div className="absolute top-4 right-4 bg-gold text-navy text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
            Aperçu
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1"><User size={12} /> {article.author || 'Auteur anonyme'}</span>
          <span className="flex items-center gap-1"><Calendar size={12} /> {article.date || 'Date'}</span>
        </div>
        <h3 className="serif text-xl font-bold mb-3 text-navy leading-tight line-clamp-2">
          {article.title || 'Titre de votre article'}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {article.excerpt || 'L\'extrait de votre article apparaîtra ici. Donnez envie aux lecteurs de cliquer en résumant votre pensée.'}
        </p>
        {!isPreview && (
          <Link 
            to={`/articles/${article.slug}`}
            className="flex items-center gap-2 text-navy font-bold text-sm hover:text-gold transition-colors group"
          >
            Lire la suite <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogPostCard;
