// src/pages/Homepage.jsx

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  TreePine,
  TrendingUp,
  Users,
  Shield,
  Calculator,
  ArrowRight,
  CheckCircle,
  Globe,
  BarChart3,
  Heart,
  Star,
  Loader2 // Import Loader2 for loading spinner
} from 'lucide-react'

const Homepage = () => {
  const [carbonData, setCarbonData] = useState({
    globalPrice: 85.50,
    indonesiaPrice: 12.75,
    trend: '+2.3%'
  })

  const [calculatorData, setCalculatorData] = useState({
    landType: '',
    landSize: '',
    projectAge: '',
    carbonPrice: 12.75
  })

  const [calculatorResult, setCalculatorResult] = useState(null)

  // State untuk data produk dan berita dari CMS
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [productError, setProductError] = useState(null);

  const [latestNews, setLatestNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [newsError, setNewsError] = useState(null);

  // Simulate real-time carbon price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCarbonData(prev => ({
        ...prev,
        globalPrice: prev.globalPrice + (Math.random() - 0.5) * 2,
        indonesiaPrice: prev.indonesiaPrice + (Math.random() - 0.5) * 0.5
      }))
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  // Fetch Featured Products from WordPress CMS
  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      setProductError(null);
      try {
        // Ganti URL ini dengan endpoint REST API produk WordPress Anda yang sebenarnya
        // Anda perlu membuat custom endpoint di WordPress untuk produk
        const response = await fetch('https://impactinstitute.asia/wp-json/custom/v1/products?per_page=4'); // Contoh endpoint kustom
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Asumsi struktur data: [{ id, title, price, rating, image_url, description }]
        // Sesuaikan pemetaan ini dengan struktur respons API WordPress Anda
        const mappedProducts = data.map(item => ({
          name: item.title.rendered || item.name,
          price: item.price || 'Harga Tidak Tersedia',
          rating: item.rating || 0,
          image: item.image_url || 'https://placehold.co/300x200/CCCCCC/000000?text=Produk', // Fallback image
        }));
        setFeaturedProducts(mappedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProductError("Gagal memuat produk. Silakan coba lagi nanti.");
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  // Fetch Latest News from WordPress CMS
  useEffect(() => {
    const fetchNews = async () => {
      setLoadingNews(true);
      setNewsError(null);
      try {
        // Menggunakan endpoint default WordPress untuk posts (berita/artikel)
        const response = await fetch('https://impactinstitute.asia/wp-json/wp/v2/posts?per_page=3&_embed'); // _embed untuk mendapatkan featured image dan data lainnya
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const mappedNews = data.map(post => ({
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...', // Hapus tag HTML dan potong
          date: new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
          category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Umum', // Ambil kategori pertama
          link: post.link, // Link ke post di WordPress
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://placehold.co/300x200/CCCCCC/000000?text=Berita' // Featured image
        }));
        setLatestNews(mappedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsError("Gagal memuat berita. Silakan coba lagi nanti.");
      } finally {
        setLoadingNews(false);
      }
    };

    fetchNews();
  }, []);


  const calculateCarbon = () => {
    if (!calculatorData.landType || !calculatorData.landSize) return

    // Simplified calculation based on land type
    const carbonFactors = {
      'hutan-primer': 15,
      'hutan-sekunder': 12,
      'agroforestri': 8,
      'perkebunan-kopi': 6,
      'perkebunan-karet': 10,
      'lahan-restorasi': 14,
      'pertanian-kering': 4
    }

    const factor = carbonFactors[calculatorData.landType] || 5
    const annualCarbon = parseFloat(calculatorData.landSize) * factor
    const annualValue = annualCarbon * calculatorData.carbonPrice

    setCalculatorResult({
      carbonTons: annualCarbon.toFixed(2),
      annualValue: annualValue.toLocaleString('id-ID')
    })
  }

  const featuredProjects = [
    {
      title: 'Agroforestri Kopi Berkelanjutan',
      location: 'Aceh Tengah',
      carbonSaved: '2,450 ton CO2e',
      farmers: 150,
      // Gambar dari pencarian Google: agroforestri kopi
      image: 'https://images.unsplash.com/photo-1627916597144-d4b9c1d0f5e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Restorasi Hutan Mangrove',
      location: 'Lampung Timur',
      carbonSaved: '3,200 ton CO2e',
      farmers: 89,
      // Gambar dari pencarian Google: restorasi hutan mangrove
      image: 'https://images.unsplash.com/photo-1628170271578-8d2e8b2b7b7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Perkebunan Karet Ramah Lingkungan',
      location: 'Jambi',
      carbonSaved: '1,800 ton CO2e',
      farmers: 120,
      // Gambar dari pencarian Google: perkebunan karet
      image: 'https://images.unsplash.com/photo-1616428456891-b6a2c7e0b5d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  const testimonials = [
    {
      name: 'Bapak Suryadi',
      role: 'Petani Kopi, Aceh',
      content: 'Bergabung dengan Impact Institute memberikan penghasilan tambahan dari lahan kopi saya. Sekarang saya bisa menjual karbon dan kopi dengan harga yang lebih baik.',
      rating: 5
    },
    {
      name: 'Ibu Sari Dewi',
      role: 'Kelompok Tani Mangrove',
      content: 'Program restorasi mangrove tidak hanya membantu lingkungan, tapi juga meningkatkan ekonomi komunitas kami. Terima kasih Impact Institute!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white overflow-hidden
                   bg-[url('/WhatsApp_Image_2025-07-12_at_7.43.59_PM.jpg')] bg-cover bg-center"
      >
        {/* Overlay untuk membuat teks lebih mudah dibaca */}
        <div className="absolute inset-0 bg-black/50"></div> {/* Meningkatkan opacity overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Mengubah Lahan Pertanian<br />
              <span className="text-accent-green">Menjadi Solusi Iklim</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Bergabunglah dengan gerakan karbon positif. Dapatkan nilai tambah ekonomi dari praktik pertanian berkelanjutan
              sambil berkontribusi pada solusi perubahan iklim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
                <Link to="/untuk-petani#daftar-lahan"> {/* Mengarahkan ke section form pendaftaran lahan */}
                  Daftarkan Lahan Anda
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
                <Link to="/bagaimana-kami-bekerja">Pelajari Lebih Lanjut</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan solusi transparan, berkelanjutan, dan menguntungkan untuk semua pihak
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Transparansi Penuh</h3>
              <p className="text-gray-600">Sistem monitoring dan pelaporan yang transparan dengan verifikasi independen</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                {/* Menggunakan TreePine sebagai pengganti Leaf/Forest */}
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Keberlanjutan</h3>
              <p className="text-gray-600">Praktik pertanian yang ramah lingkungan dan berkelanjutan jangka panjang</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Pemberdayaan Petani</h3>
              <p className="text-gray-600">Meningkatkan kesejahteraan petani melalui pendapatan tambahan dan pelatihan</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Kepatuhan Regulasi</h3>
              <p className="text-gray-600">Memenuhi standar internasional dan regulasi karbon Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Carbon Market Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-time Carbon Market Insights
            </h2>
            <p className="text-xl text-gray-600">
              Pantau pergerakan harga karbon global dan Indonesia secara real-time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span>Harga Karbon Global</span>
                </CardTitle>
                <CardDescription>EU ETS & California Cap-and-Trade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-blue-600">
                    ${carbonData.globalPrice.toFixed(2)} <span className="text-sm text-gray-500">per ton CO2e</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-500 font-medium">{carbonData.trend}</span>
                    <span className="text-gray-500 text-sm">24h</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  <span>Harga Karbon Indonesia</span>
                </CardTitle>
                <CardDescription>IDX Carbon & OTC Market</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-green-600">
                    ${carbonData.indonesiaPrice.toFixed(2)} <span className="text-sm text-gray-500">per ton CO2e</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-500 font-medium">+1.8%</span>
                    <span className="text-gray-500 text-sm">24h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            Data diperbarui setiap 15 menit. Sumber: Trading Platform Internasional & IDX Carbon
          </div>
        </div>
      </section>

      {/* Carbon Potential Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kalkulator Potensi Karbon Anda
            </h2>
            <p className="text-xl text-gray-600">
              Dapatkan estimasi potensi serapan karbon dan nilai ekonomi dari lahan Anda
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5 text-green-600" />
                <span>Estimasi Potensi Karbon</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="landType">Jenis Tutupan Lahan</Label>
                  <Select value={calculatorData.landType} onValueChange={(value) =>
                    setCalculatorData(prev => ({ ...prev, landType: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis lahan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hutan-primer">Hutan Primer</SelectItem>
                      <SelectItem value="hutan-sekunder">Hutan Sekunder</SelectItem>
                      <SelectItem value="agroforestri">Agroforestri</SelectItem>
                      <SelectItem value="perkebunan-kopi">Perkebunan Kopi</SelectItem>
                      <SelectItem value="perkebunan-karet">Perkebunan Karet</SelectItem>
                      <SelectItem value="lahan-restorasi">Lahan Restorasi</SelectItem>
                      <SelectItem value="pertanian-kering">Pertanian Lahan Kering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="landSize">Luas Lahan (Hektar)</Label>
                  <Input
                    id="landSize"
                    type="number"
                    placeholder="Masukkan luas lahan"
                    value={calculatorData.landSize}
                    onChange={(e) => setCalculatorData(prev => ({ ...prev, landSize: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectAge">Umur Proyek (Tahun)</Label>
                  <Input
                    id="projectAge"
                    type="number"
                    placeholder="Umur tanaman/proyek"
                    value={calculatorData.projectAge}
                    onChange={(e) => setCalculatorData(prev => ({ ...prev, projectAge: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="carbonPrice">Harga Karbon (USD/ton CO2e)</Label>
                  <Input
                    id="carbonPrice"
                    type="number"
                    step="0.01"
                    value={calculatorData.carbonPrice}
                    onChange={(e) => setCalculatorData(prev => ({ ...prev, carbonPrice: parseFloat(e.target.value) }))}
                  />
                </div>
              </div>

              <Button onClick={calculateCarbon} className="w-full bg-green-600 hover:bg-green-700">
                Hitung Potensi Karbon
              </Button>

              {calculatorResult && (
                <div className="bg-green-50 p-6 rounded-lg space-y-4">
                  {calculatorResult.error ? (
                    <p className="text-red-600 text-center font-semibold">{calculatorResult.error}</p>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-green-800">Hasil Estimasi:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-green-600">Perkiraan Serapan Karbon per Tahun</p>
                          <p className="text-2xl font-bold text-green-800">{calculatorResult.carbonTons} ton CO2e</p>
                        </div>
                        <div>
                          <p className="text-sm text-green-600">Perkiraan Nilai Ekonomi per Tahun</p>
                          <p className="text-2xl font-bold text-green-800">Rp {calculatorResult.annualValue}</p>
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
                        <p className="text-sm text-yellow-800">
                          <strong>Disclaimer:</strong> Ini adalah perkiraan awal dan bukan jaminan.
                          Nilai sebenarnya akan ditentukan setelah verifikasi dan validasi proyek.
                        </p>
                      </div>
                      <Button asChild className="w-full">
                        <Link to="/untuk-petani#daftar-lahan">Daftarkan Lahan untuk Analisis Lebih Lanjut</Link>
                      </Button>
                    </>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bagaimana Ini Bekerja?</h2>
            <p className="text-xl text-gray-600">Proses sederhana dari pendaftaran hingga penjualan karbon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Daftar & Verifikasi', desc: 'Daftarkan lahan Anda dan lakukan verifikasi kelayakan' },
              { step: '2', title: 'Pengembangan Proyek', desc: 'Kami membantu mengembangkan proyek karbon yang sesuai' },
              { step: '3', title: 'Monitoring & Pelaporan', desc: 'Pemantauan berkala dan pelaporan progres proyek' },
              { step: '4', title: 'Penjualan & Pembagian', desc: 'Penjualan unit karbon dan pembagian keuntungan' }
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

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
            <p className="text-xl text-gray-600">Produk berkualitas tinggi dari petani mitra kami</p>
          </div>

          {loadingProducts ? (
            <div className="flex justify-center items-center h-48">
              <Loader2 className="h-8 w-8 animate-spin text-primary-dark" />
              <span className="ml-2 text-gray-600">Memuat produk...</span>
            </div>
          ) : productError ? (
            <div className="text-center text-red-600">
              <p>{productError}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full object-cover rounded-t-lg"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x200/CCCCCC/000000?text=Image+Error"; }}
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600">{product.price}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/marketplace">Lihat Semua Produk</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyek Unggulan</h2>
            <p className="text-xl text-gray-600">Lihat dampak nyata dari proyek-proyek karbon kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full object-cover rounded-t-lg"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/CCCCCC/000000?text=Image+Error"; }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.location}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Karbon Tersimpan:</span>
                      <span className="font-semibold text-green-600">{project.carbonSaved}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Petani Terlibat:</span>
                      <span className="font-semibold">{project.farmers} petani</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/proyek-kami">Lihat Semua Proyek</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimoni</h2>
            <p className="text-xl text-gray-600">Dengar langsung dari petani mitra kami</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berita Terbaru & Edukasi</h2>
            <p className="text-xl text-gray-600">Tetap update dengan perkembangan terbaru</p>
          </div>

          {loadingNews ? (
            <div className="flex justify-center items-center h-48">
              <Loader2 className="h-8 w-8 animate-spin text-primary-dark" />
              <span className="ml-2 text-gray-600">Memuat berita...</span>
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
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/CCCCCC/000000?text=Berita"; }}
                  />
                  <CardContent className="p-6">
                    <div className="text-sm text-green-600 font-medium mb-2">{article.category}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">
                          Baca Selengkapnya
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
              <Link to="/berita-edukasi">Lihat Semua Artikel</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Bergabung dengan Gerakan Karbon Positif?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Daftarkan lahan Anda sekarang dan mulai berkontribusi pada solusi perubahan iklim
            sambil meningkatkan kesejahteraan ekonomi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50">
              <Link to="/untuk-petani">
                <Heart className="mr-2 h-5 w-5" />
                Daftarkan Lahan Anda
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              <Link to="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
