import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Leaf, Users, Award, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  const [language, setLanguage] = useState('id')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'id'
    setLanguage(savedLanguage)
  }, [])

  const content = {
    id: {
      heroTitle: "Bersama Petani Indonesia",
      heroSubtitle: "Menjadi Solusi Iklim",
      heroDescription: "Impact Institute menghubungkan petani Indonesia dengan praktik pertanian berkelanjutan untuk menciptakan dampak positif bagi lingkungan dan ekonomi masyarakat.",
      registerLand: "Daftarkan Lahan",
      learnMore: "Pelajari Lebih Lanjut",
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
      agricultureConsultation: { // Keeping 'agricultureConsultation' as per user's provided content object
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
      ctaTitle: "Bergabunglah dengan Gerakan Pertanian Berkelanjutan", // Keeping ctaTitle
      ctaSubtitle: "Mari bersama-sama menciptakan dampak positif untuk lingkungan dan masyarakat" // Keeping ctaSubtitle
    },
    en: {
      heroTitle: "Together with Indonesian Farmers",
      heroSubtitle: "Becoming Climate Solutions",
      heroDescription: "Impact Institute connects Indonesian farmers with sustainable agricultural practices to create positive impacts for the environment and community economy.",
      registerLand: "Register Land",
      learnMore: "Learn More",
      whyChooseTitle: "Why Choose Impact Institute?",
      whyChooseSubtitle: "We are committed to providing the best solutions for sustainable agriculture",
      sustainablePractices: {
        title: "Sustainable Practices",
        description: "Implementing environmentally friendly farming methods and increasing land productivity"
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
        description: "Contributing to climate change solutions through sustainable agricultural practices"
      },
      servicesTitle: "Our Services",
      servicesSubtitle: "Comprehensive solutions for sustainable agriculture",
      agricultureConsultation: { // Keeping 'agricultureConsultation' as per user's provided content object
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
      ctaTitle: "Join the Sustainable Agriculture Movement", // Keeping ctaTitle
      ctaSubtitle: "Let's work together to create positive impact for the environment and society" // Keeping ctaSubtitle
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden"> {/* Merged remote's overflow-hidden */}
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-farmers.webp)',
          }}
        >
          {/* Overlay - Using remote's gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-medium/70 to-accent-teal/60"></div>
        </div>

        {/* Additional gradient overlay */}
        {/* Keeping this existing gradient overlay as it was already outside the conflict block */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-medium/70 to-accent-teal/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {currentContent.heroTitle}<br />
              <span className="text-accent-green">{currentContent.heroSubtitle}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
              {currentContent.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Button 1: Using local content key with remote's styling and link target */}
              <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90 font-semibold text-lg px-8 py-4">
                <Link to="/untuk-petani#registration-form">{currentContent.registerLand}</Link>
              </Button>
              {/* Button 2: Using local content key with remote's styling and link target */}
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-dark font-semibold text-lg px-8 py-4">
                <Link to="/bagaimana-kami-bekerja">{currentContent.learnMore}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.whyChooseTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.whyChooseSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.sustainablePractices.title}
                </h3>
                <p className="text-gray-600">
                  {currentContent.sustainablePractices.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.farmerEmpowerment.title}
                </h3>
                <p className="text-gray-600">
                  {currentContent.farmerEmpowerment.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.trustedCertification.title}
                </h3>
                <p className="text-gray-600">
                  {currentContent.trustedCertification.description}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {currentContent.globalImpact.title}
                </h3>
                <p className="text-gray-600">
                  {currentContent.globalImpact.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.servicesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.servicesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  {currentContent.agricultureConsultation.title} {/* Keeping user's content key */}
                </h3>
                <p className="text-gray-600 text-lg"> {/* Adopted remote's text-lg */}
                  {currentContent.agricultureConsultation.description} {/* Keeping user's content key */}
                </p>
                <Button asChild className="bg-accent-teal hover:bg-accent-teal/90 text-white">
                  <Link to="/bagaimana-kami-bekerja">
                    {currentContent.learnMore} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  {currentContent.trainingMentoring.title}
                </h3>
                <p className="text-gray-600 text-lg"> {/* Adopted remote's text-lg */}
                  {currentContent.trainingMentoring.description}
                </p>
                <Button asChild className="bg-accent-teal hover:bg-accent-teal/90 text-white">
                  <Link to="/bagaimana-kami-bekerja">
                    {currentContent.learnMore} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-accent-teal" />
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  {currentContent.projectCertification.title}
                </h3>
                <p className="text-gray-600 text-lg"> {/* Adopted remote's text-lg */}
                  {currentContent.projectCertification.description}
                </p>
                <Button asChild className="bg-accent-teal hover:bg-accent-teal/90 text-white">
                  <Link to="/bagaimana-kami-bekerja">
                    {currentContent.learnMore} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-accent-teal to-primary-medium text-white"> {/* Adopted remote's gradient */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {currentContent.achievementsTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-green mb-2">500+</div> {/* Keeping user's text-accent-green */}
              <div className="text-xl text-gray-200">{currentContent.farmerPartners}</div> {/* Keeping user's text-gray-200 */}
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-green mb-2">25+</div> {/* Keeping user's text-accent-green */}
              <div className="text-xl text-gray-200">{currentContent.activeProjects}</div> {/* Keeping user's text-gray-200 */}
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-green mb-2">15</div> {/* Keeping user's text-accent-green */}
              <div className="text-xl text-gray-200">{currentContent.provinces}</div> {/* Keeping user's text-gray-200 */}
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-green mb-2">10,000+</div> {/* Keeping user's text-accent-green */}
              <div className="text-xl text-gray-200">{currentContent.hectares}</div> {/* Keeping user's text-gray-200 */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.featuredProjectsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.featuredProjectsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(/images/kopi.webp)'}}></div> {/* Keeping user's background image */}
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">
                  Agroforestri Kopi Berkelanjutan
                </h3>
                <p className="text-gray-600 mb-4">Aceh Tengah</p>
                <div className="space-y-2"> {/* Adopted remote's structured div */}
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Dampak:</span>
                    <span className="text-sm font-medium">150 petani terlibat</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Luas Area:</span>
                    <span className="text-sm font-medium">1,200 hektar</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(/images/mangrove.webp)'}}></div> {/* Keeping user's background image */}
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">
                  Restorasi Hutan Mangrove
                </h3>
                <p className="text-gray-600 mb-4">Lampung Timur</p>
                <div className="space-y-2"> {/* Adopted remote's structured div */}
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Dampak:</span>
                    <span className="text-sm font-medium">89 petani terlibat</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Luas Area:</span>
                    <span className="text-sm font-medium">800 hektar</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(/images/karet.webp)'}}></div> {/* Keeping user's background image */}
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-dark mb-2">
                  Perkebunan Karet Ramah Lingkungan
                </h3>
                <p className="text-gray-600 mb-4">Jambi</p>
                <div className="space-y-2"> {/* Adopted remote's structured div */}
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Dampak:</span>
                    <span className="text-sm font-medium">120 petani terlibat</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Luas Area:</span>
                    <span className="text-sm font-medium">600 hektar</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.testimonialsTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.testimonialsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  {/* Adopted remote's user info structure */}
                  <div className="w-12 h-12 bg-accent-teal rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark">Bapak Suryadi</h4>
                    <p className="text-sm text-gray-500">Petani Kopi, Aceh</p>
                  </div>
                </div>
                <p className="text-gray-600 italic"> {/* Adopted remote's italic */}
                  "Berkat Impact Institute, hasil panen kopi saya meningkat 40% dan saya mendapat pengetahuan baru tentang pertanian berkelanjutan."
                </p>
                {/* Removed the redundant border-t pt-4 div here */}
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  {/* Adopted remote's user info structure */}
                  <div className="w-12 h-12 bg-accent-teal rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark">Ibu Sari</h4>
                    <p className="text-sm text-gray-500">Petani Sayuran, Jawa Barat</p>
                  </div>
                </div>
                <p className="text-gray-600 italic"> {/* Adopted remote's italic */}
                  "Program pelatihan yang diberikan sangat membantu. Sekarang saya bisa menerapkan teknologi modern di lahan saya."
                </p>
                {/* Removed the redundant border-t pt-4 div here */}
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-center mb-4">
                  {/* Adopted remote's user info structure */}
                  <div className="w-12 h-12 bg-accent-teal rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-dark">Bapak Ahmad</h4>
                    <p className="text-sm text-gray-500">Petani Karet, Jambi</p>
                  </div>
                </div>
                <p className="text-gray-600 italic"> {/* Adopted remote's italic */}
                  "Pendampingan dari tim Impact Institute membuat usaha tani saya lebih efisien dan ramah lingkungan."
                </p>
                {/* Removed the redundant border-t pt-4 div here */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-accent-teal text-white"> {/* Adopted remote's gradient */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {currentContent.ctaTitle} {/* Keeping user's content key */}
          </h2>
          <p className="text-xl mb-8 opacity-90"> {/* Adopted remote's opacity-90 */}
            {currentContent.ctaSubtitle} {/* Keeping user's content key */}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Button 1: Using local content key with remote's styling and link target */}
            <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90 font-semibold text-lg px-8 py-4">
              <Link to="/untuk-petani#registration-form">{currentContent.registerLand}</Link>
            </Button>
            {/* Button 2: Using remote's hardcoded text and styling, with local link target */}
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-dark font-semibold text-lg px-8 py-4">
              <Link to="/kontak">{language === 'id' ? 'Hubungi Kami' : 'Contact Us'}</Link> {/* Using remote's hardcoded text for clarity */}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
