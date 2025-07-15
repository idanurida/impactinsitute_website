// src/pages/ForBuyer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Leaf,
  DollarSign,
  Globe,
  Handshake,
  BarChart,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Building,
  Scale,
  Target,
  LineChart,
  Mail
} from 'lucide-react';

/**
 * Komponen halaman Untuk Pembeli Karbon.
 * Menyediakan informasi, manfaat, proses pembelian, dan ajakan bertindak
 * yang relevan bagi perusahaan atau individu yang tertarik membeli kredit karbon.
 */
const ForBuyer = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Capai Target Net-Zero',
      description: 'Offset emisi Anda dan penuhi komitmen keberlanjutan perusahaan dengan kredit karbon terverifikasi.'
    },
    {
      icon: Scale,
      title: 'Kepatuhan Regulasi',
      description: 'Patuhi regulasi karbon nasional dan internasional dengan membeli kredit dari proyek-proyek terdaftar.'
    },
    {
      icon: Lightbulb,
      title: 'Dampak Positif Lingkungan',
      description: 'Berinvestasi langsung pada proyek-proyek yang memulihkan ekosistem dan menyerap karbon dari atmosfer.'
    },
    {
      icon: Building,
      title: 'Tingkatkan Reputasi Perusahaan',
      description: 'Demonstrasikan komitmen Anda terhadap keberlanjutan dan tarik konsumen serta investor yang sadar lingkungan.'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Identifikasi Kebutuhan',
      description: 'Tentukan volume kredit karbon yang Anda butuhkan berdasarkan jejak emisi dan target keberlanjutan Anda.'
    },
    {
      step: '2',
      title: 'Pilih Proyek',
      description: 'Jelajahi portofolio proyek kami yang terverifikasi dan pilih yang selaras dengan nilai-nilai Anda.'
    },
    {
      step: '3',
      title: 'Pembelian Kredit',
      description: 'Lakukan pembelian kredit karbon melalui platform kami dengan proses yang transparan dan aman.'
    },
    {
      step: '4',
      title: 'Pelaporan & Sertifikasi',
      description: 'Terima sertifikat kepemilikan kredit karbon dan laporan dampak proyek Anda.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section for Carbon Buyers */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Berinvestasi pada Masa Depan Berkelanjutan
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Beli kredit karbon dari proyek-proyek terverifikasi kami dan
            jadilah bagian dari solusi perubahan iklim global.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
              <Link to="#explore-projects">
                Jelajahi Proyek
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
              <Link to="#contact-us">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Buy Carbon Credits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Membeli Kredit Karbon?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manfaat strategis dan lingkungan bagi bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works for Buyers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proses Pembelian Kredit Karbon</h2>
            <p className="text-xl text-gray-600">Langkah mudah untuk mengoffset emisi Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action / Contact Form */}
      <section id="contact-us" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Siap Memulai Perjalanan Karbon Positif Anda?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Hubungi tim kami untuk konsultasi gratis dan temukan proyek yang tepat untuk Anda.
          </p>
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Mail className="h-6 w-6 text-primary" />
                <span>Formulir Kontak</span>
              </CardTitle>
              <CardDescription>Kami akan menghubungi Anda sesegera mungkin.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Nama Perusahaan</Label>
                  <Input id="companyName" placeholder="Masukkan nama perusahaan Anda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactPerson">Nama Kontak</Label>
                  <Input id="contactPerson" placeholder="Nama Anda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emailBuyer">Email</Label>
                  <Input id="emailBuyer" type="email" placeholder="Masukkan alamat email Anda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phoneBuyer">Nomor Telepon</Label>
                  <Input id="phoneBuyer" type="tel" placeholder="Masukkan nomor telepon" />
                </div>
                <div className="space-y-2 col-span-full">
                  <Label htmlFor="message">Pesan Anda</Label>
                  <textarea
                    id="message"
                    rows="4"
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Sampaikan kebutuhan atau pertanyaan Anda..."
                  ></textarea>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary-dark">
                Kirim Pesan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Market Insights Section - Reused from Homepage for context */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wawasan Pasar Karbon
            </h2>
            <p className="text-xl text-gray-600">
              Pantau pergerakan harga karbon global dan Indonesia
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
                    $85.50 <span className="text-sm text-gray-500">per ton CO2e</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LineChart className="h-4 w-4 text-green-500" /> {/* Changed from TrendingUp to LineChart for variety */}
                    <span className="text-green-500 font-medium">+2.3%</span>
                    <span className="text-gray-500 text-sm">24h</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart className="h-5 w-5 text-green-600" />
                  <span>Harga Karbon Indonesia</span>
                </CardTitle>
                <CardDescription>IDX Carbon & OTC Market</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-green-600">
                    $12.75 <span className="text-sm text-gray-500">per ton CO2e</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LineChart className="h-4 w-4 text-green-500" /> {/* Changed from TrendingUp to LineChart for variety */}
                    <span className="text-green-500 font-medium">+1.8%</span>
                    <span className="text-gray-500 text-sm">24h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            Data diperbarui secara berkala. Sumber: Platform Perdagangan Internasional & IDX Carbon
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForBuyer;
