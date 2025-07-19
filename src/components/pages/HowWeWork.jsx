import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowRight } from 'lucide-react'

const HowWeWork = () => {
  const [language, setLanguage] = useState('id')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'id'
    setLanguage(savedLanguage)
  }, [])

  const content = {
    id: {
      pageTitle: "Bagaimana Kami Bekerja",
      heroSubtitle: "Proses komprehensif untuk menciptakan dampak berkelanjutan",
      description: "Kami menggunakan pendekatan sistematis dan terstruktur untuk memastikan setiap proyek pertanian berkelanjutan memberikan dampak maksimal bagi petani dan lingkungan.",
      processTitle: "Proses Kerja Kami",
      processSubtitle: "6 langkah strategis menuju pertanian berkelanjutan",
      steps: [
        {
          number: "01",
          title: "Verifikasi & Penilaian Lahan",
          description: "Tim ahli kami melakukan survei mendalam untuk menilai kondisi lahan, potensi produktivitas, dan kesesuaian untuk praktik pertanian berkelanjutan.",
          details: [
            "Analisis kondisi tanah dan topografi",
            "Penilaian biodiversitas existing",
            "Evaluasi akses air dan infrastruktur",
            "Dokumentasi dengan teknologi satelit"
          ],
          image: "/images/step1-verification.webp"
        },
        {
          number: "02",
          title: "Perencanaan Strategis",
          description: "Berdasarkan hasil verifikasi, kami menyusun rencana komprehensif yang disesuaikan dengan kondisi spesifik lahan dan kebutuhan petani.",
          details: [
            "Desain sistem pertanian berkelanjutan",
            "Perhitungan proyeksi hasil dan dampak",
            "Penjadwalan implementasi bertahap",
            "Perencanaan anggaran dan sumber daya"
          ],
          image: "/images/step2-planning.webp"
        },
        {
          number: "03",
          title: "Implementasi & Pelatihan",
          description: "Pelaksanaan rencana dengan pendampingan intensif, termasuk pelatihan teknis dan transfer pengetahuan kepada petani mitra.",
          details: [
            "Pelatihan praktik pertanian berkelanjutan",
            "Implementasi teknologi modern",
            "Pendampingan teknis berkelanjutan",
            "Pembentukan kelompok tani"
          ],
          image: "/images/step3-implementation.webp"
        },
        {
          number: "04",
          title: "Monitoring & Evaluasi",
          description: "Sistem monitoring real-time menggunakan teknologi IoT dan satelit untuk memastikan implementasi berjalan sesuai rencana.",
          details: [
            "Monitoring pertumbuhan tanaman",
            "Pengukuran dampak lingkungan",
            "Evaluasi produktivitas lahan",
            "Laporan berkala kepada stakeholder"
          ],
          image: "/images/step4-monitoring.webp"
        },
        {
          number: "05",
          title: "Sertifikasi & Validasi",
          description: "Proses sertifikasi oleh lembaga independen untuk memastikan standar internasional tercapai dan dampak terverifikasi.",
          details: [
            "Audit oleh lembaga sertifikasi",
            "Verifikasi dampak karbon",
            "Dokumentasi compliance",
            "Penerbitan sertifikat resmi"
          ],
          image: "/images/step5-certification.webp"
        },
        {
          number: "06",
          title: "Akses Pasar & Keberlanjutan",
          description: "Menghubungkan petani dengan pasar yang tepat dan memastikan keberlanjutan jangka panjang melalui dukungan berkelanjutan.",
          details: [
            "Koneksi dengan pembeli premium",
            "Negosiasi harga yang adil",
            "Program loyalitas jangka panjang",
            "Dukungan teknis berkelanjutan"
          ],
          image: "/images/step6-marketplace.webp"
        }
      ],
      benefitsTitle: "Manfaat Pendekatan Kami",
      benefitsSubtitle: "Keunggulan metodologi yang telah terbukti",
      benefits: [
        {
          title: "Pendekatan Holistik",
          description: "Mempertimbangkan semua aspek dari lingkungan, ekonomi, hingga sosial"
        },
        {
          title: "Teknologi Terdepan",
          description: "Menggunakan IoT, satelit, dan AI untuk monitoring dan optimasi"
        },
        {
          title: "Dukungan Berkelanjutan",
          description: "Pendampingan jangka panjang untuk memastikan kesuksesan proyek"
        },
        {
          title: "Standar Internasional",
          description: "Mengikuti protokol dan standar yang diakui secara global"
        }
      ]
    },
    en: {
      pageTitle: "How We Work",
      heroSubtitle: "Comprehensive process to create sustainable impact",
      description: "We use a systematic and structured approach to ensure every sustainable agriculture project delivers maximum impact for farmers and the environment.",
      processTitle: "Our Work Process",
      processSubtitle: "6 strategic steps towards sustainable agriculture",
      steps: [
        {
          number: "01",
          title: "Land Verification & Assessment",
          description: "Our expert team conducts in-depth surveys to assess land conditions, productivity potential, and suitability for sustainable agricultural practices.",
          details: [
            "Soil condition and topography analysis",
            "Existing biodiversity assessment",
            "Water access and infrastructure evaluation",
            "Documentation with satellite technology"
          ],
          image: "/images/step1-verification.webp"
        },
        {
          number: "02",
          title: "Strategic Planning",
          description: "Based on verification results, we develop comprehensive plans tailored to specific land conditions and farmer needs.",
          details: [
            "Sustainable farming system design",
            "Yield and impact projection calculations",
            "Phased implementation scheduling",
            "Budget and resource planning"
          ],
          image: "/images/step2-planning.webp"
        },
        {
          number: "03",
          title: "Implementation & Training",
          description: "Plan execution with intensive mentoring, including technical training and knowledge transfer to partner farmers.",
          details: [
            "Sustainable farming practice training",
            "Modern technology implementation",
            "Continuous technical mentoring",
            "Farmer group formation"
          ],
          image: "/images/step3-implementation.webp"
        },
        {
          number: "04",
          title: "Monitoring & Evaluation",
          description: "Real-time monitoring system using IoT and satellite technology to ensure implementation runs according to plan.",
          details: [
            "Plant growth monitoring",
            "Environmental impact measurement",
            "Land productivity evaluation",
            "Regular stakeholder reporting"
          ],
          image: "/images/step4-monitoring.webp"
        },
        {
          number: "05",
          title: "Certification & Validation",
          description: "Certification process by independent institutions to ensure international standards are met and impact is verified.",
          details: [
            "Certification body audit",
            "Carbon impact verification",
            "Compliance documentation",
            "Official certificate issuance"
          ],
          image: "/images/step5-certification.webp"
        },
        {
          number: "06",
          title: "Market Access & Sustainability",
          description: "Connecting farmers with the right markets and ensuring long-term sustainability through continuous support.",
          details: [
            "Premium buyer connections",
            "Fair price negotiations",
            "Long-term loyalty programs",
            "Continuous technical support"
          ],
          image: "/images/step6-marketplace.webp"
        }
      ],
      benefitsTitle: "Benefits of Our Approach",
      benefitsSubtitle: "Advantages of our proven methodology",
      benefits: [
        {
          title: "Holistic Approach",
          description: "Considering all aspects from environmental, economic, to social"
        },
        {
          title: "Cutting-edge Technology",
          description: "Using IoT, satellites, and AI for monitoring and optimization"
        },
        {
          title: "Continuous Support",
          description: "Long-term mentoring to ensure project success"
        },
        {
          title: "International Standards",
          description: "Following globally recognized protocols and standards"
        }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/howwework.webp)',
          }}
        >
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-medium/70 to-accent-teal/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {currentContent.pageTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            {currentContent.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              {currentContent.description}
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.processTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.processSubtitle}
            </p>
          </div>

          <div className="space-y-16">
            {currentContent.steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-accent-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent-teal mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-accent-orange text-primary-dark rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.benefitsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.benefitsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-teal to-primary-medium text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'id' ? 'Siap Memulai Proyek Berkelanjutan?' : 'Ready to Start a Sustainable Project?'}
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            {language === 'id' 
              ? 'Mari bersama-sama menciptakan dampak positif untuk lingkungan dan masyarakat melalui pertanian berkelanjutan.'
              : 'Let\'s work together to create positive impact for the environment and society through sustainable agriculture.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/untuk-petani" 
              className="bg-accent-orange hover:bg-accent-orange/90 text-primary-dark font-semibold px-8 py-3 text-lg rounded-md inline-flex items-center justify-center transition-colors"
            >
              {language === 'id' ? 'Daftarkan Lahan' : 'Register Land'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/kontak" 
              className="bg-white hover:bg-gray-100 text-primary-dark font-semibold px-8 py-3 text-lg rounded-md inline-flex items-center justify-center transition-colors"
            >
              {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowWeWork

