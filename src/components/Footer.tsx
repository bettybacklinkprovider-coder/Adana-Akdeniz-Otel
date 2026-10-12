import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050F1D] text-white border-t border-[#C8A96B]/20 relative overflow-hidden">
      {/* Subtle top ambient red & gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#A6192E] to-transparent opacity-80" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#A6192E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div>
              <span className="font-luxury text-2xl font-bold tracking-wider text-white block">
                ADANA AKDENİZ OTEL
              </span>
              <span className="text-xs tracking-widest text-[#C8A96B] uppercase font-sans font-medium block mt-1">
                Adana Konaklama
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Centrally located in Seyhan, Adana Akdeniz Otel provides comfortable, quiet, and refined hospitality for business and leisure travelers in Adana.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#FBF9F5] hover:text-[#C8A96B] transition-colors uppercase tracking-wider"
              >
                <span>Direct Line:</span>
                <span className="font-mono">{HOTEL_INFO.phone}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A6192E]" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="font-luxury text-lg font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-[#C8A96B]" />
              <span>Navigation</span>
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#C8A96B] transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C8A96B] transition-colors">
                  About Us & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#C8A96B] transition-colors">
                  Rooms & Accommodation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C8A96B] transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div>
            <h3 className="font-luxury text-lg font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-[#C8A96B]" />
              <span>Contact & Desk</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A6192E] shrink-0 mt-1" />
                <span className="leading-snug">{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A6192E] shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="hover:text-[#C8A96B] transition-colors font-mono"
                >
                  {HOTEL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A6192E] shrink-0" />
                <a
                  href={`mailto:${HOTEL_INFO.email}`}
                  className="hover:text-[#C8A96B] transition-colors"
                >
                  {HOTEL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C8A96B] shrink-0" />
                <span>{HOTEL_INFO.receptionHours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Action & Directions */}
          <div className="space-y-4">
            <h3 className="font-luxury text-lg font-semibold text-white tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-[2px] bg-[#C8A96B]" />
              <span>Visiting Adana</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Situated in central Seyhan on İnönü Caddesi, close to historical landmarks, business centers, and the Seyhan River.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={HOTEL_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1F3A] hover:bg-[#0F284B] border border-[#C8A96B]/30 rounded transition-colors text-center"
              >
                <span>Get Directions (Google Maps)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C8A96B]" />
              </a>
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] border border-[#A6192E] rounded transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +90 322 363 15 11</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Adana Akdeniz Otel - Adana Konaklama. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Çınarlı, Seyhan / Adana</span>
            <span aria-hidden="true">·</span>
            <span>Check-in: 14:00</span>
            <span aria-hidden="true">·</span>
            <span>Check-out: 12:00</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
