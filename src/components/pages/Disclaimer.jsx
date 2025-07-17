import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, Mail, Phone, MapPin } from 'lucide-react'

const Disclaimer = () => {
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
      title: "Disclaimer",
      subtitle: "Penyangkalan dan batasan tanggung jawab Impact Institute",
      lastUpdated: "Terakhir diperbarui: 15 Juli 2025",
      sections: [
        {
          title: "1. Penyangkalan Umum",
          content: `Informasi yang disediakan di website Impact Institute (impactinstitute.asia) dan layanan kami disajikan "sebagaimana adanya" tanpa jaminan apapun, baik tersurat maupun tersirat.

Impact Institute tidak memberikan jaminan mengenai:
• Keakuratan, kelengkapan, atau keandalan informasi
• Kesesuaian informasi untuk tujuan tertentu
• Tidak adanya kesalahan atau gangguan dalam layanan
• Keamanan data yang sempurna
• Hasil yang pasti dari program atau proyek

Penggunaan informasi dan layanan kami sepenuhnya menjadi risiko Anda sendiri.`
        },
        {
          title: "2. Batasan Tanggung Jawab Investasi",
          content: `Impact Institute TIDAK memberikan nasihat investasi atau keuangan. Semua informasi yang disediakan bersifat edukatif dan informatif saja.

Kami tidak bertanggung jawab atas:
• Keputusan investasi yang dibuat berdasarkan informasi kami
• Kerugian finansial yang timbul dari partisipasi dalam program
• Fluktuasi harga kredit karbon di pasar
• Perubahan regulasi yang mempengaruhi nilai investasi
• Kegagalan proyek karbon mencapai target yang diharapkan

Selalu konsultasikan dengan penasihat keuangan profesional sebelum membuat keputusan investasi.`
        },
        {
          title: "3. Penyangkalan Hasil Proyek",
          content: `Impact Institute tidak menjamin hasil spesifik dari proyek pertanian berkelanjutan atau proyek karbon:

• Jumlah kredit karbon yang akan dihasilkan
• Waktu penyelesaian verifikasi dan sertifikasi
• Harga jual kredit karbon di pasar
• Keberhasilan implementasi praktik berkelanjutan
• Peningkatan produktivitas atau pendapatan petani
• Dampak lingkungan yang spesifik

Hasil proyek dipengaruhi oleh berbagai faktor di luar kendali kami, termasuk cuaca, kondisi tanah, dan perubahan regulasi.`
        },
        {
          title: "4. Penyangkalan Konten Pihak Ketiga",
          content: `Website kami mungkin berisi link ke website pihak ketiga atau konten dari sumber eksternal:

• Kami tidak mengontrol atau bertanggung jawab atas konten pihak ketiga
• Link ke website lain tidak berarti endorsement dari kami
• Informasi dari pihak ketiga mungkin tidak akurat atau terkini
• Kebijakan privasi dan syarat penggunaan pihak ketiga berlaku terpisah
• Kami tidak bertanggung jawab atas kerugian dari interaksi dengan pihak ketiga

Gunakan konten pihak ketiga dengan kebijaksanaan Anda sendiri.`
        },
        {
          title: "5. Batasan Tanggung Jawab Teknis",
          content: `Kami berusaha menjaga website dan sistem kami berfungsi dengan baik, namun tidak dapat menjamin:

• Ketersediaan layanan 24/7 tanpa gangguan
• Tidak adanya bug atau error dalam sistem
• Keamanan data yang sempurna dari serangan cyber
• Kompatibilitas dengan semua perangkat dan browser
• Kecepatan akses yang konsisten
• Backup data yang selalu berhasil

Gangguan teknis dapat terjadi karena pemeliharaan, upgrade, atau faktor di luar kendali kami.`
        },
        {
          title: "6. Penyangkalan Kepatuhan Regulasi",
          content: `Meskipun kami berusaha mematuhi semua regulasi yang berlaku:

• Regulasi dapat berubah tanpa pemberitahuan sebelumnya
• Interpretasi regulasi dapat berbeda antar yurisdiksi
• Kami tidak memberikan nasihat hukum atau regulasi
• Pengguna bertanggung jawab memastikan kepatuhan mereka sendiri
• Perubahan regulasi dapat mempengaruhi layanan kami
• Kami tidak bertanggung jawab atas pelanggaran regulasi oleh pengguna

Konsultasikan dengan ahli hukum untuk masalah kepatuhan regulasi.`
        },
        {
          title: "7. Force Majeure",
          content: `Impact Institute tidak bertanggung jawab atas kegagalan atau keterlambatan dalam memenuhi kewajiban yang disebabkan oleh:

• Bencana alam (gempa bumi, banjir, kekeringan)
• Perang, terorisme, atau kerusuhan sipil
• Pandemi atau wabah penyakit
• Kebijakan pemerintah atau perubahan regulasi mendadak
• Gangguan infrastruktur telekomunikasi atau internet
• Serangan cyber atau gangguan keamanan siber
• Kondisi lain di luar kendali wajar kami

Dalam situasi force majeure, kewajiban kami akan ditangguhkan hingga kondisi normal kembali.`
        },
        {
          title: "8. Batasan Ganti Rugi",
          content: `Dalam hal apapun, total tanggung jawab Impact Institute kepada Anda terbatas pada:

• Jumlah yang telah Anda bayarkan untuk layanan dalam 12 bulan terakhir
• Tidak termasuk kerugian tidak langsung, konsekuensial, atau khusus
• Tidak termasuk kehilangan keuntungan atau peluang bisnis
• Tidak termasuk kerugian reputasi atau goodwill
• Tidak termasuk biaya penggantian atau pemulihan data

Batasan ini berlaku meskipun kami telah diberitahu tentang kemungkinan kerugian tersebut.`
        },
        {
          title: "9. Yurisdiksi dan Hukum yang Berlaku",
          content: `Disclaimer ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia:

• Pengadilan di Jakarta Selatan memiliki yurisdiksi eksklusif
• Jika ada ketentuan yang tidak dapat dilaksanakan, ketentuan lain tetap berlaku
• Disclaimer ini merupakan bagian integral dari Syarat & Ketentuan
• Versi bahasa Indonesia berlaku dalam hal terjadi perbedaan interpretasi
• Perubahan disclaimer akan diberitahukan melalui website

Dengan menggunakan layanan kami, Anda menyetujui yurisdiksi dan hukum yang berlaku.`
        },
        {
          title: "10. Kontak",
          content: `Untuk pertanyaan tentang Disclaimer ini, hubungi kami:

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
      title: "Disclaimer",
      subtitle: "Disclaimers and limitation of liability for Impact Institute",
      lastUpdated: "Last updated: July 15, 2025",
      sections: [
        {
          title: "1. General Disclaimer",
          content: `Information provided on the Impact Institute website (impactinstitute.asia) and our services is presented "as is" without any warranties, express or implied.

Impact Institute provides no warranties regarding:
• Accuracy, completeness, or reliability of information
• Suitability of information for specific purposes
• Absence of errors or service interruptions
• Perfect data security
• Guaranteed results from programs or projects

Use of our information and services is entirely at your own risk.`
        },
        {
          title: "2. Investment Liability Limitations",
          content: `Impact Institute does NOT provide investment or financial advice. All information provided is for educational and informational purposes only.

We are not responsible for:
• Investment decisions made based on our information
• Financial losses arising from program participation
• Carbon credit price fluctuations in the market
• Regulatory changes affecting investment value
• Carbon project failures to meet expected targets

Always consult with professional financial advisors before making investment decisions.`
        },
        {
          title: "3. Project Results Disclaimer",
          content: `Impact Institute does not guarantee specific results from sustainable agriculture or carbon projects:

• Amount of carbon credits to be generated
• Verification and certification completion time
• Carbon credit market selling prices
• Successful implementation of sustainable practices
• Farmer productivity or income improvements
• Specific environmental impacts

Project results are influenced by various factors beyond our control, including weather, soil conditions, and regulatory changes.`
        },
        {
          title: "4. Third-Party Content Disclaimer",
          content: `Our website may contain links to third-party websites or external content:

• We do not control or take responsibility for third-party content
• Links to other websites do not imply our endorsement
• Third-party information may be inaccurate or outdated
• Third-party privacy policies and terms of use apply separately
• We are not responsible for losses from third-party interactions

Use third-party content at your own discretion.`
        },
        {
          title: "5. Technical Liability Limitations",
          content: `While we strive to maintain our website and systems properly, we cannot guarantee:

• 24/7 service availability without interruptions
• Absence of bugs or system errors
• Perfect data security from cyber attacks
• Compatibility with all devices and browsers
• Consistent access speeds
• Always successful data backups

Technical disruptions may occur due to maintenance, upgrades, or factors beyond our control.`
        },
        {
          title: "6. Regulatory Compliance Disclaimer",
          content: `While we strive to comply with all applicable regulations:

• Regulations may change without prior notice
• Regulatory interpretations may differ across jurisdictions
• We do not provide legal or regulatory advice
• Users are responsible for ensuring their own compliance
• Regulatory changes may affect our services
• We are not responsible for user regulatory violations

Consult with legal experts for regulatory compliance matters.`
        },
        {
          title: "7. Force Majeure",
          content: `Impact Institute is not responsible for failures or delays in fulfilling obligations caused by:

• Natural disasters (earthquakes, floods, droughts)
• War, terrorism, or civil unrest
• Pandemics or disease outbreaks
• Government policies or sudden regulatory changes
• Telecommunications or internet infrastructure disruptions
• Cyber attacks or cybersecurity disruptions
• Other conditions beyond our reasonable control

In force majeure situations, our obligations will be suspended until normal conditions return.`
        },
        {
          title: "8. Damages Limitations",
          content: `In any event, Impact Institute's total liability to you is limited to:

• Amounts you have paid for services in the last 12 months
• Excludes indirect, consequential, or special damages
• Excludes lost profits or business opportunities
• Excludes reputational or goodwill losses
• Excludes replacement or data recovery costs

These limitations apply even if we have been notified of the possibility of such damages.`
        },
        {
          title: "9. Jurisdiction and Applicable Law",
          content: `This disclaimer is governed by and interpreted according to the laws of the Republic of Indonesia:

• Courts in South Jakarta have exclusive jurisdiction
• If any provision is unenforceable, other provisions remain valid
• This disclaimer is an integral part of the Terms & Conditions
• The Indonesian language version prevails in case of interpretation differences
• Disclaimer changes will be notified through the website

By using our services, you agree to the applicable jurisdiction and law.`
        },
        {
          title: "10. Contact",
          content: `For questions about this Disclaimer, contact us:

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
            <div className="w-20 h-20 bg-accent-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-10 w-10 text-accent-orange" />
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

export default Disclaimer

