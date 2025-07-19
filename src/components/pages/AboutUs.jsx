pageTitle: "Tentang Impact Institute!",
import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Leaf, Users, Award, Globe, Target, Eye, Heart, Shield } from 'lucide-react'

const AboutUs = () => {
  const [language, setLanguage] = useState('id')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'id'
    setLanguage(savedLanguage)
  }, [])

  const content = {
    id: {
      pageTitle: "Tentang Impact Institute",
      heroSubtitle: "Membangun masa depan pertanian berkelanjutan bersama petani Indonesia",
      description: "Impact Institute adalah platform yang menghubungkan petani Indonesia dengan praktik pertanian berkelanjutan. Kami berkomitmen untuk menciptakan dampak positif bagi lingkungan dan ekonomi masyarakat melalui inovasi, pendampingan, dan sertifikasi internasional.",
      missionTitle: "Misi Kami",
      missionText: "Memberdayakan petani Indonesia dengan pengetahuan, teknologi, dan akses pasar untuk praktik pertanian berkelanjutan yang menguntungkan secara ekonomi dan ramah lingkungan.",
      visionTitle: "Visi Kami",
      visionText: "Menjadi platform terdepan dalam transformasi pertanian berkelanjutan di Indonesia, menciptakan ekosistem yang mendukung kesejahteraan petani dan kelestarian lingkungan.",
      valuesTitle: "Nilai-Nilai Kami",
      sustainability: {
        title: "Keberlanjutan",
        description: "Mengutamakan praktik yang menjaga keseimbangan ekosistem"
      },
      integrity: {
        title: "Integritas",
        description: "Berkomitmen pada transparansi dan akuntabilitas"
      },
      innovation: {
        title: "Inovasi",
        description: "Menggunakan teknologi terdepan untuk solusi pertanian"
      },
      collaboration: {
        title: "Kolaborasi",
        description: "Membangun kemitraan yang saling menguntungkan"
      },
      achievementsTitle: "Pencapaian Kami",
      farmerPartners: "Petani Mitra",
      activeProjects: "Proyek Aktif",
      provinces: "Provinsi",
      hectares: "Hektar Lahan",
      // --- ADDED MISSING CONTENT FOR "WHY CHOOSE US" SECTION ---
      whyChooseTitle: "Mengapa Memilih Kami?",
      expertise: {
        title: "Keahlian",
        description: "Tim ahli dengan pengalaman luas di pertanian berkelanjutan."
      },
      network: {
        title: "Jaringan Luas",
        description: "Terhubung dengan para ahli, pasar, dan pemangku kepentingan."
      },
      impact: {
        title: "Dampak Nyata",
        description: "Fokus pada hasil yang terukur dan berkelanjutan."
      },
      support: {
        title: "Dukungan Penuh",
        description: "Pendampingan dan pelatihan berkelanjutan bagi petani."
      }
      // --- END ADDED CONTENT ---
    },
    en: {
      pageTitle: "About Impact Institute",
      heroSubtitle: "Building the future of sustainable agriculture with Indonesian farmers",
      description: "Impact Institute is a platform that connects Indonesian farmers with sustainable agricultural practices. We are committed to creating positive impacts for the environment and community economy through innovation, mentoring, and international certification.",
      missionTitle: "Our Mission",
      missionText: "Empowering Indonesian farmers with knowledge, technology, and market access for economically profitable and environmentally friendly sustainable agricultural practices.",
      visionTitle: "Our Vision",
      visionText: "To become the leading platform in sustainable agricultural transformation in Indonesia, creating an ecosystem that supports farmer welfare and environmental sustainability.",
      valuesTitle: "Our Values",
      sustainability: {
        title: "Sustainability",
        description: "Prioritizing practices that maintain ecosystem balance"
      },
      integrity: {
        title: "Integrity",
        description: "Committed to transparency and accountability"
      },
      innovation: {
        title: "Innovation",
        description: "Using cutting-edge technology for agricultural solutions"
      },
      collaboration: {
        title: "Collaboration",
        description: "Building mutually beneficial partnerships"
      },
      achievementsTitle: "Our Achievements",
      farmerPartners: "Farmer Partners",
      activeProjects: "Active Projects",
      provinces: "Provinces",
      hectares: "Hectares of Land",
      // --- ADDED MISSING CONTENT FOR "WHY CHOOSE US" SECTION ---
      whyChooseTitle: "Why Choose Us?",
      expertise: {
        title: "Expertise",
        description: "Team of experts with extensive experience in sustainable agriculture."
      },
      network: {
        title: "Extensive Network",
        description: "Connected to experts, markets, and stakeholders."
      },
      impact: {
        title: "Real Impact",
        description: "Focus on measurable and sustainable results."
      },
      support: {
        title: "Full Support",
        description: "Ongoing guidance and training for farmers."
      }
      // --- END ADDED CONTENT ---
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
            backgroundImage: 'url(/images/aboutus.webp)',
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

      {/* About Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              {currentContent.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      {/* Added missing section tag that was present in the original (was just a div) */}
      <section className="py-20 bg-gray-50"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent>
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-accent-teal" />
                </div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">
                  {currentContent.missionTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {currentContent.missionText}
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent>
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-accent-teal" />
                </div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">
                  {currentContent.visionTitle}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {currentContent.visionText}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.valuesTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.sustainability.title}
                </h3>
                <p className="text-gray-600">
                  {currentContent.sustainability.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.integrity.title}
                </h3>
                <p className="text-gray-600">
                  {currentContent.integrity.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.innovation.title}
                </h3>
                <p className="text-gray-600">
                  {currentContent.innovation.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.collaboration.title}
                </h3>
                <p className="text-gray-600">
                  {currentContent.collaboration.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-primary-medium text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {currentContent.achievementsTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-green mb-2">500+</div>
              <div className="text-xl text-gray-200">{currentContent.farmerPartners}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-green mb-2">25+</div>
              <div className="text-xl text-gray-200">{currentContent.activeProjects}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-green mb-2">15</div>
              <div className="text-xl text-gray-200">{currentContent.provinces}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-green mb-2">10,000+</div>
              <div className="text-xl text-gray-200">{currentContent.hectares}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* Added missing section tag that was present in the original (was just a div) */}
      <section className="py-20 bg-white"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.whyChooseTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.expertise.title}
                </h3>
                <p className="text-gray-600">
                  {currentContent.expertise.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.network.title}
                </h3>
                <p className="text-gray-600">
                  {currentContent.network.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.impact.title}
                </h3>
                <p className="text-gray-600">
                  {currentContent.impact.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.support.title}
                </h3>
                <p className="text-gray-600">
                  {currentContent.support.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs;
