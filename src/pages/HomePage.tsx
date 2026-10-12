import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Clock,
  Wifi,
  Wind,
  Sparkles,
  Coffee,
  MapPin,
  Maximize2,
  Users,
  Bed,
  CheckCircle2,
  Navigation
} from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA, GALLERY_ITEMS } from '../data/hotelData';
import { GalleryLightbox } from '../components/GalleryLightbox';

export const HomePage: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Amenity icon mapping
  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#A6192E]" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-[#A6192E]" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-[#A6192E]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#A6192E]" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-[#A6192E]" />;
      case 'MapPin':
      default:
        return <MapPin className="w-6 h-6 text-[#A6192E]" />;
    }
  };

  return (
    <div className="bg-[#071629] text-white">
      {/* =========================================================================
          SECTION 1: LUXURY HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with subtle zoom & dark navy overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={HOTEL_INFO.images.heroExterior}
            alt="Adana Akdeniz Otel exterior facade in Seyhan Adana"
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Deep Navy & Crimson ambient gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071629] via-[#071629]/75 to-[#071629]/50" />
          <div className="absolute inset-0 bg-radial from-[#A6192E]/15 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
          {/* Unboxed Brand Subtitle */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.25em] text-[#C8A96B] uppercase mb-4">
            <span>Seyhan, Adana</span>
            <span aria-hidden="true">·</span>
            <span>Adana Konaklama</span>
          </div>

          {/* Large Headline */}
          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1] [text-wrap:balance]">
            Welcome to <span className="text-white">Adana Akdeniz Otel</span>
          </h1>

          {/* Subtitle */}
          <p className="font-luxury italic text-xl sm:text-2xl md:text-3xl text-[#E0C797] font-normal mb-6 max-w-2xl [text-wrap:balance]">
            Your Comfortable Stay in the Heart of Adana
          </p>

          {/* Short, elegant introduction */}
          <p className="text-base sm:text-lg text-slate-200 font-light max-w-2xl leading-relaxed mb-10 [text-wrap:balance]">
            Experience genuine Turkish hospitality, refined tranquility, and supreme central convenience. Located on İnönü Caddesi in Çınarlı, we offer meticulously prepared rooms tailored for discerning business and leisure travelers.
          </p>

          {/* Two prominent buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] active:bg-[#6E1023] border border-[#A6192E] hover:border-[#C8A96B]/50 rounded shadow-xl transition-all duration-200"
            >
              <span>Explore Our Hotel</span>
              <ArrowRight className="w-4 h-4 text-[#FBF9F5]" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#0B1F3A]/80 hover:bg-[#0F284B] border border-[#C8A96B]/40 hover:border-[#C8A96B] rounded shadow-lg transition-all duration-200"
            >
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Location trust marker */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#A6192E]" />
              <span>Çınarlı, İnönü Cd. No:14, Seyhan</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C8A96B]" />
              <span>24/7 Front Desk Service</span>
            </div>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#A6192E]" />
              <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                +90 322 363 15 11
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT OUR HOTEL
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#0B1F3A] relative overflow-hidden border-t border-[#C8A96B]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-lg overflow-hidden border border-[#C8A96B]/30 shadow-2xl group">
                <img
                  src={HOTEL_INFO.images.lobbyReception}
                  alt="Reception and lobby lounge at Adana Akdeniz Otel"
                  className="w-full h-[380px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071629]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#071629]/90 backdrop-blur-md rounded border border-white/10">
                  <div className="text-xs uppercase tracking-widest text-[#C8A96B] font-semibold mb-1">
                    Warm Hospitality & Professionalism
                  </div>
                  <p className="text-sm text-slate-200">
                    24-hour reception dedicated to ensuring a seamless, welcoming visit to Adana.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A96B] uppercase">
                <span className="w-6 h-[2px] bg-[#A6192E]" />
                <span>About Our Hotel</span>
              </div>

              <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Refined Comfort in the Heart of Seyhan, Adana
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                At <span className="text-white font-medium">Adana Akdeniz Otel - Adana Konaklama</span>, our core philosophy is centered on attentive Turkish hospitality, uncompromised cleanliness, and peaceful rest.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Positioned in Seyhan on the vibrant İnönü Caddesi, our hotel connects you effortlessly with Adana’s commercial centers, historical heritage, and world-renowned culinary destinations. Whether you are traveling for commerce, medical appointments, or cultural discovery, we provide a warm, reliable sanctuary to return to each evening.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A6192E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Central Urban Location</h4>
                    <p className="text-xs text-slate-400">Convenient access to transit, airport, and attractions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A6192E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Quiet & Soundproof Rooms</h4>
                    <p className="text-xs text-slate-400">Restful sleep with climate-controlled privacy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A6192E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Impeccable Hygiene</h4>
                    <p className="text-xs text-slate-400">Daily housekeeping and sanitized premium linens</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A6192E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Attentive 24/7 Service</h4>
                    <p className="text-xs text-slate-400">Always available to assist with your journey</p>
                  </div>
                </div>
              </div>

              {/* Discover More Button */}
              <div className="pt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] border border-[#A6192E] rounded shadow-md transition-colors"
                >
                  <span>Discover More</span>
                  <ArrowRight className="w-4 h-4 text-[#FBF9F5]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ROOMS & ACCOMMODATION
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#071629] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A96B] uppercase mb-3">
              <span className="w-4 h-[2px] bg-[#A6192E]" />
              <span>Rooms & Accommodation</span>
              <span className="w-4 h-[2px] bg-[#A6192E]" />
            </div>
            <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-white mb-4">
              Restful Spaces Designed for Modern Travelers
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light [text-wrap:balance]">
              Every room at Adana Akdeniz Otel is curated with calm aesthetics, silent climate control, crisp fresh linens, and high-speed Wi-Fi to ensure total relaxation.
            </p>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS_DATA.slice(0, 3).map((room) => (
              <div
                key={room.id}
                className="bg-[#0B1F3A] rounded-lg overflow-hidden border border-[#C8A96B]/20 hover:border-[#C8A96B]/60 transition-all duration-300 flex flex-col group shadow-xl"
              >
                {/* Image Container with subtle zoom */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 bg-[#071629]/90 backdrop-blur-md px-3 py-1 rounded text-xs text-[#C8A96B] font-mono border border-white/10">
                    {room.size}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-luxury text-2xl font-bold text-white group-hover:text-[#C8A96B] transition-colors mb-2">
                      {room.name}
                    </h3>
                    <p className="text-xs text-slate-300 mb-4 line-clamp-2 font-light">
                      {room.tagline}
                    </p>

                    {/* Room Meta (Unboxed text with dots) */}
                    <div className="flex items-center gap-3 text-xs text-slate-400 py-3 border-y border-white/10 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#A6192E]" />
                        <span>{room.capacity}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-[#C8A96B]" />
                        <span>{room.bedType}</span>
                      </span>
                    </div>

                    {/* Selected Features */}
                    <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                      {room.features.slice(0, 4).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A6192E]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Room Card Action */}
                  <div className="pt-2">
                    <Link
                      to="/rooms"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#071629] hover:bg-[#A6192E] border border-[#C8A96B]/30 hover:border-[#A6192E] rounded transition-colors"
                    >
                      <span>Room Details & Inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C8A96B]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button linking to Rooms Page */}
          <div className="mt-14 text-center">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] border border-[#A6192E] rounded shadow-lg transition-colors"
            >
              <span>View Accommodation</span>
              <ArrowRight className="w-4 h-4 text-[#FBF9F5]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOTEL EXPERIENCE & HIGHLIGHTS
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#0B1F3A] relative overflow-hidden border-t border-[#C8A96B]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A96B] uppercase mb-3">
              <span className="w-4 h-[2px] bg-[#A6192E]" />
              <span>Hotel Experience & Highlights</span>
              <span className="w-4 h-[2px] bg-[#A6192E]" />
            </div>
            <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-white mb-4">
              Verified Facilities & Guest Services
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light [text-wrap:balance]">
              We take pride in providing authentic, hassle-free hospitality. Here are the core services available to all guests of Adana Akdeniz Otel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOTEL_INFO.images && (
              <>
                <div className="bg-[#071629] p-8 rounded-lg border border-[#C8A96B]/20 hover:border-[#A6192E]/60 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded bg-[#0B1F3A] border border-[#C8A96B]/30 flex items-center justify-center mb-6 group-hover:bg-[#A6192E]/20 transition-colors">
                    {getAmenityIcon('Clock')}
                  </div>
                  <h3 className="font-luxury text-2xl font-semibold text-white mb-2">
                    24/7 Front Desk & Concierge
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    Our reception desk is manned at all hours. Arrive at your convenience and rely on our attentive staff for city tips, directions, and luggage care.
                  </p>
                </div>

                <div className="bg-[#071629] p-8 rounded-lg border border-[#C8A96B]/20 hover:border-[#A6192E]/60 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded bg-[#0B1F3A] border border-[#C8A96B]/30 flex items-center justify-center mb-6 group-hover:bg-[#A6192E]/20 transition-colors">
                    {getAmenityIcon('Wifi')}
                  </div>
                  <h3 className="font-luxury text-2xl font-semibold text-white mb-2">
                    High-Speed Wi-Fi
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    Stay connected with dependable, high-speed wireless internet throughout all rooms and communal areas, suitable for streaming and remote work.
                  </p>
                </div>

                <div className="bg-[#071629] p-8 rounded-lg border border-[#C8A96B]/20 hover:border-[#A6192E]/60 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded bg-[#0B1F3A] border border-[#C8A96B]/30 flex items-center justify-center mb-6 group-hover:bg-[#A6192E]/20 transition-colors">
                    {getAmenityIcon('Wind')}
                  </div>
                  <h3 className="font-luxury text-2xl font-semibold text-white mb-2">
                    Climate Control & AC
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    Adana enjoys a warm Mediterranean climate; each guest room features individual silent air conditioning so your room is always at your preferred temperature.
                  </p>
                </div>

                <div className="bg-[#071629] p-8 rounded-lg border border-[#C8A96B]/20 hover:border-[#A6192E]/60 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded bg-[#0B1F3A] border border-[#C8A96B]/30 flex items-center justify-center mb-6 group-hover:bg-[#A6192E]/20 transition-colors">
                    {getAmenityIcon('Sparkles')}
                  </div>
                  <h3 className="font-luxury text-2xl font-semibold text-white mb-2">
                    Daily Housekeeping & Hygiene
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    Pristine cleanliness is our hallmark. Rooms undergo rigorous daily cleaning, towel replacement, and fresh linen care by our meticulous housekeeping team.
                  </p>
                </div>

                <div className="bg-[#071629] p-8 rounded-lg border border-[#C8A96B]/20 hover:border-[#A6192E]/60 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded bg-[#0B1F3A] border border-[#C8A96B]/30 flex items-center justify-center mb-6 group-hover:bg-[#A6192E]/20 transition-colors">
                    {getAmenityIcon('Coffee')}
                  </div>
                  <h3 className="font-luxury text-2xl font-semibold text-white mb-2">
                    Breakfast & Dining Lounge
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    Enjoy freshly prepared morning breakfast items, traditional Turkish tea, and coffee in a relaxing, well-lit dining space before beginning your day in Adana.
                  </p>
                </div>

                <div className="bg-[#071629] p-8 rounded-lg border border-[#C8A96B]/20 hover:border-[#A6192E]/60 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded bg-[#0B1F3A] border border-[#C8A96B]/30 flex items-center justify-center mb-6 group-hover:bg-[#A6192E]/20 transition-colors">
                    {getAmenityIcon('MapPin')}
                  </div>
                  <h3 className="font-luxury text-2xl font-semibold text-white mb-2">
                    Central Seyhan Location
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    Situated on İnönü Caddesi in Çınarlı, within immediate proximity to Seyhan riverbanks, historic Taşköprü, local markets, and public transit hubs.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: HOTEL GALLERY
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#071629] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A96B] uppercase mb-3">
                <span className="w-4 h-[2px] bg-[#A6192E]" />
                <span>Visual Tour</span>
              </div>
              <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-white">
                Hotel Photography Gallery
              </h2>
            </div>
            <p className="text-slate-300 text-sm max-w-md font-light">
              Explore authentic glimpses into our rooms, lobby, dining area, and welcoming hotel property. Click any image to view in full resolution.
            </p>
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative h-72 sm:h-80 rounded-lg overflow-hidden border border-[#C8A96B]/20 cursor-pointer shadow-lg hover:border-[#C8A96B]/80 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071629]/90 via-[#071629]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover overlay with button */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 bg-[#071629]/90 text-white rounded-full inline-flex items-center justify-center border border-[#C8A96B]/40">
                      <Maximize2 className="w-4 h-4 text-[#C8A96B]" />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest text-[#C8A96B] uppercase block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-luxury text-lg text-white font-medium group-hover:text-[#E0C797] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <GalleryLightbox
          items={GALLERY_ITEMS}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(idx) => setLightboxIndex(idx)}
        />
      </section>

      {/* =========================================================================
          SECTION 6: LOCATION & CONTACT
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#0B1F3A] relative overflow-hidden border-t border-[#C8A96B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Contact Details & Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A96B] uppercase">
                <span className="w-6 h-[2px] bg-[#A6192E]" />
                <span>Location & Contact</span>
              </div>

              <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-white">
                Visit Us in Central Adana
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Conveniently located on İnönü Caddesi in Seyhan, Adana Akdeniz Otel places you close to transport nodes, cultural heritage, and vibrant city life.
              </p>

              {/* Address Card */}
              <div className="bg-[#071629] p-6 rounded border border-[#C8A96B]/20 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#A6192E] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#C8A96B] font-semibold mb-1">
                      Official Address
                    </h4>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      {HOTEL_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <Phone className="w-5 h-5 text-[#A6192E] shrink-0" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#C8A96B] font-semibold mb-0.5">
                      Direct Telephone Line
                    </h4>
                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="text-base text-white font-bold hover:text-[#C8A96B] transition-colors font-mono"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons: "Call Now" and "Get Directions" */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] border border-[#A6192E] rounded shadow-lg transition-colors text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={HOTEL_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#071629] hover:bg-[#0c2340] border border-[#C8A96B]/40 rounded shadow-md transition-colors text-center"
                >
                  <Navigation className="w-4 h-4 text-[#C8A96B]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Google Maps Location Embed */}
            <div className="lg:col-span-7">
              <div className="rounded-lg overflow-hidden border border-[#C8A96B]/30 shadow-2xl h-[420px] bg-[#071629] relative">
                <iframe
                  title="Adana Akdeniz Otel Google Maps Location"
                  src={HOTEL_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) brightness(0.95)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
