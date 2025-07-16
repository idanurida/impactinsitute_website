import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="text-center">
            <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500 mb-4" />
            <CardTitle className="text-3xl">Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="font-semibold text-red-600">
              
            </p>
            
            <h4>Akurasi Informasi</h4>
            <p>
              Informasi yang disediakan oleh Impact Institute ("kami," atau "milik kami") di impactinstitute.asia ("Situs") adalah untuk tujuan informasi umum saja. Meskipun kami berusaha untuk menjaga informasi tetap terkini dan benar, kami tidak membuat pernyataan atau jaminan dalam bentuk apa pun, tersurat maupun tersirat, tentang kelengkapan, keakuratan, keandalan, kesesuaian, atau ketersediaan sehubungan dengan Situs atau informasi, produk, layanan, atau grafik terkait yang terdapat di Situs untuk tujuan apa pun.
            </p>

            <h4>Kalkulator dan Estimasi</h4>
            <p>
              Setiap alat, seperti Kalkulator Potensi Karbon, yang disediakan di Situs ini hanya memberikan estimasi awal. Angka yang dihasilkan bersifat indikatif dan tidak boleh dianggap sebagai jaminan pendapatan atau hasil serapan karbon. Hasil aktual akan ditentukan melalui proses verifikasi dan validasi lapangan yang ketat sesuai dengan metodologi yang berlaku.
            </p>

            <h4>Tautan Eksternal</h4>
            <p>
              Melalui situs web ini, Anda dapat menautkan ke situs web lain yang tidak berada di bawah kendali Impact Institute. Kami tidak memiliki kendali atas sifat, konten, dan ketersediaan situs-situs tersebut. Dimasukkannya tautan apa pun tidak selalu menyiratkan rekomendasi atau mendukung pandangan yang diungkapkan di dalamnya.
            </p>

            <h4>Nasihat Profesional</h4>
            <p>
              Informasi yang disajikan di Situs ini tidak dimaksudkan sebagai, dan tidak boleh dianggap sebagai, nasihat hukum, keuangan, atau investasi. Anda harus berkonsultasi dengan para profesional yang sesuai tentang keadaan spesifik Anda sebelum membuat keputusan apa pun.
            </p>

            <h4>Perubahan Disclaimer</h4>
            <p>
              Kami berhak untuk mengubah atau memperbarui disclaimer ini kapan saja tanpa pemberitahuan sebelumnya.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Disclaimer;