import React, { useState } from 'react';
import {
  Phone,
  ArrowRight,
  Users,
  Bed,
  CheckCircle2,
  Calendar,
  X,
  Mail,
  User,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { HOTEL_INFO, ROOMS_DATA, RoomItem } from '../data/hotelData';

export const RoomsPage: React.FC = () => {
  const [selectedRoomForInquiry, setSelectedRoomForInquiry] = useState<RoomItem | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    dates: '',
    guests: '2 Guests',
    notes: ''
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.name || !inquiryForm.phone) {
      return;
    }
    setInquirySubmitted(true);
  };

  const handleCloseModal = () => {
    setSelectedRoomForInquiry(null);
    setInquirySubmitted(false);
    setInquiryForm({
      name: '',
      phone: '',
      dates: '',
      guests: '2 Guests',
      notes: ''
    });
  };

  return (
    <div className="bg-[#071629] text-white pt-24">
      {/* =========================================================================
          HERO BANNER
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#0B1F3A] border-b border-[#C8A96B]/20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={HOTEL_INFO.images.deluxeRoom}
            alt="Adana Akdeniz Otel luxury rooms"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071629] via-[#071629]/90 to-[#0B1F3A]/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A96B] uppercase mb-4">
            <span className="w-6 h-[2px] bg-[#A6192E]" />
            <span>Accommodation & Suites</span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl font-bold text-white max-w-3xl leading-tight mb-6">
            Rooms & Accommodation in Seyhan
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed mb-8">
            Experience serene sleep and discreet luxury. Each room at Adana Akdeniz Otel is equipped with premium orthopaedic bedding, whisper-quiet air conditioning, and soundproofing in the center of Adana.
          </p>

          {/* Quick Call Action */}
          <div className="inline-flex flex-wrap items-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] border border-[#A6192E] rounded shadow-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call to Inquire: {HOTEL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ROOM GALLERY & INDIVIDUAL ROOM CARDS
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#071629] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {ROOMS_DATA.map((room, index) => (
              <div
                key={room.id}
                className="bg-[#0B1F3A] rounded-lg overflow-hidden border border-[#C8A96B]/25 hover:border-[#C8A96B]/60 transition-all duration-300 shadow-2xl grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Room Image */}
                <div
                  className={`lg:col-span-6 relative min-h-[320px] lg:min-h-full overflow-hidden ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 bg-[#071629]/90 backdrop-blur-md px-3.5 py-1.5 rounded text-xs text-[#C8A96B] font-mono border border-[#C8A96B]/30">
                    {room.size} · {room.capacity}
                  </div>
                </div>

                {/* Room Details */}
                <div
                  className={`lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C8A96B] uppercase mb-2">
                      <span>Adana Akdeniz Otel</span>
                      <span aria-hidden="true">·</span>
                      <span>Seyhan Konaklama</span>
                    </div>

                    <h2 className="font-luxury text-3xl sm:text-4xl font-bold text-white mb-2">
                      {room.name}
                    </h2>

                    <p className="text-sm text-[#E0C797] font-medium mb-4 italic font-luxury text-lg">
                      {room.tagline}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                      {room.description}
                    </p>

                    {/* Room Specs */}
                    <div className="flex flex-wrap items-center gap-4 py-3 border-y border-white/10 text-xs text-slate-300 mb-6">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-[#A6192E]" />
                        <span>Capacity: <strong className="text-white">{room.capacity}</strong></span>
                      </div>
                      <span aria-hidden="true">·</span>
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-[#C8A96B]" />
                        <span>Bedding: <strong className="text-white">{room.bedType}</strong></span>
                      </div>
                    </div>

                    {/* Verified Features */}
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider text-[#C8A96B] uppercase mb-3">
                        Included In-Room Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                        {room.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#A6192E] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Room Inquiry Actions */}
                  <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={() => setSelectedRoomForInquiry(room)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] border border-[#A6192E] rounded shadow-md transition-colors"
                    >
                      <span>Inquire About This Room</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#071629] hover:bg-[#0c2340] border border-[#C8A96B]/40 rounded transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
                      <span>Direct Desk: +90 322 363 15 11</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          RESERVATION INQUIRY CONTACT SECTION
          ========================================================================= */}
      <section className="py-20 bg-[#0B1F3A] border-t border-[#C8A96B]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A96B] uppercase">
            <span className="w-6 h-[2px] bg-[#A6192E]" />
            <span>Direct Reservations & Inquiries</span>
            <span className="w-6 h-[2px] bg-[#A6192E]" />
          </div>

          <h2 className="font-luxury text-3xl sm:text-5xl font-bold text-white">
            Personalized Booking Assistance
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            To guarantee personalized service and up-to-the-minute availability for your travel dates in Adana, our reservation desk handles all booking inquiries directly by telephone or verified inquiry message.
          </p>

          <div className="p-8 bg-[#071629] rounded-lg border border-[#C8A96B]/30 max-w-xl mx-auto text-center space-y-4 shadow-xl">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
              Speak with our Front Desk Representative
            </p>
            <div className="text-2xl sm:text-3xl font-luxury font-bold text-white">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="hover:text-[#C8A96B] transition-colors font-mono"
              >
                +90 322 363 15 11
              </a>
            </div>
            <p className="text-xs text-slate-400 font-light">
              Available 24 hours a day, 7 days a week · Çınarlı, İnönü Cd. No:14, Seyhan
            </p>
            <div className="pt-2">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] rounded border border-[#A6192E] shadow-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Inquire Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INQUIRY MODAL / DIALOG
          ========================================================================= */}
      {selectedRoomForInquiry && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#071629]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-[#0B1F3A] border border-[#C8A96B]/40 rounded-lg max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!inquirySubmitted ? (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A96B] font-semibold block mb-1">
                    Room Inquiry
                  </span>
                  <h3 className="font-luxury text-2xl font-bold text-white">
                    {selectedRoomForInquiry.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-light mt-0.5">
                    {selectedRoomForInquiry.tagline}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-[#071629] border border-white/15 focus:border-[#C8A96B] rounded py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        placeholder="+90 5XX XXX XX XX"
                        className="w-full bg-[#071629] border border-white/15 focus:border-[#C8A96B] rounded py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Intended Dates
                      </label>
                      <input
                        type="text"
                        value={inquiryForm.dates}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, dates: e.target.value })}
                        placeholder="e.g. 15-18 Oct"
                        className="w-full bg-[#071629] border border-white/15 focus:border-[#C8A96B] rounded py-2.5 px-3 text-sm text-white placeholder-slate-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Number of Guests
                      </label>
                      <select
                        value={inquiryForm.guests}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, guests: e.target.value })}
                        className="w-full bg-[#071629] border border-white/15 focus:border-[#C8A96B] rounded py-2.5 px-3 text-sm text-white focus:outline-none"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4+ Guests">4+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Special Requests or Questions
                    </label>
                    <textarea
                      rows={2}
                      value={inquiryForm.notes}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                      placeholder="Arrival time, bedding preference, or inquiries..."
                      className="w-full bg-[#071629] border border-white/15 focus:border-[#C8A96B] rounded py-2 px-3 text-sm text-white placeholder-slate-500 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] rounded border border-[#A6192E] shadow-md transition-colors"
                  >
                    Submit Room Inquiry
                  </button>
                  <a
                    href={`tel:${HOTEL_INFO.phoneRaw}`}
                    className="text-center text-xs text-slate-400 hover:text-[#C8A96B] transition-colors py-1"
                  >
                    Or call immediately: +90 322 363 15 11
                  </a>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#A6192E]/20 text-[#A6192E] border border-[#A6192E]/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-luxury text-2xl font-bold text-white">
                  Inquiry Received
                </h4>
                <p className="text-sm text-slate-300 font-light max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{inquiryForm.name}</strong>. Your inquiry for <strong className="text-[#C8A96B]">{selectedRoomForInquiry.name}</strong> has been logged. Our front desk team will contact you shortly via <span className="font-mono">{inquiryForm.phone}</span>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleCloseModal}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#071629] hover:bg-[#0F284B] border border-[#C8A96B]/30 rounded transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
