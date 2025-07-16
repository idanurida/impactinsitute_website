import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Leaf } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select' // Import Select components

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('id') // State untuk bahasa aktif
  const location = useLocation()

  const navigationItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/tentang-kami' },
    { name: 'Bagaimana Kami Bekerja', path: '/bagaimana-kami-bekerja' },
    { name: 'Proyek Kami', path: '/proyek-kami' },
    { name: 'Untuk Petani', path: '/untuk-petani' },
    { name: 'Untuk Pembeli Karbon', path: '/untuk-pembeli-karbon' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Berita & Edukasi', path: '/berita-edukasi' },
    { name: 'Kontak', path: '/kontak' },
  ]

  const isActive = (path) => location.pathname === path

  // Fungsi untuk menangani perubahan bahasa
  const handleLanguageChange = (lang) => {
    setCurrentLang(lang)
    // Di sini Anda akan menambahkan logika untuk mengganti bahasa di seluruh aplikasi.
    // Ini mungkin melibatkan penggunaan context API atau pustaka i18n seperti react-i18next.
    console.log(`Bahasa diubah ke: ${lang}`)
  }

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
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                // Mengarahkan ke hero section di setiap halaman
                to={`${item.path}#hero`}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  isActive(item.path)
                    ? 'text-green-600 border-b-2 border-green-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Language Selector for Desktop */}
            <Select value={currentLang} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[80px] h-8">
                <SelectValue placeholder="Lang" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-lg">
                <SelectItem value="id">ID</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectContent>
            </Select>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
              {/* Mengarahkan langsung ke section form pendaftaran lahan */}
              <Link to="/untuk-petani#daftar-lahan">Daftarkan Lahan</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2"> {/* Added flex for spacing */}
            {/* Language Selector for Mobile */}
            <Select value={currentLang} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[70px] h-8">
                <SelectValue placeholder="Lang" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-lg">
                <SelectItem value="id">ID</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectContent>
            </Select>
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
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  // Mengarahkan ke hero section di setiap halaman
                  to={`${item.path}#hero`}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-green-600 hover:bg-green-50 rounded-md ${
                    isActive(item.path)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
                  {/* Mengarahkan langsung ke section form pendaftaran lahan */}
                  <Link to="/untuk-petani#daftar-lahan" onClick={() => setIsMenuOpen(false)}>
                    Daftarkan Lahan Anda
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
