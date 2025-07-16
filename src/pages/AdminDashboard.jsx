import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Leaf, BarChart2 } from 'lucide-react'; // Removed ShoppingCart icon
import { useTranslation } from 'react-i18next'; // Import useTranslation

const AdminDashboard = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6">{t('admin_dashboard_title')}</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"> {/* Changed grid-cols-4 to grid-cols-3 */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">{t('total_farmers_card_title')}</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,250</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">{t('total_projects_card_title')}</CardTitle>
                        <Leaf className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">25</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">{t('total_carbon_sales_card_title')}</CardTitle>
                        <BarChart2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">50,000 tCO2e</div>
                    </CardContent>
                </Card>
                {/* Removed Marketplace Products Card */}
            </div>

            {/* Placeholder for data tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader><CardTitle>{t('latest_farmer_registrations_card_title')}</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">{t('latest_farmer_registrations_placeholder')}</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>{t('project_status_card_title')}</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground">{t('project_status_placeholder')}</p></CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminDashboard;
