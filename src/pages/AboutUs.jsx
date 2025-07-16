// src/pages/AboutUs.jsx (Setelah Update)
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  const { lang } = useParams(); // Dapatkan bahasa dari URL

  return (
    <div className="min-h-screen py-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          {t('about_us_page_title')}
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          {t('about_us_page_description')}
        </p>
        <Link 
          to={`/${lang}/`} // Pastikan tautan menggunakan prefix bahasa
          className="text-green-600 hover:underline text-lg"
        >
          {t('back_to_home_button')}
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
