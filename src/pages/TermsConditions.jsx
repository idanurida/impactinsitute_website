import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="text-center">
            <FileText className="mx-auto h-12 w-12 text-primary-medium mb-4" />
            <CardTitle className="text-3xl">Syarat dan Ketentuan (Terms of Reference)</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="font-semibold text-red-600">
              
            </p>

            <h4>1. Penerimaan Persyaratan</h4>
            <p>
              Dengan mengakses dan menggunakan situs web impactinstitute.asia ("Situs"), Anda menerima dan setuju untuk terikat oleh syarat dan ketentuan yang ditetapkan dalam dokumen ini. Jika Anda tidak menyetujui persyaratan ini, Anda tidak boleh menggunakan Situs ini.
            </p>

            <h4>2. Pendaftaran Program Karbon</h4>
            <p>
              Dengan mengirimkan formulir pendaftaran minat, Anda setuju untuk memberikan informasi yang akurat, terkini, dan lengkap. Anda memberikan kuasa kepada Impact Institute untuk melakukan verifikasi data dan studi kelayakan di lokasi lahan yang didaftarkan. Pemberian kuasa ini tidak menciptakan kewajiban finansial apa pun pada tahap pendaftaran.
            </p>

            {/* Point 3. Hak Kekayaan Intelektual telah dihapus sesuai permintaan */}

            <h4>3. Penggunaan Situs</h4> {/* Nomor poin disesuaikan */}
            <p>
              Anda setuju untuk tidak menggunakan Situs ini untuk tujuan yang melanggar hukum atau dilarang oleh Persyaratan ini. Anda tidak boleh menggunakan Situs ini dengan cara apa pun yang dapat merusak, menonaktifkan, membebani, atau mengganggu server kami.
            </p>
            
            <h4>4. Pembatasan Tanggung Jawab</h4> {/* Nomor poin disesuaikan */}
            <p>
              Dalam keadaan apa pun Impact Institute tidak akan bertanggung jawab atas kerugian atau kerusakan tidak langsung atau konsekuensial yang timbul dari, atau sehubungan dengan, penggunaan situs web ini.
            </p>
            
            <h4>5. Hukum yang Mengatur</h4> {/* Nomor poin disesuaikan */}
            <p>
              Persyaratan ini akan diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Republik Indonesia.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsConditions;
