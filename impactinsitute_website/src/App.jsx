import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/pages/Homepage'
import AboutUs from './components/pages/AboutUs'
import HowWeWork from './components/pages/HowWeWork'
import OurProjects from './components/pages/OurProjects'
import ForFarmers from './components/pages/ForFarmers'
import ForCarbonBuyers from './components/pages/ForCarbonBuyers'
import NewsEducation from './components/pages/NewsEducation'
import FAQ from './components/pages/FAQ'
import Contact from './components/pages/Contact'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
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
            <Route path="/faq" element={<FAQ />} />
            <Route path="/kontak" element={<Contact />} />
            <Route path="/kebijakan-privasi" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

