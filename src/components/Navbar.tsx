import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071629]/95 backdrop-blur-md border-b border-[#C8A96B]/20 py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#071629]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <Link
              to="/"
              className="group flex flex-col items-start whitespace-nowrap shrink-0 focus:outline-none"
            >
              <span className="font-luxury text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#C8A96B] transition-colors">
                ADANA AKDENİZ OTEL
              </span>
              <span className="text-[10px] tracking-widest text-[#C8A96B] uppercase font-sans font-medium">
                Adana Konaklama
              </span>
            </Link>

            {/* Zone 2: 4 clean single-line text navigation links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative py-1 text-sm tracking-wide whitespace-nowrap transition-colors duration-200 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-white/75 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#A6192E] via-[#C8A96B] to-[#A6192E] rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] active:bg-[#6E1023] border border-[#A6192E] hover:border-[#C8A96B]/40 rounded shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#FBF9F5]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                aria-label="Call Hotel"
                className="p-2 text-white bg-[#A6192E] rounded hover:bg-[#851424] transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#C8A96B] transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-[#071629]/95 backdrop-blur-xl md:hidden pt-24 px-6 pb-8 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="border-b border-[#C8A96B]/20 pb-4">
              <p className="font-luxury text-xl font-bold text-white tracking-wide">
                Adana Akdeniz Otel
              </p>
              <p className="text-xs text-[#C8A96B] flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Çınarlı, İnönü Cd. No:14, Seyhan/Adana</span>
              </p>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `text-lg font-medium tracking-wide py-2 border-b border-white/5 transition-colors ${
                      isActive ? 'text-[#C8A96B] font-semibold' : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#C8A96B]/20">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-center font-semibold text-white bg-[#A6192E] hover:bg-[#851424] rounded border border-[#C8A96B]/30 tracking-wider uppercase text-sm shadow-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: +90 322 363 15 11</span>
            </a>
            <p className="text-center text-xs text-white/50">
              24/7 Front Desk & Direct Reservation Inquiries
            </p>
          </div>
        </div>
      )}
    </>
  );
};
