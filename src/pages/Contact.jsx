// src/pages/Contact.jsx

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Mengganti alert dengan cara yang lebih baik jika ini adalah aplikasi web
    // Misalnya, menampilkan pesan sukses di UI atau menggunakan toast notification
    alert('Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.')
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Siap bergabung dengan gerakan karbon positif? Hubungi tim kami untuk konsultasi
              dan informasi lebih lanjut tentang program-program Impact Institute.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span>Alamat Kantor</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Suite 202, Bintaro Center<br />
                    Jl. Deplu Raya, Bintaro<br />
                    Jakarta Selatan
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span>Telepon & WhatsApp</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">+62 812-1826-9298</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-green-600" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">info@impactinstitute.asia</p>
                  <p className="text-gray-700">carbon@impactinstitute.asia</p>
                  <p className="text-gray-700">marketplace@impactinstitute.asia</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span>Jam Operasional</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Senin - Jumat:</strong> 09:00 - 17:00 WIB</p>
                    <p><strong>Sabtu:</strong> 09:00 - 14:00 WIB</p>
                    <p><strong>Minggu:</strong> Tutup</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Kirim Pesan</CardTitle>
                  <p className="text-gray-600">
                    Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 1x24 jam.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Masukkan nama lengkap"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="nama@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Nomor Telepon</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+62 812-1826-9298"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subjek *</Label>
                        <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih subjek" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pendaftaran-petani">Pendaftaran Petani</SelectItem>
                            <SelectItem value="pembelian-karbon">Pembelian Unit Karbon</SelectItem>
                            <SelectItem value="marketplace">Marketplace & Produk</SelectItem>
                            <SelectItem value="kemitraan">Kemitraan</SelectItem>
                            <SelectItem value="media-pers">Media & Pers</SelectItem>
                            <SelectItem value="lainnya">Lainnya</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tuliskan pesan Anda di sini..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      <Send className="mr-2 h-4 w-4" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Menghilangkan bagian "Map Section" seperti yang diminta */}
      {/*
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lokasi Kantor</h2>
            <p className="text-xl text-gray-600">Kunjungi kantor kami untuk konsultasi langsung</p>
          </div>

          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg">Peta Lokasi Kantor</p>
              <p className="text-sm">Google Maps akan diintegrasikan di sini</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Bagaimana cara mendaftarkan lahan untuk program karbon?',
                answer: 'Anda dapat mendaftar melalui halaman "Untuk Petani" di website kami atau menghubungi tim kami langsung. Proses dimulai dengan pengisian formulir online dan akan dilanjutkan dengan verifikasi lapangan.'
              },
              {
                question: 'Berapa lama proses verifikasi lahan?',
                answer: 'Proses verifikasi biasanya memakan waktu 2-4 minggu tergantung lokasi dan kompleksitas lahan. Tim kami akan melakukan survei lapangan dan analisis kelayakan.'
              },
              {
                question: 'Apakah ada biaya untuk bergabung dalam program?',
                answer: 'Tidak ada biaya pendaftaran untuk petani. Impact Institute akan menanggung semua biaya verifikasi dan pengembangan proyek. Petani akan menerima pembagian keuntungan dari penjualan karbon.'
              },
              {
                question: 'Bagaimana cara membeli unit karbon?',
                answer: 'Pembeli karbon dapat menghubungi tim kami melalui halaman "Untuk Pembeli Karbon" atau email carbon@impactinstitute.asia untuk mendiskusikan kebutuhan dan mendapatkan penawaran kustom.'
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
