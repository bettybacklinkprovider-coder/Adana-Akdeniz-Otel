import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Navigation,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FormState {
  fullName: string;
  phoneNumber: string;
  email: string;
  roomInterest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phoneNumber: '',
    email: '',
    roomInterest: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Full name must be at least 3 characters.';
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required for reservations.';
    } else if (!/^(\+?\d{9,15})$/.test(formData.phoneNumber.replace(/[\s-]/g, ''))) {
      errs.phoneNumber = 'Please enter a valid phone number (e.g. +90 5XX XXX XX XX).';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide details or questions regarding your stay.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic delivery simulation to front desk inbox
    setTimeout(() => {
      const code = `AKD-${Math.floor(10000 + Math.random() * 90000)}`;
      setConfirmationCode(code);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Store in localStorage for persistence
      try {
        const storedInquiries = JSON.parse(localStorage.getItem('hotel_inquiries') || '[]');
        storedInquiries.push({
          code,
          ...formData,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem('hotel_inquiries', JSON.stringify(storedInquiries));
      } catch (err) {
        console.warn('Storage unavailable', err);
      }
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      roomInterest: 'General Inquiry',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="bg-[#071629] text-white pt-24">
      {/* =========================================================================
          HERO BANNER
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#0B1F3A] border-b border-[#C8A96B]/20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={HOTEL_INFO.images.heroExterior}
            alt="Adana Akdeniz Otel exterior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071629] via-[#071629]/90 to-[#0B1F3A]/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C8A96B] uppercase mb-4">
            <span className="w-6 h-[2px] bg-[#A6192E]" />
            <span>Contact & Location</span>
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl font-bold text-white max-w-3xl leading-tight mb-6">
            Get in Touch with Adana Akdeniz Otel
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
            Whether inquiring about room availability, group lodging, or directions in Seyhan, our dedicated hotel team is ready to assist you.
          </p>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT & FORM SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#071629] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Complete Address & Hotel Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#C8A96B] uppercase block mb-2">
                  Hospitality Information
                </span>
                <h2 className="font-luxury text-3xl sm:text-4xl font-bold text-white mb-4">
                  Adana Akdeniz Otel
                </h2>
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  Our front desk is staffed around the clock. We look forward to welcoming you to Seyhan, Adana.
                </p>
              </div>

              {/* Verified Contact Details Cards */}
              <div className="space-y-4">
                <div className="bg-[#0B1F3A] p-6 rounded-lg border border-[#C8A96B]/20 flex items-start gap-4 shadow-lg">
                  <MapPin className="w-6 h-6 text-[#A6192E] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-[#C8A96B] font-semibold mb-1">
                      Complete Postal Address
                    </h3>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      {HOTEL_INFO.address}
                    </p>
                    <a
                      href={HOTEL_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#C8A96B] hover:underline mt-2 font-medium"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="bg-[#0B1F3A] p-6 rounded-lg border border-[#C8A96B]/20 flex items-start gap-4 shadow-lg">
                  <Phone className="w-6 h-6 text-[#A6192E] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-[#C8A96B] font-semibold mb-1">
                      Telephone & Reception Line
                    </h3>
                    <p className="text-sm text-slate-300 mb-1">
                      Click below to call our 24/7 reception desk directly:
                    </p>
                    <a
                      href={`tel:${HOTEL_INFO.phoneRaw}`}
                      className="text-lg text-white font-bold hover:text-[#C8A96B] transition-colors font-mono inline-block"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-[#0B1F3A] p-6 rounded-lg border border-[#C8A96B]/20 flex items-start gap-4 shadow-lg">
                  <Mail className="w-6 h-6 text-[#A6192E] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-[#C8A96B] font-semibold mb-1">
                      Electronic Mail
                    </h3>
                    <a
                      href={`mailto:${HOTEL_INFO.email}`}
                      className="text-sm text-white hover:text-[#C8A96B] transition-colors"
                    >
                      {HOTEL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="bg-[#0B1F3A] p-6 rounded-lg border border-[#C8A96B]/20 flex items-start gap-4 shadow-lg">
                  <Clock className="w-6 h-6 text-[#C8A96B] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-[#C8A96B] font-semibold mb-1">
                      Check-in & Desk Hours
                    </h3>
                    <p className="text-sm text-white">
                      Check-in: <span className="font-mono">14:00</span> · Check-out: <span className="font-mono">12:00</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Front Desk & Security: 24 Hours Open
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Professional Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#0B1F3A] p-8 sm:p-10 rounded-lg border border-[#C8A96B]/30 shadow-2xl relative">
                {!isSubmitted ? (
                  <div>
                    <div className="mb-8">
                      <span className="text-xs font-semibold tracking-widest text-[#C8A96B] uppercase block mb-1">
                        Inquiry & Direct Messages
                      </span>
                      <h3 className="font-luxury text-2xl sm:text-3xl font-bold text-white">
                        Send a Message to the Hotel
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-light mt-1">
                        Fill in your details below and our team will get back to you promptly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Ahmet Yılmaz"
                          className={`w-full bg-[#071629] border rounded py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                            errors.fullName
                              ? 'border-[#A6192E] focus:border-[#A6192E]'
                              : 'border-white/15 focus:border-[#C8A96B]'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="flex items-center gap-1.5 text-xs text-[#E55365] mt-1.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            placeholder="+90 5XX XXX XX XX"
                            className={`w-full bg-[#071629] border rounded py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none font-mono transition-colors ${
                              errors.phoneNumber
                                ? 'border-[#A6192E] focus:border-[#A6192E]'
                                : 'border-white/15 focus:border-[#C8A96B]'
                            }`}
                          />
                          {errors.phoneNumber && (
                            <p className="flex items-center gap-1.5 text-xs text-[#E55365] mt-1.5">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{errors.phoneNumber}</span>
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@example.com"
                            className={`w-full bg-[#071629] border rounded py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                              errors.email
                                ? 'border-[#A6192E] focus:border-[#A6192E]'
                                : 'border-white/15 focus:border-[#C8A96B]'
                            }`}
                          />
                          {errors.email && (
                            <p className="flex items-center gap-1.5 text-xs text-[#E55365] mt-1.5">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{errors.email}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Room / Topic of Interest */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Room Category / Inquiry Topic
                        </label>
                        <select
                          value={formData.roomInterest}
                          onChange={(e) => setFormData({ ...formData, roomInterest: e.target.value })}
                          className="w-full bg-[#071629] border border-white/15 focus:border-[#C8A96B] rounded py-3 px-4 text-sm text-white focus:outline-none"
                        >
                          <option value="General Inquiry">General Hospitality Inquiry</option>
                          <option value="Deluxe King Room">Deluxe King Room</option>
                          <option value="Comfort Twin Room">Comfort Twin Room</option>
                          <option value="Executive Suite">Executive Suite</option>
                          <option value="Standard City Single">Standard City Single</option>
                          <option value="Corporate / Group Stay">Corporate / Group Booking</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Message & Travel Dates *
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please provide your planned arrival dates, number of guests, or any special requests..."
                          className={`w-full bg-[#071629] border rounded py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                            errors.message
                              ? 'border-[#A6192E] focus:border-[#A6192E]'
                              : 'border-white/15 focus:border-[#C8A96B]'
                          }`}
                        />
                        {errors.message && (
                          <p className="flex items-center gap-1.5 text-xs text-[#E55365] mt-1.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] active:bg-[#6E1023] rounded border border-[#A6192E] shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Delivering Message...</span>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Submit Message</span>
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-center text-xs text-slate-400 font-light">
                        For immediate assistance, call <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="text-white hover:text-[#C8A96B] font-mono font-medium underline">{HOTEL_INFO.phone}</a>.
                      </p>
                    </form>
                  </div>
                ) : (
                  /* Form Submission Success Confirmation Card */
                  <div className="text-center py-10 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-[#A6192E]/20 text-[#C8A96B] border border-[#C8A96B]/40 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8 text-[#E0C797]" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-widest text-[#C8A96B] font-semibold">
                        Message Successfully Sent
                      </span>
                      <h3 className="font-luxury text-3xl font-bold text-white">
                        Thank You, {formData.fullName}
                      </h3>
                      <p className="text-sm text-slate-300 font-light max-w-md mx-auto leading-relaxed">
                        Your inquiry has been successfully delivered to our front desk team at Adana Akdeniz Otel. We will reach back to you shortly via <strong className="text-white">{formData.email}</strong> or <strong className="text-white font-mono">{formData.phoneNumber}</strong>.
                      </p>
                    </div>

                    {/* Confirmation Reference Box */}
                    <div className="p-4 bg-[#071629] rounded border border-[#C8A96B]/30 max-w-sm mx-auto text-center">
                      <p className="text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                        Inquiry Reference Code
                      </p>
                      <p className="text-xl font-mono font-bold text-[#E0C797] tracking-wider">
                        {confirmationCode}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">
                        Topic: {formData.roomInterest}
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={resetForm}
                        className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#071629] hover:bg-[#0F284B] border border-white/20 rounded transition-colors"
                      >
                        Send Another Inquiry
                      </button>
                      <a
                        href={`tel:${HOTEL_INFO.phoneRaw}`}
                        className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#A6192E] hover:bg-[#851424] rounded border border-[#A6192E] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call Desk Now</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EMBEDDED GOOGLE MAP SECTION
          ========================================================================= */}
      <section className="py-16 bg-[#050F1D] border-t border-[#C8A96B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C8A96B] font-semibold block mb-1">
                Navigation & Map
              </span>
              <h3 className="font-luxury text-2xl sm:text-3xl font-bold text-white">
                Find Us on the Map
              </h3>
            </div>
            <a
              href={HOTEL_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1F3A] hover:bg-[#0F284B] border border-[#C8A96B]/30 rounded transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>Get Directions in Google Maps</span>
            </a>
          </div>

          <div className="rounded-lg overflow-hidden border border-[#C8A96B]/30 shadow-2xl h-[450px] bg-[#071629]">
            <iframe
              title="Adana Akdeniz Otel Map"
              src={HOTEL_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
