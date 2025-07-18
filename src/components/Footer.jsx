import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const [language, setLanguage] = useState('id')

  // Listen for language changes
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'id'
    setLanguage(savedLanguage)

    const handleLanguageChange = (event) => {
      setLanguage(event.detail)
    }

    window.addEventListener('languageChange', handleLanguageChange)
    return () => window.removeEventListener('languageChange', handleLanguageChange)
  }, [])

  const content = {
    id: {
<<<<<<< HEAD
      companyDescription: "Yayasan nirlaba yang berkomitmen mendorong perubahan positif di sektor pertanian, perkebunan, dan kehutanan di Indonesia melalui solusi iklim berkelanjutan.",
=======
      companyDescription: "Impact Institute berkomitmen mendorong perubahan positif di sektor pertanian, perkebunan, dan kehutanan di Indonesia melalui solusi iklim berkelanjutan.",
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
      navigation: "Navigasi",
      services: "Layanan",
      contact: "Kontak",
      operatingHours: "Jam Operasional:",
      mondayFriday: "Senin - Jumat: 09:00 - 17:00 WIB",
      saturday: "Sabtu: 09:00 - 14:00 WIB",
      copyright: "© 2025 Impact Institute. Semua hak dilindungi.",
      privacyPolicy: "Kebijakan Privasi",
      termsConditions: "Syarat & Ketentuan",
      disclaimer: "Disclaimer",
      navigationLinks: [
        { name: "Beranda", path: "/" },
        { name: "Tentang Kami", path: "/tentang-kami" },
        { name: "Bagaimana Kami Bekerja", path: "/bagaimana-kami-bekerja" },
        { name: "Proyek Kami", path: "/proyek-kami" },
        { name: "Berita & Edukasi", path: "/berita-edukasi" },
        { name: "FAQ", path: "/faq" }
      ],
      serviceLinks: [
        { name: "Untuk Petani", path: "/untuk-petani" },
        { name: "Untuk Pembeli Karbon", path: "/untuk-pembeli-karbon" },
        { name: "Verifikasi Karbon", path: "#" },
        { name: "Monitoring & Pelaporan", path: "#" },
        { name: "Pelatihan Berkelanjutan", path: "#" }
      ]
    },
    en: {
<<<<<<< HEAD
      companyDescription: "A non-profit foundation committed to driving positive change in Indonesia's agriculture, plantation, and forestry sectors through sustainable climate solutions.",
=======
      companyDescription: "Impact Institute is committed to driving positive change in Indonesia's agriculture, plantation, and forestry sectors through sustainable climate solutions.",
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
      navigation: "Navigation",
      services: "Services",
      contact: "Contact",
      operatingHours: "Operating Hours:",
      mondayFriday: "Monday - Friday: 09:00 - 17:00 WIB",
      saturday: "Saturday: 09:00 - 14:00 WIB",
      copyright: "© 2025 Impact Institute. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions",
      disclaimer: "Disclaimer",
      navigationLinks: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/tentang-kami" },
        { name: "How We Work", path: "/bagaimana-kami-bekerja" },
        { name: "Our Projects", path: "/proyek-kami" },
        { name: "News & Education", path: "/berita-edukasi" },
        { name: "FAQ", path: "/faq" }
      ],
      serviceLinks: [
        { name: "For Farmers", path: "/untuk-petani" },
        { name: "For Carbon Buyers", path: "/untuk-pembeli-karbon" },
        { name: "Carbon Verification", path: "#" },
        { name: "Monitoring & Reporting", path: "#" },
        { name: "Sustainable Training", path: "#" }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-accent-teal p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Impact Institute</span>
            </div>
            <p className="text-gray-300 text-sm">
              {currentContent.companyDescription}
            </p>
            <div className="text-sm text-gray-300">
              <p className="font-medium">Website: impactinstitute.asia</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{currentContent.navigation}</h3>
            <ul className="space-y-2 text-sm">
              {currentContent.navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{currentContent.services}</h3>
            <ul className="space-y-2 text-sm">
              {currentContent.serviceLinks.map((link, index) => (
                <li key={index}>
                  {link.path === "#" ? (
                    <span className="text-gray-300">{link.name}</span>
                  ) : (
                    <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{currentContent.contact}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent-teal mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Suite 202, Bintaro Business Center<br />
                  Jl. Deplu Raya, Bintaro<br />
                  Jakarta Selatan
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-teal flex-shrink-0" />
                <span className="text-gray-300">+62 812-1826-9298</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-accent-teal mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>info@impactinstitute.asia</div>
                  <div>daftarlahan@impactinstitute.asia</div>
                  <div>carbonbuyers@impactinstitute.asia</div>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-300">
              <p className="font-medium">{currentContent.operatingHours}</p>
              <p>{currentContent.mondayFriday}</p>
              <p>{currentContent.saturday}</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              {currentContent.copyright}
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/kebijakan-privasi" className="text-gray-400 hover:text-white transition-colors">
                {currentContent.privacyPolicy}
              </Link>
              <Link to="/syarat-ketentuan" className="text-gray-400 hover:text-white transition-colors">
                {currentContent.termsConditions}
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                {currentContent.disclaimer}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

