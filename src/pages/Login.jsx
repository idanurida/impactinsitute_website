import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Login = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // --- LOGIC OTENTIKASI SEHARUSNYA DI SINI ---
        // Mockup: jika email mengandung 'admin', redirect ke admin dashboard
        // Jika tidak, redirect ke farmer dashboard
        if (email.includes('admin')) {
            alert(t('login_admin_success_mockup')); // Terjemahkan
            navigate('/admin/dashboard');
        } else if (email) {
            alert(t('login_farmer_success_mockup')); // Terjemahkan
            navigate('/petani/dashboard');
        } else {
            alert(t('login_enter_email_alert')); // Terjemahkan
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{t('login_dashboard_title')}</CardTitle>
                    <CardDescription>{t('login_dashboard_description')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">{t('email_label')}</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder={t('email_placeholder')}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">{t('password_label')}</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder={t('password_placeholder')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">{t('login_button')}</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
