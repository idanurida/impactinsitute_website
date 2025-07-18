<<<<<<< HEAD
const TermsConditions = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">TermsConditions</h1>
          <p className="text-xl text-gray-600">Halaman ini sedang dalam pengembangan.</p>
        </div>
      </div>
=======
import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Mail, Phone, MapPin } from 'lucide-react'

const TermsConditions = () => {
  const [language, setLanguage] = useState('id')

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
      title: "Syarat & Ketentuan",
      subtitle: "Ketentuan penggunaan platform dan layanan Impact Institute",
      lastUpdated: "Terakhir diperbarui: 15 Juli 2025",
      sections: [
        {
          title: "1. Penerimaan Syarat",
          content: `Dengan mengakses dan menggunakan website Impact Institute (impactinstitute.asia) dan layanan kami, Anda menyetujui untuk terikat oleh Syarat & Ketentuan ini. Jika Anda tidak setuju dengan ketentuan ini, mohon untuk tidak menggunakan layanan kami.

Syarat & Ketentuan ini berlaku untuk semua pengguna platform, termasuk petani, pembeli karbon, mitra, dan pengunjung website. Kami berhak mengubah ketentuan ini kapan saja dengan pemberitahuan yang wajar.

Penggunaan berkelanjutan layanan kami setelah perubahan ketentuan menunjukkan penerimaan Anda terhadap syarat yang diperbarui.`
        },
        {
          title: "2. Definisi",
          content: `Dalam Syarat & Ketentuan ini:

• "Impact Institute" atau "Kami" merujuk pada platform dan organisasi Impact Institute
• "Pengguna" atau "Anda" merujuk pada individu atau entitas yang menggunakan layanan kami
• "Petani" merujuk pada pemilik atau pengelola lahan pertanian yang mendaftar di platform
• "Pembeli Karbon" merujuk pada perusahaan atau organisasi yang membeli kredit karbon
• "Platform" merujuk pada website dan sistem teknologi Impact Institute
• "Layanan" merujuk pada semua layanan yang disediakan oleh Impact Institute
• "Proyek Karbon" merujuk pada proyek pertanian berkelanjutan yang menghasilkan kredit karbon`
        },
        {
          title: "3. Layanan yang Disediakan",
          content: `Impact Institute menyediakan platform yang menghubungkan petani dengan praktik pertanian berkelanjutan dan memfasilitasi perdagangan kredit karbon. Layanan kami meliputi:

• Pendaftaran dan verifikasi lahan pertanian
• Konsultasi dan pelatihan pertanian berkelanjutan
• Pengembangan dan implementasi proyek karbon
• Monitoring dan pelaporan proyek
• Sertifikasi dan verifikasi kredit karbon
• Platform perdagangan kredit karbon
• Dukungan teknis dan pendampingan

Kami berhak mengubah, menghentikan, atau menambah layanan kapan saja dengan pemberitahuan yang wajar.`
        },
        {
          title: "4. Pendaftaran dan Akun",
          content: `Untuk menggunakan layanan tertentu, Anda harus membuat akun dengan memberikan informasi yang akurat dan lengkap. Anda bertanggung jawab untuk:

• Menjaga kerahasiaan informasi akun Anda
• Semua aktivitas yang terjadi di bawah akun Anda
• Memperbarui informasi akun secara berkala
• Melaporkan penggunaan tidak sah dari akun Anda

Kami berhak menangguhkan atau menghentikan akun yang melanggar ketentuan ini atau digunakan untuk aktivitas ilegal atau merugikan.`
        },
        {
          title: "5. Kewajiban Petani",
          content: `Petani yang mendaftar di platform kami wajib:

• Memberikan informasi lahan yang akurat dan dapat diverifikasi
• Memiliki hak legal atas lahan yang didaftarkan
• Mengikuti praktik pertanian berkelanjutan yang disepakati
• Memberikan akses untuk monitoring dan verifikasi
• Melaporkan perubahan kondisi lahan atau praktik pertanian
• Mematuhi standar sertifikasi internasional yang berlaku
• Tidak terlibat dalam aktivitas yang merusak lingkungan

Pelanggaran terhadap kewajiban ini dapat mengakibatkan penghentian partisipasi dalam program.`
        },
        {
          title: "6. Kewajiban Pembeli Karbon",
          content: `Pembeli karbon yang menggunakan platform kami wajib:

• Memberikan informasi perusahaan yang akurat dan dapat diverifikasi
• Melakukan due diligence terhadap proyek karbon yang dibeli
• Membayar kredit karbon sesuai dengan kesepakatan
• Menggunakan kredit karbon sesuai dengan standar internasional
• Melaporkan penggunaan kredit karbon untuk tujuan offset
• Tidak melakukan klaim ganda (double claiming) atas kredit karbon

Pelanggaran dapat mengakibatkan penangguhan akses ke platform dan tindakan hukum.`
        },
        {
          title: "7. Pembayaran dan Biaya",
          content: `Ketentuan pembayaran untuk layanan Impact Institute:

• Biaya layanan akan diinformasikan secara transparan sebelum transaksi
• Pembayaran dapat dilakukan melalui metode yang tersedia di platform
• Semua pembayaran dalam mata uang Rupiah kecuali disepakati lain
• Biaya transaksi dan pajak menjadi tanggung jawab masing-masing pihak
• Pengembalian dana mengikuti kebijakan yang berlaku
• Keterlambatan pembayaran dapat dikenakan denda sesuai kesepakatan

Kami berhak mengubah struktur biaya dengan pemberitahuan 30 hari sebelumnya.`
        },
        {
          title: "8. Verifikasi dan Sertifikasi",
          content: `Proses verifikasi dan sertifikasi proyek karbon:

• Semua proyek harus melalui verifikasi oleh pihak ketiga independen
• Verifikasi dilakukan sesuai standar internasional (VCS, Gold Standard)
• Biaya verifikasi ditanggung sesuai kesepakatan dalam kontrak proyek
• Hasil verifikasi menentukan jumlah kredit karbon yang dapat diterbitkan
• Sertifikat yang diterbitkan memiliki nomor unik dan dapat dilacak
• Kami tidak menjamin hasil verifikasi tertentu

Proses verifikasi dapat memakan waktu 3-6 bulan tergantung kompleksitas proyek.`
        },
        {
          title: "9. Batasan Tanggung Jawab",
          content: `Impact Institute tidak bertanggung jawab atas:

• Kerugian yang timbul dari penggunaan platform atau layanan
• Kegagalan proyek karbon karena faktor di luar kendali kami
• Perubahan regulasi atau kebijakan pemerintah
• Force majeure termasuk bencana alam, perang, atau pandemi
• Tindakan atau kelalaian pihak ketiga
• Kehilangan data atau gangguan teknis
• Fluktuasi harga kredit karbon di pasar

Tanggung jawab kami terbatas pada nilai layanan yang telah dibayarkan.`
        },
        {
          title: "10. Penyelesaian Sengketa",
          content: `Sengketa yang timbul akan diselesaikan melalui:

• Negosiasi langsung antara para pihak
• Mediasi oleh pihak ketiga yang disepakati
• Arbitrase sesuai dengan aturan Badan Arbitrase Nasional Indonesia (BANI)
• Pengadilan yang berwenang di Jakarta Selatan sebagai upaya terakhir

Hukum Indonesia berlaku untuk interpretasi dan pelaksanaan ketentuan ini.`
        },
        {
          title: "11. Kontak",
          content: `Untuk pertanyaan tentang Syarat & Ketentuan ini, hubungi kami:

Impact Institute
Suite 202, Bintaro Business Center
Jl. Deplu Raya, Bintaro, Jakarta Selatan

Email: info@impactinstitute.asia
Telepon/WhatsApp: +62 812-1826-9298
Website: impactinstitute.asia`
        }
      ]
    },
    en: {
      title: "Terms & Conditions",
      subtitle: "Terms of use for Impact Institute platform and services",
      lastUpdated: "Last updated: July 15, 2025",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: `By accessing and using the Impact Institute website (impactinstitute.asia) and our services, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.

These Terms & Conditions apply to all platform users, including farmers, carbon buyers, partners, and website visitors. We reserve the right to modify these terms at any time with reasonable notice.

Continued use of our services after changes to the terms indicates your acceptance of the updated terms.`
        },
        {
          title: "2. Definitions",
          content: `In these Terms & Conditions:

• "Impact Institute" or "We" refers to the Impact Institute platform and organization
• "User" or "You" refers to individuals or entities using our services
• "Farmer" refers to owners or managers of agricultural land registered on the platform
• "Carbon Buyer" refers to companies or organizations purchasing carbon credits
• "Platform" refers to the Impact Institute website and technology systems
• "Services" refers to all services provided by Impact Institute
• "Carbon Project" refers to sustainable agriculture projects that generate carbon credits`
        },
        {
          title: "3. Services Provided",
          content: `Impact Institute provides a platform connecting farmers with sustainable farming practices and facilitating carbon credit trading. Our services include:

• Agricultural land registration and verification
• Sustainable agriculture consultation and training
• Carbon project development and implementation
• Project monitoring and reporting
• Carbon credit certification and verification
• Carbon credit trading platform
• Technical support and mentoring

We reserve the right to modify, discontinue, or add services at any time with reasonable notice.`
        },
        {
          title: "4. Registration and Accounts",
          content: `To use certain services, you must create an account by providing accurate and complete information. You are responsible for:

• Maintaining the confidentiality of your account information
• All activities that occur under your account
• Updating account information regularly
• Reporting unauthorized use of your account

We reserve the right to suspend or terminate accounts that violate these terms or are used for illegal or harmful activities.`
        },
        {
          title: "5. Farmer Obligations",
          content: `Farmers registered on our platform must:

• Provide accurate and verifiable land information
• Have legal rights to the registered land
• Follow agreed sustainable farming practices
• Provide access for monitoring and verification
• Report changes in land conditions or farming practices
• Comply with applicable international certification standards
• Not engage in environmentally harmful activities

Violation of these obligations may result in termination of program participation.`
        },
        {
          title: "6. Carbon Buyer Obligations",
          content: `Carbon buyers using our platform must:

• Provide accurate and verifiable company information
• Conduct due diligence on purchased carbon projects
• Pay for carbon credits according to agreements
• Use carbon credits in accordance with international standards
• Report carbon credit usage for offset purposes
• Not engage in double claiming of carbon credits

Violations may result in platform access suspension and legal action.`
        },
        {
          title: "7. Payment and Fees",
          content: `Payment terms for Impact Institute services:

• Service fees will be transparently communicated before transactions
• Payments can be made through available platform methods
• All payments in Indonesian Rupiah unless otherwise agreed
• Transaction fees and taxes are the responsibility of respective parties
• Refunds follow applicable policies
• Late payment penalties may apply as per agreements

We reserve the right to change fee structures with 30 days' prior notice.`
        },
        {
          title: "8. Verification and Certification",
          content: `Carbon project verification and certification process:

• All projects must undergo verification by independent third parties
• Verification follows international standards (VCS, Gold Standard)
• Verification costs are borne according to project contract agreements
• Verification results determine the number of carbon credits that can be issued
• Issued certificates have unique numbers and are traceable
• We do not guarantee specific verification results

Verification process may take 3-6 months depending on project complexity.`
        },
        {
          title: "9. Limitation of Liability",
          content: `Impact Institute is not responsible for:

• Losses arising from platform or service use
• Carbon project failures due to factors beyond our control
• Changes in government regulations or policies
• Force majeure including natural disasters, war, or pandemics
• Actions or negligence of third parties
• Data loss or technical disruptions
• Carbon credit price fluctuations in the market

Our liability is limited to the value of services paid for.`
        },
        {
          title: "10. Dispute Resolution",
          content: `Disputes will be resolved through:

• Direct negotiation between parties
• Mediation by agreed third parties
• Arbitration according to Indonesian National Arbitration Board (BANI) rules
• Competent courts in South Jakarta as a last resort

Indonesian law applies to the interpretation and implementation of these terms.`
        },
        {
          title: "11. Contact",
          content: `For questions about these Terms & Conditions, contact us:

Impact Institute
Suite 202, Bintaro Business Center
Jl. Deplu Raya, Bintaro, Jakarta Selatan

Email: info@impactinstitute.asia
Phone/WhatsApp: +62 812-1826-9298
Website: impactinstitute.asia`
        }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10 text-accent-green" />
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
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
    </div>
  )
}

export default TermsConditions
<<<<<<< HEAD
=======

>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
