// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from '@/components/Header'; // Menggunakan alias
import Footer from '@/components/Footer'; // Menggunakan alias
import { useTranslation } from 'react-i18next'; // Import useTranslation hook untuk i18n

// Menggunakan alias path untuk semua halaman, dan tanpa ekstensi .jsx
import Homepage from '@/pages/Homepage';
import AboutUs from '@/pages/AboutUs';
import HowWeWork from '@/pages/HowWeWork';
import OurProjects from '@/pages/OurProjects';
import ForFarmers from '@/pages/ForFarmers';
import ForCarbonBuyers from '@/pages/ForCarbonBuyers';
// import Marketplace from '@/pages/Marketplace'; // Dihapus
import NewsEducation from '@/pages/NewsEducation';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsConditions from '@/pages/TermsConditions';
import Disclaimer from '@/pages/Disclaimer';
import Login from '@/pages/Login';
import AdminDashboard from '@/pages/AdminDashboard';
import FarmerDashboard from '@/pages/FarmerDashboard';

import './App.css';

// Helper component to conditionally render Header and Footer
const Layout = () => {
  const location = useLocation();
  const { i18n } = useTranslation(); // Dapatkan instance i18n untuk bahasa aktif

  // Path yang harus menyembunyikan Header dan Footer
  // Perhatikan bahwa path dashboard/login tidak memiliki prefix bahasa
  const hideHeaderFooter = [
    '/admin/dashboard',
    '/petani/dashboard',
    '/login'
  ].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className="flex-grow"> {/* Tambahkan flex-grow agar konten mengisi ruang */}
        <Routes>
          {/* Redirect dari root ke bahasa default (misal: /id/) */}
          <Route path="/" element={<Navigate to={`/${i18n.language}/`} replace />} />

          {/* Rute untuk halaman berbahasa */}
          {/* Pastikan semua rute memiliki prefix bahasa /:lang/ */}
          <Route path="/:lang/" element={<Homepage />} />
          <Route path="/:lang/tentang-kami" element={<AboutUs />} />
          <Route path="/:lang/bagaimana-kami-bekerja" element={<HowWeWork />} />
          <Route path="/:lang/proyek-kami" element={<OurProjects />} />
          <Route path="/:lang/untuk-petani" element={<ForFarmers />} />
          <Route path="/:lang/untuk-pembeli-karbon" element={<ForCarbonBuyers />} />
          {/* <Route path="/:lang/marketplace" element={<Marketplace />} /> // Dihapus */}
          <Route path="/:lang/berita-edukasi" element={<NewsEducation />} />
          <Route path="/:lang/kontak" element={<Contact />} />
          <Route path="/:lang/kebijakan-privasi" element={<PrivacyPolicy />} />
          <Route path="/:lang/syarat-ketentuan" element={<TermsConditions />} />
          <Route path="/:lang/disclaimer" element={<Disclaimer />} />

          {/* Rute Dashboard dan Login (tanpa prefix bahasa, karena ini adalah halaman fungsional) */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/petani/dashboard" element={<FarmerDashboard />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  // Pastikan i18n sudah diinisialisasi sebelum digunakan di sini
  // Ini harus diimpor di src/index.js atau src/main.jsx
  // import './i18n'; // Sudah diimpor di index.js

  return (
    <Router>
      {/* Tambahkan `flex` dan `flex-col` pada div utama agar Layout dapat mengatur tata letak dengan benar */}
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
