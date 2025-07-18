<<<<<<< HEAD
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Leaf, 
  TrendingUp, 
  Users, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Globe,
  Heart,
  Star,
  TreePine,
  Sprout,
  Award
} from 'lucide-react'
=======
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Leaf, Users, Award, Globe, Sprout, BookOpen, Shield } from 'lucide-react'
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c

const Homepage = () => {
  const [language, setLanguage] = useState('id')

<<<<<<< HEAD
  const content = {
    id: {
      hero: {
        title: "Bersama Petani Indonesia",
        subtitle: "Menjadi Solusi Iklim",
        description: "Impact Institute menghubungkan petani Indonesia dengan praktik pertanian berkelanjutan untuk menciptakan dampak positif bagi lingkungan dan ekonomi masyarakat.",
        primaryCTA: "Daftarkan Lahan",
        secondaryCTA: "Pelajari Lebih Lanjut"
      },
      whyChoose: {
        title: "Mengapa Memilih Impact Institute?",
        subtitle: "Kami berkomitmen memberikan solusi terbaik untuk pertanian berkelanjutan",
        features: [
          {
            icon: <Leaf className="h-8 w-8" />,
            title: "Praktik Berkelanjutan",
            description: "Menerapkan metode pertanian yang ramah lingkungan dan meningkatkan produktivitas lahan"
          },
          {
            icon: <Users className="h-8 w-8" />,
            title: "Pemberdayaan Petani",
            description: "Memberikan pelatihan, pendampingan, dan akses teknologi untuk meningkatkan kesejahteraan petani"
          },
          {
            icon: <Shield className="h-8 w-8" />,
            title: "Sertifikasi Terpercaya",
            description: "Menggunakan standar internasional untuk memastikan kualitas dan kredibilitas proyek"
          },
          {
            icon: <Globe className="h-8 w-8" />,
            title: "Dampak Global",
            description: "Berkontribusi pada solusi perubahan iklim melalui praktik pertanian berkelanjutan"
          }
        ]
      },
      services: {
        title: "Layanan Kami",
        subtitle: "Solusi komprehensif untuk pertanian berkelanjutan",
        items: [
          {
            title: "Konsultasi Pertanian",
            description: "Analisis lahan dan rekomendasi praktik terbaik untuk meningkatkan produktivitas",
            icon: <Sprout className="h-12 w-12" />
          },
          {
            title: "Pelatihan & Pendampingan",
            description: "Program pelatihan berkelanjutan untuk petani dalam menerapkan teknologi modern",
            icon: <Users className="h-12 w-12" />
          },
          {
            title: "Sertifikasi Proyek",
            description: "Membantu mendapatkan sertifikasi internasional untuk proyek pertanian berkelanjutan",
            icon: <Award className="h-12 w-12" />
          }
        ]
      },
      projects: {
        title: "Proyek Unggulan",
        subtitle: "Dampak nyata yang telah kami ciptakan bersama petani Indonesia",
        items: [
          {
            title: "Agroforestri Kopi Berkelanjutan",
            location: "Aceh Tengah",
            impact: "150 petani terlibat",
            area: "1,200 hektar",
            image: "/images/project-aceh-coffee.jpg"
          },
          {
            title: "Restorasi Hutan Mangrove",
            location: "Lampung Timur",
            impact: "89 petani terlibat",
            area: "800 hektar",
            image: "/images/project-mangrove.jpg"
          },
          {
            title: "Perkebunan Karet Ramah Lingkungan",
            location: "Jambi",
            impact: "120 petani terlibat",
            area: "600 hektar",
            image: "/images/project-rubber.jpg"
          }
        ]
      },
      stats: {
        title: "Pencapaian Kami",
        items: [
          { number: "500+", label: "Petani Mitra" },
          { number: "25+", label: "Proyek Aktif" },
          { number: "15", label: "Provinsi" },
          { number: "10,000+", label: "Hektar Lahan" }
        ]
      },
      testimonials: {
        title: "Testimoni Petani",
        subtitle: "Dengarkan pengalaman langsung dari petani mitra kami",
        items: [
          {
            name: "Bapak Suryadi",
            location: "Petani Kopi, Aceh",
            quote: "Berkat Impact Institute, hasil panen kopi saya meningkat 40% dan saya mendapat pengetahuan baru tentang pertanian berkelanjutan.",
            rating: 5
          },
          {
            name: "Ibu Sari",
            location: "Petani Sayuran, Jawa Barat",
            quote: "Program pelatihan yang diberikan sangat membantu. Sekarang saya bisa menerapkan teknologi modern di lahan saya.",
            rating: 5
          },
          {
            name: "Bapak Ahmad",
            location: "Petani Karet, Jambi",
            quote: "Pendampingan dari tim Impact Institute membuat usaha tani saya lebih efisien dan ramah lingkungan.",
            rating: 5
          }
        ]
      }
    },
    en: {
      hero: {
        title: "Together with Indonesian Farmers",
        subtitle: "Becoming Climate Solutions",
        description: "Impact Institute connects Indonesian farmers with sustainable farming practices to create positive impact for the environment and community economy.",
        primaryCTA: "Register Land",
        secondaryCTA: "Learn More"
      },
      whyChoose: {
        title: "Why Choose Impact Institute?",
        subtitle: "We are committed to providing the best solutions for sustainable agriculture",
        features: [
          {
            icon: <Leaf className="h-8 w-8" />,
            title: "Sustainable Practices",
            description: "Implementing environmentally friendly farming methods that increase land productivity"
          },
          {
            icon: <Users className="h-8 w-8" />,
            title: "Farmer Empowerment",
            description: "Providing training, mentoring, and technology access to improve farmer welfare"
          },
          {
            icon: <Shield className="h-8 w-8" />,
            title: "Trusted Certification",
            description: "Using international standards to ensure project quality and credibility"
          },
          {
            icon: <Globe className="h-8 w-8" />,
            title: "Global Impact",
            description: "Contributing to climate change solutions through sustainable farming practices"
          }
        ]
      },
      services: {
        title: "Our Services",
        subtitle: "Comprehensive solutions for sustainable agriculture",
        items: [
          {
            title: "Agricultural Consultation",
            description: "Land analysis and best practice recommendations to increase productivity",
            icon: <Sprout className="h-12 w-12" />
          },
          {
            title: "Training & Mentoring",
            description: "Continuous training programs for farmers in implementing modern technology",
            icon: <Users className="h-12 w-12" />
          },
          {
            title: "Project Certification",
            description: "Helping obtain international certification for sustainable agriculture projects",
            icon: <Award className="h-12 w-12" />
          }
        ]
      },
      projects: {
        title: "Featured Projects",
        subtitle: "Real impact we have created together with Indonesian farmers",
        items: [
          {
            title: "Sustainable Coffee Agroforestry",
            location: "Central Aceh",
            impact: "150 farmers involved",
            area: "1,200 hectares",
            image: "/images/project-aceh-coffee.jpg"
          },
          {
            title: "Mangrove Forest Restoration",
            location: "East Lampung",
            impact: "89 farmers involved",
            area: "800 hectares",
            image: "/images/project-mangrove.jpg"
          },
          {
            title: "Eco-Friendly Rubber Plantation",
            location: "Jambi",
            impact: "120 farmers involved",
            area: "600 hectares",
            image: "/images/project-rubber.jpg"
          }
        ]
      },
      stats: {
        title: "Our Achievements",
        items: [
          { number: "500+", label: "Partner Farmers" },
          { number: "25+", label: "Active Projects" },
          { number: "15", label: "Provinces" },
          { number: "10,000+", label: "Hectares of Land" }
        ]
      },
      testimonials: {
        title: "Farmer Testimonials",
        subtitle: "Hear direct experiences from our partner farmers",
        items: [
          {
            name: "Mr. Suryadi",
            location: "Coffee Farmer, Aceh",
            quote: "Thanks to Impact Institute, my coffee harvest increased by 40% and I gained new knowledge about sustainable farming.",
            rating: 5
          },
          {
            name: "Mrs. Sari",
            location: "Vegetable Farmer, West Java",
            quote: "The training program provided was very helpful. Now I can implement modern technology on my land.",
            rating: 5
          },
          {
            name: "Mr. Ahmad",
            location: "Rubber Farmer, Jambi",
            quote: "Mentoring from the Impact Institute team made my farming business more efficient and environmentally friendly.",
            rating: 5
          }
        ]
      }
=======
  // Listen for language changes
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
      heroTitle: "Bersama Petani Indonesia",
      heroSubtitle: "Menjadi Solusi Iklim",
      heroDescription: "Impact Institute menghubungkan petani Indonesia dengan praktik pertanian berkelanjutan untuk menciptakan dampak positif bagi lingkungan dan ekonomi masyarakat.",
      ctaRegister: "Daftarkan Lahan",
      ctaLearnMore: "Pelajari Lebih Lanjut",
      whyChooseTitle: "Mengapa Memilih Impact Institute?",
      whyChooseSubtitle: "Kami berkomitmen memberikan solusi terbaik untuk pertanian berkelanjutan",
      sustainablePractices: {
        title: "Praktik Berkelanjutan",
        description: "Menerapkan metode pertanian yang ramah lingkungan dan meningkatkan produktivitas lahan"
      },
      farmerEmpowerment: {
        title: "Pemberdayaan Petani",
        description: "Memberikan pelatihan, pendampingan, dan akses teknologi untuk meningkatkan kesejahteraan petani"
      },
      trustedCertification: {
        title: "Sertifikasi Terpercaya",
        description: "Menggunakan standar internasional untuk memastikan kualitas dan kredibilitas proyek"
      },
      globalImpact: {
        title: "Dampak Global",
        description: "Berkontribusi pada solusi perubahan iklim melalui praktik pertanian berkelanjutan"
      },
      servicesTitle: "Layanan Kami",
      servicesSubtitle: "Solusi komprehensif untuk pertanian berkelanjutan",
      agriculturalConsultation: {
        title: "Konsultasi Pertanian",
        description: "Analisis lahan dan rekomendasi praktik terbaik untuk meningkatkan produktivitas"
      },
      trainingMentoring: {
        title: "Pelatihan & Pendampingan",
        description: "Program pelatihan berkelanjutan untuk petani dalam menerapkan teknologi modern"
      },
      projectCertification: {
        title: "Sertifikasi Proyek",
        description: "Membantu mendapatkan sertifikasi internasional untuk proyek pertanian berkelanjutan"
      },
      achievementsTitle: "Pencapaian Kami",
      farmerPartners: "Petani Mitra",
      activeProjects: "Proyek Aktif",
      provinces: "Provinsi",
      hectares: "Hektar Lahan",
      featuredProjectsTitle: "Proyek Unggulan",
      featuredProjectsSubtitle: "Dampak nyata yang telah kami ciptakan bersama petani Indonesia",
      testimonialsTitle: "Testimoni Petani",
      testimonialsSubtitle: "Dengarkan pengalaman langsung dari petani mitra kami",
      joinMovementTitle: "Bergabunglah dengan Gerakan Pertanian Berkelanjutan",
      joinMovementSubtitle: "Mari bersama-sama menciptakan dampak positif untuk lingkungan dan masyarakat"
    },
    en: {
      heroTitle: "Together with Indonesian Farmers",
      heroSubtitle: "Becoming Climate Solutions",
      heroDescription: "Impact Institute connects Indonesian farmers with sustainable farming practices to create positive impact for the environment and community economy.",
      ctaRegister: "Register Land",
      ctaLearnMore: "Learn More",
      whyChooseTitle: "Why Choose Impact Institute?",
      whyChooseSubtitle: "We are committed to providing the best solutions for sustainable agriculture",
      sustainablePractices: {
        title: "Sustainable Practices",
        description: "Implementing environmentally friendly farming methods that increase land productivity"
      },
      farmerEmpowerment: {
        title: "Farmer Empowerment",
        description: "Providing training, mentoring, and technology access to improve farmer welfare"
      },
      trustedCertification: {
        title: "Trusted Certification",
        description: "Using international standards to ensure project quality and credibility"
      },
      globalImpact: {
        title: "Global Impact",
        description: "Contributing to climate change solutions through sustainable farming practices"
      },
      servicesTitle: "Our Services",
      servicesSubtitle: "Comprehensive solutions for sustainable agriculture",
      agriculturalConsultation: {
        title: "Agricultural Consultation",
        description: "Land analysis and best practice recommendations to increase productivity"
      },
      trainingMentoring: {
        title: "Training & Mentoring",
        description: "Continuous training programs for farmers in implementing modern technology"
      },
      projectCertification: {
        title: "Project Certification",
        description: "Helping obtain international certification for sustainable agriculture projects"
      },
      achievementsTitle: "Our Achievements",
      farmerPartners: "Farmer Partners",
      activeProjects: "Active Projects",
      provinces: "Provinces",
      hectares: "Hectares of Land",
      featuredProjectsTitle: "Featured Projects",
      featuredProjectsSubtitle: "Real impact we have created together with Indonesian farmers",
      testimonialsTitle: "Farmer Testimonials",
      testimonialsSubtitle: "Listen to direct experiences from our partner farmers",
      joinMovementTitle: "Join the Sustainable Agriculture Movement",
      joinMovementSubtitle: "Let's work together to create positive impact for the environment and society"
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
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentContent.hero.title}
              <br />
              <span className="text-accent-green">{currentContent.hero.subtitle}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
              {currentContent.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90 font-semibold">
                <Link to="/untuk-petani#registration-form">
                  {currentContent.hero.primaryCTA}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
                <Link to="/tentang-kami">
                  {currentContent.hero.secondaryCTA}
                </Link>
=======
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-farmers.webp)', // Menggunakan kembali hero-farmers.webp
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/75"></div> {/* Overlay dipergelap */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"> {/* max-w-full */}
          <div className="mx-auto max-w-full"> {/* max-w-full */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"> {/* Font size increased */}
              {currentContent.heroTitle}<br />
              <span className="text-accent-green">{currentContent.heroSubtitle}</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-100 mx-auto mb-8"> {/* Font size increased */}
              {currentContent.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90 font-semibold text-xl px-8 py-4"> {/* Font size increased */}
                <Link to="/untuk-petani#registration-form">{currentContent.ctaRegister}</Link>
              </Button>
              <Button asChild size="lg" className="bg-primary-dark text-white hover:bg-primary-dark/90 font-semibold text-xl px-8 py-4"> {/* Font size increased */}
                <Link to="/bagaimana-kami-bekerja">{currentContent.ctaLearnMore}</Link>
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
              </Button>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.whyChoose.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.whyChoose.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.whyChoose.features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-accent-teal">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary-dark">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
=======
      {/* Why Choose Impact Institute Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8"> {/* max-w-full */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4"> {/* Font size increased */}
              {currentContent.whyChooseTitle}
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto"> {/* Font size increased */}
              {currentContent.whyChooseSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-3"> {/* Font size increased */}
                  {currentContent.sustainablePractices.title}
                </h3>
                <p className="text-lg text-gray-600"> {/* Font size increased */}
                  {currentContent.sustainablePractices.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-3"> {/* Font size increased */}
                  {currentContent.farmerEmpowerment.title}
                </h3>
                <p className="text-lg text-gray-600"> {/* Font size increased */}
                  {currentContent.farmerEmpowerment.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-3"> {/* Font size increased */}
                  {currentContent.trustedCertification.title}
                </h3>
                <p className="text-lg text-gray-600"> {/* Font size increased */}
                  {currentContent.trustedCertification.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-3"> {/* Font size increased */}
                  {currentContent.globalImpact.title}
                </h3>
                <p className="text-lg text-gray-600"> {/* Font size increased */}
                  {currentContent.globalImpact.description}
                </p>
              </CardContent>
            </Card>
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          </div>
        </div>
      </section>

      {/* Services Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.services.items.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-accent-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-accent-teal">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary-dark">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
=======
      <section className="py-20 bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8"> {/* max-w-full */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4"> {/* Font size increased */}
              {currentContent.servicesTitle}
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto"> {/* Font size increased */}
              {currentContent.servicesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sprout className="w-10 h-10 text-accent-teal" />
                </div>
                <h3 className="text-3xl font-semibold text-primary-dark mb-4"> {/* Font size increased */}
                  {currentContent.agriculturalConsultation.title}
                </h3>
                <p className="text-xl text-gray-600 text-lg"> {/* Font size increased */}
                  {currentContent.agriculturalConsultation.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-accent-teal" />
                </div>
                <h3 className="text-3xl font-semibold text-primary-dark mb-4"> {/* Font size increased */}
                  {currentContent.trainingMentoring.title}
                </h3>
                <p className="text-xl text-gray-600 text-lg"> {/* Font size increased */}
                  {currentContent.trainingMentoring.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-accent-teal" />
                </div>
                <h3 className="text-3xl font-semibold text-primary-dark mb-4"> {/* Font size increased */}
                  {currentContent.projectCertification.title}
                </h3>
                <p className="text-xl text-gray-600 text-lg"> {/* Font size increased */}
                  {currentContent.projectCertification.description}
                </p>
              </CardContent>
            </Card>
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-accent-teal to-primary-medium text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {currentContent.stats.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-green mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
=======
      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-accent-teal to-primary-medium text-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8"> {/* max-w-full */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4"> {/* Font size increased */}
              {currentContent.achievementsTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">500+</div> {/* Font size increased */}
              <div className="text-2xl">{currentContent.farmerPartners}</div> {/* Font size increased */}
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">25+</div> {/* Font size increased */}
              <div className="text-2xl">{currentContent.activeProjects}</div> {/* Font size increased */}
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">15</div> {/* Font size increased */}
              <div className="text-2xl">{currentContent.provinces}</div> {/* Font size increased */}
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">10,000+</div> {/* Font size increased */}
              <div className="text-2xl">{currentContent.hectares}</div> {/* Font size increased */}
            </div>
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.projects.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.projects.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.projects.items.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-accent-green/20 to-accent-teal/20 flex items-center justify-center">
                  <TreePine className="h-16 w-16 text-accent-teal" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-primary-dark">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>{language === 'id' ? 'Dampak:' : 'Impact:'}</span>
                      <span className="font-medium">{project.impact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'id' ? 'Luas Area:' : 'Area:'}</span>
                      <span className="font-medium">{project.area}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent-teal hover:bg-accent-teal/90">
              <Link to="/proyek-kami">
                {language === 'id' ? 'Lihat Semua Proyek' : 'View All Projects'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
=======
      <section className="py-20 bg-gray-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8"> {/* max-w-full */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4"> {/* Font size increased */}
              {currentContent.featuredProjectsTitle}
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto"> {/* Font size increased */}
              {currentContent.featuredProjectsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/kopi.webp)' }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-primary-dark mb-2"> {/* Font size increased */}
                  Agroforestri Kopi Berkelanjutan
                </h3>
                <p className="text-lg text-gray-600 mb-4">Aceh Tengah</p> {/* Font size increased */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-base text-gray-500">Dampak:</span> {/* Font size increased */}
                    <span className="text-base font-medium">150 petani terlibat</span> {/* Font size increased */}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base text-gray-500">Luas Area:</span> {/* Font size increased */}
                    <span className="text-base font-medium">1,200 hektar</span> {/* Font size increased */}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/mangrove.webp)' }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-primary-dark mb-2"> {/* Font size increased */}
                  Restorasi Hutan Mangrove
                </h3>
                <p className="text-lg text-gray-600 mb-4">Lampung Timur</p> {/* Font size increased */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-base text-gray-500">Dampak:</span> {/* Font size increased */}
                    <span className="text-base font-medium">89 petani terlibat</span> {/* Font size increased */}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base text-gray-500">Luas Area:</span> {/* Font size increased */}
                    <span className="text-base font-medium">800 hektar</span> {/* Font size increased */}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/karet.webp)' }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-primary-dark mb-2"> {/* Font size increased */}
                  Perkebunan Karet Ramah Lingkungan
                </h3>
                <p className="text-lg text-gray-600 mb-4">Jambi</p> {/* Font size increased */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-base text-gray-500">Dampak:</span> {/* Font size increased */}
                    <span className="text-base font-medium">120 petani terlibat</span> {/* Font size increased */}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base text-gray-500">Luas Area:</span> {/* Font size increased */}
                    <span className="text-base font-medium">600 hektar</span> {/* Font size increased */}
                  </div>
                </div>
              </CardContent>
            </Card>
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.testimonials.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-primary-dark">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {testimonial.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
=======
      <section className="py-20 bg-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8"> {/* max-w-full */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4"> {/* Font size increased */}
              {currentContent.testimonialsTitle}
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto"> {/* Font size increased */}
              {currentContent.testimonialsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-dark">Bapak Suryadi</h4> {/* Font size increased */}
                    <p className="text-base text-gray-500">Petani Kopi, Aceh</p> {/* Font size increased */}
                  </div>
                </div>
                <p className="text-lg text-gray-600 italic"> {/* Font size increased */}
                  "Berkat Impact Institute, hasil panen kopi saya meningkat 40% dan saya mendapat pengetahuan baru tentang pertanian berkelanjutan."
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-dark">Ibu Sari</h4> {/* Font size increased */}
                    <p className="text-base text-gray-500">Petani Sayuran, Jawa Barat</p> {/* Font size increased */}
                  </div>
                </div>
                <p className="text-lg text-gray-600 italic"> {/* Font size increased */}
                  "Program pelatihan yang diberikan sangat membantu. Sekarang saya bisa menerapkan teknologi modern di lahan saya."
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-teal rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-dark">Bapak Ahmad</h4> {/* Font size increased */}
                    <p className="text-base text-gray-500">Petani Karet, Jambi</p> {/* Font size increased */}
                  </div>
                </div>
                <p className="text-lg text-gray-600 italic"> {/* Font size increased */}
                  "Pendampingan dari tim Impact Institute membuat usaha tani saya lebih efisien dan ramah lingkungan."
                </p>
              </CardContent>
            </Card>
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark to-accent-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'id' 
              ? 'Bergabunglah dengan Gerakan Pertanian Berkelanjutan' 
              : 'Join the Sustainable Agriculture Movement'
            }
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            {language === 'id'
              ? 'Mari bersama-sama menciptakan dampak positif untuk lingkungan dan masyarakat'
              : 'Let\'s create positive impact for the environment and community together'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
              <Link to="/untuk-petani#registration-form">
                {language === 'id' ? 'Daftarkan Lahan Anda' : 'Register Your Land'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
              <Link to="/kontak">
                {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
              </Link>
=======
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-accent-teal text-white">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center"> {/* max-w-full */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4"> {/* Font size increased */}
            {currentContent.joinMovementTitle}
          </h2>
          <p className="text-2xl mb-8 opacity-90"> {/* Font size increased */}
            {currentContent.joinMovementSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90 font-semibold text-xl px-8 py-4"> {/* Font size increased */}
              <Link to="/untuk-petani#registration-form">{currentContent.ctaRegister}</Link>
            </Button>
            {/* Tombol "Hubungi Kami" diubah gayanya */}
            <Button asChild size="lg" className="bg-primary-dark text-white hover:bg-primary-dark/90 font-semibold text-xl px-8 py-4"> {/* Font size increased */}
              <Link to="/kontak">{language === 'id' ? 'Hubungi Kami' : 'Contact Us'}</Link>
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

<<<<<<< HEAD
export default Homepage

=======
export default Homepage
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
