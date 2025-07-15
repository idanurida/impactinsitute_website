import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // --- LOGIC OTENTIKASI SEHARUSNYA DI SINI ---
        // Mockup: jika email mengandung 'admin', redirect ke admin dashboard
        // Jika tidak, redirect ke farmer dashboard
        if (email.includes('admin')) {
            alert('Login sebagai Admin berhasil (mockup)!');
            navigate('/admin/dashboard');
        } else if (email) {
            alert('Login sebagai Petani berhasil (mockup)!');
            navigate('/petani/dashboard');
        } else {
            alert('Harap masukkan email.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Masuk ke Dashboard</CardTitle>
                    <CardDescription>Gunakan akun yang telah terdaftar.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="nama@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Kata Sandi</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">Masuk</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;