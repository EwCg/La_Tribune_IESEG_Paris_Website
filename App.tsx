
import React, { useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy loading for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Events = React.lazy(() => import('./pages/Events'));
const Articles = React.lazy(() => import('./pages/Articles'));
const ArticleDetail = React.lazy(() => import('./pages/ArticleDetail'));
const Social = React.lazy(() => import('./pages/Social'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Loading component
const Loading = () => (
  <div className="h-screen w-full flex items-center justify-center bg-navy">
    <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-off-white selection:bg-gold selection:text-navy">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:slug" element={<ArticleDetail />} />
              <Route path="/social" element={<Social />} />
              {/* Catch-all route to redirect to home if URL is wrong */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
