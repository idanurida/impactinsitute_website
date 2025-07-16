// src/pages/ForCarbonBuyers.jsx

import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Building,
  DollarSign,
  LeafyGreen,
  Handshake,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Clock // Added Clock icon for operating hours
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ForCarbonBuyers = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    emailBuyer: '',
    phoneBuyer: '',
    country: '',
    industry: '',
    carbonVolume: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'loading'

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('loading');

    // API Key dari wp-config.php, diteruskan sebagai environment variable di Netlify
    const API_KEY = import.meta.env.VITE_WP_API_KEY; // Pastikan ini sesuai dengan nama env var Anda

    if (!API_KEY) {
      console.error("API Key is not defined. Please set VITE_WP_API_KEY in your .env file.");
      setSubmissionStatus('error');
      alert(t('api_key_missing_error')); // Terjemahkan pesan error
      return;
    }

    try {
      const response = await fetch('https://impactinstitute.asia/wp-json/custom/v1/submit-buyer-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': API_KEY // Mengirim API Key melalui header kustom
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || t('form_submission_failed')); // Terjemahkan pesan error
      }

      const result = await response.json();
      console.log('Form submission successful:', result);
      setSubmissionStatus('success');
      setFormData({ // Reset form
        companyName: '',
        contactPerson: '',
        emailBuyer: '',
        phoneBuyer: '',
        country: '',
        industry: '',
        carbonVolume: '',
        message: ''
      });
      alert(t('form_submission_success')); // Terjemahkan pesan sukses

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
      alert(`${t('form_submission_error')}: ${error.message}`); // Terjemahkan pesan error
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white overflow-hidden py-24 lg:py-32"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {t('carbon_buyers_hero_title_part1')}<br />
            <span className="text-accent-green">{t('carbon_buyers_hero_title_part2')}</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            {t('carbon_buyers_hero_description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
              <Link to={`/${lang}/kontak`}>
                {t('contact_us_button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
              <Link to={`/${lang}/proyek-kami`}>{t('view_our_projects_button')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('why_partner_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('why_partner_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <LeafyGreen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('high_quality_credits_title')}</h3>
              <p className="text-gray-600">{t('high_quality_credits_desc')}</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('competitive_pricing_title')}</h3>
              <p className="text-gray-600">{t('competitive_pricing_desc')}</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Handshake className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('direct_impact_title')}</h3>
              <p className="text-gray-600">{t('direct_impact_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Buyer Registration Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('buyer_form_title')}</h2>
            <p className="text-xl text-gray-600">
              {t('buyer_form_description')}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t('buyer_contact_form_heading')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">{t('company_name_label')} *</Label>
                    <Input
                      id="companyName"
                      type="text"
                      placeholder={t('company_name_placeholder')}
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">{t('contact_person_label')} *</Label>
                    <Input
                      id="contactPerson"
                      type="text"
                      placeholder={t('contact_person_placeholder')}
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="emailBuyer">{t('email_label')} *</Label>
                    <Input
                      id="emailBuyer"
                      type="email"
                      placeholder={t('email_placeholder')}
                      value={formData.emailBuyer}
                      onChange={(e) => handleInputChange('emailBuyer', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneBuyer">{t('phone_number_label')}</Label>
                    <Input
                      id="phoneBuyer"
                      type="tel"
                      placeholder={t('phone_number_placeholder')}
                      value={formData.phoneBuyer}
                      onChange={(e) => handleInputChange('phoneBuyer', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country">{t('country_label')}</Label>
                    <Input
                      id="country"
                      type="text"
                      placeholder={t('country_placeholder')}
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">{t('industry_label')}</Label>
                    <Input
                      id="industry"
                      type="text"
                      placeholder={t('industry_placeholder')}
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="carbonVolume">{t('estimated_carbon_volume_label')}</Label>
                  <Select value={formData.carbonVolume} onValueChange={(value) => handleInputChange('carbonVolume', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('select_carbon_volume_placeholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-than-1000">{t('volume_less_1000')}</SelectItem>
                      <SelectItem value="1000-5000">{t('volume_1000_5000')}</SelectItem>
                      <SelectItem value="5000-10000">{t('volume_5000_10000')}</SelectItem>
                      <SelectItem value="more-than-10000">{t('volume_more_10000')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('message_label')} *</Label>
                  <Textarea
                    id="message"
                    placeholder={t('message_placeholder')}
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={submissionStatus === 'loading'}>
                  {submissionStatus === 'loading' ? t('submitting_form') : t('submit_form_button')}
                </Button>

                {submissionStatus === 'success' && (
                  <p className="text-green-600 text-center mt-4">{t('form_submission_success')}</p>
                )}
                {submissionStatus === 'error' && (
                  <p className="text-red-600 text-center mt-4">{t('form_submission_error')}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info (Reused from Footer/Contact page for consistency) */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('contact_info_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact_info_description_carbon_buyers')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span>{t('office_address_title')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {t('address_line1')}<br />
                  {t('address_line2')}<br />
                  {t('address_line3')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>{t('phone_whatsapp_title')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">+62 812-1826-9298</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span>{t('email_title')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">info@impactinstitute.asia</p>
                <p className="text-gray-700">carbon@impactinstitute.asia</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>{t('operating_hours_title_contact')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <p><strong>{t('operating_hours_weekday_title')}:</strong> {t('operating_hours_weekday_contact')}</p>
                  <p><strong>{t('operating_hours_saturday_title')}:</strong> {t('operating_hours_saturday_contact')}</p>
                  <p><strong>{t('operating_hours_sunday_title')}:</strong> {t('operating_hours_sunday_contact')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForCarbonBuyers;
