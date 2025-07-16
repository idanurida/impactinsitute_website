// src/pages/Disclaimer.jsx

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Disclaimer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900">
          {t('disclaimer_page_title')}
        </h1>
        <div className="prose prose-lg text-gray-700 mx-auto">
          <p>{t('disclaimer_paragraph1')}</p>
          <p>{t('disclaimer_paragraph2')}</p>
          <p>{t('disclaimer_paragraph3')}</p>
          <p>{t('disclaimer_paragraph4')}</p>
          <p>{t('disclaimer_paragraph5')}</p>
          <p>{t('disclaimer_paragraph6')}</p>
        </div>
        <div className="text-center mt-12">
          <Link
            to={`/${lang}/`} // Pastikan tautan menggunakan prefix bahasa
            className="text-green-600 hover:underline text-lg"
          >
            {t('back_to_home_button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;
