// src/pages/HowWeWork.jsx

import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Lightbulb,
  Handshake,
  CheckCircle,
  BarChart,
  ArrowRight,
  ShieldCheck,
  Users,
  Leaf,
  Globe,
  Cloud,
  DollarSign,
  FileText,
  TrendingUp
} from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

/**
 * Komponen halaman Bagaimana Kami Bekerja.
 * Menjelaskan proses inti Impact Institute dalam mengembangkan dan mengelola
 * proyek-proyek karbon, serta manfaat bagi semua pihak yang terlibat.
 */
const HowWeWork = () => {
  const { t } = useTranslation();
  const { lang } = useParams(); // Dapatkan bahasa dari URL

  const processSteps = [
    {
      step: '1',
      title: t('how_we_work_step1_title'),
      description: t('how_we_work_step1_description'),
      icon: Lightbulb
    },
    {
      step: '2',
      title: t('how_we_work_step2_title'),
      description: t('how_we_work_step2_description'),
      icon: FileText
    },
    {
      step: '3',
      title: t('how_we_work_step3_title'),
      description: t('how_we_work_step3_description'),
      icon: Handshake
    },
    {
      step: '4',
      title: t('how_we_work_step4_title_mrv'),
      description: t('how_we_work_step4_description_mrv'),
      icon: BarChart
    },
    {
      step: '5',
      title: t('how_we_work_step5_title_certification'),
      description: t('how_we_work_step5_description_certification'),
      icon: CheckCircle
    },
    {
      step: '6',
      title: t('how_we_work_step6_title_sales'),
      description: t('how_we_work_step6_description_sales'),
      icon: DollarSign
    }
  ];

  const valuePropositions = [
    {
      icon: Users,
      title: t('value_prop_community_empowerment_title'),
      description: t('value_prop_community_empowerment_description')
    },
    {
      icon: Leaf,
      title: t('value_prop_environmental_restoration_title'),
      description: t('value_prop_environmental_restoration_description')
    },
    {
      icon: Globe,
      title: t('value_prop_global_climate_contribution_title'),
      description: t('value_prop_global_climate_contribution_description')
    },
    {
      icon: ShieldCheck,
      title: t('value_prop_transparency_accountability_title'),
      description: t('value_prop_transparency_accountability_description')
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {t('how_we_work_hero_title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            {t('how_we_work_hero_description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
              <Link to={`/${lang}/untuk-petani`}>
                {t('for_farmers_button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
              <Link to={`/${lang}/untuk-pembeli-karbon`}>{t('for_carbon_buyers_button')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('our_process_title')}</h2>
            <p className="text-xl text-gray-600">{t('our_process_description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.step}. {step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('value_we_provide_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('value_we_provide_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePropositions.map((prop, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <prop.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Reused from Homepage */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cta_title')}
          </h2>
          <p className="text-xl text-green-100 mb-8">
            {t('cta_description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50">
              <Link to={`/${lang}/untuk-petani`}>
                <Users className="mr-2 h-5 w-5" />
                {t('register_your_land_cta_button')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              <Link to={`/${lang}/kontak`}>
                <Cloud className="mr-2 h-5 w-5" />
                {t('contact_us_cta_button')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
