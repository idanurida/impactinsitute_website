// src/pages/Contact.jsx

import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams for language prefix
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Contact = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation
  const { lang } = useParams(); // Get current language from URL params

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Mengganti alert dengan pesan terjemahan
    alert(t('form_success_message')); // Menggunakan t() untuk pesan sukses
    // Anda bisa menambahkan logika pengiriman data ke backend di sini
    // (misalnya, menggunakan fetch atau axios ke endpoint WordPress)
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact_hero_title')}</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              {t('contact_hero_description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
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
                  {/* <p className="text-gray-700">marketplace@impactinstitute.asia</p> // Dihapus */}
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

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t('send_message_title')}</CardTitle>
                  <p className="text-gray-600">
                    {t('send_message_description')}
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('full_name_label')} *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder={t('full_name_placeholder')}
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">{t('email_label')} *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t('email_placeholder')}
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t('phone_number_label')}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder={t('phone_number_placeholder')}
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">{t('subject_label')} *</Label>
                        <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('select_subject_placeholder')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pendaftaran-petani">{t('subject_farmer_registration')}</SelectItem>
                            <SelectItem value="pembelian-karbon">{t('subject_carbon_purchase')}</SelectItem>
                            {/* <SelectItem value="marketplace">{t('subject_marketplace')}</SelectItem> // Dihapus */}
                            <SelectItem value="kemitraan">{t('subject_partnership')}</SelectItem>
                            <SelectItem value="media-pers">{t('subject_media_press')}</SelectItem>
                            <SelectItem value="lainnya">{t('subject_other')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
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

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      <Send className="mr-2 h-4 w-4" />
                      {t('send_message_button')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('faq_title')}</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: t('faq1_question'),
                answer: t('faq1_answer')
              },
              {
                question: t('faq2_question'),
                answer: t('faq2_answer')
              },
              {
                question: t('faq3_question'),
                answer: t('faq3_answer')
              },
              {
                question: t('faq4_question'),
                answer: t('faq4_answer')
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
