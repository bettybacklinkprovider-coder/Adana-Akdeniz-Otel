import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/hotelData';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 bg-[#071629]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-[#A6192E] rounded-full border border-white/20 transition-all duration-200"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-[#A6192E] rounded-full border border-white/20 transition-all duration-200"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-[#A6192E] rounded-full border border-white/20 transition-all duration-200"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content */}
      <div
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-lg overflow-hidden border border-[#C8A96B]/30 shadow-2xl bg-black max-h-[75vh]">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-auto max-h-[75vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="inline-block text-xs uppercase tracking-widest text-[#C8A96B] mb-1 font-semibold">
            {currentItem.category} · {currentIndex + 1} / {items.length}
          </div>
          <h3 className="font-luxury text-xl sm:text-2xl text-white font-medium">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
