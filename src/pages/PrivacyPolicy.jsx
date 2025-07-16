import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import { useTranslation } from 'react-i18next'; // Import useTranslation

const PrivacyPolicy = () => {
    const { t } = useTranslation();
    const { lang } = useParams();

    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Card>
                    <CardHeader className="text-center">
                        <Lock className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                        <CardTitle className="text-3xl">{t('privacy_policy_page_title')}</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-lg max-w-none text-gray-700 leading-relaxed">

                        <h4>{t('privacy_section1_title')}</h4>
                        <p>
                            {t('privacy_section1_paragraph1')}
                        </p>

                        <h4>{t('privacy_section2_title')}</h4>
                        <p>
                            {t('privacy_section2_paragraph1')}
                            <ul>
                                <li>{t('privacy_section2_list_item1')}</li>
                                <li>{t('privacy_section2_list_item2')}</li>
                                <li>{t('privacy_section2_list_item3')}</li>
                                <li>{t('privacy_section2_list_item4')}</li>
                            </ul>
                        </p>

                        <h4>{t('privacy_section3_title')}</h4>
                        <p>
                            {t('privacy_section3_paragraph1')}
                        </p>

                        <h4>{t('privacy_section4_title')}</h4>
                        <p>
                            {t('privacy_section4_paragraph1')}
                        </p>

                        <h4>{t('privacy_section5_title')}</h4>
                        <p>
                            {t('privacy_section5_paragraph1')}
                        </p>
                    </CardContent>
                </Card>
                <div className="text-center mt-12">
                  <Link
                    to={`/${lang}/`} // Pastikan tautan menggunakan prefix bahasa
                    className="text-green-600 hover:underline text-lg"
                  >
                    {t('back_to_home_button')}
                  </Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
