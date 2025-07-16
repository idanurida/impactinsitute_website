// src/pages/Homepage.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DollarSign,
  Leaf,
  Users,
  Handshake,
  ShieldCheck,
  BarChart,
  ArrowRight,
  Lightbulb,
  CheckCircle,
  PiggyBank,
  Cloud,
  MapPin,
  CalendarDays,
  Newspaper,
  BookOpen,
  HeartHandshake
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Komponen halaman Beranda (Homepage).
 * Menampilkan informasi utama tentang Impact Institute, nilai-nilai,
 * cara kerja, proyek unggulan, testimoni, dan berita terbaru.
 */
const Homepage = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const whyChooseUs = [
    {
      icon: Handshake,
      title: t('transparency_title'),
      description: t('transparency_desc')
    },
    {
      icon: Leaf,
      title: t('sustainability_title'),
      description: t('sustainability_desc')
    },
    {
      icon: Users,
      title: t('farmer_empowerment_title'),
      description: t('farmer_empowerment_desc')
    },
    {
      icon: ShieldCheck,
      title: t('regulatory_compliance_title'),
      description: t('regulatory_compliance_desc')
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: t('step1_title'),
      description: t('step1_desc')
    },
    {
      step: '2',
      title: t('step2_title'),
      description: t('step2_desc')
    },
    {
      step: '3',
      title: t('step3_title'),
      description: t('step3_desc')
    },
    {
      step: '4',
      title: t('step4_title'),
      description: t('step4_desc')
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      name: t('project_agroforestry_title'),
      location: t('project_agroforestry_location'),
      carbonSaved: '2,450 ton CO2e',
      farmersImpacted: 150,
      imageUrl: 'https://placehold.co/600x400/0E2C40/C1E1A7?text=' + t('project_agroforestry_title')
    },
    {
      id: 2,
      name: t('project_mangrove_title'),
      location: t('project_mangrove_location'),
      carbonSaved: '3,200 ton CO2e',
      farmersImpacted: 89,
      imageUrl: 'https://placehold.co/600x400/1A4A5A/EFBC75?text=' + t('project_mangrove_title')
    },
    {
      id: 3,
      name: t('project_rubber_title'),
      location: t('project_rubber_location'),
      carbonSaved: '1,800 ton CO2e',
      farmersImpacted: 120,
      imageUrl: 'https://placehold.co/600x400/148D8D/0E2C40?text=' + t('project_rubber_title')
    }
  ];

  const testimonials = [
    {
      name: 'Suryadi',
      role: t('testimonial_farmer_role_aceh'),
      content: t('testimonial_suryadi_content')
    },
    {
      name: 'Sari Dewi',
      role: t('testimonial_farmer_role_mangrove'),
      content: t('testimonial_sari_dewi_content')
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: t('article1_title'),
      excerpt: t('article1_excerpt'),
      date: '15 Juli 2025',
      category: t('category_regulation')
    },
    {
      id: 2,
      title: t('article2_title'),
      excerpt: t('article2_excerpt'),
      date: '12 Juli 2025',
      category: t('category_education')
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t('hero_title_part1')}<br />
              <span className="text-accent-green">{t('hero_title_part2')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              {t('hero_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
                <Link to={`/${lang}/tentang-kami`}>
                  {t('learn_more_button')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
                <Link to={`/${lang}/untuk-petani`}>{t('register_land_button')}</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src="https://placehold.co/600x400/0E2C40/C1E1A7?text=Sustainable+Agriculture"
              alt={t('hero_image_alt_text')}
              className="w-full max-w-md lg:max-w-lg h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('why_choose_us_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('why_choose_us_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('how_it_works_title')}</h2>
            <p className="text-xl text-gray-600">{t('how_it_works_description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <Card key={index} className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('featured_projects_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('featured_projects_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/CCCCCC/000000?text=" + t('image_error'); }}
                />
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{project.name}</CardTitle>
                  <p className="text-gray-600 flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-1 text-green-600" /> {project.location}
                  </p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center"><Cloud className="h-4 w-4 mr-1 text-green-600" /> {t('carbon_saved')}:</span>
                    <span className="font-semibold">{project.carbonSaved}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center"><Users className="h-4 w-4 mr-1 text-green-600" /> {t('farmers_involved')}:</span>
                    <span className="font-semibold">{project.farmersImpacted} {t('farmers_unit')}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-4 bg-green-50 text-green-700 hover:bg-green-100">
                    <Link to={`/${lang}/proyek-kami/${project.id}`}>
                      {t('view_project_details_button')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary-dark hover:bg-primary-medium">
              <Link to={`/${lang}/proyek-kami`}>
                {t('view_all_projects_button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('testimonials_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('testimonials_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card shadow-md">
                <CardContent>
                  <p className="text-lg text-gray-700 italic mb-4">"{testimonial.content}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('latest_news_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('latest_news_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news, index) => (
              <Card key={index} className="flex flex-col md:flex-row items-start p-6 bg-card shadow-md">
                <div className="flex-shrink-0 mr-4">
                  <Newspaper className="h-10 w-10 text-primary-dark" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{news.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{news.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarDays className="h-4 w-4 mr-1" /> {news.date}
                    <span className="mx-2">|</span>
                    <BookOpen className="h-4 w-4 mr-1" /> {news.category}
                  </div>
                  <Button asChild variant="link" className="p-0 h-auto mt-2 text-primary-dark hover:text-accent-teal">
                    <Link to={`/${lang}/berita-edukasi/${news.id}`}>
                      {t('read_more_button')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary-dark hover:bg-primary-medium">
              <Link to={`/${lang}/berita-edukasi`}>
                {t('view_all_articles_button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cta_title')}
          </h2>
          <p className="text-xl text-green-100 mb-8">
            {t('cta_description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50">
              <Link to={`/${lang}/untuk-petani`}>
                <HeartHandshake className="mr-2 h-5 w-5" />
                {t('register_your_land_cta_button')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              <Link to={`/${lang}/kontak`}>
                <Cloud className="mr-2 h-5 w-5" />
                {t('contact_us_cta_button')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
