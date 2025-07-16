// src/pages/OurProjects.jsx

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Users,
  ArrowRight,
  Calendar,
  DollarSign,
  BarChart2,
  HeartHandshake,
  TreePine // Changed from Forest to TreePine as per previous instruction
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const OurProjects = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const projects = [
    {
      id: 1,
      name: t('project_agroforestry_name'),
      location: t('project_agroforestry_location_full'),
      description: t('project_agroforestry_description'),
      imageUrl: 'https://placehold.co/600x400/0E2C40/C1E1A7?text=' + t('project_image_text'),
      carbonSaved: '2,450 ton CO2e/tahun',
      farmersImpacted: 150,
      status: t('project_status_active'),
      type: t('project_type_agroforestry'),
      startDate: 'Jan 2022',
      investmentNeeded: 'USD 50,000',
      progress: '85%',
      benefits: [
        t('benefit_increased_farmer_income'),
        t('benefit_improved_soil_quality'),
        t('benefit_water_conservation'),
        t('benefit_carbon_emission_reduction')
      ],
      tags: [t('tag_coffee'), t('tag_agroforestry'), t('tag_carbon'), t('tag_aceh')]
    },
    {
      id: 2,
      name: t('project_mangrove_name'),
      location: t('project_mangrove_location_full'),
      description: t('project_mangrove_description'),
      imageUrl: 'https://placehold.co/600x400/1A4A5A/EFBC75?text=' + t('project_image_text'),
      carbonSaved: '3,200 ton CO2e/tahun',
      farmersImpacted: 89,
      status: t('project_status_active'),
      type: t('project_type_ecosystem_restoration'),
      startDate: 'Mar 2021',
      investmentNeeded: 'USD 75,000',
      progress: '92%',
      benefits: [
        t('benefit_coastal_protection'),
        t('benefit_biodiversity_habitat'),
        t('benefit_local_fisheries_increase'),
        t('benefit_climate_change_mitigation')
      ],
      tags: [t('tag_mangrove'), t('tag_restoration'), t('tag_coastal'), t('tag_lampung')]
    },
    {
      id: 3,
      name: t('project_rubber_name'),
      location: t('project_rubber_location_full'),
      description: t('project_rubber_description'),
      imageUrl: 'https://placehold.co/600x400/148D8D/0E2C40?text=' + t('project_image_text'),
      carbonSaved: '1,800 ton CO2e/tahun',
      farmersImpacted: 120,
      status: t('project_status_active'),
      type: t('project_type_sustainable_agriculture'),
      startDate: 'Jul 2023',
      investmentNeeded: 'USD 40,000',
      progress: '70%',
      benefits: [
        t('benefit_soil_pollution_reduction'),
        t('benefit_farmer_health_improvement'),
        t('benefit_quality_rubber_products'),
        t('benefit_carbon_certification')
      ],
      tags: [t('tag_rubber'), t('tag_agriculture'), t('tag_jambi'), t('tag_certification')]
    },
    {
      id: 4,
      name: t('project_kalimantan_name'),
      location: t('project_kalimantan_location_full'),
      description: t('project_kalimantan_description'),
      imageUrl: 'https://placehold.co/600x400/C1E1A7/1A4A5A?text=' + t('project_image_text'),
      carbonSaved: '4,100 ton CO2e/tahun',
      farmersImpacted: 95,
      status: t('project_status_ongoing'),
      type: t('project_type_land_rehabilitation'),
      startDate: 'Apr 2024',
      investmentNeeded: 'USD 90,000',
      progress: '40%',
      benefits: [
        t('benefit_soil_erosion_prevention'),
        t('benefit_water_quality_improvement'),
        t('benefit_biodiversity_enhancement'),
        t('benefit_ecotourism_development')
      ],
      tags: [t('tag_rehabilitation'), t('tag_critical_land'), t('tag_kalimantan'), t('tag_ecotourism')]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white overflow-hidden py-24 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {t('our_projects_hero_title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            {t('our_projects_hero_description')}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-56 object-cover rounded-t-lg"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/CCCCCC/000000?text=" + t('image_error'); }}
                />
                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{project.name}</CardTitle>
                  <p className="text-gray-600 flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-1 text-green-600" /> {project.location}
                  </p>
                  <p className="text-gray-700 mt-2 text-sm">{project.description.substring(0, 120)}...</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center"><TreePine className="h-4 w-4 mr-1 text-green-600" /> {t('carbon_saved')}:</span>
                      <span className="font-semibold text-green-700">{project.carbonSaved}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center"><Users className="h-4 w-4 mr-1 text-green-600" /> {t('farmers_impacted')}:</span>
                      <span className="font-semibold">{project.farmersImpacted}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center"><Calendar className="h-4 w-4 mr-1 text-green-600" /> {t('start_date')}:</span>
                      <span className="font-semibold">{project.startDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center"><DollarSign className="h-4 w-4 mr-1 text-green-600" /> {t('investment_needed')}:</span>
                      <span className="font-semibold text-blue-700">{project.investmentNeeded}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center"><BarChart2 className="h-4 w-4 mr-1 text-green-600" /> {t('progress')}:</span>
                      <span className="font-semibold text-purple-700">{project.progress}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link to={`/${lang}/proyek-kami/${project.id}`}>
                      {t('view_project_details_button')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Reused from Homepage */}
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
                <HeartHandshake className="mr-2 h-5 w-5" />
                {t('register_your_land_cta_button')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              <Link to={`/${lang}/kontak`}>{t('contact_us_cta_button')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;
