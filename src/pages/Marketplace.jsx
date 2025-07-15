import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  Star, 
  Plus, 
  Minus,
  Heart,
  MapPin,
  Truck,
  Shield,
  Award
} from 'lucide-react'

const Marketplace = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [cart, setCart] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popularity')

  // Sample product data
  const sampleProducts = [
    {
      id: 1,
      name: 'Kopi Arabika Gayo Premium',
      price: 125000,
      originalPrice: 150000,
      rating: 4.8,
      reviews: 156,
      category: 'kopi',
      location: 'Aceh Tengah',
      farmer: 'Kelompok Tani Gayo Sejahtera',
      description: 'Kopi arabika premium dari dataran tinggi Gayo dengan cita rasa yang khas dan aroma yang harum.',
      image: '/api/placeholder/300/300',
      stock: 25,
      sustainabilityScore: 95,
      carbonOffset: '2.5 kg CO2e per kg',
      tags: ['Organik', 'Fair Trade', 'Single Origin']
    },
    {
      id: 2,
      name: 'Madu Hutan Liar Asli',
      price: 85000,
      originalPrice: 100000,
      rating: 4.9,
      reviews: 89,
      category: 'madu',
      location: 'Lampung Timur',
      farmer: 'Komunitas Peternak Lebah Lampung',
      description: 'Madu murni dari hutan liar yang dipanen secara berkelanjutan tanpa merusak ekosistem.',
      image: '/api/placeholder/300/300',
      stock: 18,
      sustainabilityScore: 98,
      carbonOffset: '1.2 kg CO2e per kg',
      tags: ['Murni', 'Liar', 'Berkelanjutan']
    },
    {
      id: 3,
      name: 'Kerajinan Bambu Eco-Friendly',
      price: 45000,
      originalPrice: 55000,
      rating: 4.7,
      reviews: 234,
      category: 'kerajinan',
      location: 'Yogyakarta',
      farmer: 'Pengrajin Bambu Nusantara',
      description: 'Kerajinan bambu berkualitas tinggi yang dibuat dengan teknik tradisional dan ramah lingkungan.',
      image: '/api/placeholder/300/300',
      stock: 42,
      sustainabilityScore: 92,
      carbonOffset: '0.8 kg CO2e per item',
      tags: ['Handmade', 'Tradisional', 'Ramah Lingkungan']
    },
    {
      id: 4,
      name: 'Teh Herbal Organik Pegunungan',
      price: 35000,
      originalPrice: 42000,
      rating: 4.6,
      reviews: 167,
      category: 'teh',
      location: 'Jawa Barat',
      farmer: 'Petani Teh Organik Bandung',
      description: 'Teh herbal organik dari pegunungan Bandung dengan khasiat kesehatan yang tinggi.',
      image: '/api/placeholder/300/300',
      stock: 33,
      sustainabilityScore: 90,
      carbonOffset: '0.5 kg CO2e per pack',
      tags: ['Organik', 'Herbal', 'Kesehatan']
    },
    {
      id: 5,
      name: 'Rempah-rempah Tradisional Mix',
      price: 28000,
      originalPrice: 35000,
      rating: 4.5,
      reviews: 98,
      category: 'rempah',
      location: 'Maluku',
      farmer: 'Petani Rempah Maluku',
      description: 'Campuran rempah-rempah tradisional asli Maluku dengan kualitas premium.',
      image: '/api/placeholder/300/300',
      stock: 56,
      sustainabilityScore: 88,
      carbonOffset: '0.3 kg CO2e per pack',
      tags: ['Tradisional', 'Premium', 'Asli']
    },
    {
      id: 6,
      name: 'Cokelat Kakao Organik',
      price: 75000,
      originalPrice: 90000,
      rating: 4.8,
      reviews: 145,
      category: 'cokelat',
      location: 'Sulawesi Selatan',
      farmer: 'Koperasi Kakao Sulawesi',
      description: 'Cokelat premium dari biji kakao organik Sulawesi dengan rasa yang autentik.',
      image: '/api/placeholder/300/300',
      stock: 21,
      sustainabilityScore: 94,
      carbonOffset: '1.8 kg CO2e per bar',
      tags: ['Organik', 'Premium', 'Single Origin']
    }
  ]

  const categories = [
    { value: 'all', label: 'Semua Kategori' },
    { value: 'kopi', label: 'Kopi' },
    { value: 'teh', label: 'Teh' },
    { value: 'madu', label: 'Madu' },
    { value: 'rempah', label: 'Rempah-rempah' },
    { value: 'kerajinan', label: 'Kerajinan' },
    { value: 'cokelat', label: 'Cokelat' }
  ]

  useEffect(() => {
    setProducts(sampleProducts)
    setFilteredProducts(sampleProducts)
  }, [])

  useEffect(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'sustainability':
        filtered.sort((a, b) => b.sustainabilityScore - a.sustainabilityScore)
        break
      default: // popularity
        filtered.sort((a, b) => b.reviews - a.reviews)
    }

    setFilteredProducts(filtered)
  }, [products, searchTerm, selectedCategory, sortBy])

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      return prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 })
          }
        } else {
          acc.push(item)
        }
        return acc
      }, [])
    })
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-accent-teal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Marketplace Berkelanjutan</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Temukan produk berkualitas tinggi langsung dari petani mitra kami. 
              Setiap pembelian mendukung praktik pertanian berkelanjutan dan pemberdayaan petani.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-green-100">Petani Mitra</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-green-100">Produk Berkelanjutan</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-green-100">Keuntungan ke Petani</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Cari produk, petani, atau lokasi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Urutkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularitas</SelectItem>
                  <SelectItem value="rating">Rating Tertinggi</SelectItem>
                  <SelectItem value="price-low">Harga Terendah</SelectItem>
                  <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                  <SelectItem value="sustainability">Keberlanjutan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Shopping Cart */}
            <div className="relative">
              <Button variant="outline" className="relative">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Keranjang
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-green-600">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {filteredProducts.length} Produk Ditemukan
            </h2>
            <p className="text-gray-600">
              Produk berkualitas tinggi dari petani mitra Impact Institute
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <div className="aspect-square bg-gray-200 rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  {product.originalPrice > product.price && (
                    <Badge className="absolute top-2 left-2 bg-red-500">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {product.location}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews} ulasan)</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">
                        Skor Keberlanjutan: {product.sustainabilityScore}%
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {product.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-green-600">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-500">
                        Carbon offset: {product.carbonOffset}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        onClick={() => addToCart(product)}
                        className="flex-1 bg-accent-teal hover:bg-accent-teal/90"
                        disabled={product.stock === 0}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        {product.stock === 0 ? 'Stok Habis' : 'Tambah ke Keranjang'}
                      </Button>
                    </div>

                    <div className="text-xs text-gray-500">
                      Stok tersisa: {product.stock} unit
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 border max-w-sm">
          <h3 className="font-semibold mb-3">Keranjang Belanja</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-sm">
                <span className="flex-1 truncate">{item.name}</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="h-6 w-6 p-0"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => addToCart(item)}
                    className="h-6 w-6 p-0"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 mt-3">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>{formatPrice(getTotalPrice())}</span>
            </div>
            <Button className="w-full mt-2 bg-accent-teal hover:bg-accent-teal/90">
              Checkout ({getTotalItems()} item)
            </Button>
          </div>
        </div>
      )}

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="bg-accent-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-accent-teal" />
              </div>
              <h3 className="text-xl font-semibold">Pengiriman Gratis</h3>
              <p className="text-gray-600">Gratis ongkir untuk pembelian di atas Rp 100.000</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-accent-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-accent-teal" />
              </div>
              <h3 className="text-xl font-semibold">Jaminan Kualitas</h3>
              <p className="text-gray-600">100% produk berkualitas atau uang kembali</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-accent-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-accent-teal" />
              </div>
              <h3 className="text-xl font-semibold">Dampak Sosial</h3>
              <p className="text-gray-600">85% keuntungan langsung ke petani</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Marketplace

