/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ganti ini dengan kode warna HEX aktual Anda
        'primary-dark': '#0A192F',    // Contoh: #4A90E2
        'primary-medium': '#172A45',  // Contoh: #5CA0ED
        'accent-teal': '#64FFDA',     // Contoh: #2EC4B6
        // Anda bisa menyesuaikan warna di atas. Ini adalah contoh warna yang umum.
        // Jika Anda memiliki warna spesifik dari desain Anda, gunakan kode HEX itu.
      },
    },
  },
  plugins: [],
}