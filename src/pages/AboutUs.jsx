// src/pages/AboutUs.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  Leaf,
  Globe,
  Handshake,
  ShieldCheck,
  ArrowRight,
  Target,
  Lightbulb,
  Cloud,
  Award
} from 'lucide-react';

/**
 * Komponen halaman Tentang Kami.
 * Menyediakan informasi tentang misi, visi, nilai-nilai, dan cerita Impact Institute.
 */
const AboutUs = () => {
  const values = [
    {
      icon: Target, // Menggunakan ikon Lucide langsung
      title: 'Dampak Nyata',
      description: 'Kami berkomitmen untuk menciptakan perubahan positif dan terukur bagi lingkungan dan masyarakat.'
    },
    {
      icon: Handshake, // Menggunakan ikon Lucide langsung
      title: 'Transparansi',
      description: 'Setiap proses dan hasil kami dapat dipertanggungjawabkan dan transparan bagi semua pihak.'
    },
    {
      icon: Leaf, // Menggunakan ikon Lucide langsung
      title: 'Keberlanjutan',
      description: 'Mendorong praktik yang menjaga keseimbangan ekologis dan memberikan manfaat jangka panjang.'
    },
    {
      icon: Users, // Menggunakan ikon Lucide langsung
      title: 'Pemberdayaan',
      description: 'Memberdayakan petani dan komunitas lokal melalui pengetahuan, sumber daya, dan peluang ekonomi.'
    }
  ];

  const partners = [
    'Kementerian Lingkungan Hidup dan Kehutanan',
    'Verified Carbon Standard (VCS)',
    'Gold Standard Foundation',
    'Climate Action Reserve',
    'Indonesian Carbon Exchange',
    'WWF Indonesia'
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden py-24 lg:py-32
                   bg-[url('https://images.unsplash.com/photo-1579761596229-2e0f4f9f4a1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"
      >
        {/* Overlay untuk membuat teks lebih mudah dibaca dan memberikan gradien */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/70 via-primary-medium/60 to-accent-teal/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Tentang Impact Institute
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Membangun masa depan yang hijau dan berkelanjutan, satu lahan pada satu waktu.
          </p>
        </div>
      </section>

      {/* Our Story / Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cerita Kami</h2>
            <p className="text-lg text-gray-700 mb-4">
              Impact Institute didirikan dengan visi untuk menjembatani kesenjangan antara potensi lahan pertanian Indonesia dan kebutuhan global akan solusi iklim. Kami percaya bahwa petani, sebagai penjaga lahan, memiliki peran krusial dalam mitigasi perubahan iklim.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Dimulai dari sebuah ide sederhana, kami berkembang menjadi platform yang menghubungkan petani dengan pasar karbon, memastikan bahwa upaya mereka dalam praktik pertanian berkelanjutan dihargai secara ekonomi.
            </p>
            <p className="text-lg text-gray-700">
              Kami berdedikasi untuk menciptakan ekosistem yang transparan, adil, dan menguntungkan bagi semua pihak yang terlibat dalam gerakan karbon positif.
            </p>
          </div>
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://placehold.co/600x400/C1E1A7/0E2C40?text=Cerita+Kami"
              alt="Our Story"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/CCCCCC/000000?text=Image+Error"; }}
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center space-x-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <span>Visi Kami</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Menjadi platform terdepan di Indonesia yang mewujudkan ekonomi hijau yang inklusif
                  dan berkelanjutan melalui pemberdayaan masyarakat, restorasi ekosistem, dan inovasi
                  di bidang nilai ekonomi karbon.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Misi Kami</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
                  <li>Memfasilitasi akses petani ke pasar karbon.</li>
                  <li>Mendukung implementasi praktik pertanian berkelanjutan.</li>
                  <li>Memastikan transparansi dan integritas dalam setiap transaksi karbon.</li>
                  <li>Meningkatkan kesejahteraan ekonomi dan lingkungan komunitas pertanian.</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center space-x-2">
                  <Award className="h-6 w-6 text-primary" />
                  <span>Nilai-nilai Kami</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start text-left space-x-3">
                      <value.icon className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{value.title}</h3>
                        <p className="text-sm text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
              Impact Institute berkomitmen penuh untuk mendorong perubahan positif
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
  );
};

export default AboutUs;
