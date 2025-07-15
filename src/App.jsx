// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Header'; // Menggunakan alias
import Footer from '@/components/Footer'; // Menggunakan alias

// Menggunakan alias path untuk semua halaman, dan tanpa ekstensi .jsx
import Homepage from '@/pages/Homepage';
import AboutUs from '@/pages/AboutUs';
import HowWeWork from '@/pages/HowWeWork';
import OurProjects from '@/pages/OurProjects';
import ForFarmers from '@/pages/ForFarmers';
import ForCarbonBuyers from '@/pages/ForCarbonBuyers';
import Marketplace from '@/pages/Marketplace';
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
  // Pastikan path dashboard sesuai dengan yang ada di router
  const hideHeaderFooter = ['/admin/dashboard', '/petani/dashboard', '/login'].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className="flex-grow"> {/* Tambahkan flex-grow agar konten mengisi ruang */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tentang-kami" element={<AboutUs />} />
          <Route path="/bagaimana-kami-bekerja" element={<HowWeWork />} />
          <Route path="/proyek-kami" element={<OurProjects />} />
          <Route path="/untuk-petani" element={<ForFarmers />} />
          <Route path="/untuk-pembeli-karbon" element={<ForCarbonBuyers />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/berita-edukasi" element={<NewsEducation />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/kebijakan-privasi" element={<PrivacyPolicy />} />
          <Route path="/syarat-ketentuan" element={<TermsConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/login" element={<Login />} />
          {/* Dashboard routes are protected in a real app */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/petani/dashboard" element={<FarmerDashboard />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
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