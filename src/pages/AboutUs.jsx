import { Card, CardContent } from '@/components/ui/card'
import { Users, Target, Heart, Award, Handshake } from 'lucide-react'

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Dr. Ahmad Susanto',
      role: 'Direktur Eksekutif',
      background: 'Ph.D. Kehutanan, 15+ tahun pengalaman konservasi',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Sari Wijayanti, M.Sc.',
      role: 'Manajer Program Karbon',
      background: 'M.Sc. Environmental Science, Sertifikasi VCS',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Budi Hartono',
      role: 'Koordinator Lapangan',
      background: '10+ tahun pengalaman pemberdayaan petani',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Dr. Maya Sari',
      role: 'Kepala Riset & Teknologi',
      background: 'Ph.D. Pertanian Berkelanjutan, Ahli MRV',
      image: '/api/placeholder/200/200'
    }
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Transparansi',
      description: 'Kami berkomitmen pada keterbukaan informasi dan akuntabilitas dalam setiap aspek operasional.'
    },
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: 'Keberlanjutan',
      description: 'Fokus pada solusi jangka panjang yang menguntungkan lingkungan, ekonomi, dan sosial.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Pemberdayaan Petani',
      description: 'Menempatkan kesejahteraan petani sebagai prioritas utama dalam setiap program.'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: 'Integritas',
      description: 'Menjunjung tinggi standar etika dan profesionalisme dalam setiap kegiatan.'
    }
  ]

  const partners = [
    'Kementerian Lingkungan Hidup dan Kehutanan',
    'Verified Carbon Standard (VCS)',
    'Gold Standard Foundation',
    'Climate Action Reserve',
    'Indonesian Carbon Exchange',
    'WWF Indonesia'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Impact Institute</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Yayasan nirlaba yang berkomitmen mendorong perubahan positif di sektor pertanian, 
              perkebunan, dan kehutanan di Indonesia melalui solusi iklim berkelanjutan.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Menjadi yayasan terdepan di Indonesia yang mewujudkan ekonomi hijau yang inklusif 
                  dan berkelanjutan melalui pemberdayaan masyarakat, restorasi ekosistem, dan inovasi 
                  di bidang nilai ekonomi karbon.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Meningkatkan kesejahteraan petani melalui nilai tambah ekonomi dari praktik berkelanjutan</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Memulihkan dan melindungi ekosistem melalui proyek restorasi dan konservasi</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mendorong transparansi dan akuntabilitas dalam proyek karbon</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Membangun kapasitas dan edukasi masyarakat tentang praktik berkelanjutan</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Membangun ekosistem kemitraan untuk solusi inovatif perubahan iklim</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Profil Impact Institute</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-6">
              Impact Institute adalah sebuah yayasan nirlaba yang berkomitmen penuh untuk mendorong perubahan positif 
              di sektor pertanian, perkebunan, dan kehutanan di Indonesia. Didirikan dengan keyakinan bahwa solusi iklim 
              harus sejalan dengan peningkatan kesejahteraan masyarakat, kami bekerja sama dengan para petani dan komunitas 
              lokal untuk mengembangkan dan mengelola proyek-proyek penyerapan karbon berbasis lahan serta memfasilitasi 
              pemasaran produk-produk berkelanjutan hasil kerja keras mereka.
            </p>
            
            <p className="mb-6">
              Kami menggabungkan keahlian teknis dalam ilmu iklim, kehutanan, dan pertanian berkelanjutan dengan pemahaman 
              mendalam tentang kebutuhan masyarakat akar rumput. Melalui model yang transparan dan akuntabel, kami memfasilitasi 
              akses petani ke pasar karbon, memastikan mereka menerima manfaat langsung dari upaya konservasi dan restorasi 
              lahan mereka, sekaligus membuka akses pasar bagi produk berkualitas tinggi mereka.
            </p>
            
            <p>
              Impact Institute tidak hanya berfokus pada penjualan unit karbon, tetapi juga pada pembangunan kapasitas, 
              transfer pengetahuan, dan penciptaan ekosistem ekonomi hijau yang resilien. Kami percaya bahwa setiap pohon 
              yang ditanam, setiap lahan yang direstorasi, dan setiap petani yang diberdayakan adalah langkah maju menuju 
              masa depan yang lebih hijau dan adil bagi semua.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tim Inti</h2>
            <p className="text-xl text-gray-600">Dipimpin oleh para ahli berpengalaman di bidangnya</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nilai-nilai Perusahaan</h2>
            <p className="text-xl text-gray-600">Prinsip-prinsip yang memandu setiap langkah kami</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kemitraan & Afiliasi</h2>
            <p className="text-xl text-gray-600">Bekerja sama dengan organisasi terpercaya</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-xs text-gray-500 px-2">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Petani Mitra</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000</div>
              <div className="text-green-100">Hektar Lahan</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000</div>
              <div className="text-green-100">Ton CO2e Tersimpan</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="text-green-100">Proyek Aktif</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

