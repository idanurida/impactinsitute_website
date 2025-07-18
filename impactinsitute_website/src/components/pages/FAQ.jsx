import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Search,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react'

const FAQ = () => {
  const [language, setLanguage] = useState('id')
  const [openItems, setOpenItems] = useState(new Set())
  const [searchTerm, setSearchTerm] = useState('')

  const content = {
    id: {
      title: "Pertanyaan yang Sering Diajukan (FAQ)",
      subtitle: "Temukan jawaban untuk pertanyaan umum tentang Impact Institute dan layanan kami",
      searchPlaceholder: "Cari pertanyaan...",
      categories: {
        general: "Umum",
        farmers: "Untuk Petani",
        buyers: "Untuk Pembeli Karbon",
        technical: "Teknis",
        financial: "Keuangan"
      },
      faqs: [
        {
          id: 1,
          category: "general",
          question: "Apa itu Impact Institute?",
          answer: "Impact Institute adalah organisasi yang menghubungkan petani Indonesia dengan pasar karbon global melalui praktik pertanian berkelanjutan. Kami membantu petani mendapatkan penghasilan tambahan dari serapan karbon lahan mereka sambil berkontribusi pada solusi perubahan iklim."
        },
        {
          id: 2,
          category: "general",
          question: "Bagaimana cara kerja perdagangan karbon?",
          answer: "Perdagangan karbon adalah sistem di mana aktivitas yang menyerap atau mengurangi emisi CO2 dapat dijual sebagai kredit karbon. Petani yang menerapkan praktik berkelanjutan dapat menghasilkan kredit karbon yang kemudian dibeli oleh perusahaan untuk mengimbangi emisi mereka."
        },
        {
          id: 3,
          category: "farmers",
          question: "Siapa yang bisa bergabung sebagai petani mitra?",
          answer: "Semua petani di Indonesia yang memiliki lahan minimal 0.5 hektar dan bersedia menerapkan praktik pertanian berkelanjutan dapat bergabung. Kami menerima berbagai jenis lahan: sawah, ladang, kebun, hutan, dan agroforestri."
        },
        {
          id: 4,
          category: "farmers",
          question: "Berapa penghasilan yang bisa didapat petani?",
          answer: "Penghasilan bervariasi tergantung luas lahan, jenis tutupan lahan, dan praktik yang diterapkan. Rata-rata petani bisa mendapat Rp 500.000 - Rp 2.000.000 per hektar per tahun dari penjualan kredit karbon, di atas penghasilan normal dari hasil panen."
        },
        {
          id: 5,
          category: "farmers",
          question: "Apakah ada biaya untuk bergabung?",
          answer: "Tidak ada biaya pendaftaran atau biaya di muka untuk petani. Impact Institute membiayai semua proses verifikasi, sertifikasi, dan monitoring. Kami mengambil komisi hanya setelah kredit karbon berhasil dijual."
        },
        {
          id: 6,
          category: "farmers",
          question: "Berapa lama proses dari pendaftaran hingga mendapat penghasilan?",
          answer: "Proses lengkap biasanya memakan waktu 6-12 bulan, meliputi: verifikasi lahan (1-2 bulan), perencanaan proyek (2-3 bulan), implementasi (3-6 bulan), dan monitoring hingga penjualan kredit karbon pertama."
        },
        {
          id: 7,
          category: "buyers",
          question: "Jenis perusahaan apa yang bisa membeli kredit karbon?",
          answer: "Semua jenis perusahaan dapat membeli kredit karbon, terutama yang memiliki komitmen net-zero emissions atau kebutuhan compliance ESG. Ini termasuk perusahaan manufaktur, teknologi, keuangan, retail, dan organisasi pemerintah."
        },
        {
          id: 8,
          category: "buyers",
          question: "Bagaimana kualitas kredit karbon dijamin?",
          answer: "Semua kredit karbon kami tersertifikasi oleh standar internasional seperti VCS (Verified Carbon Standard) dan Gold Standard. Setiap proyek melalui verifikasi pihak ketiga independen dan monitoring berkelanjutan dengan teknologi satelit."
        },
        {
          id: 9,
          category: "buyers",
          question: "Berapa harga kredit karbon per ton?",
          answer: "Harga bervariasi berdasarkan jenis proyek, lokasi, dan standar sertifikasi, berkisar antara $8-25 per ton CO2e. Kami menyediakan portofolio yang beragam untuk memenuhi berbagai kebutuhan dan budget perusahaan."
        },
        {
          id: 10,
          category: "technical",
          question: "Bagaimana cara mengukur serapan karbon?",
          answer: "Kami menggunakan kombinasi metodologi ilmiah: pengukuran lapangan, analisis satelit, IoT sensors, dan model perhitungan yang telah divalidasi. Semua data diverifikasi oleh auditor independen sesuai standar internasional."
        },
        {
          id: 11,
          category: "technical",
          question: "Teknologi apa yang digunakan untuk monitoring?",
          answer: "Kami menggunakan teknologi terdepan: citra satelit resolusi tinggi, IoT sensors untuk monitoring tanah dan cuaca, drone untuk survei detail, dan platform digital untuk tracking real-time semua data proyek."
        },
        {
          id: 12,
          category: "financial",
          question: "Bagaimana sistem pembayaran untuk petani?",
          answer: "Pembayaran dilakukan secara berkala setelah verifikasi serapan karbon. Petani menerima pembayaran melalui transfer bank setiap 6 bulan sekali, dengan transparansi penuh mengenai perhitungan dan harga jual kredit karbon."
        },
        {
          id: 13,
          category: "financial",
          question: "Apakah ada jaminan pembelian kredit karbon?",
          answer: "Ya, kami memiliki jaringan pembeli tetap dan kontrak jangka panjang dengan berbagai perusahaan. Namun, harga dapat berfluktuasi sesuai kondisi pasar karbon global."
        },
        {
          id: 14,
          category: "general",
          question: "Bagaimana dampak sosial dan lingkungan dari proyek ini?",
          answer: "Proyek kami memberikan dampak positif berlapis: peningkatan pendapatan petani, konservasi lingkungan, peningkatan kualitas tanah, pengurangan emisi, dan pemberdayaan masyarakat lokal melalui pelatihan dan teknologi."
        },
        {
          id: 15,
          category: "general",
          question: "Bagaimana cara menghubungi Impact Institute?",
          answer: "Anda dapat menghubungi kami melalui: WhatsApp +62 812-1826-9298, email info@impactinstitute.asia, atau kunjungi kantor kami di Suite 202, Bintaro Business Center, Jl. Deplu Raya, Bintaro, Jakarta Selatan."
        }
      ],
      contactSection: {
        title: "Masih Ada Pertanyaan?",
        subtitle: "Tim kami siap membantu Anda",
        description: "Jika Anda tidak menemukan jawaban yang dicari, jangan ragu untuk menghubungi tim ahli kami. Kami akan dengan senang hati membantu menjawab pertanyaan spesifik Anda."
      }
    },
    en: {
      title: "Frequently Asked Questions (FAQ)",
      subtitle: "Find answers to common questions about Impact Institute and our services",
      searchPlaceholder: "Search questions...",
      categories: {
        general: "General",
        farmers: "For Farmers",
        buyers: "For Carbon Buyers",
        technical: "Technical",
        financial: "Financial"
      },
      faqs: [
        {
          id: 1,
          category: "general",
          question: "What is Impact Institute?",
          answer: "Impact Institute is an organization that connects Indonesian farmers with global carbon markets through sustainable farming practices. We help farmers earn additional income from their land's carbon sequestration while contributing to climate change solutions."
        },
        {
          id: 2,
          category: "general",
          question: "How does carbon trading work?",
          answer: "Carbon trading is a system where activities that absorb or reduce CO2 emissions can be sold as carbon credits. Farmers who implement sustainable practices can generate carbon credits that are then purchased by companies to offset their emissions."
        },
        {
          id: 3,
          category: "farmers",
          question: "Who can join as a partner farmer?",
          answer: "All farmers in Indonesia who own at least 0.5 hectares of land and are willing to implement sustainable farming practices can join. We accept various types of land: rice fields, farms, gardens, forests, and agroforestry."
        },
        {
          id: 4,
          category: "farmers",
          question: "How much income can farmers earn?",
          answer: "Income varies depending on land area, land cover type, and practices implemented. On average, farmers can earn Rp 500,000 - Rp 2,000,000 per hectare per year from carbon credit sales, in addition to normal income from harvest."
        },
        {
          id: 5,
          category: "farmers",
          question: "Are there any fees to join?",
          answer: "There are no registration fees or upfront costs for farmers. Impact Institute funds all verification, certification, and monitoring processes. We take a commission only after carbon credits are successfully sold."
        },
        {
          id: 6,
          category: "farmers",
          question: "How long is the process from registration to earning income?",
          answer: "The complete process usually takes 6-12 months, including: land verification (1-2 months), project planning (2-3 months), implementation (3-6 months), and monitoring until first carbon credit sale."
        },
        {
          id: 7,
          category: "buyers",
          question: "What types of companies can buy carbon credits?",
          answer: "All types of companies can buy carbon credits, especially those with net-zero emissions commitments or ESG compliance needs. This includes manufacturing, technology, finance, retail companies, and government organizations."
        },
        {
          id: 8,
          category: "buyers",
          question: "How is carbon credit quality guaranteed?",
          answer: "All our carbon credits are certified by international standards such as VCS (Verified Carbon Standard) and Gold Standard. Each project undergoes independent third-party verification and continuous monitoring with satellite technology."
        },
        {
          id: 9,
          category: "buyers",
          question: "What is the price of carbon credits per ton?",
          answer: "Prices vary based on project type, location, and certification standards, ranging from $8-25 per ton CO2e. We provide a diverse portfolio to meet various company needs and budgets."
        },
        {
          id: 10,
          category: "technical",
          question: "How is carbon sequestration measured?",
          answer: "We use a combination of scientific methodologies: field measurements, satellite analysis, IoT sensors, and validated calculation models. All data is verified by independent auditors according to international standards."
        },
        {
          id: 11,
          category: "technical",
          question: "What technology is used for monitoring?",
          answer: "We use cutting-edge technology: high-resolution satellite imagery, IoT sensors for soil and weather monitoring, drones for detailed surveys, and digital platforms for real-time tracking of all project data."
        },
        {
          id: 12,
          category: "financial",
          question: "How does the payment system work for farmers?",
          answer: "Payments are made periodically after carbon sequestration verification. Farmers receive payments via bank transfer every 6 months, with full transparency regarding calculations and carbon credit selling prices."
        },
        {
          id: 13,
          category: "financial",
          question: "Is there a guarantee for carbon credit purchases?",
          answer: "Yes, we have a network of regular buyers and long-term contracts with various companies. However, prices may fluctuate according to global carbon market conditions."
        },
        {
          id: 14,
          category: "general",
          question: "What are the social and environmental impacts of these projects?",
          answer: "Our projects provide multi-layered positive impacts: increased farmer income, environmental conservation, improved soil quality, emission reduction, and local community empowerment through training and technology."
        },
        {
          id: 15,
          category: "general",
          question: "How to contact Impact Institute?",
          answer: "You can contact us via: WhatsApp +62 812-1826-9298, email info@impactinstitute.asia, or visit our office at Suite 202, Bintaro Business Center, Jl. Deplu Raya, Bintaro, Jakarta Selatan."
        }
      ],
      contactSection: {
        title: "Still Have Questions?",
        subtitle: "Our team is ready to help you",
        description: "If you can't find the answer you're looking for, don't hesitate to contact our expert team. We'll be happy to help answer your specific questions."
      }
    }
  }

  const currentContent = content[language]

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const filteredFAQs = currentContent.faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const faqsByCategory = Object.keys(currentContent.categories).reduce((acc, category) => {
    acc[category] = filteredFAQs.filter(faq => faq.category === category)
    return acc
  }, {})

  return (
    <div className="min-h-screen">
      {/* Language Toggle */}
      <div className="fixed top-20 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2">
          <button
            onClick={() => setLanguage('id')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === 'id' 
                ? 'bg-accent-teal text-white' 
                : 'text-gray-600 hover:text-accent-teal'
            }`}
          >
            ID
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === 'en' 
                ? 'bg-accent-teal text-white' 
                : 'text-gray-600 hover:text-accent-teal'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-10 w-10 text-accent-green" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {currentContent.title}
            </h1>
            <p className="text-xl text-gray-100 max-w-4xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={currentContent.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-teal focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(currentContent.categories).map(([categoryKey, categoryLabel]) => {
            const categoryFAQs = faqsByCategory[categoryKey]
            if (categoryFAQs.length === 0) return null

            return (
              <div key={categoryKey} className="mb-12">
                <h2 className="text-2xl font-bold text-primary-dark mb-6 flex items-center">
                  <div className="w-8 h-8 bg-accent-teal rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">
                      {categoryFAQs.length}
                    </span>
                  </div>
                  {categoryLabel}
                </h2>
                
                <div className="space-y-4">
                  {categoryFAQs.map((faq) => (
                    <Card key={faq.id} className="overflow-hidden">
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-accent-teal focus:ring-inset"
                      >
                        <CardHeader className="hover:bg-gray-50 transition-colors">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg text-primary-dark pr-4">
                              {faq.question}
                            </CardTitle>
                            <div className="flex-shrink-0">
                              {openItems.has(faq.id) ? (
                                <ChevronUp className="h-5 w-5 text-accent-teal" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-accent-teal" />
                              )}
                            </div>
                          </div>
                        </CardHeader>
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openItems.has(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <CardContent className="pt-0 pb-6">
                          <div className="border-t pt-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="h-8 w-8 text-accent-teal" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            {currentContent.contactSection.title}
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            {currentContent.contactSection.subtitle}
          </p>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {currentContent.contactSection.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-teal hover:bg-accent-teal/90">
              <a href="https://wa.me/6281218269298" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp: +62 812-1826-9298
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:info@impactinstitute.asia">
                <Mail className="mr-2 h-5 w-5" />
                info@impactinstitute.asia
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

