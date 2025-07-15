// src/pages/ForFarmer.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  DollarSign,
  Leaf,
  Users,
  Handshake,
  ShieldCheck,
  BarChart,
  Calculator,
  ArrowRight,
  Lightbulb,
  HelpCircle,
  CheckCircle,
  PiggyBank,
  Cloud,
  LandPlot,
  CalendarDays
} from 'lucide-react';

/**
 * Komponen halaman Untuk Petani.
 * Menyediakan informasi, manfaat, kalkulator potensi karbon, dan FAQ
 * yang relevan bagi petani yang tertarik untuk bergabung.
 */
const ForFarmer = () => {
  const [calculatorData, setCalculatorData] = useState({
    landType: '',
    landSize: '',
    projectAge: '',
    carbonPrice: 12.75 // Harga karbon default
  });

  const [calculatorResult, setCalculatorResult] = useState(null);

  /**
   * Menghitung potensi serapan karbon dan nilai ekonomi berdasarkan input petani.
   * Ini adalah perhitungan yang disederhanakan untuk tujuan demonstrasi.
   */
  const calculateCarbon = () => {
    if (!calculatorData.landType || !calculatorData.landSize || !calculatorData.projectAge) {
      setCalculatorResult({ error: "Mohon lengkapi semua bidang kalkulator." });
      return;
    }

    const landSizeNum = parseFloat(calculatorData.landSize);
    const projectAgeNum = parseFloat(calculatorData.projectAge);

    if (isNaN(landSizeNum) || isNaN(projectAgeNum) || landSizeNum <= 0 || projectAgeNum <= 0) {
      setCalculatorResult({ error: "Luas lahan dan umur proyek harus angka positif." });
      return;
    }

    // Faktor serapan karbon per hektar per tahun (ton CO2e/Ha/tahun)
    const carbonFactors = {
      'hutan-primer': 15,
      'hutan-sekunder': 12,
      'agroforestri': 8,
      'perkebunan-kopi': 6,
      'perkebunan-karet': 10,
      'lahan-restorasi': 14,
      'pertanian-kering': 4
    };

    const factor = carbonFactors[calculatorData.landType] || 5; // Default jika jenis lahan tidak cocok
    const annualCarbon = landSizeNum * factor;
    const totalCarbonOverProjectLife = annualCarbon * projectAgeNum;
    const annualValue = annualCarbon * calculatorData.carbonPrice;
    const totalValueOverProjectLife = totalCarbonOverProjectLife * calculatorData.carbonPrice;

    setCalculatorResult({
      carbonTonsAnnual: annualCarbon.toFixed(2),
      carbonTonsTotal: totalCarbonOverProjectLife.toFixed(2),
      annualValue: annualValue.toLocaleString('id-ID', { style: 'currency', currency: 'USD' }),
      totalValue: totalValueOverProjectLife.toLocaleString('id-ID', { style: 'currency', currency: 'USD' })
    });
  };

  const faqs = [
    {
      question: "Apa itu kredit karbon dan bagaimana petani bisa mendapatkannya?",
      answer: "Kredit karbon adalah sertifikat yang mewakili pengurangan satu ton emisi karbon dioksida. Petani bisa mendapatkannya dengan menerapkan praktik pertanian berkelanjutan yang menyerap karbon dari atmosfer, seperti agroforestri atau restorasi lahan."
    },
    {
      question: "Berapa pendapatan yang bisa saya harapkan?",
      answer: "Pendapatan bervariasi tergantung pada jenis lahan, luas lahan, dan praktik yang diterapkan. Kalkulator di atas memberikan estimasi awal. Kami akan melakukan penilaian lebih lanjut untuk estimasi yang lebih akurat."
    },
    {
      question: "Apakah ada biaya di muka untuk bergabung?",
      answer: "Tidak ada biaya di muka untuk petani. Kami berinvestasi dalam proyek Anda dan membagi keuntungan dari penjualan kredit karbon."
    },
    {
      question: "Bagaimana proses verifikasi karbon dilakukan?",
      answer: "Kami bekerja dengan lembaga verifikasi pihak ketiga yang independen untuk mengukur dan memverifikasi serapan karbon di lahan Anda sesuai dengan standar internasional."
    },
    {
      question: "Apa yang terjadi jika proyek saya tidak menghasilkan karbon sebanyak yang diharapkan?",
      answer: "Kami akan bekerja sama dengan Anda untuk mengidentifikasi tantangan dan menyesuaikan strategi. Risiko dibagi, dan kami berkomitmen untuk mendukung keberhasilan proyek Anda."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section for Farmers */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Potensi Ekonomi dari Lahan Anda
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Ubah praktik pertanian Anda menjadi sumber pendapatan baru melalui
            penjualan kredit karbon. Mari berkontribusi pada iklim dan kesejahteraan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
              <Link to="#daftar-lahan">
                Daftarkan Lahan Anda
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
              <Link to="#faq">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manfaat untuk Petani</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen untuk memberikan nilai lebih kepada petani mitra kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Pendapatan Tambahan</h3>
              <p className="text-gray-600">Dapatkan keuntungan dari penjualan kredit karbon yang dihasilkan lahan Anda.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Praktik Berkelanjutan</h3>
              <p className="text-gray-600">Menerapkan metode pertanian yang ramah lingkungan dan meningkatkan kesehatan tanah.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Dukungan Teknis</h3>
              <p className="text-gray-600">Pendampingan dan pelatihan dari ahli kami untuk praktik terbaik.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Akses Pasar Global</h3>
              <p className="text-gray-600">Menghubungkan Anda ke pasar karbon internasional yang transparan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Farmers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bagaimana Prosesnya?</h2>
            <p className="text-xl text-gray-600">Langkah mudah untuk memulai perjalanan karbon positif Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Daftar & Penilaian Awal</h3>
              <p className="text-gray-600">Isi formulir pendaftaran dan tim kami akan melakukan penilaian awal potensi lahan Anda.</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Pengembangan & Implementasi Proyek</h3>
              <p className="text-gray-600">Kami membantu merancang dan menerapkan praktik berkelanjutan di lahan Anda.</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Monitoring & Verifikasi Karbon</h3>
              <p className="text-gray-600">Pemantauan rutin dan verifikasi independen untuk mengukur serapan karbon.</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Penjualan Kredit Karbon</h3>
              <p className="text-gray-600">Kami menjual kredit karbon Anda di pasar global dan membagikan keuntungan.</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                5
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Pembayaran & Dampak Berkelanjutan</h3>
              <p className="text-gray-600">Anda menerima pembayaran dan terus berkontribusi pada lingkungan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Potential Calculator */}
      <section id="kalkulator-potensi" className="py-16 bg-gray-50">
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
                          <p className="text-2xl font-bold text-green-800 flex items-center">
                            <Cloud className="h-6 w-6 mr-2" />{calculatorResult.carbonTonsAnnual} ton CO2e
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-green-600">Perkiraan Total Serapan Karbon (umur proyek)</p>
                          <p className="text-2xl font-bold text-green-800 flex items-center">
                            <Cloud className="h-6 w-6 mr-2" />{calculatorResult.carbonTonsTotal} ton CO2e
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-green-600">Perkiraan Nilai Ekonomi per Tahun</p>
                          <p className="text-2xl font-bold text-green-800 flex items-center">
                            <PiggyBank className="h-6 w-6 mr-2" />{calculatorResult.annualValue}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-green-600">Perkiraan Total Nilai Ekonomi (umur proyek)</p>
                          <p className="text-2xl font-bold text-green-800 flex items-center">
                            <PiggyBank className="h-6 w-6 mr-2" />{calculatorResult.totalValue}
                          </p>
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
                        <p className="text-sm text-yellow-800">
                          <strong>Disclaimer:</strong> Ini adalah perkiraan awal dan bukan jaminan.
                          Nilai sebenarnya akan ditentukan setelah verifikasi dan validasi proyek.
                        </p>
                      </div>
                      <Button asChild className="w-full">
                        <Link to="#daftar-lahan">Daftarkan Lahan untuk Analisis Lebih Lanjut</Link>
                      </Button>
                    </>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registration Form / Call to Action */}
      <section id="daftar-lahan" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Daftarkan Lahan Anda Sekarang
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Siap mengubah lahan Anda menjadi aset iklim dan ekonomi? Isi formulir di bawah ini.
          </p>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Formulir Pendaftaran Lahan</CardTitle>
              <CardDescription>Tim kami akan menghubungi Anda setelah menerima formulir.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="namaLengkap">Nama Lengkap</Label>
                  <Input id="namaLengkap" placeholder="Masukkan nama lengkap Anda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Masukkan alamat email Anda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telepon">Nomor Telepon</Label>
                  <Input id="telepon" type="tel" placeholder="Masukkan nomor telepon" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lokasiLahan">Lokasi Lahan (Provinsi/Kabupaten)</Label>
                  <Input id="lokasiLahan" placeholder="Contoh: Aceh Tengah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="luasLahanForm">Luas Lahan (Hektar)</Label>
                  <Input id="luasLahanForm" type="number" placeholder="Contoh: 10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jenisLahanForm">Jenis Tutupan Lahan</Label>
                  <Select>
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
              </div>
              <Button className="w-full bg-primary hover:bg-primary-dark">
                Kirim Pendaftaran
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan (FAQ)</h2>
            <p className="text-xl text-gray-600">Temukan jawaban atas pertanyaan umum Anda</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-x-4">
                  <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-primary" />{faq.question}
                  </CardTitle>
                  {/* Anda bisa menambahkan ikon panah atau tombol expand/collapse di sini */}
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForFarmer;

