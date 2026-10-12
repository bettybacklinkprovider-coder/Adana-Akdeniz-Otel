// Hotel Data for Adana Akdeniz Otel - Adana Konaklama
import heroExterior from '../assets/images/hotel_hero_exterior_1791790261929.jpg';
import deluxeRoom from '../assets/images/hotel_deluxe_room_1791790277542.jpg';
import twinRoom from '../assets/images/hotel_twin_room_1791790291068.jpg';
import lobbyReception from '../assets/images/hotel_lobby_reception_1791790304718.jpg';
import diningLounge from '../assets/images/hotel_breakfast_lounge_1791790319250.jpg';

export interface RoomItem {
  id: string;
  name: string;
  tagline: string;
  capacity: string;
  bedType: string;
  size: string;
  image: string;
  description: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export const HOTEL_INFO = {
  name: "Adana Akdeniz Otel",
  fullName: "Adana Akdeniz Otel - Adana Konaklama",
  phone: "+90 322 363 15 11",
  phoneRaw: "+903223631511",
  address: "Çınarlı, İnönü Cd. No:14, 01060 Seyhan/Adana, Türkiye",
  district: "Seyhan, Adana",
  email: "info@adanaakdenizotel.com",
  receptionHours: "24/7 Front Desk & Concierge Service",
  checkIn: "14:00",
  checkOut: "12:00",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Çınarlı,+İnönü+Cd.+No:14,+01060+Seyhan/Adana,+Türkiye",
  // Accurate embed coordinates for Çınarlı, İnönü Cd. No:14, Seyhan, Adana
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.294158482457!2d35.32357731530932!3d36.99728227990928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f6b150c904d%3A0xc34ba23e7eefee85!2s%C3%87%C4%B1narl%C4%B1%2C%20%C4%B0n%C3%B6n%C3%BC%20Cd.%20No%3A14%2C%2001060%20Seyhan%2FAdana%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str",
  images: {
    heroExterior,
    deluxeRoom,
    twinRoom,
    lobbyReception,
    diningLounge
  }
};

export const ROOMS_DATA: RoomItem[] = [
  {
    id: "deluxe-king",
    name: "Deluxe King Room",
    tagline: "Spacious comfort with premium bedding & city views",
    capacity: "2 Guests",
    bedType: "1 Large King Bed",
    size: "28 m²",
    image: deluxeRoom,
    description: "Designed for discerning travelers seeking comfort and tranquility in central Adana. Features plush king bedding, custom mahogany accents, quiet climate control, and a dedicated workspace.",
    features: [
      "Ultra-Comfort King Bed",
      "Individually Controlled AC",
      "High-Speed Wi-Fi",
      "HD Smart LED TV",
      "Private En-Suite Bathroom",
      "Complimentary Tea & Coffee Setup",
      "In-Room Safe & Mini Fridge",
      "Soundproof Windows"
    ]
  },
  {
    id: "comfort-twin",
    name: "Comfort Twin Room",
    tagline: "Ideal for colleagues, friends, or traveling duos",
    capacity: "2 Guests",
    bedType: "2 Single Beds",
    size: "26 m²",
    image: twinRoom,
    description: "A meticulously prepared room featuring two premium single beds with orthopaedic mattresses. Provides a restful retreat in Seyhan with abundant natural light and modern amenities.",
    features: [
      "Two Premium Single Beds",
      "Silent Air Conditioning",
      "Free High-Speed Wi-Fi",
      "Satellite TV Channels",
      "Private Marble Bathroom",
      "Daily Housekeeping Service",
      "Work Desk & Ergonomic Chair",
      "Soundproof Architecture"
    ]
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    tagline: "Expanded living space for business & extended stays",
    capacity: "2–3 Guests",
    bedType: "1 King Bed + Lounge Seating",
    size: "38 m²",
    image: deluxeRoom,
    description: "Our most generous accommodation option with an integrated seating lounge. Perfect for business travelers requiring space to work and unwind in the heart of Seyhan.",
    features: [
      "Master King Bedroom Suite",
      "Separate Living & Seating Nook",
      "Silent Climate Control",
      "Enhanced Soundproofing",
      "Premium Bathroom Amenities",
      "Complimentary High-Speed Wi-Fi",
      "Mini Fridge & Refreshment Bar",
      "Priority Concierge Attention"
    ]
  },
  {
    id: "standard-single",
    name: "Standard City Single",
    tagline: "Efficient, cozy lodging for solo business and travel visitors",
    capacity: "1 Guest",
    bedType: "1 Comfortable Single Bed",
    size: "20 m²",
    image: twinRoom,
    description: "Carefully designed for solo visitors to Adana. Offers a quiet sanctuary equipped with fast Wi-Fi, air conditioning, and a comfortable bed for rejuvenating sleep.",
    features: [
      "Plush Single Bed",
      "Modern Private Bathroom",
      "Individual Climate Control",
      "High-Speed Wi-Fi",
      "Flat Screen TV",
      "Daily Linen Refresh",
      "Work Vanity Station",
      "24/7 Room Assistance"
    ]
  }
];

export const HOTEL_AMENITIES = [
  {
    title: "24/7 Reception & Concierge",
    description: "Our dedicated front desk team is at your service round-the-clock for check-in, local recommendations, and transport assistance.",
    icon: "Clock"
  },
  {
    title: "High-Speed Wi-Fi",
    description: "Seamless wireless internet throughout all guest rooms, public lounge areas, and lobby for work and leisure.",
    icon: "Wifi"
  },
  {
    title: "Climate Control & AC",
    description: "Individually controlled air conditioning in every room ensuring your utmost comfort throughout Adana's seasons.",
    icon: "Wind"
  },
  {
    title: "Daily Housekeeping",
    description: "Pristine hygiene standards with daily room cleaning, fresh towels, sanitized linens, and bathroom amenities.",
    icon: "Sparkles"
  },
  {
    title: "Breakfast & Dining Lounge",
    description: "Start your morning with a fresh breakfast spread and traditional Turkish tea in our welcoming dining space.",
    icon: "Coffee"
  },
  {
    title: "Prime Seyhan Location",
    description: "Centrally positioned on İnönü Caddesi in Çınarlı, within walking distance of central business hubs and cultural sights.",
    icon: "MapPin"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "ext-1",
    title: "Hotel Facade & Evening Entrance",
    category: "Exterior",
    image: heroExterior,
    caption: "The illuminated exterior facade of Adana Akdeniz Otel on İnönü Caddesi at dusk."
  },
  {
    id: "room-1",
    title: "Deluxe King Bedroom",
    category: "Rooms",
    image: deluxeRoom,
    caption: "Elegant interior styling with dark navy fabrics, crimson cushions, and warm lighting."
  },
  {
    id: "lobby-1",
    title: "Reception & Concierge Lobby",
    category: "Lobby",
    image: lobbyReception,
    caption: "Polished marble lobby with 24-hour reception desk and comfortable guest lounge seating."
  },
  {
    id: "room-2",
    title: "Comfort Twin Guest Room",
    category: "Rooms",
    image: twinRoom,
    caption: "Spacious twin bed configuration with modern wood finishings and quiet urban views."
  },
  {
    id: "dining-1",
    title: "Breakfast Lounge & Dining Area",
    category: "Dining",
    image: diningLounge,
    caption: "Bright morning dining area where guests can savor fresh Turkish breakfast and coffee."
  },
  {
    id: "suite-1",
    title: "Executive Suite Living Space",
    category: "Suites",
    image: deluxeRoom,
    caption: "Generously sized executive suite featuring rich hardwood floors and luxury linens."
  }
];

export const NEARBY_ATTRACTIONS = [
  {
    name: "Sabancı Central Mosque",
    distance: "1.4 km",
    description: "One of the largest mosques in the Middle East, situated on the Seyhan River."
  },
  {
    name: "Historical Stone Bridge (Taşköprü)",
    distance: "1.8 km",
    description: "Ancient Roman bridge spanning the Seyhan River, iconic symbol of Adana."
  },
  {
    name: "Seyhan Riverfront Promenade",
    distance: "1.2 km",
    description: "Lush green riverside walking paths and relaxing cafes."
  },
  {
    name: "Adana Grand Bazaar (Tarihi Kazancılar)",
    distance: "1.6 km",
    description: "Historic marketplace known for traditional crafts, spices, and famous Adana kebab."
  },
  {
    name: "Adana Şakirpaşa Airport (ADA)",
    distance: "3.5 km",
    description: "Conveniently accessible via taxi or airport transit in under 10 minutes."
  }
];
