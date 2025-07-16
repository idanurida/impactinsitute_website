// src/pages/Homepage.jsx

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// Input, Label, Select components are no longer needed for removed sections
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  TreePine,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Loader2 // Import Loader2 for loading spinner
} from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Homepage = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation
  const { lang } = useParams(); // Get current language from URL params

  // State for latest news from CMS
  const [latestNews, setLatestNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [newsError, setNewsError] = useState(null);

  // Fetch Latest News from WordPress CMS
  useEffect(() => {
    const fetchNews = async () => {
      setLoadingNews(true);
      setNewsError(null);
      try {
        // Menggunakan endpoint default WordPress untuk posts (berita/artikel)
        // Perhatikan: Untuk konten bilingual dari WP, Anda mungkin perlu plugin WPML/Polylang
        // atau custom field untuk setiap bahasa. 'lang' parameter di URL React tidak otomatis
        // diteruskan ke WP API kecuali Anda mengaturnya di WordPress.
        // Untuk saat ini, kita hanya mengambil posts standar.
        const response = await fetch(`https://impactinstitute.asia/wp-json/wp/v2/posts?per_page=3&_embed`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const mappedNews = data.map(post => ({
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...', // Hapus tag HTML dan potong
          date: new Date(post.date).toLocaleDateString(i18n.language === 'id' ? 'id-ID' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' }), // Format tanggal berdasarkan bahasa
          category: post._embedded?.['wp:term']?.[0]?.[0]?.name || t('general_category'), // Ambil kategori pertama, terjemahkan fallback
          link: post.link, // Link ke post di WordPress
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://placehold.co/300x200/CCCCCC/000000?text=' + t('image_error') // Featured image, terjemahkan fallback
        }));
        setLatestNews(mappedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsError(t('error_loading_news')); // Terjemahkan pesan error
      } finally {
        setLoadingNews(false);
      }
    };

    fetchNews();
  }, [lang, i18n.language, t]); // Tambahkan lang dan i18n.language ke dependency array agar fetch ulang saat bahasa berubah

  const featuredProjects = [
    {
      title: t('project_agroforestry_title'), // Terjemahkan
      location: t('project_agroforestry_location'), // Terjemahkan
      carbonSaved: '2,450 ton CO2e', // Ini mungkin data dinamis dari WP di masa depan
      farmers: 150,
      image: 'https://images.unsplash.com/photo-1627916597144-d4b9c1d0f5e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: t('project_mangrove_title'), // Terjemahkan
      location: t('project_mangrove_location'), // Terjemahkan
      carbonSaved: '3,200 ton CO2e',
      farmers: 89,
      image: 'https://images.unsplash.com/photo-1628170271578-8d2e8b2b7b7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: t('project_rubber_title'), // Terjemahkan
      location: t('project_rubber_location'), // Terjemahkan
      carbonSaved: '1,800 ton CO2e',
      farmers: 120,
      image: 'https://images.unsplash.com/photo-1616428456891-b6a2c7e0b5d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  const testimonials = [
    {
      name: 'Bapak Suryadi',
      role: t('testimonial_farmer_role_aceh'), // Terjemahkan
      content: t('testimonial_suryadi_content'), // Terjemahkan
      rating: 5
    },
    {
      name: 'Ibu Sari Dewi',
      role: t('testimonial_farmer_role_mangrove'), // Terjemahkan
      content: t('testimonial_sari_dewi_content'), // Terjemahkan
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero" // Tambahkan ID untuk navigasi hash
        className="relative bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white overflow-hidden
                   bg-[url('/WhatsApp_Image_2025-07-12_at_7.43.59_PM.jpg')] bg-cover bg-center"
      >
        {/* Overlay untuk membuat teks lebih mudah dibaca */}
        <div className="absolute inset-0 bg-black/50"></div> {/* Meningkatkan opacity overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-8"> {/* Added flex layout */}
          <div className="text-center lg:text-left space-y-8 lg:w-1/2"> {/* Adjusted width for text */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t('hero_title_part1')}<br />
              <span className="text-accent-green">{t('hero_title_part2')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl lg:max-w-none mx-auto">
              {t('hero_description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
                <Link to={`/${lang}/untuk-petani#daftar-lahan`}> {/* Update Link with lang prefix */}
                  {t('register_land_button')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
                <Link to={`/${lang}/bagaimana-kami-bekerja`}>{t('learn_more_button')}</Link> {/* Update Link with lang prefix */}
              </Button>
            </div>
          </div>
          {/* New Image element */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src="/path/to/your/hero-image.png" {/* Ganti dengan path gambar Anda */}
              alt={t('hero_image_alt_text')} {/* Terjemahkan teks alt */}
              className="w-full max-w-md lg:max-w-lg h-auto rounded-lg shadow-xl"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x300/CCCCCC/000000?text=" + t('image_error'); }}
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
            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('transparency_title')}</h3>
              <p className="text-gray-600">{t('transparency_desc')}</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('sustainability_title')}</h3>
              <p className="text-gray-600">{t('sustainability_desc')}</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('farmer_empowerment_title')}</h3>
              <p className="text-gray-600">{t('farmer_empowerment_desc')}</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('regulatory_compliance_title')}</h3>
              <p className="text-gray-600">{t('regulatory_compliance_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('how_it_works_title')}</h2>
            <p className="text-xl text-gray-600">{t('how_it_works_description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: t('step1_title'), desc: t('step1_desc') },
              { step: '2', title: t('step2_title'), desc: t('step2_desc') },
              { step: '3', title: t('step3_title'), desc: t('step3_desc') },
              { step: '4', title: t('step4_title'), desc: t('step4_desc') }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('featured_projects_title')}</h2>
            <p className="text-xl text-gray-600">{t('featured_projects_description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full object-cover rounded-t-lg"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/CCCCCC/000000?text=" + t('image_error'); }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.location}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{t('carbon_saved')}:</span>
                      <span className="font-semibold text-green-600">{project.carbonSaved}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{t('farmers_involved')}:</span>
                      <span className="font-semibold">{project.farmers} {t('farmers_unit')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to={`/${lang}/proyek-kami`}>{t('view_all_projects_button')}</Link> {/* Update Link with lang prefix */}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('testimonials_title')}</h2>
            <p className="text-xl text-gray-600">{t('testimonials_description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('latest_news_title')}</h2>
            <p className="text-xl text-gray-600">{t('latest_news_description')}</p>
          </div>

          {loadingNews ? (
            <div className="flex justify-center items-center h-48">
              <Loader2 className="h-8 w-8 animate-spin text-primary-dark" />
              <span className="ml-2 text-gray-600">{t('loading_news')}</span>
            </div>
          ) : newsError ? (
            <div className="text-center text-red-600">
              <p>{newsError}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestNews.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="aspect-video w-full object-cover rounded-t-lg"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/CCCCCC/000000?text=" + t('image_error'); }}
                  />
                  <CardContent className="p-6">
                    <div className="text-sm text-green-600 font-medium mb-2">{article.category}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                          {t('read_more_button')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to={`/${lang}/berita-edukasi`}>{t('view_all_articles_button')}</Link> {/* Update Link with lang prefix */}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <Link to={`/${lang}/untuk-petani`}> {/* Update Link with lang prefix */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart mr-2 h-5 w-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                {t('register_your_land_cta_button')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              <Link to={`/${lang}/kontak`}>{t('contact_us_cta_button')}</Link> {/* Update Link with lang prefix */}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
