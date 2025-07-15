import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const NewsEducation = () => {
  const articles = [
    {
      id: 1,
      title: 'Regulasi Karbon Indonesia Terbaru 2024: Apa Dampaknya bagi Petani?',
      excerpt: 'Pemerintah mengeluarkan regulasi baru untuk perdagangan karbon yang akan berlaku mulai tahun depan. Pelajari poin-poin pentingnya.',
      date: '15 Juli 2025',
      category: 'Regulasi',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: '5 Praktik Pertanian Berkelanjutan untuk Tingkatkan Karbon Tanah',
      excerpt: 'Pelajari teknik-teknik seperti tumpang sari dan tanpa olah tanah yang dapat meningkatkan produktivitas sambil menjaga kelestarian lingkungan.',
      date: '12 Juli 2025',
      category: 'Edukasi',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Kisah Sukses Petani Kopi Aceh: Raup Untung dari Karbon dan Biji Kopi Premium',
      excerpt: 'Bagaimana petani kopi di Aceh berhasil meningkatkan pendapatan hingga 40% melalui program karbon dan akses ke marketplace.',
      date: '10 Juli 2025',
      category: 'Studi Kasus',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Memahami MRV: Fondasi Transparansi dalam Proyek Karbon',
      excerpt: 'Apa itu Monitoring, Reporting, and Verification (MRV)? Mengapa ini sangat penting untuk kredibilitas unit karbon Anda?',
      date: '5 Juli 2025',
      category: 'Edukasi',
      image: '/api/placeholder/400/250'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Semua');

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'Semua' || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['Semua', 'Regulasi', 'Edukasi', 'Studi Kasus', 'Berita'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-medium to-accent-teal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Berita & Edukasi</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Tetap terinformasi dengan berita terbaru, wawasan mendalam, dan panduan praktis seputar solusi iklim dan pertanian berkelanjutan.
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Cari artikel..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={filterCategory === cat ? 'default' : 'outline'}
                  onClick={() => setFilterCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <Card key={article.id} className="flex flex-col hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">{article.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>
                  </div>
                  <div className="text-sm text-gray-500 mt-4">{article.date}</div>
                  <Button asChild variant="ghost" className="self-start p-0 h-auto mt-2 text-primary-dark hover:text-accent-teal">
                    <Link to="#">
                      Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEducation;