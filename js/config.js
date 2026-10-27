/* ============================================================
   JUDITH CLEANING SERVICES — CENTRAL CONFIGURATION
   Paste your real keys below. Until you do, the site runs in
   LOCAL MODE (data saved in this browser only) so you can test.
   ============================================================ */
const CONFIG = {

  BUSINESS: {
    name: "Judith Cleaning Services",
    tagline: "Professional cleaning services in Lagos",
    phone: "+234 815 117 5801",
    whatsapp: "2348151175801",          // digits only, international format
    email: "judithcleanservice51@gmail.com",
    address: "12 Adeola Odeku Street, Victoria Island, Lagos",
    hours: "Mon – Sat, 7:00 AM – 7:00 PM"
  },

  CURRENCY: "₦",

  /* ---- FIREBASE (https://console.firebase.google.com)
     Project settings → General → Your apps → Web app → config.
     Enable: Authentication (Email/Password + Google) and
     Cloud Firestore (start in production or test mode). ---- */
  FIREBASE: {
    apiKey: "AIzaSyDUxuK9n91IPFIF_tZoucywvMrfPINq-0Y",
    authDomain: "judith-cleanining.firebaseapp.com",
    projectId: "judith-cleanining",
    storageBucket: "judith-cleanining.firebasestorage.app",
    messagingSenderId: "749330639511",
    appId: "1:749330639511:web:e2513f4bf56acc680657d2"
  },

  /* ---- CLOUDINARY (https://cloudinary.com → Dashboard)
     Create an UNSIGNED upload preset:
     Settings → Upload → Upload presets → Add → Signing mode: Unsigned ---- */
  CLOUDINARY: {
    cloudName: "dinypexvn",
    uploadPreset: "Judith cleaning services"
  },

  /* ---- EMAILJS (https://www.emailjs.com)
     Create a service + a template, grab the public key.
     Template variables used: to_name, to_email, subject, message ---- */
  EMAILJS: {
    publicKey: "18iZhHLiqmlZvUwbw",
    serviceId: "service_g4bg486",
    templateId: "template_11kam3o"
  },

  /* ---- PAYSTACK (https://dashboard.paystack.com → Settings → API Keys)
     Use your PUBLIC key (pk_test_... or pk_live_...) ---- */
  PAYSTACK: {
    publicKey: "pk_test_8c3c455aa3ef30605e939ccf38c494cd7f4b1920"
  },

  /* Emails that automatically get the ADMIN role on sign-in */
  ADMIN_EMAILS: ["feranmirashford51@gmail.com"],

  /* Service areas and travel fees (₦). Add/remove freely. */
  AREAS: {
    "Ikeja": 0, "Maryland": 500, "Gbagada": 1000, "Yaba": 1000,
    "Surulere": 1500, "Victoria Island": 2000, "Ikoyi": 2000,
    "Lekki Phase 1": 2500, "Ajah": 3500, "Festac": 2500,
    "Ogba": 1000, "Magodo": 1500, "Ikorodu": 4000
  },

  /* Recurring plan discounts */
  FREQUENCIES: [
    { id: "once",     label: "One-time",            discount: 0    },
    { id: "weekly",   label: "Weekly (save 15%)",   discount: 0.15 },
    { id: "biweekly", label: "Bi-weekly (save 10%)",discount: 0.10 },
    { id: "monthly",  label: "Monthly (save 5%)",   discount: 0.05 }
  ],

  /* Optional add-ons shown in calculator & booking */
  ADDONS: [
    { id: "fridge",  name: "Inside fridge",        price: 3500 },
    { id: "oven",    name: "Inside oven",          price: 4000 },
    { id: "windows", name: "Interior windows",     price: 5000 },
    { id: "ironing", name: "Laundry & ironing",    price: 5000 },
    { id: "balcony", name: "Balcony / patio",      price: 2500 },
    { id: "cabinets",name: "Inside cabinets",      price: 3000 }
  ],

  TIME_SLOTS: ["08:00 AM","10:00 AM","12:00 PM","02:00 PM","04:00 PM"]
};
