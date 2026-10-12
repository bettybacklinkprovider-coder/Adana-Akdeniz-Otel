import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RoomsPage } from './pages/RoomsPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper on route navigation and dynamic title sync
const PageManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Sync browser page title according to active page
    switch (pathname) {
      case '/':
        document.title = 'Adana Akdeniz Otel - Adana Konaklama | Lüks Butik Otel';
        break;
      case '/about':
        document.title = 'About Us - Adana Akdeniz Otel | Seyhan, Adana';
        break;
      case '/rooms':
        document.title = 'Rooms & Accommodation - Adana Akdeniz Otel | Seyhan, Adana';
        break;
      case '/contact':
        document.title = 'Contact & Location - Adana Akdeniz Otel | Seyhan, Adana';
        break;
      default:
        document.title = 'Adana Akdeniz Otel - Adana Konaklama';
    }
  }, [pathname]);

  return null;
};

// 404 Fallback page
const NotFoundPage: React.FC = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 bg-[#071629] text-white">
    <span className="text-xs font-semibold tracking-widest text-[#C8A96B] uppercase mb-2">
      Page Not Found
    </span>
    <h1 className="font-luxury text-4xl sm:text-6xl font-bold mb-4">404</h1>
    <p className="text-slate-300 text-sm max-w-md mb-8">
      The requested page could not be found. Please return to our home page or explore our accommodations.
    </p>
    <a
      href="/"
      className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] rounded transition-colors"
    >
      Return to Home Page
    </a>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#071629] text-white flex flex-col selection:bg-[#A6192E] selection:text-white">
        <PageManager />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
