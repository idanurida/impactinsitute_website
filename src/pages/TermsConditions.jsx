import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import { useTranslation } from 'react-i18next'; // Import useTranslation

const TermsConditions = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="text-center">
            <FileText className="mx-auto h-12 w-12 text-primary-medium mb-4" />
            <CardTitle className="text-3xl">{t('terms_conditions_page_title')}</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="font-semibold text-red-600">
              {/* This paragraph was empty/placeholder, kept it as is but can be removed if not needed */}
            </p>

            <h4>{t('terms_section1_title')}</h4>
            <p>
              {t('terms_section1_paragraph1')}
            </p>

            <h4>{t('terms_section2_title')}</h4>
            <p>
              {t('terms_section2_paragraph1')}
            </p>

            {/* Point 3. Hak Kekayaan Intelektual telah dihapus sesuai permintaan */}

            <h4>{t('terms_section3_title')}</h4> {/* Nomor poin disesuaikan */}
            <p>
              {t('terms_section3_paragraph1')}
            </p>

            <h4>{t('terms_section4_title')}</h4> {/* Nomor poin disesuaikan */}
            <p>
              {t('terms_section4_paragraph1')}
            </p>

            <h4>{t('terms_section5_title')}</h4> {/* Nomor poin disesuaikan */}
            <p>
              {t('terms_section5_paragraph1')}
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

export default TermsConditions;
