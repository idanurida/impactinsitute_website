<<<<<<< HEAD
import { useState } from 'react'
=======
import { useState, useEffect } from 'react'
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  MapPin, 
  Calendar, 
  Leaf, 
  Users, 
  TrendingUp,
  Award,
  Eye,
  ArrowRight,
  CheckCircle,
  TreePine,
  Sprout,
  Zap
} from 'lucide-react'

const OurProjects = () => {
  const [language, setLanguage] = useState('id')
  const [selectedCategory, setSelectedCategory] = useState('all')

<<<<<<< HEAD
  const content = {
    id: {
      title: "Proyek Kami",
      subtitle: "Portofolio Proyek Karbon Berkelanjutan di Seluruh Indonesia",
      hero: {
        description: "Jelajahi berbagai proyek karbon yang telah kami kembangkan bersama petani dan masyarakat lokal. Setiap proyek dirancang untuk memberikan dampak positif bagi lingkungan, ekonomi, dan sosial."
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
      title: "Rencana Project",
      subtitle: "Rencana Proyek Karbon Berkelanjutan di Seluruh Indonesia",
      hero: {
        description: "Jelajahi berbagai rencana proyek karbon yang akan kami kembangkan bersama petani dan masyarakat lokal. Setiap proyek dirancang untuk memberikan dampak positif bagi lingkungan, ekonomi, dan sosial."
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
      },
      stats: {
        totalProjects: "25+",
        totalFarmers: "500+",
        carbonSequestered: "10,000+",
        provinces: "15"
      },
      categories: {
        all: "Semua Proyek",
        agroforestry: "Agroforestri",
        forestRestoration: "Restorasi Hutan",
        sustainableAgriculture: "Pertanian Berkelanjutan",
        mangroveRestoration: "Restorasi Mangrove",
        renewableEnergy: "Energi Terbarukan"
      },
      projects: [
        {
          id: 1,
          title: "Agroforestri Kopi Berkelanjutan Aceh",
          category: "agroforestry",
          location: "Aceh Tengah, Aceh",
          area: "1,200 hektar",
          farmers: 150,
          carbonPotential: "2,400 ton CO2e/tahun",
<<<<<<< HEAD
          status: "Aktif",
          startDate: "Januari 2023",
          description: "Proyek agroforestri yang mengintegrasikan budidaya kopi dengan penanaman pohon pelindung untuk meningkatkan serapan karbon dan kualitas kopi.",
          highlights: [
            "Peningkatan pendapatan petani hingga 40%",
            "Penanaman 50,000 pohon pelindung",
            "Sertifikasi organik dan fair trade",
            "Program pelatihan berkelanjutan"
          ],
          certification: "VCS + CCB",
=======
          startDate: "Januari 2024",
          description: "Rencana proyek agroforestri yang mengintegrasikan budidaya kopi dengan penanaman pohon pelindung untuk meningkatkan serapan karbon dan kualitas kopi.",
          highlights: [
            "Target peningkatan pendapatan petani hingga 40%",
            "Rencana penanaman 50,000 pohon pelindung",
            "Program sertifikasi organik dan fair trade",
            "Program pelatihan berkelanjutan"
          ],
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          image: "/images/project-aceh-coffee.jpg"
        },
        {
          id: 2,
          title: "Restorasi Hutan Gambut Kalimantan",
          category: "forestRestoration",
          location: "Kalimantan Tengah",
          area: "800 hektar",
          farmers: 80,
          carbonPotential: "3,200 ton CO2e/tahun",
<<<<<<< HEAD
          status: "Aktif",
          startDate: "Maret 2023",
          description: "Program restorasi hutan gambut yang rusak dengan melibatkan masyarakat lokal dalam penanaman dan pemeliharaan.",
          highlights: [
            "Restorasi 800 hektar lahan gambut",
            "Penanaman 100,000 bibit pohon asli",
            "Pemberdayaan 80 keluarga petani",
            "Sistem monitoring berbasis satelit"
          ],
          certification: "VCS + Gold Standard",
=======
          startDate: "Maret 2024",
          description: "Rencana program restorasi hutan gambut yang rusak dengan melibatkan masyarakat lokal dalam penanaman dan pemeliharaan.",
          highlights: [
            "Target restorasi 800 hektar lahan gambut",
            "Rencana penanaman 100,000 bibit pohon asli",
            "Pemberdayaan 80 keluarga petani",
            "Sistem monitoring berbasis satelit"
          ],
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          image: "/images/project-kalimantan-peat.jpg"
        },
        {
          id: 3,
          title: "Pertanian Organik Terintegrasi Jawa Barat",
          category: "sustainableAgriculture",
          location: "Bandung, Jawa Barat",
          area: "600 hektar",
          farmers: 120,
          carbonPotential: "1,800 ton CO2e/tahun",
<<<<<<< HEAD
          status: "Aktif",
          startDate: "Juni 2023",
          description: "Transformasi pertanian konvensional menjadi sistem pertanian organik terintegrasi dengan teknologi precision farming.",
          highlights: [
            "Pengurangan penggunaan pupuk kimia 80%",
            "Implementasi IoT untuk monitoring tanah",
            "Sertifikasi organik SNI",
            "Pemasaran langsung ke konsumen"
          ],
          certification: "Plan Vivo",
=======
          startDate: "Juni 2024",
          description: "Rencana transformasi pertanian konvensional menjadi sistem pertanian organik terintegrasi dengan teknologi precision farming.",
          highlights: [
            "Target pengurangan penggunaan pupuk kimia 80%",
            "Implementasi IoT untuk monitoring tanah",
            "Program sertifikasi organik SNI",
            "Pemasaran langsung ke konsumen"
          ],
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          image: "/images/project-jabar-organic.jpg"
        },
        {
          id: 4,
          title: "Restorasi Mangrove Pesisir Sumatra",
          category: "mangroveRestoration",
          location: "Lampung, Sumatra",
          area: "400 hektar",
          farmers: 60,
          carbonPotential: "2,000 ton CO2e/tahun",
<<<<<<< HEAD
          status: "Perencanaan",
          startDate: "Oktober 2024",
          description: "Restorasi ekosistem mangrove yang rusak untuk melindungi pesisir dan meningkatkan serapan karbon biru.",
          highlights: [
            "Penanaman 200,000 bibit mangrove",
=======
          startDate: "Oktober 2024",
          description: "Rencana restorasi ekosistem mangrove yang rusak untuk melindungi pesisir dan meningkatkan serapan karbon biru.",
          highlights: [
            "Rencana penanaman 200,000 bibit mangrove",
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
            "Perlindungan 400 hektar pesisir",
            "Pengembangan ekowisata",
            "Pelatihan budidaya kepiting dan udang"
          ],
<<<<<<< HEAD
          certification: "VCS + CCB",
=======
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          image: "/images/project-sumatra-mangrove.jpg"
        },
        {
          id: 5,
          title: "Biogas Komunal Jawa Tengah",
          category: "renewableEnergy",
          location: "Semarang, Jawa Tengah",
          area: "50 unit",
          farmers: 200,
          carbonPotential: "1,500 ton CO2e/tahun",
<<<<<<< HEAD
          status: "Aktif",
          startDate: "Agustus 2023",
          description: "Pembangunan sistem biogas komunal dari limbah ternak untuk mengurangi emisi metana dan menyediakan energi bersih.",
          highlights: [
            "50 unit biogas komunal",
            "Pengolahan 500 ton limbah/bulan",
            "Penghematan biaya energi 60%",
            "Pupuk organik berkualitas tinggi"
          ],
          certification: "Gold Standard",
=======
          startDate: "Agustus 2024",
          description: "Rencana pembangunan sistem biogas komunal dari limbah ternak untuk mengurangi emisi metana dan menyediakan energi bersih.",
          highlights: [
            "Target 50 unit biogas komunal",
            "Pengolahan 500 ton limbah/bulan",
            "Target penghematan biaya energi 60%",
            "Produksi pupuk organik berkualitas tinggi"
          ],
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          image: "/images/project-jateng-biogas.jpg"
        }
      ]
    },
    en: {
<<<<<<< HEAD
      title: "Our Projects",
      subtitle: "Sustainable Carbon Project Portfolio Across Indonesia",
      hero: {
        description: "Explore various carbon projects we have developed with farmers and local communities. Each project is designed to provide positive environmental, economic, and social impact."
=======
      title: "Project Plans",
      subtitle: "Sustainable Carbon Project Plans Across Indonesia",
      hero: {
        description: "Explore various carbon project plans we will develop with farmers and local communities. Each project is designed to provide positive environmental, economic, and social impact."
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
      },
      stats: {
        totalProjects: "25+",
        totalFarmers: "500+",
        carbonSequestered: "10,000+",
        provinces: "15"
      },
      categories: {
        all: "All Projects",
        agroforestry: "Agroforestry",
        forestRestoration: "Forest Restoration",
        sustainableAgriculture: "Sustainable Agriculture",
        mangroveRestoration: "Mangrove Restoration",
        renewableEnergy: "Renewable Energy"
      },
      projects: [
        {
          id: 1,
          title: "Sustainable Coffee Agroforestry Aceh",
          category: "agroforestry",
          location: "Central Aceh, Aceh",
          area: "1,200 hectares",
          farmers: 150,
          carbonPotential: "2,400 tons CO2e/year",
<<<<<<< HEAD
          status: "Active",
          startDate: "January 2023",
          description: "Agroforestry project integrating coffee cultivation with shade tree planting to increase carbon sequestration and coffee quality.",
          highlights: [
            "Farmer income increase up to 40%",
            "Planting 50,000 shade trees",
            "Organic and fair trade certification",
            "Continuous training programs"
          ],
          certification: "VCS + CCB",
=======
          startDate: "January 2024",
          description: "Planned agroforestry project integrating coffee cultivation with shade tree planting to increase carbon sequestration and coffee quality.",
          highlights: [
            "Target farmer income increase up to 40%",
            "Planned planting of 50,000 shade trees",
            "Organic and fair trade certification program",
            "Continuous training programs"
          ],
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          image: "/images/project-aceh-coffee.jpg"
        },
        {
          id: 2,
          title: "Kalimantan Peatland Forest Restoration",
          category: "forestRestoration",
          location: "Central Kalimantan",
          area: "800 hectares",
          farmers: 80,
          carbonPotential: "3,200 tons CO2e/year",
<<<<<<< HEAD
          status: "Active",
          startDate: "March 2023",
          description: "Degraded peatland forest restoration program involving local communities in planting and maintenance.",
          highlights: [
            "Restoration of 800 hectares peatland",
            "Planting 100,000 native tree seedlings",
            "Empowerment of 80 farming families",
            "Satellite-based monitoring system"
          ],
          certification: "VCS + Gold Standard",
=======
          startDate: "March 2024",
          description: "Planned degraded peatland forest restoration program involving local communities in planting and maintenance.",
          highlights: [
            "Target restoration of 800 hectares peatland",
            "Planned planting of 100,000 native tree seedlings",
            "Empowerment of 80 farming families",
            "Satellite-based monitoring system"
          ],
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          image: "/images/project-kalimantan-peat.jpg"
        },
        {
          id: 3,
          title: "Integrated Organic Farming West Java",
          category: "sustainableAgriculture",
          location: "Bandung, West Java",
          area: "600 hectares",
          farmers: 120,
          carbonPotential: "1,800 tons CO2e/year",
<<<<<<< HEAD
          status: "Active",
          startDate: "June 2023",
          description: "Transformation of conventional farming to integrated organic farming system with precision farming technology.",
          highlights: [
            "80% reduction in chemical fertilizer use",
            "IoT implementation for soil monitoring",
            "SNI organic certification",
            "Direct marketing to consumers"
          ],
          certification: "Plan Vivo",
=======
          startDate: "June 2024",
          description: "Planned transformation of conventional farming to integrated organic farming system with precision farming technology.",
          highlights: [
            "Target 80% reduction in chemical fertilizer use",
            "IoT implementation for soil monitoring",
            "SNI organic certification program",
            "Direct marketing to consumers"
          ],
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          image: "/images/project-jabar-organic.jpg"
        },
        {
          id: 4,
          title: "Sumatra Coastal Mangrove Restoration",
          category: "mangroveRestoration",
          location: "Lampung, Sumatra",
          area: "400 hectares",
          farmers: 60,
          carbonPotential: "2,000 tons CO2e/year",
<<<<<<< HEAD
          status: "Planning",
          startDate: "October 2024",
          description: "Restoration of degraded mangrove ecosystems to protect coastlines and increase blue carbon sequestration.",
          highlights: [
            "Planting 200,000 mangrove seedlings",
=======
          startDate: "October 2024",
          description: "Planned restoration of degraded mangrove ecosystems to protect coastlines and increase blue carbon sequestration.",
          highlights: [
            "Planned planting of 200,000 mangrove seedlings",
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
            "Protection of 400 hectares coastline",
            "Ecotourism development",
            "Crab and shrimp farming training"
          ],
<<<<<<< HEAD
          certification: "VCS + CCB",
=======
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          image: "/images/project-sumatra-mangrove.jpg"
        },
        {
          id: 5,
          title: "Central Java Community Biogas",
          category: "renewableEnergy",
          location: "Semarang, Central Java",
          area: "50 units",
          farmers: 200,
          carbonPotential: "1,500 tons CO2e/year",
<<<<<<< HEAD
          status: "Active",
          startDate: "August 2023",
          description: "Community biogas system development from livestock waste to reduce methane emissions and provide clean energy.",
          highlights: [
            "50 community biogas units",
            "Processing 500 tons waste/month",
            "60% energy cost savings",
            "High-quality organic fertilizer"
          ],
          certification: "Gold Standard",
=======
          startDate: "August 2024",
          description: "Planned community biogas system development from livestock waste to reduce methane emissions and provide clean energy.",
          highlights: [
            "Target 50 community biogas units",
            "Processing 500 tons waste/month",
            "Target 60% energy cost savings",
            "High-quality organic fertilizer production"
          ],
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
          image: "/images/project-jateng-biogas.jpg"
        }
      ]
    }
  }

  const currentContent = content[language]

  const filteredProjects = selectedCategory === 'all' 
    ? currentContent.projects 
    : currentContent.projects.filter(project => project.category === selectedCategory)

<<<<<<< HEAD
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'aktif':
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'perencanaan':
      case 'planning':
        return 'bg-yellow-100 text-yellow-800'
      case 'selesai':
      case 'completed':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

=======
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'agroforestry':
        return <TreePine className="h-5 w-5" />
      case 'forestRestoration':
        return <Leaf className="h-5 w-5" />
      case 'sustainableAgriculture':
        return <Sprout className="h-5 w-5" />
      case 'mangroveRestoration':
        return <TreePine className="h-5 w-5" />
      case 'renewableEnergy':
        return <Zap className="h-5 w-5" />
      default:
        return <Leaf className="h-5 w-5" />
    }
  }

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

=======
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
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
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-teal mb-2">
                {currentContent.stats.totalProjects}
              </div>
              <div className="text-xl font-semibold text-primary-dark mb-2">
                {language === 'id' ? 'Total Proyek' : 'Total Projects'}
              </div>
              <p className="text-gray-600">
<<<<<<< HEAD
                {language === 'id' ? 'Proyek aktif dan selesai' : 'Active and completed projects'}
=======
                {language === 'id' ? 'Rencana proyek yang akan dikembangkan' : 'Project plans to be developed'}
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-teal mb-2">
                {currentContent.stats.totalFarmers}
              </div>
              <div className="text-xl font-semibold text-primary-dark mb-2">
<<<<<<< HEAD
                {language === 'id' ? 'Petani Mitra' : 'Partner Farmers'}
              </div>
              <p className="text-gray-600">
                {language === 'id' ? 'Petani yang terlibat' : 'Farmers involved'}
=======
                {language === 'id' ? 'Target Petani' : 'Target Farmers'}
              </div>
              <p className="text-gray-600">
                {language === 'id' ? 'Petani yang akan terlibat' : 'Farmers to be involved'}
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-teal mb-2">
                {currentContent.stats.carbonSequestered}
              </div>
              <div className="text-xl font-semibold text-primary-dark mb-2">
<<<<<<< HEAD
                {language === 'id' ? 'Ton CO2e' : 'Tons CO2e'}
              </div>
              <p className="text-gray-600">
                {language === 'id' ? 'Karbon yang diserap' : 'Carbon sequestered'}
=======
                {language === 'id' ? 'Target CO2e' : 'Target CO2e'}
              </div>
              <p className="text-gray-600">
                {language === 'id' ? 'Target karbon yang akan diserap' : 'Target carbon to be sequestered'}
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-teal mb-2">
                {currentContent.stats.provinces}
              </div>
              <div className="text-xl font-semibold text-primary-dark mb-2">
                {language === 'id' ? 'Provinsi' : 'Provinces'}
              </div>
              <p className="text-gray-600">
<<<<<<< HEAD
                {language === 'id' ? 'Jangkauan wilayah' : 'Regional coverage'}
=======
                {language === 'id' ? 'Target jangkauan wilayah' : 'Target regional coverage'}
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(currentContent.categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === key
                    ? 'bg-accent-teal text-white shadow-lg'
<<<<<<< HEAD
                    : 'bg-white text-gray-600 hover:bg-accent-teal hover:text-white shadow-md'
=======
                    : 'bg-white text-gray-700 hover:bg-accent-teal hover:text-white shadow-md border border-gray-200'
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
<<<<<<< HEAD
              <Card key={project.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
=======
              <Card key={project.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
                <div className="relative h-64 bg-gradient-to-br from-accent-green/20 to-accent-teal/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
<<<<<<< HEAD
                        {getCategoryIcon(project.category)}
=======
                        <div className="text-white">
                          {getCategoryIcon(project.category)}
                        </div>
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
                      </div>
                      <h4 className="text-lg font-semibold text-primary-dark">
                        {currentContent.categories[project.category]}
                      </h4>
                    </div>
                  </div>
<<<<<<< HEAD
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
=======
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-primary-dark">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-primary-dark">
                        {language === 'id' ? 'Luas Area:' : 'Area:'}
                      </span>
                      <br />
<<<<<<< HEAD
                      {project.area}
                    </div>
                    <div>
                      <span className="font-medium text-primary-dark">
                        {language === 'id' ? 'Petani:' : 'Farmers:'}
                      </span>
                      <br />
                      {project.farmers} {language === 'id' ? 'petani' : 'farmers'}
                    </div>
                    <div>
=======
                      <span className="text-gray-600">{project.area}</span>
                    </div>
                    <div>
                      <span className="font-medium text-primary-dark">
                        {language === 'id' ? 'Target Petani:' : 'Target Farmers:'}
                      </span>
                      <br />
                      <span className="text-gray-600">{project.farmers} {language === 'id' ? 'petani' : 'farmers'}</span>
                    </div>
                    <div className="col-span-2">
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
                      <span className="font-medium text-primary-dark">
                        {language === 'id' ? 'Potensi Karbon:' : 'Carbon Potential:'}
                      </span>
                      <br />
<<<<<<< HEAD
                      {project.carbonPotential}
                    </div>
                    <div>
                      <span className="font-medium text-primary-dark">
                        {language === 'id' ? 'Sertifikasi:' : 'Certification:'}
                      </span>
                      <br />
                      {project.certification}
=======
                      <span className="text-gray-600">{project.carbonPotential}</span>
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-primary-dark mb-2">
<<<<<<< HEAD
                      {language === 'id' ? 'Pencapaian Utama:' : 'Key Achievements:'}
=======
                      {language === 'id' ? 'Target Pencapaian:' : 'Target Achievements:'}
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
                    </h5>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-accent-teal mr-2 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
<<<<<<< HEAD
                  <div className="flex items-center justify-between pt-4 border-t">
=======
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.startDate}
                    </div>
<<<<<<< HEAD
                    <Button variant="outline" size="sm" className="hover:bg-accent-teal hover:text-white">
=======
                    <Button variant="outline" size="sm" className="hover:bg-accent-teal hover:text-white border-accent-teal text-accent-teal">
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
                      <Eye className="h-4 w-4 mr-2" />
                      {language === 'id' ? 'Detail' : 'Details'}
                    </Button>
                  </div>
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
              ? 'Ingin Bergabung dengan Proyek Kami?' 
              : 'Want to Join Our Projects?'
            }
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            {language === 'id'
              ? 'Mari bersama-sama menciptakan dampak positif untuk lingkungan dan masyarakat'
              : 'Let\'s create positive impact for the environment and community together'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
            <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
=======
            <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90 font-semibold">
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
              <a href="/untuk-petani#registration-form">
                {language === 'id' ? 'Daftarkan Lahan' : 'Register Land'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
<<<<<<< HEAD
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
=======
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark font-semibold">
>>>>>>> 5af6b8d82ad15b74efdd92ad035b05c45649552c
              <a href="/untuk-pembeli-karbon#registration-form">
                {language === 'id' ? 'Beli Kredit Karbon' : 'Buy Carbon Credits'}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurProjects

