<<<<<<< HEAD
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  Leaf,
  TrendingUp,
  Heart,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
=======
import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Leaf, Users, Award, Globe, Target, Eye, Heart, Shield } from 'lucide-react'
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c

const AboutUs = () => {
  const [language, setLanguage] = useState('id')

<<<<<<< HEAD
  const content = {
    id: {
      title: "Tentang Impact Institute",
      subtitle: "Memimpin Transformasi Menuju Ekonomi Karbon Berkelanjutan",
      hero: {
        description: "Impact Institute adalah organisasi pelopor yang berdedikasi untuk menciptakan solusi inovatif dalam mengatasi perubahan iklim melalui ekonomi karbon berkelanjutan. Kami menghubungkan petani, pembeli karbon, dan teknologi untuk menciptakan dampak positif bagi lingkungan dan masyarakat."
      },
      mission: {
        title: "Misi Kami",
        description: "Memberdayakan petani Indonesia untuk berkontribusi pada solusi perubahan iklim sambil meningkatkan kesejahteraan ekonomi mereka melalui praktik pertanian berkelanjutan dan perdagangan karbon yang transparan."
      },
      vision: {
        title: "Visi Kami", 
        description: "Menjadi platform terdepan di Asia Tenggara yang menghubungkan praktik pertanian berkelanjutan dengan pasar karbon global, menciptakan ekosistem yang menguntungkan semua pihak dan berkontribusi signifikan terhadap target net-zero emissions."
      },
      values: {
        title: "Nilai-Nilai Kami",
        items: [
          {
            icon: Shield,
            title: "Transparansi",
            description: "Kami berkomitmen pada transparansi penuh dalam setiap aspek operasi, dari verifikasi proyek hingga pembagian keuntungan."
          },
          {
            icon: Users,
            title: "Pemberdayaan Masyarakat",
            description: "Kami percaya bahwa pemberdayaan petani dan masyarakat lokal adalah kunci keberhasilan jangka panjang."
          },
          {
            icon: Leaf,
            title: "Keberlanjutan",
            description: "Setiap solusi yang kami tawarkan harus berkelanjutan secara lingkungan, ekonomi, dan sosial."
          },
          {
            icon: Award,
            title: "Kualitas & Standar",
            description: "Kami mengikuti standar internasional tertinggi dalam setiap proyek dan layanan yang kami berikan."
          }
        ]
      },
      story: {
        title: "Cerita Kami",
        content: "Impact Institute didirikan pada tahun 2023 dengan visi untuk menjembatani kesenjangan antara praktik pertanian tradisional dan kebutuhan akan solusi iklim modern. Berawal dari keprihatinan terhadap dampak perubahan iklim di Indonesia dan potensi besar sektor pertanian dalam menyerap karbon, kami mengembangkan platform yang menghubungkan petani dengan pasar karbon global.\n\nPerjalanan kami dimulai dengan riset mendalam tentang praktik pertanian berkelanjutan di berbagai daerah di Indonesia. Kami menemukan bahwa banyak petani telah menerapkan praktik ramah lingkungan namun belum mendapat kompensasi yang layak atas kontribusi mereka terhadap lingkungan.\n\nMelalui kemitraan dengan institusi penelitian, organisasi internasional, dan pemerintah daerah, kami mengembangkan metodologi yang memungkinkan petani untuk mendapatkan sertifikasi karbon dan menjual kredit karbon mereka di pasar global. Hingga saat ini, kami telah bermitra dengan lebih dari 500 petani di seluruh Indonesia dan berhasil menyerap lebih dari 10,000 ton CO2 equivalent."
      },
      team: {
        title: "Tim Kami",
        description: "Tim Impact Institute terdiri dari para ahli berpengalaman di bidang pertanian berkelanjutan, teknologi lingkungan, dan perdagangan karbon.",
        members: [
          {
            name: "Dr. Ahmad Susanto",
            position: "Chief Executive Officer",
            description: "15+ tahun pengalaman di bidang pertanian berkelanjutan dan kebijakan lingkungan"
          },
          {
            name: "Sarah Wijaya, M.Sc",
            position: "Chief Technology Officer", 
            description: "Ahli teknologi satelit dan IoT untuk monitoring lingkungan"
          },
          {
            name: "Prof. Budi Hartono",
            position: "Chief Scientific Officer",
            description: "Pakar karbon dan perubahan iklim dengan 20+ publikasi internasional"
          },
          {
            name: "Lisa Chen, MBA",
            position: "Chief Operating Officer",
            description: "Spesialis operasi dan pengembangan bisnis berkelanjutan"
          }
        ]
      },
      achievements: {
        title: "Pencapaian Kami",
        items: [
          {
            number: "500+",
            label: "Petani Mitra",
            description: "Petani yang telah bergabung dalam program kami"
          },
          {
            number: "10,000+",
            label: "Ton CO2e",
            description: "Total karbon yang telah diserap melalui proyek kami"
          },
          {
            number: "15",
            label: "Provinsi",
            description: "Jangkauan proyek di seluruh Indonesia"
          },
          {
            number: "25+",
            label: "Pembeli Karbon",
            description: "Perusahaan yang telah membeli kredit karbon dari kami"
          }
        ]
      },
      contact: {
        title: "Hubungi Kami",
        address: "Suite 202, Bintaro Business Center, Jl. Deplu Raya, Bintaro, Jakarta Selatan",
        phone: "+62 812-1826-9298",
        email: "info@impactinstitute.asia",
        website: "impactinstitute.asia"
      }
    },
    en: {
      title: "About Impact Institute",
      subtitle: "Leading the Transformation Towards Sustainable Carbon Economy",
      hero: {
        description: "Impact Institute is a pioneering organization dedicated to creating innovative solutions in addressing climate change through sustainable carbon economy. We connect farmers, carbon buyers, and technology to create positive impact for the environment and society."
      },
      mission: {
        title: "Our Mission",
        description: "Empowering Indonesian farmers to contribute to climate change solutions while improving their economic welfare through sustainable farming practices and transparent carbon trading."
      },
      vision: {
        title: "Our Vision",
        description: "To become the leading platform in Southeast Asia that connects sustainable farming practices with global carbon markets, creating an ecosystem that benefits all parties and contributes significantly to net-zero emissions targets."
      },
      values: {
        title: "Our Values",
        items: [
          {
            icon: Shield,
            title: "Transparency",
            description: "We are committed to full transparency in every aspect of operations, from project verification to profit sharing."
          },
          {
            icon: Users,
            title: "Community Empowerment",
            description: "We believe that empowering farmers and local communities is key to long-term success."
          },
          {
            icon: Leaf,
            title: "Sustainability",
            description: "Every solution we offer must be environmentally, economically, and socially sustainable."
          },
          {
            icon: Award,
            title: "Quality & Standards",
            description: "We follow the highest international standards in every project and service we provide."
          }
        ]
      },
      story: {
        title: "Our Story",
        content: "Impact Institute was founded in 2023 with a vision to bridge the gap between traditional farming practices and the need for modern climate solutions. Starting from concerns about climate change impacts in Indonesia and the great potential of the agricultural sector in carbon sequestration, we developed a platform that connects farmers with global carbon markets.\n\nOur journey began with in-depth research on sustainable farming practices in various regions in Indonesia. We found that many farmers had implemented environmentally friendly practices but had not received fair compensation for their contributions to the environment.\n\nThrough partnerships with research institutions, international organizations, and local governments, we developed methodologies that enable farmers to obtain carbon certification and sell their carbon credits in global markets. To date, we have partnered with more than 500 farmers across Indonesia and successfully sequestered more than 10,000 tons of CO2 equivalent."
      },
      team: {
        title: "Our Team",
        description: "The Impact Institute team consists of experienced experts in sustainable agriculture, environmental technology, and carbon trading.",
        members: [
          {
            name: "Dr. Ahmad Susanto",
            position: "Chief Executive Officer",
            description: "15+ years of experience in sustainable agriculture and environmental policy"
          },
          {
            name: "Sarah Wijaya, M.Sc",
            position: "Chief Technology Officer",
            description: "Expert in satellite technology and IoT for environmental monitoring"
          },
          {
            name: "Prof. Budi Hartono",
            position: "Chief Scientific Officer",
            description: "Carbon and climate change expert with 20+ international publications"
          },
          {
            name: "Lisa Chen, MBA",
            position: "Chief Operating Officer",
            description: "Specialist in operations and sustainable business development"
          }
        ]
      },
      achievements: {
        title: "Our Achievements",
        items: [
          {
            number: "500+",
            label: "Partner Farmers",
            description: "Farmers who have joined our program"
          },
          {
            number: "10,000+",
            label: "Tons CO2e",
            description: "Total carbon sequestered through our projects"
          },
          {
            number: "15",
            label: "Provinces",
            description: "Project coverage across Indonesia"
          },
          {
            number: "25+",
            label: "Carbon Buyers",
            description: "Companies that have purchased carbon credits from us"
          }
        ]
      },
      contact: {
        title: "Contact Us",
        address: "Suite 202, Bintaro Business Center, Jl. Deplu Raya, Bintaro, Jakarta Selatan",
        phone: "+62 812-1826-9298",
        email: "info@impactinstitute.asia",
        website: "impactinstitute.asia"
      }
=======
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
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen">
<<<<<<< HEAD
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
              {currentContent.hero.description}
=======
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentContent.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              {currentContent.heroSubtitle}
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
            </p>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-accent-teal" />
                </div>
                <CardTitle className="text-2xl text-primary-dark">
                  {currentContent.mission.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {currentContent.mission.description}
=======
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
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
                </p>
              </CardContent>
            </Card>

<<<<<<< HEAD
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-accent-teal" />
                </div>
                <CardTitle className="text-2xl text-primary-dark">
                  {currentContent.vision.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {currentContent.vision.description}
=======
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
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
<<<<<<< HEAD
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.values.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.values.items.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-accent-teal" />
                  </div>
                  <CardTitle className="text-xl text-primary-dark">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8 text-center">
              {currentContent.story.title}
            </h2>
            <div className="prose prose-lg max-w-none">
              {currentContent.story.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.team.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {currentContent.team.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.team.members.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-teal to-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary-dark">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-accent-teal font-medium">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
=======
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
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          </div>
        </div>
      </section>

      {/* Achievements */}
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.achievements.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.achievements.items.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-teal mb-2">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold text-primary-dark mb-2">
                  {achievement.label}
                </div>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.contact.title}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-accent-teal" />
                    <CardTitle className="text-lg text-primary-dark">
                      {language === 'id' ? 'Alamat Kantor' : 'Office Address'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {currentContent.contact.address}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-accent-teal" />
                    <CardTitle className="text-lg text-primary-dark">
                      {language === 'id' ? 'Kontak' : 'Contact'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">Phone/WhatsApp:</span> {currentContent.contact.phone}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Email:</span> {currentContent.contact.email}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Website:</span> {currentContent.contact.website}
                    </p>
                  </div>
                </CardContent>
              </Card>
=======
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
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-accent-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'id' 
              ? 'Bergabunglah dengan Misi Kami' 
              : 'Join Our Mission'
            }
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            {language === 'id'
              ? 'Mari bersama-sama menciptakan masa depan yang lebih berkelanjutan'
              : 'Let\'s create a more sustainable future together'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
              <Link to="/untuk-petani">
                {language === 'id' ? 'Daftarkan Lahan' : 'Register Land'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
              <Link to="/kontak">
                {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
              </Link>
            </Button>
=======
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
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

