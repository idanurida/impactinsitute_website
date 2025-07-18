import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import { useState } from 'react'
=======
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/pages/Homepage'
import AboutUs from './components/pages/AboutUs'
import HowWeWork from './components/pages/HowWeWork'
import OurProjects from './components/pages/OurProjects'
import ForFarmers from './components/pages/ForFarmers'
import ForCarbonBuyers from './components/pages/ForCarbonBuyers'
<<<<<<< HEAD
import NewsEducation from './components/pages/NewsEducation'
import FAQ from './components/pages/FAQ'
import Contact from './components/pages/Contact'
=======
import Contact from './components/pages/Contact'
import FAQ from './components/pages/FAQ'
import NewsEducation from './components/pages/NewsEducation'
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import TermsConditions from './components/pages/TermsConditions'
import Disclaimer from './components/pages/Disclaimer'
import './App.css'

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="min-h-screen bg-background text-foreground">
=======
      <div className="App">
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/tentang-kami" element={<AboutUs />} />
            <Route path="/bagaimana-kami-bekerja" element={<HowWeWork />} />
            <Route path="/proyek-kami" element={<OurProjects />} />
            <Route path="/untuk-petani" element={<ForFarmers />} />
            <Route path="/untuk-pembeli-karbon" element={<ForCarbonBuyers />} />
            <Route path="/berita-edukasi" element={<NewsEducation />} />
<<<<<<< HEAD
            <Route path="/faq" element={<FAQ />} />
            <Route path="/kontak" element={<Contact />} />
            <Route path="/kebijakan-privasi" element={<PrivacyPolicy />} />
            <Route path="/syarat-ketentuan" element={<TermsConditions />} />
=======
            <Route path="/kontak" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/news-education" element={<NewsEducation />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

