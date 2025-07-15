// src/pages/OurProjects.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge'; // Memastikan Badge diimpor jika digunakan
import {
  MapPin,
  Recycle,
  Zap,
  // Mengganti 'Forest' dengan 'TreePine' karena 'Forest' tidak ada di lucide-react
  TreePine,
  Users,
  ArrowRight,
  Calendar,
  DollarSign,
  BarChart2,
  HeartHandshake,
  Lightbulb,
  Award
} from 'lucide-react';

const OurProjects = () => {
  const projects = [
    {
      id: 1,
      name: 'Agroforestri Kopi Berkelanjutan di Aceh',
      location: 'Aceh Tengah, Indonesia',
      description: 'Proyek ini berfokus pada penerapan sistem agroforestri di perkebunan kopi untuk meningkatkan serapan karbon dan keanekaragaman hayati, sekaligus meningkatkan pendapatan petani.',
      imageUrl: 'https://placehold.co/600x400/0E2C40/C1E1A7?text=Proyek+Kopi',
      carbonSaved: '2,450 ton CO2e/tahun',
      farmersImpacted: 150,
      status: 'Aktif',
      type: 'Agroforestri',
      startDate: 'Jan 2022',
      investmentNeeded: 'USD 50,000',
      progress: '85%',
      benefits: [
        'Peningkatan pendapatan petani',
        'Peningkatan kualitas tanah',
        'Konservasi air',
        'Pengurangan emisi karbon'
      ],
      tags: ['Kopi', 'Agroforestri', 'Karbon', 'Aceh']
    },
    {
      id: 2,
      name: 'Restorasi Hutan Mangrove di Lampung',
      location: 'Lampung Timur, Indonesia',
      description: 'Program restorasi ekosistem mangrove yang rusak untuk melindungi garis pantai, menyediakan habitat bagi satwa laut, dan menyerap karbon dalam jumlah besar.',
      imageUrl: 'https://placehold.co/600x400/1A4A5A/EFBC75?text=Proyek+Mangrove',
      carbonSaved: '3,200 ton CO2e/tahun',
      farmersImpacted: 89,
      status: 'Aktif',
      type: 'Restorasi Ekosistem',
      startDate: 'Mar 2021',
      investmentNeeded: 'USD 75,000',
      progress: '92%',
      benefits: [
        'Perlindungan garis pantai',
        'Habitat keanekaragaman hayati',
        'Peningkatan perikanan lokal',
        'Mitigasi perubahan iklim'
      ],
      tags: ['Mangrove', 'Restorasi', 'Pesisir', 'Lampung']
    },
    {
      id: 3,
      name: 'Perkebunan Karet Ramah Lingkungan di Jambi',
      location: 'Jambi, Indonesia',
      description: 'Mendorong praktik perkebunan karet yang berkelanjutan dengan mengurangi penggunaan bahan kimia berbahaya dan menerapkan teknik penanaman yang ramah lingkungan.',
      imageUrl: 'https://placehold.co/600x400/148D8D/0E2C40?text=Proyek+Karet',
      carbonSaved: '1,800 ton CO2e/tahun',
      farmersImpacted: 120,
      status: 'Aktif',
      type: 'Pertanian Berkelanjutan',
      startDate: 'Jul 2023',
      investmentNeeded: 'USD 40,000',
      progress: '70%',
      benefits: [
        'Pengurangan polusi tanah',
        'Peningkatan kesehatan petani',
        'Produk karet berkualitas',
        'Sertifikasi karbon'
      ],
      tags: ['Karet', 'Pertanian', 'Jambi', 'Sertifikasi']
    },
    {
      id: 4,
      name: 'Rehabilitasi Lahan Kritis di Kalimantan',
      location: 'Kalimantan Barat, Indonesia',
      description: 'Proyek penanaman kembali lahan-lahan kritis dan terdegradasi dengan spesies pohon asli untuk mengembalikan fungsi ekologis dan kapasitas serapan karbon.',
      imageUrl: 'https://placehold.co/600x400/C1E1A7/1A4A5A?text=Proyek+Kalimantan',
      carbonSaved: '4,100 ton CO2e/tahun',
      farmersImpacted: 95,
      status: 'Sedang Berlangsung',
      type: 'Rehabilitasi Lahan',
      startDate: 'Apr 2024',
      investmentNeeded: 'USD 90,000',
      progress: '40%',
      benefits: [
        'Pencegahan erosi tanah',
        'Peningkatan kualitas air',
        'Peningkatan keanekaragaman hayati',
        'Pengembangan ekowisata'
      ],
      tags: ['Rehabilitasi', 'Lahan Kritis', 'Kalimantan', 'Ekowisata']
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white overflow-hidden py-24 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Proyek Kami: Menciptakan Dampak Nyata
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Jelajahi inisiatif kami yang sedang berjalan dan yang telah selesai
            yang berkontribusi pada keberlanjutan lingkungan dan pemberdayaan masyarakat.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-56 object-cover rounded-t-lg"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/CCCCCC/000000?text=Image+Error"; }}
                />
                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{project.name}</CardTitle>
                  <p className="text-gray-600 flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-1 text-green-600" /> {project.location}
                  </p>
                  <p className="text-gray-700 mt-2 text-sm">{project.description.substring(0, 120)}...</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center"><TreePine className="h-4 w-4 mr-1 text-green-600" /> Karbon Tersimpan:</span>
                      <span className="font-semibold text-green-700">{project.carbonSaved}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center"><Users className="h-4 w-4 mr-1 text-green-600" /> Petani Terdampak:</span>
                      <span className="font-semibold">{project.farmersImpacted}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center"><Calendar className="h-4 w-4 mr-1 text-green-600" /> Dimulai:</span>
                      <span className="font-semibold">{project.startDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center"><DollarSign className="h-4 w-4 mr-1 text-green-600" /> Investasi Dibutuhkan:</span>
                      <span className="font-semibold text-blue-700">{project.investmentNeeded}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center"><BarChart2 className="h-4 w-4 mr-1 text-green-600" /> Progres:</span>
                      <span className="font-semibold text-purple-700">{project.progress}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link to={`/projects/${project.id}`}>
                      Lihat Detail Proyek
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Reused from Homepage */}
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
                <HeartHandshake className="mr-2 h-5 w-5" />
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
  );
};

export default OurProjects;
