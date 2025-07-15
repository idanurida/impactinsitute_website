import { Link } from 'react-router-dom'
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Impact Institute</span>
            </div>
            <p className="text-gray-300 text-sm">
              Mendorong perubahan positif di sektor pertanian, perkebunan, dan kehutanan di Indonesia melalui solusi iklim berkelanjutan.
            </p>
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
            <h3 className="text-lg font-semibold">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/tentang-kami" className="text-gray-300 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/bagaimana-kami-bekerja" className="text-gray-300 hover:text-white transition-colors">Bagaimana Kami Bekerja</Link></li>
              <li><Link to="/proyek-kami" className="text-gray-300 hover:text-white transition-colors">Proyek Kami</Link></li>
              <li><Link to="/marketplace" className="text-gray-300 hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link to="/berita-edukasi" className="text-gray-300 hover:text-white transition-colors">Berita & Edukasi</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/untuk-petani" className="text-gray-300 hover:text-white transition-colors">Untuk Petani</Link></li>
              <li><Link to="/untuk-pembeli-karbon" className="text-gray-300 hover:text-white transition-colors">Untuk Pembeli Karbon</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Verifikasi Karbon</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Monitoring & Pelaporan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pelatihan Berkelanjutan</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontak</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Suite 202, Bintaro Center<br />
                  Jl. Deplu Raya, Bintaro<br />
                  Jakarta Selatan
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">+62 812-1826-9298</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">info@impactinstitute.asia</span>
              </div>
            </div>
            <div className="text-sm text-gray-300">
              <p className="font-medium">Jam Operasional:</p>
              <p>Senin - Jumat: 09:00 - 17:00 WIB</p>
              <p>Sabtu: 09:00 - 14:00 WIB</p>
              <p>Minggu: Tutup</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Impact Institute. Semua hak dilindungi.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/kebijakan-privasi" className="text-gray-400 hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="/syarat-ketentuan" className="text-gray-400 hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
