import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Clock, MapPin, Leaf } from 'lucide-react';

const FarmerDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-2">Dashboard Petani</h1>
            <p className="text-muted-foreground mb-6">Selamat datang kembali, Bapak Suryadi!</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Status Pendaftaran Proyek Karbon Anda</CardTitle>
                            <CardDescription>Lahan Kopi Agroforestri</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                <li className="flex items-center text-green-600"><CheckCircle className="h-5 w-5 mr-3" />Formulir Pendaftaran Diterima</li>
                                <li className="flex items-center text-green-600"><CheckCircle className="h-5 w-5 mr-3" />Verifikasi Awal Selesai</li>
                                <li className="flex items-center text-blue-600"><Clock className="h-5 w-5 mr-3" />Menunggu Jadwal Survei Lapangan</li>
                                <li className="flex items-center text-gray-400"><Clock className="h-5 w-5 mr-3" />Pengembangan Proyek</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Potensi Karbon (Estimasi Awal)</CardTitle></CardHeader>
                        <CardContent className="flex items-center space-x-4">
                            <Leaf className="h-10 w-10 text-green-500" />
                            <div>
                                <p className="text-2xl font-bold">12.5 ton CO2e / tahun</p>
                                <p className="text-sm text-muted-foreground">Estimasi berdasarkan data awal. Nilai final setelah verifikasi.</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <Card>
                        <CardHeader><CardTitle>Informasi Lahan</CardTitle></CardHeader>
                        <CardContent className="text-sm space-y-2">
                           <p><strong>Lokasi:</strong> Desa Gayo, Aceh Tengah</p>
                           <p><strong>Luas:</strong> 2.5 Hektar</p>
                           <p><strong>Tanaman Utama:</strong> Kopi Arabika</p>
                           <p><strong>Status:</strong> Milik Pribadi</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader><CardTitle>Pesan dari Tim</CardTitle></CardHeader>
                        <CardContent className="text-sm">
                            <p>Tim kami akan menghubungi Anda dalam 3 hari kerja untuk penjadwalan survei lapangan. Terima kasih!</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FarmerDashboard;