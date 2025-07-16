// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Opsional
import Backend from 'i18next-http-backend'; // Opsional, jika memuat dari server

// Sumber terjemahan (fallback, atau jika tidak menggunakan http-backend)
import translationEN from './locales/en/translation.json';
import translationID from './locales/id/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  id: {
    translation: translationID
  }
};

i18n
  // memuat terjemahan secara asinkron dari server (opsional)
  // .use(Backend)
  // mendeteksi bahasa pengguna (opsional)
  .use(LanguageDetector)
  // meneruskan instansi i18n ke react-i18next.
  .use(initReactI18next)
  // menginisialisasi i18next
  // untuk semua opsi, lihat: https://www.i18next.com/overview/configuration-options
  .init({
    // fallbackLng: 'en', // Bahasa fallback jika bahasa pengguna tidak tersedia
    debug: true, // Set false di produksi
    lng: 'id', // Bahasa default saat aplikasi pertama kali dimuat

    interpolation: {
      escapeValue: false, // react sudah escape dari XSS
    },

    // Sumber daya (translations)
    resources: resources,

    // Konfigurasi untuk LanguageDetector (opsional)
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    }
  });

export default i18n;