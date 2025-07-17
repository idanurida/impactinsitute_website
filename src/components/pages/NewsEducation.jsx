import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, BookOpen, Newspaper, Video, Download } from 'lucide-react'

const NewsEducation = () => {
  const [language, setLanguage] = useState('id')
  const [activeTab, setActiveTab] = useState('news')

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
      heroTitle: "Berita & Edukasi",
      heroSubtitle: "Informasi terkini dan materi edukasi tentang pertanian berkelanjutan",
      newsTab: "Berita",
      educationTab: "Edukasi",
      resourcesTab: "Sumber Daya",
      latestNews: "Berita Terbaru",
      educationalContent: "Konten Edukasi",
      downloadResources: "Unduh Sumber Daya",
      readMore: "Baca Selengkapnya",
      watchVideo: "Tonton Video",
      downloadPdf: "Unduh PDF",
      noContent: "Konten akan segera tersedia melalui sistem manajemen WordPress.",
      cmsNote: "Halaman ini akan dikelola melalui WordPress CMS untuk memudahkan update konten secara berkala.",
      categories: {
        news: "Berita",
        articles: "Artikel",
        videos: "Video",
        guides: "Panduan",
        research: "Penelitian"
      }
    },
    en: {
      heroTitle: "News & Education",
      heroSubtitle: "Latest information and educational materials about sustainable agriculture",
      newsTab: "News",
      educationTab: "Education",
      resourcesTab: "Resources",
      latestNews: "Latest News",
      educationalContent: "Educational Content",
      downloadResources: "Download Resources",
      readMore: "Read More",
      watchVideo: "Watch Video",
      downloadPdf: "Download PDF",
      noContent: "Content will be available soon through WordPress management system.",
      cmsNote: "This page will be managed through WordPress CMS for easy regular content updates.",
      categories: {
        news: "News",
        articles: "Articles",
        videos: "Videos",
        guides: "Guides",
        research: "Research"
      }
    }
  }

  const currentContent = content[language]

  // Sample content structure for WordPress integration
  const sampleNews = [
    {
      id: 1,
      title: language === 'id' ? "Inovasi Terbaru dalam Pertanian Berkelanjutan" : "Latest Innovations in Sustainable Agriculture",
      excerpt: language === 'id' ? "Teknologi baru yang membantu petani meningkatkan produktivitas sambil menjaga lingkungan..." : "New technology helping farmers increase productivity while protecting the environment...",
      date: "2025-01-15",
      author: "Tim Impact Institute",
      category: "news",
      image: "/images/news-placeholder.jpg"
    },
    {
      id: 2,
      title: language === 'id' ? "Panduan Praktis Agroforestri untuk Petani" : "Practical Agroforestry Guide for Farmers",
      excerpt: language === 'id' ? "Langkah-langkah mudah menerapkan sistem agroforestri di lahan pertanian..." : "Easy steps to implement agroforestry systems in agricultural land...",
      date: "2025-01-10",
      author: "Dr. Agus Santoso",
      category: "education",
      image: "/images/education-placeholder.jpg"
    }
  ]

  const sampleResources = [
    {
      id: 1,
      title: language === 'id' ? "Panduan Lengkap Pertanian Berkelanjutan" : "Complete Guide to Sustainable Agriculture",
      type: "PDF",
      size: "2.5 MB",
      description: language === 'id' ? "Panduan komprehensif untuk memulai praktik pertanian berkelanjutan" : "Comprehensive guide to start sustainable farming practices"
    },
    {
      id: 2,
      title: language === 'id' ? "Video Tutorial Kompos Organik" : "Organic Compost Video Tutorial",
      type: "Video",
      duration: "15 min",
      description: language === 'id' ? "Tutorial langkah demi langkah membuat kompos organik" : "Step-by-step tutorial for making organic compost"
    }
  ]

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

      {/* WordPress CMS Integration Notice */}
      <section className="py-8 bg-accent-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-accent-teal/10 px-4 py-2 rounded-full">
              <BookOpen className="w-5 h-5 text-accent-teal" />
              <span className="text-accent-teal font-medium">{currentContent.cmsNote}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('news')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'news'
                  ? 'bg-accent-teal text-white'
                  : 'text-gray-600 hover:text-accent-teal'
              }`}
            >
              <Newspaper className="w-5 h-5" />
              <span>{currentContent.newsTab}</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'education'
                  ? 'bg-accent-teal text-white'
                  : 'text-gray-600 hover:text-accent-teal'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>{currentContent.educationTab}</span>
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'resources'
                  ? 'bg-accent-teal text-white'
                  : 'text-gray-600 hover:text-accent-teal'
              }`}
            >
              <Download className="w-5 h-5" />
              <span>{currentContent.resourcesTab}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* News Tab */}
          {activeTab === 'news' && (
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-8 text-center">
                {currentContent.latestNews}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sampleNews.filter(item => item.category === 'news').map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-accent-teal to-primary-medium"></div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-primary-dark mb-3">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                      <Button variant="outline" className="w-full">
                        {currentContent.readMore}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-8 text-center">
                {currentContent.educationalContent}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sampleNews.filter(item => item.category === 'education').map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-accent-green to-accent-teal"></div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-primary-dark mb-3">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                      <Button variant="outline" className="w-full">
                        {currentContent.readMore}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-8 text-center">
                {currentContent.downloadResources}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {sampleResources.map((resource) => (
                  <Card key={resource.id} className="p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent-orange rounded-lg flex items-center justify-center">
                          {resource.type === 'PDF' ? (
                            <Download className="w-6 h-6 text-white" />
                          ) : (
                            <Video className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-primary-dark mb-2">
                            {resource.title}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {resource.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              {resource.type} • {resource.size || resource.duration}
                            </span>
                            <Button size="sm" className="bg-accent-teal hover:bg-accent-teal/90">
                              {resource.type === 'PDF' ? currentContent.downloadPdf : currentContent.watchVideo}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* WordPress Integration Notice */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-accent-teal/10 to-primary-medium/10">
              <CardContent className="pt-6">
                <BookOpen className="w-12 h-12 text-accent-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  WordPress CMS Integration
                </h3>
                <p className="text-gray-600">
                  {currentContent.noContent}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsEducation

