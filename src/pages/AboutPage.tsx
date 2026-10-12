import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  MapPin,
  Clock,
  Compass,
  Building,
  CheckCircle2
} from 'lucide-react';
import { HOTEL_INFO, NEARBY_ATTRACTIONS } from '../data/hotelData';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#071629] text-white pt-24">
      {/* =========================================================================
          HERO BANNER
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#0B1F3A] border-b border-[#C8A96B]/20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={HOTEL_INFO.images.lobbyReception}
            alt="Adana Akdeniz Otel interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071629] via-[#071629]/90 to-[#0B1F3A]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A96B] uppercase mb-4">
            <span className="w-6 h-[2px] bg-[#A6192E]" />
            <span>About Us & Hospitality Philosophy</span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl font-bold text-white max-w-3xl leading-tight mb-6">
            Adana Akdeniz Otel <br />
            <span className="text-[#E0C797] italic font-normal text-3xl sm:text-5xl">
              Tradition of Warmth & Modern Comfort
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Situated on İnönü Caddesi in Çınarlı, Seyhan, Adana Akdeniz Otel stands as a haven of serene repose, tailored specifically for those seeking authentic hospitality, cleanliness, and effortless urban connectivity in Adana.
          </p>
        </div>
      </section>

      {/* =========================================================================
          DETAILED INTRODUCTION & PHILOSOPHY
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#071629] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A96B] uppercase">
                <span className="w-4 h-[2px] bg-[#A6192E]" />
                <span>Our Philosophy</span>
              </div>

              <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-white leading-tight">
                Hospitality Grounded in Quiet Care and Integrity
              </h2>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                Hospitality in Adana is legendary — an ingrained culture of generosity, attentive service, and genuine friendliness. At Adana Akdeniz Otel, we translate that ancient cultural heritage into a modern, refined lodging experience.
              </p>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                We believe that a memorable hotel stay does not require superficial excess; instead, it requires flawless basics: a deeply comfortable bed with sanitized linens, soundproof tranquility away from street noise, individually tuned climate control, reliable fast Wi-Fi, and a front desk team that genuinely cares about your wellbeing.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-[#0B1F3A] p-5 rounded border border-[#C8A96B]/20">
                  <HeartHandshake className="w-6 h-6 text-[#A6192E] mb-3" />
                  <h3 className="font-luxury text-xl font-semibold text-white mb-1">
                    Authentic Warmth
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    Every guest is welcomed as an honored guest of Adana with attentive, respectful care.
                  </p>
                </div>

                <div className="bg-[#0B1F3A] p-5 rounded border border-[#C8A96B]/20">
                  <ShieldCheck className="w-6 h-6 text-[#C8A96B] mb-3" />
                  <h3 className="font-luxury text-xl font-semibold text-white mb-1">
                    Hygiene Standards
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    Daily comprehensive housekeeping and rigorous sanitation throughout all guest quarters.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Feature */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-[#C8A96B]/30 shadow-2xl">
                <img
                  src={HOTEL_INFO.images.diningLounge}
                  alt="Dining Lounge and breakfast area at Adana Akdeniz Otel"
                  className="w-full h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071629]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#071629]/90 backdrop-blur-md rounded border border-white/10">
                  <p className="text-xs text-[#C8A96B] uppercase tracking-wider font-semibold">
                    Morning Serenity
                  </p>
                  <p className="text-xs text-slate-200 mt-1">
                    Enjoying quiet mornings with fresh Turkish breakfast, tea, and warm hospitality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LOCATION & CONVENIENCE FOR VISITORS TO ADANA
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#0B1F3A] relative border-t border-[#C8A96B]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A96B] uppercase mb-3">
              <span className="w-4 h-[2px] bg-[#A6192E]" />
              <span>Location Convenience</span>
              <span className="w-4 h-[2px] bg-[#A6192E]" />
            </div>
            <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-white mb-4">
              At the Center of Adana’s Heritage & Commerce
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Staying in Çınarlı on İnönü Caddesi places you within moments of Adana’s most celebrated cultural monuments, renowned kebab eateries, and commercial institutions.
            </p>
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {NEARBY_ATTRACTIONS.map((attraction, idx) => (
              <div
                key={idx}
                className="bg-[#071629] p-6 rounded-lg border border-[#C8A96B]/20 hover:border-[#A6192E]/60 transition-colors"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="font-luxury text-xl font-semibold text-white">
                    {attraction.name}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-[#A6192E] bg-[#A6192E]/10 px-2.5 py-1 rounded">
                    {attraction.distance}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {attraction.description}
                </p>
              </div>
            ))}

            <div className="bg-[#071629] p-6 rounded-lg border border-[#C8A96B]/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#C8A96B] mb-2">
                  <Compass className="w-5 h-5 text-[#A6192E]" />
                  <span className="text-xs uppercase tracking-wider font-semibold">Concierge Guidance</span>
                </div>
                <h3 className="font-luxury text-xl font-semibold text-white mb-2">
                  Exploring Adana
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Ask our 24/7 reception desk for directions, taxi arrangements, or recommendations for authentic regional Adana dining.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="text-xs text-[#C8A96B] hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Ask Concierge: {HOTEL_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VERIFIED GUEST SERVICES
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#071629] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-lg overflow-hidden border border-[#C8A96B]/30 shadow-2xl">
                <img
                  src={HOTEL_INFO.images.deluxeRoom}
                  alt="Deluxe room guest accommodation"
                  className="w-full h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071629]/70 via-transparent to-transparent" />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A96B] uppercase">
                <span className="w-4 h-[2px] bg-[#A6192E]" />
                <span>Guest Services & Amenities</span>
              </div>

              <h2 className="font-luxury text-3xl sm:text-4xl font-bold text-white">
                Everything You Need for a Restful Stay
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Our property is maintained to high hospitality standards with verified amenities ensuring your safety, ease, and comfort.
              </p>

              <ul className="space-y-3 pt-2 text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A6192E] shrink-0" />
                  <span>24-Hour Front Desk and Reception Security</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A6192E] shrink-0" />
                  <span>Silent In-Room Air Conditioning (Heating & Cooling)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A6192E] shrink-0" />
                  <span>Free Wireless Internet Throughout the Building</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A6192E] shrink-0" />
                  <span>Daily Maid Service & Sanitized Bed Linens</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A6192E] shrink-0" />
                  <span>Luggage Storage & Taxi Calling Service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CALL TO ACTION SECTION
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-[#0B1F3A] via-[#6E1023]/30 to-[#0B1F3A] border-t border-[#C8A96B]/20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-white">
            Plan Your Stay in Adana Today
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto font-light [text-wrap:balance]">
            Experience comfortable accommodation with warm Turkish hospitality at Adana Akdeniz Otel. Contact our reception directly for inquiries or reservations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/rooms"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] border border-[#A6192E] rounded shadow-lg transition-colors"
            >
              <span>View Available Rooms</span>
              <ArrowRight className="w-4 h-4 text-[#FBF9F5]" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#071629] hover:bg-[#0c2340] border border-[#C8A96B]/40 rounded shadow-md transition-colors"
            >
              <span>Contact Us & Location</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
