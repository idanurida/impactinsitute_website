import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Card>
                    <CardHeader className="text-center">
                        <Lock className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                        <CardTitle className="text-3xl">Kebijakan Privasi</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        
                        <h4>1. Pengumpulan Informasi</h4>
                        <p>
                            Kami mengumpulkan informasi dari Anda ketika Anda mendaftar di situs kami, mengisi formulir, atau memasukkan informasi di situs kami. Informasi yang dikumpulkan termasuk nama, nomor identitas, alamat, informasi kontak, dan detail lahan Anda.
                        </p>

                        <h4>2. Penggunaan Informasi</h4>
                        <p>
                            Informasi yang kami kumpulkan dari Anda dapat digunakan untuk:
                            <ul>
                                <li>Memverifikasi kelayakan Anda untuk program kami.</li>
                                <li>Mempersonalisasi pengalaman Anda dan menanggapi kebutuhan individu Anda.</li>
                                <li>Menjalankan, mengelola, dan melaporkan proyek karbon.</li>
                                <li>Mengirim email atau notifikasi berkala mengenai status proyek Anda.</li>
                            </ul>
                        </p>

                        <h4>3. Keamanan Informasi</h4>
                        <p>
                            Kami menerapkan berbagai langkah keamanan untuk menjaga keamanan informasi pribadi Anda. Kami tidak akan menjual, memperdagangkan, atau mentransfer informasi pribadi Anda kepada pihak luar tanpa persetujuan Anda, kecuali untuk tujuan verifikasi oleh lembaga standar karbon yang relevan.
                        </p>
                        
                        <h4>4. Penggunaan Cookie</h4>
                        <p>
                            Situs kami dapat menggunakan "cookie" untuk meningkatkan pengalaman pengguna. Anda dapat memilih untuk mengatur browser web Anda untuk menolak cookie.
                        </p>

                        <h4>5. Persetujuan</h4>
                        <p>
                            Dengan menggunakan situs kami, Anda dengan ini menyetujui kebijakan privasi kami dan menyetujui persyaratannya.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default PrivacyPolicy;