import { Link } from 'react-router-dom'
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Footer = () => {
  // const [currentLang, setCurrentLang] = useState('id') // Hapus state ini
  const { t, i18n } = useTranslation(); // Inisialisasi useTranslation

  // Fungsi untuk menangani perubahan bahasa menggunakan i18n.changeLanguage
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    // console.log(`Bahasa diubah ke: ${lang}`); // Debugging, bisa dihapus
  }

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
              {t('company_description')} {/* Menggunakan terjemahan */}
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
            <h3 className="text-lg font-semibold">{t('footer_navigation_title')}</h3> {/* Menggunakan terjemahan */}
            <ul className="space-y-2 text-sm">
              {/* Mengarahkan ke hero section di setiap halaman */}
              <li><Link to="/#hero" className="text-gray-300 hover:text-white transition-colors">{t('home')}</Link></li>
              <li><Link to="/tentang-kami#hero" className="text-gray-300 hover:text-white transition-colors">{t('about_us')}</Link></li>
              <li><Link to="/bagaimana-kami-bekerja#hero" className="text-gray-300 hover:text-white transition-colors">{t('how_we_work')}</Link></li>
              <li><Link to="/proyek-kami#hero" className="text-gray-300 hover:text-white transition-colors">{t('our_projects')}</Link></li>
              {/* <li><Link to="/marketplace#hero" className="text-gray-300 hover:text-white transition-colors">{t('marketplace')}</Link></li> */}
              <li><Link to="/berita-edukasi#hero" className="text-gray-300 hover:text-white transition-colors">{t('news_education')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer_services_title')}</h3> {/* Menggunakan terjemahan */}
            <ul className="space-y-2 text-sm">
              {/* Mengarahkan ke hero section atau bagian spesifik di halaman layanan */}
              <li><Link to="/untuk-petani#hero" className="text-gray-300 hover:text-white transition-colors">{t('for_farmers')}</Link></li>
              <li><Link to="/untuk-pembeli-karbon#hero" className="text-gray-300 hover:text-white transition-colors">{t('for_carbon_buyers')}</Link></li>
              {/* Asumsi bahwa layanan ini dijelaskan di halaman "Bagaimana Kami Bekerja" atau halaman layanan khusus */}
              <li><Link to="/bagaimana-kami-bekerja#verifikasi-karbon" className="text-gray-300 hover:text-white transition-colors">{t('carbon_verification')}</Link></li>
              <li><Link to="/bagaimana-kami-bekerja#monitoring-pelaporan" className="text-gray-300 hover:text-white transition-colors">{t('monitoring_reporting')}</Link></li>
              <li><Link to="/bagaimana-kami-bekerja#pelatihan-berkelanjutan" className="text-gray-300 hover:text-white transition-colors">{t('sustainable_training')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer_contact_title')}</h3> {/* Menggunakan terjemahan */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {t('address_line1')}<br />
                  {t('address_line2')}<br />
                  {t('address_line3')}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">+62 812-1826-9298</span> {/* Nomor telepon bisa juga diterjemahkan jika ada variasi */}
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">info@impactinstitute.asia</span> {/* Email bisa juga diterjemahkan jika ada variasi */}
              </div>
            </div>
            <div className="text-sm text-gray-300">
              <p className="font-medium">{t('operating_hours_title')}:</p> {/* Menggunakan terjemahan */}
              <p>{t('operating_hours_weekday')}</p> {/* Menggunakan terjemahan */}
              <p>{t('operating_hours_saturday')}</p> {/* Menggunakan terjemahan */}
              <p>{t('operating_hours_sunday')}</p> {/* Menggunakan terjemahan */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Impact Institute. {t('all_rights_reserved')}. {/* Menggunakan terjemahan */}
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/kebijakan-privasi" className="text-gray-400 hover:text-white transition-colors">
                {t('privacy_policy')} {/* Menggunakan terjemahan */}
              </Link>
              <Link to="/syarat-ketentuan" className="text-gray-400 hover:text-white transition-colors">
                {t('terms_conditions')} {/* Menggunakan terjemahan */}
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                {t('disclaimer')} {/* Menggunakan terjemahan */}
              </Link>
            </div>
            {/* Language Selector for Footer */}
            {/* Gunakan i18n.language untuk mendapatkan bahasa aktif */}
            <Select value={i18n.language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[80px] h-8 text-gray-300 border-gray-700 bg-gray-800 hover:bg-gray-700">
                <SelectValue placeholder="Lang" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-lg">
                <SelectItem value="id">ID</SelectItem>
                <SelectItem value="en">EN</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer