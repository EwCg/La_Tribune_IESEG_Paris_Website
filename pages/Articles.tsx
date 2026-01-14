
import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostCard from '../components/BlogPostCard';
import { MOCK_ARTICLES } from '../constants';
import { Search, Filter, BookOpen } from 'lucide-react';

const Articles: React.FC = () => {
  const featuredArticle = MOCK_ARTICLES[0];
  const otherArticles = MOCK_ARTICLES.slice(1);

  return (
    <main className="animate-in fade-in duration-700">
      {/* Header Section */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="serif text-5xl font-bold mb-6">
              Nos <span className="text-gold">Analyses</span> & Articles
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Décryptage de l'actualité, techniques de rhétorique et retours d'expérience. 
              La plume au service de l'éloquence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-20">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
            <img 
              src={featuredArticle.coverImage} 
              alt={featuredArticle.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest mb-4">
              <BookOpen size={14} /> À la une
            </div>
            <h2 className="serif text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              {featuredArticle.title}
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {featuredArticle.excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold">
                  {featuredArticle.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">{featuredArticle.author}</div>
                  <div className="text-xs text-gray-400">{featuredArticle.date}</div>
                </div>
              </div>
              <Link 
                to={`/articles/${featuredArticle.slug}`}
                className="bg-navy text-gold px-6 py-2 rounded-full font-bold text-sm hover:bg-gold hover:text-navy transition-colors"
              >
                Lire l'article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters (UI only) */}
      <section className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-200 pb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Rechercher un article..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <button className="bg-gold text-navy px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap">Tous</button>
            <button className="bg-white text-gray-500 px-4 py-2 rounded-lg font-bold text-sm border border-gray-200 hover:border-gold hover:text-navy transition-all whitespace-nowrap">Débat</button>
            <button className="bg-white text-gray-500 px-4 py-2 rounded-lg font-bold text-sm border border-gray-200 hover:border-gold hover:text-navy transition-all whitespace-nowrap">Rhétorique</button>
            <button className="bg-white text-gray-500 px-4 py-2 rounded-lg font-bold text-sm border border-gray-200 hover:border-gold hover:text-navy transition-all whitespace-nowrap">Société</button>
          </div>
        </div>
      </section>

      {/* Grid of Articles */}
      <section className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {otherArticles.map((article, index) => (
            <BlogPostCard key={index} article={article} />
          ))}
        </div>
        
        {/* Pagination placeholder */}
        <div className="mt-16 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-lg bg-navy text-gold font-bold">1</button>
          <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-400 hover:border-gold hover:text-navy transition-colors">2</button>
          <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-400 hover:border-gold hover:text-navy transition-colors">3</button>
        </div>
      </section>
    </main>
  );
};

export default Articles;
