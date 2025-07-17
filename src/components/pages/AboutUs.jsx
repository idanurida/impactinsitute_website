import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Leaf, Users, Award, Globe, Target, Eye, Heart, Shield } from 'lucide-react'

const AboutUs = () => {
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
      heroTitle: "Tentang Impact Institute",
      heroSubtitle: "Membangun masa depan pertanian berkelanjutan bersama petani Indonesia",
      aboutDescription: "Impact Institute adalah platform yang menghubungkan petani Indonesia dengan praktik pertanian berkelanjutan. Kami berkomitmen untuk menciptakan dampak positif bagi lingkungan dan ekonomi masyarakat melalui inovasi, pendampingan, dan sertifikasi internasional.",
      missionTitle: "Misi Kami",
      missionDescription: "Memberdayakan petani Indonesia dengan pengetahuan, teknologi, dan akses pasar untuk praktik pertanian berkelanjutan yang menguntungkan secara ekonomi dan ramah lingkungan.",
      visionTitle: "Visi Kami",
      visionDescription: "Menjadi platform terdepan dalam transformasi pertanian berkelanjutan di Indonesia, menciptakan ekosistem yang mendukung kesejahteraan petani dan kelestarian lingkungan.",
      valuesTitle: "Nilai-Nilai Kami",
      sustainabilityTitle: "Keberlanjutan",
      sustainabilityDesc: "Mengutamakan praktik yang menjaga keseimbangan ekosistem",
      integrityTitle: "Integritas",
      integrityDesc: "Berkomitmen pada transparansi dan akuntabilitas",
      innovationTitle: "Inovasi",
      innovationDesc: "Menggunakan teknologi terdepan untuk solusi pertanian",
      collaborationTitle: "Kolaborasi",
      collaborationDesc: "Membangun kemitraan yang saling menguntungkan",
      achievementsTitle: "Pencapaian Kami",
      farmerPartners: "Petani Mitra",
      activeProjects: "Proyek Aktif",
      provinces: "Provinsi",
      hectares: "Hektar Lahan",
      whyChooseTitle: "Mengapa Memilih Impact Institute?",
      expertiseTitle: "Keahlian Terpercaya",
      expertiseDesc: "Tim ahli dengan pengalaman puluhan tahun di bidang pertanian berkelanjutan",
      networkTitle: "Jaringan Luas",
      networkDesc: "Kemitraan dengan institusi internasional dan organisasi terkemuka",
      impactTitle: "Dampak Nyata",
      impactDesc: "Track record yang terbukti dalam meningkatkan kesejahteraan petani",
      supportTitle: "Dukungan Berkelanjutan",
      supportDesc: "Pendampingan jangka panjang dari perencanaan hingga implementasi"
    },
    en: {
      heroTitle: "About Impact Institute",
      heroSubtitle: "Building the future of sustainable agriculture with Indonesian farmers",
      aboutDescription: "Impact Institute is a platform that connects Indonesian farmers with sustainable farming practices. We are committed to creating positive impact for the environment and community economy through innovation, mentoring, and international certification.",
      missionTitle: "Our Mission",
      missionDescription: "Empowering Indonesian farmers with knowledge, technology, and market access for sustainable farming practices that are economically profitable and environmentally friendly.",
      visionTitle: "Our Vision",
      visionDescription: "To become the leading platform in sustainable agriculture transformation in Indonesia, creating an ecosystem that supports farmer welfare and environmental conservation.",
      valuesTitle: "Our Values",
      sustainabilityTitle: "Sustainability",
      sustainabilityDesc: "Prioritizing practices that maintain ecosystem balance",
      integrityTitle: "Integrity",
      integrityDesc: "Committed to transparency and accountability",
      innovationTitle: "Innovation",
      innovationDesc: "Using cutting-edge technology for agricultural solutions",
      collaborationTitle: "Collaboration",
      collaborationDesc: "Building mutually beneficial partnerships",
      achievementsTitle: "Our Achievements",
      farmerPartners: "Farmer Partners",
      activeProjects: "Active Projects",
      provinces: "Provinces",
      hectares: "Hectares of Land",
      whyChooseTitle: "Why Choose Impact Institute?",
      expertiseTitle: "Trusted Expertise",
      expertiseDesc: "Expert team with decades of experience in sustainable agriculture",
      networkTitle: "Extensive Network",
      networkDesc: "Partnerships with international institutions and leading organizations",
      impactTitle: "Real Impact",
      impactDesc: "Proven track record in improving farmer welfare",
      supportTitle: "Continuous Support",
      supportDesc: "Long-term mentoring from planning to implementation"
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentContent.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              {currentContent.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* About Description */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            {currentContent.aboutDescription}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent-teal rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-dark">
                    {currentContent.missionTitle}
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {currentContent.missionDescription}
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="pt-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent-teal rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-dark">
                    {currentContent.visionTitle}
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {currentContent.visionDescription}
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
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.sustainabilityTitle}
                </h3>
                <p className="text-gray-600">
                  {currentContent.sustainabilityDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.integrityTitle}
                </h3>
                <p className="text-gray-600">
                  {currentContent.integrityDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.innovationTitle}
                </h3>
                <p className="text-gray-600">
                  {currentContent.innovationDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.collaborationTitle}
                </h3>
                <p className="text-gray-600">
                  {currentContent.collaborationDesc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-accent-teal to-primary-medium text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {currentContent.achievementsTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">{currentContent.farmerPartners}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-xl">{currentContent.activeProjects}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
              <div className="text-xl">{currentContent.provinces}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl">{currentContent.hectares}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.whyChooseTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.expertiseTitle}
                </h3>
                <p className="text-gray-600">
                  {currentContent.expertiseDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.networkTitle}
                </h3>
                <p className="text-gray-600">
                  {currentContent.networkDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.impactTitle}
                </h3>
                <p className="text-gray-600">
                  {currentContent.impactDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.supportTitle}
                </h3>
                <p className="text-gray-600">
                  {currentContent.supportDesc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

