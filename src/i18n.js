// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend'; // Jika Anda memuat terjemahan dari backend

i18n
  .use(HttpBackend) // Menggunakan backend HTTP untuk memuat terjemahan
  .use(LanguageDetector) // Mendeteksi bahasa pengguna dari browser
  .use(initReactI18next) // Meneruskan instance i18n ke react-i18next
  .init({
    fallbackLng: 'id', // Bahasa fallback jika bahasa yang terdeteksi tidak tersedia
    debug: true, // Aktifkan debug untuk melihat log i18n di konsol

    // Konfigurasi backend untuk memuat file JSON
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path ke file terjemahan Anda
    },

    interpolation: {
      escapeValue: false, // React sudah melindungi dari XSS
    },
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupFromPathIndex: 0, // Mengambil bahasa dari segmen pertama path (misal: /id/halaman)
      checkWhitelist: true // Periksa apakah bahasa ada di daftar yang didukung
    },
    // Daftar bahasa yang didukung
    supportedLngs: ['id', 'en'],
    nonExplicitSupportedLngs: true, // Izinkan bahasa yang tidak secara eksplisit didukung
    load: 'languageOnly', // Hanya memuat 'en' atau 'id', bukan 'en-US'
    react: {
      useSuspense: false // Nonaktifkan Suspense untuk menghindari masalah loading awal
    }
  });

export default i18n;
