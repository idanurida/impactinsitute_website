import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Mail, Phone, MapPin } from 'lucide-react'

const PrivacyPolicy = () => {
  const [language, setLanguage] = useState('id')

  const content = {
    id: {
      title: "Kebijakan Privasi",
      subtitle: "Impact Institute berkomitmen melindungi privasi dan data pribadi Anda",
      lastUpdated: "Terakhir diperbarui: 15 Juli 2025",
      sections: [
        {
          title: "1. Informasi yang Kami Kumpulkan",
          content: `Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, termasuk:

• Informasi pribadi seperti nama, alamat email, nomor telepon, dan alamat
• Informasi lahan pertanian termasuk lokasi, luas, dan jenis tanaman
• Informasi keuangan seperti detail rekening bank untuk pembayaran
• Informasi komunikasi ketika Anda menghubungi kami
• Data teknis dari penggunaan website kami melalui cookies dan teknologi serupa

Kami juga dapat mengumpulkan informasi dari sumber publik dan pihak ketiga yang sah untuk verifikasi dan validasi data.`
        },
        {
          title: "2. Bagaimana Kami Menggunakan Informasi Anda",
          content: `Kami menggunakan informasi yang dikumpulkan untuk:

• Menyediakan layanan perdagangan karbon dan platform marketplace
• Memverifikasi kelayakan lahan dan proyek karbon
• Memproses pembayaran dan transaksi
• Berkomunikasi dengan Anda tentang layanan kami
• Mematuhi persyaratan hukum dan regulasi
• Meningkatkan layanan dan pengalaman pengguna
• Melakukan analisis dan riset untuk pengembangan produk
• Mencegah penipuan dan memastikan keamanan platform`
        },
        {
          title: "3. Pembagian Informasi",
          content: `Kami dapat membagikan informasi Anda dalam situasi berikut:

• Dengan mitra verifikasi dan sertifikasi pihak ketiga
• Dengan pembeli karbon untuk keperluan due diligence proyek
• Dengan penyedia layanan teknologi dan pembayaran
• Dengan otoritas pemerintah jika diwajibkan oleh hukum
• Dengan persetujuan eksplisit dari Anda
• Dalam bentuk data agregat dan anonim untuk riset

Kami tidak akan menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga untuk tujuan pemasaran.`
        },
        {
          title: "4. Keamanan Data",
          content: `Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda:

• Enkripsi data saat transmisi dan penyimpanan
• Kontrol akses yang ketat dan autentikasi multi-faktor
• Audit keamanan berkala dan pemantauan sistem
• Pelatihan keamanan untuk semua karyawan
• Backup data reguler dan rencana pemulihan bencana

Meskipun kami mengambil langkah-langkah yang wajar untuk melindungi informasi Anda, tidak ada sistem yang 100% aman.`
        },
        {
          title: "5. Hak Anda",
          content: `Anda memiliki hak untuk:

• Mengakses informasi pribadi yang kami miliki tentang Anda
• Meminta koreksi atau pembaruan informasi yang tidak akurat
• Meminta penghapusan informasi pribadi dalam kondisi tertentu
• Membatasi pemrosesan informasi Anda
• Meminta portabilitas data
• Menarik persetujuan kapan saja
• Mengajukan keluhan kepada otoritas perlindungan data

Untuk menggunakan hak-hak ini, silakan hubungi kami melalui informasi kontak di bawah.`
        },
        {
          title: "6. Cookies dan Teknologi Pelacakan",
          content: `Website kami menggunakan cookies dan teknologi serupa untuk:

• Mengingat preferensi dan pengaturan Anda
• Menganalisis penggunaan website dan kinerja
• Menyediakan fitur media sosial
• Menampilkan konten yang relevan

Anda dapat mengontrol penggunaan cookies melalui pengaturan browser Anda. Namun, menonaktifkan cookies dapat mempengaruhi fungsionalitas website.`
        },
        {
          title: "7. Penyimpanan Data",
          content: `Kami menyimpan informasi pribadi Anda selama diperlukan untuk:

• Menyediakan layanan yang Anda minta
• Mematuhi kewajiban hukum dan regulasi
• Menyelesaikan sengketa dan menegakkan perjanjian
• Tujuan bisnis yang sah lainnya

Data akan dihapus atau dianonimkan ketika tidak lagi diperlukan, kecuali jika diwajibkan oleh hukum untuk disimpan lebih lama.`
        },
        {
          title: "8. Transfer Data Internasional",
          content: `Informasi Anda dapat ditransfer dan diproses di negara lain untuk keperluan:

• Verifikasi dan sertifikasi internasional
• Layanan cloud computing dan penyimpanan data
• Dukungan teknis dan pemeliharaan sistem

Kami memastikan bahwa transfer tersebut dilakukan sesuai dengan hukum yang berlaku dan dengan perlindungan yang memadai.`
        },
        {
          title: "9. Perubahan Kebijakan",
          content: `Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan material akan diberitahukan melalui:

• Email kepada pengguna terdaftar
• Pemberitahuan di website kami
• Komunikasi langsung untuk perubahan signifikan

Penggunaan berkelanjutan layanan kami setelah perubahan menunjukkan penerimaan Anda terhadap kebijakan yang diperbarui.`
        },
        {
          title: "10. Kontak Kami",
          content: `Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak-hak Anda, silakan hubungi kami:

Impact Institute
Suite 202, Bintaro Business Center
Jl. Deplu Raya, Bintaro, Jakarta Selatan

Email: info@impactinstitute.asia
Telepon/WhatsApp: +62 812-1826-9298
Website: impactinstitute.asia

Kami akan merespons permintaan Anda dalam waktu 30 hari kerja.`
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      subtitle: "Impact Institute is committed to protecting your privacy and personal data",
      lastUpdated: "Last updated: July 15, 2025",
      sections: [
        {
          title: "1. Information We Collect",
          content: `We collect information you provide directly to us, including:

• Personal information such as name, email address, phone number, and address
• Agricultural land information including location, area, and crop types
• Financial information such as bank account details for payments
• Communication information when you contact us
• Technical data from your use of our website through cookies and similar technologies

We may also collect information from public sources and legitimate third parties for verification and validation purposes.`
        },
        {
          title: "2. How We Use Your Information",
          content: `We use the collected information to:

• Provide carbon trading services and marketplace platform
• Verify land eligibility and carbon projects
• Process payments and transactions
• Communicate with you about our services
• Comply with legal and regulatory requirements
• Improve services and user experience
• Conduct analysis and research for product development
• Prevent fraud and ensure platform security`
        },
        {
          title: "3. Information Sharing",
          content: `We may share your information in the following situations:

• With third-party verification and certification partners
• With carbon buyers for project due diligence purposes
• With technology and payment service providers
• With government authorities if required by law
• With your explicit consent
• In aggregated and anonymized form for research

We will not sell or rent your personal information to third parties for marketing purposes.`
        },
        {
          title: "4. Data Security",
          content: `We implement appropriate security measures to protect your personal information:

• Data encryption during transmission and storage
• Strict access controls and multi-factor authentication
• Regular security audits and system monitoring
• Security training for all employees
• Regular data backups and disaster recovery plans

While we take reasonable steps to protect your information, no system is 100% secure.`
        },
        {
          title: "5. Your Rights",
          content: `You have the right to:

• Access personal information we hold about you
• Request correction or update of inaccurate information
• Request deletion of personal information under certain conditions
• Restrict processing of your information
• Request data portability
• Withdraw consent at any time
• File complaints with data protection authorities

To exercise these rights, please contact us using the information below.`
        },
        {
          title: "6. Cookies and Tracking Technologies",
          content: `Our website uses cookies and similar technologies to:

• Remember your preferences and settings
• Analyze website usage and performance
• Provide social media features
• Display relevant content

You can control cookie usage through your browser settings. However, disabling cookies may affect website functionality.`
        },
        {
          title: "7. Data Retention",
          content: `We retain your personal information as long as necessary to:

• Provide the services you requested
• Comply with legal and regulatory obligations
• Resolve disputes and enforce agreements
• Other legitimate business purposes

Data will be deleted or anonymized when no longer needed, unless required by law to be retained longer.`
        },
        {
          title: "8. International Data Transfers",
          content: `Your information may be transferred and processed in other countries for:

• International verification and certification
• Cloud computing and data storage services
• Technical support and system maintenance

We ensure such transfers comply with applicable laws and provide adequate protection.`
        },
        {
          title: "9. Policy Changes",
          content: `We may update this Privacy Policy from time to time. Material changes will be notified through:

• Email to registered users
• Notices on our website
• Direct communication for significant changes

Continued use of our services after changes indicates your acceptance of the updated policy.`
        },
        {
          title: "10. Contact Us",
          content: `If you have questions about this Privacy Policy or want to exercise your rights, please contact us:

Impact Institute
Suite 202, Bintaro Business Center
Jl. Deplu Raya, Bintaro, Jakarta Selatan

Email: info@impactinstitute.asia
Phone/WhatsApp: +62 812-1826-9298
Website: impactinstitute.asia

We will respond to your request within 30 business days.`
        }
      ]
    }
  }

  const currentContent = content[language]

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
              <Shield className="h-10 w-10 text-accent-green" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {currentContent.title}
            </h1>
            <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-4">
              {currentContent.subtitle}
            </p>
            <p className="text-sm text-gray-300">
              {currentContent.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-dark">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <div key={pIndex} className="mb-4">
                        {paragraph.split('\n').map((line, lIndex) => (
                          <div key={lIndex} className="mb-1">
                            {line.startsWith('•') ? (
                              <div className="flex items-start">
                                <span className="text-accent-teal mr-2">•</span>
                                <span className="text-gray-600">{line.substring(2)}</span>
                              </div>
                            ) : (
                              <p className="text-gray-600 leading-relaxed">
                                {line}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary-dark text-center">
                {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <MapPin className="h-8 w-8 text-accent-teal mb-3" />
                  <h4 className="font-semibold text-primary-dark mb-2">
                    {language === 'id' ? 'Alamat' : 'Address'}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Suite 202, Bintaro Business Center<br />
                    Jl. Deplu Raya, Bintaro<br />
                    Jakarta Selatan
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="h-8 w-8 text-accent-teal mb-3" />
                  <h4 className="font-semibold text-primary-dark mb-2">
                    {language === 'id' ? 'Telepon' : 'Phone'}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    +62 812-1826-9298
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="h-8 w-8 text-accent-teal mb-3" />
                  <h4 className="font-semibold text-primary-dark mb-2">Email</h4>
                  <p className="text-gray-600 text-sm">
                    info@impactinstitute.asia
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy

