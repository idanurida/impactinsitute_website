// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'id', // Bahasa fallback jika bahasa yang terdeteksi tidak tersedia
    debug: true, // Aktifkan debug untuk melihat log i18n di konsol

    // Konfigurasi backend untuk memuat file JSON
    // Path ini relatif terhadap root publik (folder 'dist' setelah build)
    // Karena folder 'locales' dipindahkan ke 'public/', maka path ini benar
    loadPath: '/locales/{{lng}}/translation.json',

    interpolation: {
      escapeValue: false, // React sudah melindungi dari XSS
    },
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupFromPathIndex: 0, // Mengambil bahasa dari segmen pertama path (misal: /id/halaman)
      checkWhitelist: true
    },
    supportedLngs: ['id', 'en'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    react: {
      useSuspense: false
    }
  });

export default i18n;
