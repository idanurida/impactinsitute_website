import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { 
  CheckCircle, 
  Users, 
  Leaf, 
  TrendingUp, 
  Shield, 
  Globe,
  ArrowRight,
  FileText,
  BarChart3,
  Award,
  Clock,
  Target
} from 'lucide-react'

const HowWeWork = () => {
  const [language, setLanguage] = useState('id')

  const content = {
    id: {
      title: "Bagaimana Kami Bekerja",
      subtitle: "Proses Transparan dan Terstruktur untuk Solusi Karbon Berkelanjutan",
      description: "Impact Institute menggunakan metodologi yang telah terbukti dan standar internasional untuk memastikan setiap proyek karbon memberikan dampak nyata bagi lingkungan dan masyarakat.",
      steps: [
        {
          number: "01",
          title: "Pendaftaran & Verifikasi Lahan",
          description: "Petani mendaftarkan lahan mereka melalui platform kami. Tim ahli kami melakukan verifikasi kelayakan lahan menggunakan teknologi satelit dan survei lapangan untuk memastikan potensi serapan karbon yang akurat.",
          details: [
            "Analisis citra satelit untuk pemetaan lahan",
            "Survei lapangan oleh tim ahli bersertifikat",
            "Penilaian kondisi tanah dan vegetasi",
            "Verifikasi kepemilikan dan legalitas lahan"
          ]
        },
        {
          number: "02", 
          title: "Pengembangan Rencana Proyek",
          description: "Berdasarkan hasil verifikasi, kami mengembangkan rencana proyek karbon yang disesuaikan dengan karakteristik lahan dan kebutuhan petani. Setiap rencana mengikuti standar internasional seperti VCS dan Gold Standard.",
          details: [
            "Desain proyek sesuai standar VCS/Gold Standard",
            "Perhitungan baseline dan proyeksi serapan karbon",
            "Rencana implementasi dan timeline",
            "Strategi monitoring dan evaluasi"
          ]
        },
        {
          number: "03",
          title: "Implementasi & Pendampingan",
          description: "Tim lapangan kami mendampingi petani dalam implementasi praktik pertanian berkelanjutan. Kami menyediakan pelatihan, bibit, dan teknologi yang diperlukan untuk memastikan keberhasilan proyek.",
          details: [
            "Pelatihan praktik pertanian berkelanjutan",
            "Penyediaan bibit dan teknologi",
            "Pendampingan teknis berkelanjutan",
            "Monitoring progres implementasi"
          ]
        },
        {
          number: "04",
          title: "Monitoring & Pelaporan",
          description: "Kami melakukan monitoring berkala menggunakan teknologi IoT, drone, dan satelit untuk memastikan proyek berjalan sesuai rencana. Data yang dikumpulkan digunakan untuk pelaporan transparan kepada semua stakeholder.",
          details: [
            "Monitoring real-time dengan teknologi IoT",
            "Survei berkala menggunakan drone",
            "Analisis citra satelit bulanan",
            "Pelaporan transparan kepada stakeholder"
          ]
        },
        {
          number: "05",
          title: "Verifikasi & Sertifikasi",
          description: "Proyek yang telah berjalan akan diverifikasi oleh pihak ketiga independen yang terakreditasi. Proses ini memastikan bahwa serapan karbon yang diklaim benar-benar terjadi dan dapat dipertanggungjawabkan.",
          details: [
            "Verifikasi oleh pihak ketiga terakreditasi",
            "Audit lapangan independen",
            "Validasi data serapan karbon",
            "Penerbitan sertifikat karbon"
          ]
        },
        {
          number: "06",
          title: "Penjualan & Pembagian Keuntungan",
          description: "Kredit karbon yang telah tersertifikasi dijual kepada pembeli yang telah terverifikasi. Keuntungan dibagikan secara adil kepada petani dengan transparansi penuh dalam setiap transaksi.",
          details: [
            "Penjualan kepada pembeli terverifikasi",
            "Pembagian keuntungan yang adil",
            "Transparansi dalam setiap transaksi",
            "Pelaporan keuangan berkala"
          ]
        }
      ],
      principles: {
        title: "Prinsip Kerja Kami",
        items: [
          {
            icon: Shield,
            title: "Transparansi",
            description: "Semua proses dan data dapat diakses dan diverifikasi oleh stakeholder"
          },
          {
            icon: Users,
            title: "Partisipatif",
            description: "Melibatkan masyarakat lokal dalam setiap tahap pengembangan proyek"
          },
          {
            icon: Award,
            title: "Standar Internasional",
            description: "Mengikuti standar VCS, Gold Standard, dan regulasi karbon Indonesia"
          },
          {
            icon: Target,
            title: "Dampak Terukur",
            description: "Setiap proyek memiliki target dan indikator dampak yang jelas dan terukur"
          }
        ]
      },
      technology: {
        title: "Teknologi yang Kami Gunakan",
        description: "Impact Institute menggunakan teknologi terdepan untuk memastikan akurasi dan transparansi dalam setiap proyek karbon.",
        items: [
          {
            title: "Teknologi Satelit",
            description: "Monitoring perubahan tutupan lahan dan biomassa secara real-time"
          },
          {
            title: "Internet of Things (IoT)",
            description: "Sensor tanah dan cuaca untuk monitoring kondisi lahan secara otomatis"
          },
          {
            title: "Blockchain",
            description: "Sistem pencatatan transaksi yang transparan dan tidak dapat diubah"
          },
          {
            title: "Machine Learning",
            description: "Analisis prediktif untuk optimalisasi serapan karbon"
          }
        ]
      }
    },
    en: {
      title: "How We Work",
      subtitle: "Transparent and Structured Process for Sustainable Carbon Solutions",
      description: "Impact Institute uses proven methodologies and international standards to ensure every carbon project delivers real impact for the environment and communities.",
      steps: [
        {
          number: "01",
          title: "Land Registration & Verification",
          description: "Farmers register their land through our platform. Our expert team conducts land eligibility verification using satellite technology and field surveys to ensure accurate carbon sequestration potential.",
          details: [
            "Satellite imagery analysis for land mapping",
            "Field surveys by certified expert teams",
            "Soil and vegetation condition assessment",
            "Ownership and land legality verification"
          ]
        },
        {
          number: "02",
          title: "Project Plan Development", 
          description: "Based on verification results, we develop carbon project plans tailored to land characteristics and farmer needs. Each plan follows international standards such as VCS and Gold Standard.",
          details: [
            "Project design according to VCS/Gold Standard",
            "Baseline calculation and carbon sequestration projection",
            "Implementation plan and timeline",
            "Monitoring and evaluation strategy"
          ]
        },
        {
          number: "03",
          title: "Implementation & Assistance",
          description: "Our field team assists farmers in implementing sustainable farming practices. We provide training, seedlings, and necessary technology to ensure project success.",
          details: [
            "Sustainable farming practice training",
            "Provision of seedlings and technology",
            "Continuous technical assistance",
            "Implementation progress monitoring"
          ]
        },
        {
          number: "04",
          title: "Monitoring & Reporting",
          description: "We conduct regular monitoring using IoT technology, drones, and satellites to ensure projects run according to plan. Collected data is used for transparent reporting to all stakeholders.",
          details: [
            "Real-time monitoring with IoT technology",
            "Regular surveys using drones",
            "Monthly satellite imagery analysis",
            "Transparent reporting to stakeholders"
          ]
        },
        {
          number: "05",
          title: "Verification & Certification",
          description: "Running projects will be verified by accredited independent third parties. This process ensures that claimed carbon sequestration actually occurs and is accountable.",
          details: [
            "Verification by accredited third parties",
            "Independent field audits",
            "Carbon sequestration data validation",
            "Carbon certificate issuance"
          ]
        },
        {
          number: "06",
          title: "Sales & Profit Sharing",
          description: "Certified carbon credits are sold to verified buyers. Profits are shared fairly with farmers with full transparency in every transaction.",
          details: [
            "Sales to verified buyers",
            "Fair profit sharing",
            "Transparency in every transaction",
            "Regular financial reporting"
          ]
        }
      ],
      principles: {
        title: "Our Working Principles",
        items: [
          {
            icon: Shield,
            title: "Transparency",
            description: "All processes and data can be accessed and verified by stakeholders"
          },
          {
            icon: Users,
            title: "Participatory",
            description: "Involving local communities in every stage of project development"
          },
          {
            icon: Award,
            title: "International Standards",
            description: "Following VCS, Gold Standard, and Indonesian carbon regulations"
          },
          {
            icon: Target,
            title: "Measurable Impact",
            description: "Every project has clear and measurable targets and impact indicators"
          }
        ]
      },
      technology: {
        title: "Technology We Use",
        description: "Impact Institute uses cutting-edge technology to ensure accuracy and transparency in every carbon project.",
        items: [
          {
            title: "Satellite Technology",
            description: "Real-time monitoring of land cover and biomass changes"
          },
          {
            title: "Internet of Things (IoT)",
            description: "Soil and weather sensors for automatic land condition monitoring"
          },
          {
            title: "Blockchain",
            description: "Transparent and immutable transaction recording system"
          },
          {
            title: "Machine Learning",
            description: "Predictive analysis for carbon sequestration optimization"
          }
        ]
      }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {currentContent.title}
            </h1>
            <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-8">
              {currentContent.subtitle}
            </p>
            <p className="text-lg text-gray-200 max-w-5xl mx-auto">
              {currentContent.description}
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {currentContent.steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="text-6xl font-bold text-accent-green/20 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent-teal mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src={`/images/step${index + 1}-${step.number === '01' ? 'verification' : 
                        step.number === '02' ? 'planning' : 
                        step.number === '03' ? 'implementation' : 
                        step.number === '04' ? 'monitoring' : 
                        'verification'}.png`}
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.principles.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.principles.items.map((principle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="h-8 w-8 text-accent-teal" />
                  </div>
                  <CardTitle className="text-xl text-primary-dark">
                    {principle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.technology.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {currentContent.technology.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentContent.technology.items.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-dark">
                    {tech.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-accent-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'id' 
              ? 'Siap Bergabung dengan Gerakan Karbon Positif?' 
              : 'Ready to Join the Carbon Positive Movement?'
            }
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            {language === 'id'
              ? 'Daftarkan lahan Anda sekarang dan mulai berkontribusi pada solusi perubahan iklim'
              : 'Register your land now and start contributing to climate change solutions'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
              <Link to="/untuk-petani">
                {language === 'id' ? 'Daftarkan Lahan Anda' : 'Register Your Land'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
              <Link to="/kontak">
                {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowWeWork

