// Central content store — photos sourced from marnibkkhostel.com.

export const site = {
  name: "Marni BKK Hostel",
  tagline: "Stay, explore, relax.",
  description:
    "Stay at Marni BKK Hostel in Phra Nakhon, offering clean dorms and private rooms, free WiFi, modern amenities, and easy access to top attractions.",
  url: "https://marnibkkhostel.com",
  phone: "+66 62 257 8006",
  phoneHref: "+66622578006",
  email: "Marni.bkkhostel@gmail.com",
  address: {
    line: "354/6-7 Soi Worapong, Wisutkasat Road, Ban Phan Thom, Phra Nakhon, Bangkok 10200, Thailand",
    lat: 13.7616,
    lng: 100.4969,
  },
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",
  founded: 2023,
  roomCount: 60,
  stars: 2,
  bookingUrl: "https://live.ipms247.com/booking/book-rooms-marnibkkhostel-lf",
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};

export type BookingChannel = {
  id: string;
  name: string;
  blurb: string;
  href: string;
  featured?: boolean;
  accent: string;
  mark: string;
};

export const bookingChannels: BookingChannel[] = [
  {
    id: "direct",
    name: "Book direct",
    blurb: "Best way to reserve — live rates from our own booking engine.",
    href: "https://live.ipms247.com/booking/book-rooms-marnibkkhostel-lf",
    featured: true,
    accent: "#00C2A8",
    mark: "MB",
  },
  {
    id: "booking",
    name: "Booking.com",
    blurb: "Familiar checkout, Genius deals, and easy date changes.",
    href: "https://www.booking.com/hotel/th/marni-bkk-hostel.html",
    accent: "#003580",
    mark: "B",
  },
  {
    id: "agoda",
    name: "Agoda",
    blurb: "Often sharp Bangkok rates and AgodaCash rewards.",
    href: "https://www.agoda.com/marni-bkk-hostel/hotel/bangkok-th.html",
    accent: "#5C2D91",
    mark: "A",
  },
  {
    id: "hostelworld",
    name: "Hostelworld",
    blurb: "Built for backpackers — dorms, private rooms, and reviews.",
    href: "https://www.hostelworld.com/st/hostels/p/321595/marni-bkk/",
    accent: "#F36B21",
    mark: "H",
  },
  {
    id: "expedia",
    name: "Expedia",
    blurb: "Bundle with flights or add One Key rewards.",
    href: "https://www.expedia.com/Bangkok-Hotels-Marni-BKK-Hostel.h100344374.Hotel-Information",
    accent: "#191E3B",
    mark: "E",
  },
  {
    id: "hotels",
    name: "Hotels.com",
    blurb: "Collect stamps toward a free night on later trips.",
    href: "https://www.hotels.com/ho100344374/",
    accent: "#D32F2F",
    mark: "H+",
  },
  {
    id: "google",
    name: "Google Hotels",
    blurb: "Compare several sites side by side before you pay.",
    href: "https://www.google.com/travel/hotels/entity/ChoIodqd2Lr4s4-rARoNL2cvMTF2NDFmMW44NxAB",
    accent: "#1A73E8",
    mark: "G",
  },
  {
    id: "trivago",
    name: "Trivago",
    blurb: "Scan multiple OTAs in one place, then book the best price.",
    href: "https://www.trivago.com/en-US/oar/hotel-marni-bkk-hostel-bangkok?search=100-34214998",
    accent: "#0077C0",
    mark: "T",
  },
];

export const heroSlides = [
  {
    eyebrow: "Urban Comfort",
    headline: "Peaceful stays in the vibrant heart of Bangkok",
    image: "/images/hero-1.png",
  },
  {
    eyebrow: "Modern Living",
    headline: "Stylish hostel spaces designed for smart travelers",
    image: "/images/hero-2.png",
  },
  {
    eyebrow: "Travel Freedom",
    headline: "Affordable comfort near Bangkok's top attractions",
    image: "/images/hero-exterior.png",
  },
];

export type Room = {
  slug: string;
  name: string;
  details: string[];
  image: string;
};

export const rooms: Room[] = [
  {
    slug: "twin-shared-bathroom",
    name: "Twin with Shared Bathroom — Room Only (EP)",
    details: [
      "2 adults, 1 child, 1 room",
      "2 single beds",
      "Shared bathroom",
      "Air conditioner",
      "Free Wi-Fi",
    ],
    image: "/images/room-twin.jpg",
  },
  {
    slug: "8-bed-mixed-dorm",
    name: "8-Bed Mixed Dormitory Room",
    details: [
      "8 adults, 0 children, 1 room",
      "8 bunk beds",
      "Shared bathroom",
      "City view",
      "Free Wi-Fi",
    ],
    image: "/images/room-8bed-dorm.png",
  },
  {
    slug: "female-dorm",
    name: "Female Dorm — Room Only (EP)",
    details: [
      "1 adult, 0 children, 1 room",
      "1 bunk bed",
      "Shared bathroom",
      "Air conditioner",
      "Free Wi-Fi",
      "City view",
    ],
    image: "/images/room-female-dorm.jpg",
  },
  {
    slug: "mixed-dorm",
    name: "Mixed Dorm — Room Only (EP)",
    details: [
      "1 adult, 0 children, 1 room",
      "1 bunk bed",
      "Shared bathroom",
      "26 m²",
      "Free parking",
    ],
    image: "/images/room-mixed-dorm.jpg",
  },
  {
    slug: "double-room",
    name: "Double Room",
    details: [
      "2 adults, 0 children, 1 room",
      "Double bed",
      "Private bathroom",
      "Air conditioner",
      "Free Wi-Fi",
      "City view",
    ],
    image: "/images/room-double.jpg",
  },
];

export const nearby = [
  {
    icon: "footprints",
    title: "Walk from the hostel",
    kind: "Place",
    items: [
      { name: "Khaosan Road", distance: "500 m" },
      { name: "Democracy Monument", distance: "900 m" },
      { name: "Santichaiprakan Park", distance: "1.1 km" },
      { name: "Rattanakosin Exhibition Hall", distance: "1.2 km" },
      { name: "Dog Run", distance: "1.2 km" },
      { name: "The National Gallery", distance: "1.4 km" },
      { name: "Ananta Samakhom Throne Hall", distance: "1.5 km" },
      { name: "Sanam Luang", distance: "1.7 km" },
      { name: "Bangkok National Museum", distance: "1.7 km" },
    ],
  },
  {
    icon: "landmark",
    title: "Top attractions",
    kind: "TouristAttraction",
    items: [
      { name: "Vimanmek Mansion", distance: "1.8 km" },
      { name: "Bangkok City Pillar", distance: "1.9 km" },
      { name: "Grand Palace", distance: "2.4 km" },
      { name: "Museum of Siam", distance: "2.9 km" },
      { name: "Chitralada Royal Villa", distance: "3.2 km" },
      { name: "Jim Thompson House", distance: "3.9 km" },
      { name: "Madame Tussauds Bangkok", distance: "4.4 km" },
      { name: "Lumpini Park", distance: "7 km" },
    ],
  },
  {
    icon: "train-front",
    title: "Public transit",
    kind: "CivicStructure",
    items: [
      { name: "Train · Wang Burapha", distance: "2.2 km" },
      { name: "Train · Yommarat", distance: "2.8 km" },
      { name: "Subway · MRT Hua Lamphong", distance: "4 km" },
      { name: "Subway · Ratchathewi", distance: "4.1 km" },
      { name: "Bus · Mo Chit Northern Bus Terminal", distance: "9 km" },
    ],
  },
  {
    icon: "plane",
    title: "Closest airports",
    kind: "Airport",
    items: [
      { name: "Don Mueang International Airport", distance: "17 km" },
      { name: "Suvarnabhumi Airport", distance: "33 km" },
    ],
  },
  {
    icon: "utensils",
    title: "Restaurants & cafes",
    kind: "Restaurant",
    items: [
      { name: "Pul Sin Restaurant", distance: "550 m" },
      { name: "Cafe Amazon", distance: "300 m" },
      { name: "Juntun Craft Bar & Store", distance: "350 m" },
    ],
  },
];

export const amenities = [
  { icon: "clock", title: "24/7 front desk", description: "Round-the-clock support, whenever you arrive or need help." },
  { icon: "wifi", title: "Free Wi-Fi", description: "Fast, free Wi-Fi throughout the hostel, in rooms and common areas." },
  { icon: "sparkles", title: "Daily housekeeping", description: "Rooms and common areas cleaned every day." },
  { icon: "briefcase", title: "Luggage storage", description: "Drop your bags safely before check-in or after check-out." },
  { icon: "map", title: "Tour assistance", description: "Local tips and help booking tours around Bangkok." },
  { icon: "snowflake", title: "Air-conditioned rooms", description: "Dorms and private rooms with individual air conditioning." },
  { icon: "cooking-pot", title: "Shared kitchen", description: "Cook your own meals in our communal kitchen space." },
  { icon: "sofa", title: "Common lounge", description: "A relaxed shared lounge to meet fellow travelers." },
  { icon: "shirt", title: "Laundry service", description: "Get your clothes washed during your stay." },
  { icon: "lock", title: "Secure lockers", description: "Personal lockers to keep your belongings safe." },
];

export const features = [
  {
    title: "Comfort Bed",
    description:
      "Premium mattresses, privacy curtains, clean linens, and personal lights for your best sleep.",
    image: "/images/feature-comfort-bed.jpg",
  },
  {
    title: "Common Areas",
    description:
      "Gather with friends or fellow travelers in our shared lounge. Perfect for relaxing or socializing.",
    image: "/images/feature-common-areas.jpg",
  },
];

export const galleryImages = [
  "/images/gallery-17.jpg",
  "/images/feature-common-areas.jpg",
  "/images/room-twin.jpg",
  "/images/room-8bed-dorm.png",
  "/images/room-female-dorm.jpg",
  "/images/room-mixed-dorm.jpg",
  "/images/room-double.jpg",
  "/images/gallery-18.jpg",
  "/images/gallery-20.jpg",
  "/images/stay-with-us.jpg",
  "/images/gallery-16.jpg",
  "/images/gallery-19.jpg",
];

export const reviews = [
  {
    quote:
      "From the moment we arrived, the staff went above and beyond to make our stay memorable. They were incredibly attentive and always greeted us with a smile.",
    name: "John Doe",
    role: "Businessman",
    rating: 5,
  },
  {
    quote:
      "The concierge provided excellent recommendations for local attractions and dining, ensuring we had an unforgettable visit. We'll definitely be returning!",
    name: "Mike Lewis",
    role: "Coach",
    rating: 5,
  },
];

export const ratings = [
  { platform: "Agoda", value: "—" },
  { platform: "Facebook", value: "—" },
  { platform: "Expedia", value: "—" },
];

export const faqs = [
  {
    q: "What time is check-in and check-out?",
    a: `Check-in starts at ${site.checkIn} and check-out is until ${site.checkOut}. Let us know at the front desk if you need an early check-in or a later check-out and we'll do our best to help.`,
  },
  {
    q: "How do I book a room?",
    a: "Open our Book page to reserve direct, or choose Booking.com, Agoda, Hostelworld, Expedia, and other sites. Compare rates, then tap through — or call us if you prefer to book by phone.",
  },
  {
    q: "Is Wi-Fi included?",
    a: "Yes — free Wi-Fi is available throughout the hostel, in every room and all common areas, at no extra cost.",
  },
  {
    q: "Do you offer private rooms as well as dorms?",
    a: "Yes. Alongside our dormitory beds (mixed and female-only), we offer private Twin and Double rooms, some with air conditioning and city views.",
  },
  {
    q: "How close are you to Khaosan Road and the Grand Palace?",
    a: "We're about 500 m from Khaosan Road and roughly 2.4 km from the Grand Palace — an easy walk or short ride from most of Bangkok's must-see sights in Phra Nakhon.",
  },
  {
    q: "Is there luggage storage if I arrive early or leave late?",
    a: "Yes, we offer free luggage storage so you can drop your bags and start exploring before check-in or after check-out.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellation terms depend on the rate you book and are shown clearly at checkout in our booking system before you confirm your reservation.",
  },
];
