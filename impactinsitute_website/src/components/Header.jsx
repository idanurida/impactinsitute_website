import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Leaf, Globe } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('id')
  const location = useLocation()

  // Get language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'id'
    setLanguage(savedLanguage)
  }, [])

  // Save language to localStorage when changed
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLanguage }))
  }

  const navigationItems = {
    id: [
      { name: 'Beranda', path: '/' },
      { name: 'Tentang Kami', path: '/tentang-kami' },
      { name: 'Bagaimana Kami Bekerja', path: '/bagaimana-kami-bekerja' },
      { name: 'Proyek Kami', path: '/proyek-kami' },
      { name: 'Untuk Petani', path: '/untuk-petani' },
      { name: 'Untuk Pembeli Karbon', path: '/untuk-pembeli-karbon' },
      { name: 'Berita & Edukasi', path: '/berita-edukasi' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Kontak', path: '/kontak' },
    ],
    en: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/tentang-kami' },
      { name: 'How We Work', path: '/bagaimana-kami-bekerja' },
      { name: 'Our Projects', path: '/proyek-kami' },
      { name: 'For Farmers', path: '/untuk-petani' },
      { name: 'For Carbon Buyers', path: '/untuk-pembeli-karbon' },
      { name: 'News & Education', path: '/berita-edukasi' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact', path: '/kontak' },
    ]
  }

  const ctaText = {
    id: 'Daftarkan Lahan',
    en: 'Register Land'
  }

  const currentNavItems = navigationItems[language]
  const currentCTAText = ctaText[language]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-accent-teal text-white p-2 rounded-lg">
              <Leaf className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-primary-dark">Impact Institute</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {currentNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-accent-teal ${
                  isActive(item.path)
                    ? 'text-accent-teal border-b-2 border-accent-teal pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => handleLanguageChange('id')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'id' 
                    ? 'bg-accent-teal text-white' 
                    : 'text-gray-600 hover:text-accent-teal'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-accent-teal text-white' 
                    : 'text-gray-600 hover:text-accent-teal'
                }`}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <Button asChild className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90 font-semibold">
              <Link to="/untuk-petani#registration-form">{currentCTAText}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {/* Mobile Language Toggle */}
              <div className="px-3 py-2">
                <div className="flex items-center space-x-2 mb-3">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {language === 'id' ? 'Bahasa' : 'Language'}:
                  </span>
                  <div className="flex items-center space-x-1 bg-gray-100 rounded p-1">
                    <button
                      onClick={() => handleLanguageChange('id')}
                      className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                        language === 'id' 
                          ? 'bg-accent-teal text-white' 
                          : 'text-gray-600'
                      }`}
                    >
                      ID
                    </button>
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                        language === 'en' 
                          ? 'bg-accent-teal text-white' 
                          : 'text-gray-600'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Items */}
              {currentNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-accent-teal hover:bg-accent-teal/10 rounded-md ${
                    isActive(item.path)
                      ? 'text-accent-teal bg-accent-teal/10'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-accent-orange text-primary-dark hover:bg-accent-orange/90 font-semibold">
                  <Link to="/untuk-petani#registration-form" onClick={() => setIsMenuOpen(false)}>
                    {currentCTAText}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

