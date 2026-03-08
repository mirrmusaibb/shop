export type Language = "en" | "ur";

export type LocalizedText = {
  en: string;
  ur: string;
};

export const getLocalizedText = (text: LocalizedText, language: Language): string => text[language];

export const LOCAL_SEO_KEYWORDS = [
  "tailor in Achabal",
  "pheran stitching Kashmir",
  "Mir Tailors Sunsooma",
  "wedding sherwani tailor Kashmir",
  "custom tailoring Sunsooma",
  "ladies and gents tailoring Kashmir",
];

export const BUSINESS = {
  name: "Mir Tailors",
  tagline: {
    en: "Precision Tailoring For Every Occasion",
    ur: "ہر موقع کے لیے نفیس سلائی",
  },
  phoneDisplay: "+91 98765 43210",
  phoneRaw: "919876543210",
  whatsappNumber: "919876543210",
  instagramUrl: "https://www.instagram.com/mir.tailors/",
  address: "Sunsooma Achabal, Jammu & Kashmir, India",
  city: "Sunsooma Achabal, Kashmir",
  coordinates: {
    lat: 33.6980062543632,
    lng: 75.22158108800498,
  },
  mapsUrl: "https://maps.google.com/?q=33.6980062543632,75.22158108800498",
};

export const NAV_ITEMS: Array<{ href: string; label: LocalizedText }> = [
  { href: "/", label: { en: "Home", ur: "ہوم" } },
  { href: "/services", label: { en: "Services", ur: "سروسز" } },
  { href: "/portfolio", label: { en: "Portfolio", ur: "نمونہ کام" } },
  { href: "/booking", label: { en: "Booking", ur: "بکنگ" } },
  { href: "/contact", label: { en: "Contact", ur: "رابطہ" } },
];

export const HERO_CONTENT = {
  label: {
    en: "Sunsooma Achabal | Tailoring Studio",
    ur: "سنسومہ اچہ بل | ٹیلرنگ اسٹوڈیو",
  },
  title: {
    en: "Crafted Fits, Timeless Style",
    ur: "بہترین فٹنگ، لازوال انداز",
  },
  subtitle: {
    en: "From traditional Kashmiri wear to modern formal tailoring, Mir Tailors delivers refined craftsmanship for men and women.",
    ur: "روایتی کشمیری لباس سے لے کر جدید فارمل سلائی تک، میر ٹیلرز مرد و خواتین کے لیے نفیس کاریگری فراہم کرتا ہے۔",
  },
  ctaPrimary: { en: "Book Appointment", ur: "اپائنٹمنٹ بک کریں" },
  ctaSecondary: { en: "Explore Services", ur: "سروسز دیکھیں" },
};

export const ABOUT_CONTENT = {
  title: { en: "About Mir Tailors", ur: "میر ٹیلرز کے بارے میں" },
  body: {
    en: "Mir Tailors is a trusted name in Sunsooma Achabal, known for detail-focused stitching, clean silhouettes, and dependable delivery. We blend Kashmiri tradition with modern finishing so every garment feels personal and premium.",
    ur: "میر ٹیلرز سنسومہ اچہ بل میں ایک معتبر نام ہے، جہاں باریک بینی، خوبصورت کٹنگ اور بروقت ڈیلیوری کو اولین ترجیح دی جاتی ہے۔ ہم کشمیری روایت کو جدید فنشنگ کے ساتھ ملا کر ہر لباس کو منفرد بناتے ہیں۔",
  },
};

export const WHY_CHOOSE_US: Array<{ title: LocalizedText; description: LocalizedText }> = [
  {
    title: { en: "Master Tailoring", ur: "ماہر درزی کاری" },
    description: {
      en: "Experienced pattern work and precision finishing for men and women.",
      ur: "مرد و خواتین کے لیے تجربہ کار پیٹرن ورک اور نفیس فنشنگ۔",
    },
  },
  {
    title: { en: "Traditional + Modern", ur: "روایتی اور جدید" },
    description: {
      en: "Pherans, kurtas, sherwanis, and contemporary fits under one roof.",
      ur: "پھیرن، کرتا، شیروانی اور جدید اسٹائل ایک ہی جگہ دستیاب۔",
    },
  },
  {
    title: { en: "Reliable Timelines", ur: "بروقت تکمیل" },
    description: {
      en: "Clear commitment on delivery schedules and alteration support.",
      ur: "ڈیلیوری ٹائم لائن کی واضح یقین دہانی اور آلٹریشن سپورٹ۔",
    },
  },
];

export const SERVICES: Array<{ name: LocalizedText; price: LocalizedText; note?: LocalizedText }> = [
  {
    name: { en: "Pheran stitching", ur: "پھیرن سلائی" },
    price: { en: "Starting from INR 900", ur: "ابتدائی قیمت 900 روپے سے" },
  },
  {
    name: { en: "Kurta stitching", ur: "کرتا سلائی" },
    price: { en: "Starting from INR 700", ur: "ابتدائی قیمت 700 روپے سے" },
  },
  {
    name: { en: "Suits", ur: "سوٹس" },
    price: { en: "Starting from INR 1800", ur: "ابتدائی قیمت 1800 روپے سے" },
  },
  {
    name: { en: "Shalwar kameez", ur: "شلوار قمیض" },
    price: { en: "Starting from INR 1100", ur: "ابتدائی قیمت 1100 روپے سے" },
  },
  {
    name: { en: "Wedding sherwani", ur: "شادی کی شیروانی" },
    price: { en: "Price after consultation", ur: "قیمت مشاورت کے بعد" },
    note: {
      en: "Custom fabrics, hand details, and fitting sessions included.",
      ur: "کسٹم کپڑا، ہینڈ ڈیٹیلنگ اور فٹنگ سیشن شامل ہیں۔",
    },
  },
  {
    name: { en: "Alterations", ur: "آلٹریشن" },
    price: { en: "Starting from INR 250", ur: "ابتدائی قیمت 250 روپے سے" },
  },
  {
    name: { en: "Uniform stitching", ur: "یونیفارم سلائی" },
    price: { en: "Starting from INR 650", ur: "ابتدائی قیمت 650 روپے سے" },
  },
  {
    name: { en: "Custom design orders", ur: "کسٹم ڈیزائن آرڈرز" },
    price: { en: "Price after consultation", ur: "قیمت مشاورت کے بعد" },
  },
];

export const BOOKING_TYPES: Array<LocalizedText> = [
  { en: "Stitching order", ur: "سلائی آرڈر" },
  { en: "Measurement appointment", ur: "ناپ کا وقت" },
  { en: "Home measurement visit", ur: "گھر پر ناپ کی سہولت" },
  { en: "Alteration pickup", ur: "آلٹریشن پک اپ" },
];

export const PORTFOLIO_ITEMS: Array<{ src: string; title: LocalizedText; category: LocalizedText }> = [
  {
    src: "/images/portfolio/pheran-classic.svg",
    title: { en: "Classic Pheran", ur: "روایتی پھیرن" },
    category: { en: "Traditional", ur: "روایتی" },
  },
  {
    src: "/images/portfolio/modern-kurta.svg",
    title: { en: "Modern Kurta", ur: "جدید کرتا" },
    category: { en: "Menswear", ur: "مردانہ لباس" },
  },
  {
    src: "/images/portfolio/wedding-sherwani.svg",
    title: { en: "Wedding Sherwani", ur: "ویڈنگ شیروانی" },
    category: { en: "Wedding", ur: "شادی" },
  },
  {
    src: "/images/portfolio/ladies-suit.svg",
    title: { en: "Ladies Suit Set", ur: "خواتین سوٹ سیٹ" },
    category: { en: "Womenswear", ur: "خواتین لباس" },
  },
  {
    src: "/images/portfolio/formal-waistcoat.svg",
    title: { en: "Formal Waistcoat", ur: "فارمل ویسٹ کوٹ" },
    category: { en: "Formal", ur: "فارمل" },
  },
  {
    src: "/images/portfolio/embroidery-pheran.svg",
    title: { en: "Embroidered Pheran", ur: "کشیدہ کاری پھیرن" },
    category: { en: "Handwork", ur: "ہینڈ ورک" },
  },
  {
    src: "/images/portfolio/uniform-set.svg",
    title: { en: "Uniform Set", ur: "یونیفارم سیٹ" },
    category: { en: "Institutional", ur: "ادارہ جاتی" },
  },
  {
    src: "/images/portfolio/alteration-finish.svg",
    title: { en: "Precision Alteration", ur: "نفیس آلٹریشن" },
    category: { en: "Alterations", ur: "آلٹریشن" },
  },
];

export const TESTIMONIALS: Array<{ quote: LocalizedText; name: string }> = [
  {
    quote: {
      en: "Best fit I have received in South Kashmir. The finishing is clean and premium.",
      ur: "جنوبی کشمیر میں مجھے سب سے بہترین فٹنگ یہی سے ملی۔ فنشنگ بہت نفیس ہے۔",
    },
    name: "Aamir R.",
  },
  {
    quote: {
      en: "My wedding sherwani looked exactly how I imagined. Highly professional team.",
      ur: "میری شادی کی شیروانی بالکل ویسی بنی جیسی میں نے سوچا تھا۔ بہترین پروفیشنل ٹیم۔",
    },
    name: "Irfan M.",
  },
  {
    quote: {
      en: "Excellent ladies stitching and timely delivery. Strongly recommended.",
      ur: "خواتین لباس کی بہترین سلائی اور بروقت ڈیلیوری۔ بھرپور سفارش کرتی ہوں۔",
    },
    name: "Saba Y.",
  },
];

export const DELIVERY_OPTIONS: Array<{ title: LocalizedText; description: LocalizedText }> = [
  {
    title: { en: "Shop pickup", ur: "شاپ سے پک اپ" },
    description: {
      en: "Collect your stitched garment directly from our Sunsooma Achabal shop.",
      ur: "اپنا تیار شدہ لباس سنسومہ اچہ بل شاپ سے وصول کریں۔",
    },
  },
  {
    title: { en: "Home delivery", ur: "گھر تک ڈیلیوری" },
    description: {
      en: "Delivery available in nearby areas on confirmed orders.",
      ur: "قریبی علاقوں میں تصدیق شدہ آرڈرز پر گھر تک ڈیلیوری دستیاب ہے۔",
    },
  },
  {
    title: { en: "Home measurement visit", ur: "گھر پر ناپ کی سہولت" },
    description: {
      en: "Book a visit for precise measurements at your location.",
      ur: "آپ کی لوکیشن پر درست ناپ کے لیے وزٹ بک کریں۔",
    },
  },
];

export const PAYMENT_OPTIONS: Array<LocalizedText> = [
  { en: "Advance payment via UPI", ur: "UPI کے ذریعے ایڈوانس ادائیگی" },
  { en: "Pay at shop", ur: "شاپ پر ادائیگی" },
];

export const CTA = {
  title: {
    en: "Ready To Get Your Perfect Fit?",
    ur: "کیا آپ بہترین فٹنگ کے لیے تیار ہیں؟",
  },
  description: {
    en: "Share your requirement and we will confirm fabric, timeline, and fitting details on WhatsApp.",
    ur: "اپنی ضرورت بتائیں، ہم واٹس ایپ پر کپڑے، وقت اور فٹنگ کی مکمل تفصیل کنفرم کریں گے۔",
  },
  primary: { en: "Book On WhatsApp", ur: "واٹس ایپ پر بک کریں" },
};
