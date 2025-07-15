import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Leaf, ShoppingCart, BarChart2 } from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <Card><CardHeader className="flex flex-row items-center justify-between pb-2"><CardTitle className="text-sm font-medium">Total Petani</CardTitle><Users className="h-4 w-4 text-muted-foreground" /></CardHeader><CardContent><div className="text-2xl font-bold">1,250</div></CardContent></Card>
                <Card><CardHeader className="flex flex-row items-center justify-between pb-2"><CardTitle className="text-sm font-medium">Total Proyek</CardTitle><Leaf className="h-4 w-4 text-muted-foreground" /></CardHeader><CardContent><div className="text-2xl font-bold">25</div></CardContent></Card>
                <Card><CardHeader className="flex flex-row items-center justify-between pb-2"><CardTitle className="text-sm font-medium">Total Penjualan Karbon</CardTitle><BarChart2 className="h-4 w-4 text-muted-foreground" /></CardHeader><CardContent><div className="text-2xl font-bold">50,000 tCO2e</div></CardContent></Card>
                <Card><CardHeader className="flex flex-row items-center justify-between pb-2"><CardTitle className="text-sm font-medium">Produk Marketplace</CardTitle><ShoppingCart className="h-4 w-4 text-muted-foreground" /></CardHeader><CardContent><div className="text-2xl font-bold">78</div></CardContent></Card>
            </div>

            {/* Placeholder for data tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader><CardTitle>Pendaftaran Petani Terbaru</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Tabel data pendaftar baru akan muncul di sini.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Status Proyek</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">Tabel data proyek aktif akan muncul di sini.</p></CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminDashboard;