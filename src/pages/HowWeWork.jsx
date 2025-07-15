// src/pages/HowWeWork.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Lightbulb,
  Handshake,
  CheckCircle,
  BarChart,
  ArrowRight,
  ShieldCheck,
  Users,
  Leaf,
  Globe,
  Cloud,
  DollarSign,
  FileText,
  TrendingUp
} from 'lucide-react';

/**
 * Komponen halaman Bagaimana Kami Bekerja.
 * Menjelaskan proses inti Impact Institute dalam mengembangkan dan mengelola
 * proyek-proyek karbon, serta manfaat bagi semua pihak yang terlibat.
 */
const HowWeWork = () => {
  const processSteps = [
    {
      step: '1',
      title: 'Identifikasi & Penilaian Proyek',
      description: 'Kami mencari lahan dan komunitas dengan potensi serapan karbon tinggi, melakukan penilaian awal, dan verifikasi kelayakan.',
      icon: Lightbulb
    },
    {
      step: '2',
      title: 'Pengembangan Metodologi Karbon',
      description: 'Bersama ahli, kami merancang metodologi yang sesuai dengan standar internasional untuk mengukur dan memverifikasi karbon.',
      icon: FileText
    },
    {
      step: '3',
      title: 'Implementasi & Pendampingan',
      description: 'Mendampingi petani/komunitas dalam menerapkan praktik berkelanjutan dan memastikan kepatuhan proyek.',
      icon: Handshake
    },
    {
      step: '4',
      title: 'Monitoring, Pelaporan & Verifikasi (MRV)',
      description: 'Pemantauan berkala, pengumpulan data, dan verifikasi independen untuk mengkonfirmasi serapan karbon.',
      icon: BarChart
    },
    {
      step: '5',
      title: 'Sertifikasi & Pendaftaran Kredit',
      description: 'Setelah verifikasi, kredit karbon disertifikasi dan didaftarkan di platform pasar karbon global.',
      icon: CheckCircle
    },
    {
      step: '6',
      title: 'Penjualan & Pembagian Keuntungan',
      description: 'Kami menjual kredit karbon kepada pembeli global dan membagi keuntungan secara transparan dengan petani/komunitas.',
      icon: DollarSign
    }
  ];

  const valuePropositions = [
    {
      icon: Users,
      title: 'Pemberdayaan Komunitas',
      description: 'Meningkatkan kesejahteraan petani melalui pendapatan tambahan dan transfer pengetahuan.'
    },
    {
      icon: Leaf,
      title: 'Restorasi Lingkungan',
      description: 'Mendukung praktik yang memulihkan ekosistem, meningkatkan keanekaragaman hayati, dan kesehatan tanah.'
    },
    {
      icon: Globe,
      title: 'Kontribusi Iklim Global',
      description: 'Membantu dunia mencapai target iklim dengan memfasilitasi penyerapan dan pengurangan emisi karbon.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparansi & Akuntabilitas',
      description: 'Proses yang terverifikasi dan transparan memastikan integritas setiap kredit karbon.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transparansi dalam Setiap Langkah
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Kami membangun jembatan antara petani dan pasar karbon global
            dengan proses yang jelas, terukur, dan berdampak nyata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
              <Link to="/untuk-petani">
                Untuk Petani
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
              <Link to="/untuk-pembeli-karbon">Untuk Pembeli Karbon</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proses Kami</h2>
            <p className="text-xl text-gray-600">Dari lahan hingga pasar karbon, setiap langkah terukur</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.step}. {step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nilai yang Kami Berikan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Menciptakan ekosistem karbon yang adil, efisien, dan berdampak
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePropositions.map((prop, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <prop.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Reused from Homepage */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Bergabung dengan Gerakan Karbon Positif?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Daftarkan lahan Anda atau mulai beli kredit karbon hari ini.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50">
              <Link to="/untuk-petani">
                <Users className="mr-2 h-5 w-5" />
                Untuk Petani
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              <Link to="/untuk-pembeli-karbon">
                <Cloud className="mr-2 h-5 w-5" />
                Untuk Pembeli Karbon
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
