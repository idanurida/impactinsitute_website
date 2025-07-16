// src/pages/ForFarmers.jsx

import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  DollarSign,
  Leaf,
  Users,
  Award,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

/**
 * Komponen halaman Untuk Petani.
 * Menyediakan informasi, manfaat, dan FAQ
 * yang relevan bagi petani yang tertarik untuk bergabung.
 */
const ForFarmers = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  // State untuk data formulir pendaftaran lahan
  const [registrationFormData, setRegistrationFormData] = useState({
    namaLengkap: '',
    nomorKTP: '',
    alamatLengkap: '',
    namaKelompokTani: '',
    nomorTelepon: '',
    email: '',
    provinsi: '',
    kabupatenKota: '',
    kecamatan: '',
    desaKelurahan: '',
    nomorDokumenTanah: '',
    luasLahan: '',
    satuanLuasLahan: 'hektar', // Default satuan
    jenisTumbuhan: [], // Bisa multiple select atau diisi bebas
    jenisTanamanUtama: '',
    jenisPohonPenaung: '',
    tahunTanamPohonPenaung: '',
    jenisTanah: '',
    kemiringanLahan: '',
    riwayatPenggunaanLahan: '',
    deskripsiAktivitasPertanian: '',
    statusKepemilikanLahan: '',
    fotoLahan: null, // For file input
    pernyataanKesediaan: null // For file input
  });

  // State untuk status pengiriman formulir
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [submissionMessage, setSubmissionMessage] = useState('');

  // State untuk mengelola FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Data untuk dropdown jenis tumbuhan
  const jenisTumbuhanOptions = [
    t('plant_type_coffee'), t('plant_type_cocoa'), t('plant_type_agroforestry'),
    t('plant_type_community_forest'), t('plant_type_palm_oil'), t('plant_type_rubber'),
    t('plant_type_clove'), t('plant_type_vanilla'), t('plant_type_other')
  ];

  // Data untuk dropdown jenis tanah
  const jenisTanahOptions = [
    t('soil_type_clay'), t('soil_type_sandy'), t('soil_type_peat'),
    t('soil_type_volcanic'), t('soil_type_alluvial'), t('soil_type_other')
  ];

  // Data untuk dropdown riwayat penggunaan lahan
  const riwayatLahanOptions = [
    t('land_history_garden'), t('land_history_bush'), t('land_history_forest'),
    t('land_history_rice_field'), t('land_history_other')
  ];

  // Data untuk dropdown status kepemilikan lahan
  const statusKepemilikanOptions = [
    t('ownership_private'), t('ownership_customary'), t('ownership_skt'),
    t('ownership_rent_loan'), t('ownership_other')
  ];

  // Fungsi untuk menangani perubahan input formulir pendaftaran
  const handleRegistrationInputChange = (field, value) => {
    setRegistrationFormData(prev => ({ ...prev, [field]: value }));
  };

  // Fungsi untuk menangani perubahan file input
  const handleFileUpload = (field, files) => {
    setRegistrationFormData(prev => ({ ...prev, [field]: files }));
  };

  // Fungsi untuk submit formulir pendaftaran
  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('loading');
    setSubmissionMessage(t('submitting_form_message')); // Terjemahkan

    // API Key dari wp-config.php, diteruskan sebagai environment variable di Netlify
    const API_KEY = import.meta.env.VITE_WP_API_KEY; // Pastikan ini sesuai dengan nama env var Anda

    if (!API_KEY) {
      console.error("API Key is not defined. Please set VITE_WP_API_KEY in your .env file.");
      setSubmissionStatus('error');
      setSubmissionMessage(t('api_key_missing_error')); // Terjemahkan
      return;
    }

    try {
      const response = await fetch('https://impactinstitute.asia/wp-json/custom/v1/submit-farmer-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': API_KEY // Mengirim API Key melalui header kustom
        },
        body: JSON.stringify(registrationFormData) // Menggunakan registrationFormData langsung
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form submission successful:', result);
        setSubmissionStatus('success');
        setSubmissionMessage(t('form_submission_success')); // Terjemahkan
        // Reset form setelah submit sukses
        setRegistrationFormData({
          namaLengkap: '',
          nomorKTP: '',
          alamatLengkap: '',
          namaKelompokTani: '',
          nomorTelepon: '',
          email: '',
          provinsi: '',
          kabupatenKota: '',
          kecamatan: '',
          desaKelurahan: '',
          nomorDokumenTanah: '',
          luasLahan: '',
          satuanLuasLahan: 'hektar',
          jenisTumbuhan: [],
          jenisTanamanUtama: '',
          jenisPohonPenaung: '',
          tahunTanamPohonPenaung: '',
          jenisTanah: '',
          kemiringanLahan: '',
          riwayatPenggunaanLahan: '',
          deskripsiAktivitasPertanian: '',
          statusKepemilikanLahan: '',
          fotoLahan: null,
          pernyataanKesediaan: null
        });
      } else {
        const errorData = await response.json();
        console.error('Form submission failed:', response.status, errorData);
        setSubmissionStatus('error');
        setSubmissionMessage(`${t('form_submission_error')}: ${errorData.message || t('unknown_error')}`); // Terjemahkan
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      setSubmissionStatus('error');
      setSubmissionMessage(`${t('network_error')}: ${error.message}`); // Terjemahkan
    }
  };

  // Fungsi untuk toggle FAQ accordion
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t('faq_carbon_credits_q'),
      answer: t('faq_carbon_credits_a')
    },
    {
      question: t('faq_expected_income_q'),
      answer: t('faq_expected_income_a')
    },
    {
      question: t('faq_upfront_cost_q'),
      answer: t('faq_upfront_cost_a')
    },
    {
      question: t('faq_carbon_verification_process_q'),
      answer: t('faq_carbon_verification_process_a')
    },
    {
      question: t('faq_project_performance_q'),
      answer: t('faq_project_performance_a')
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section for Farmers */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white overflow-hidden py-24 lg:py-32"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {t('farmers_hero_title_part1')}<br />
            <span className="text-accent-green">{t('farmers_hero_title_part2')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            {t('farmers_hero_description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90">
              {/* Mengarahkan ke section form pendaftaran lahan */}
              <Link to={`/${lang}/untuk-petani#daftar-lahan`}>
                {t('register_land_button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark">
              <Link to={`/${lang}/bagaimana-kami-bekerja`}>{t('learn_more_button')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('benefits_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('benefits_description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('additional_income_title')}</h3>
              <p className="text-gray-600">{t('additional_income_desc')}</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('sustainable_practices_title')}</h3>
              <p className="text-gray-600">{t('sustainable_practices_desc')}</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('community_support_title')}</h3>
              <p className="text-gray-600">{t('community_support_desc')}</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('global_market_access_title')}</h3>
              <p className="text-gray-600">{t('global_market_access_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Farmers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('how_it_works_farmers_title')}</h2>
            <p className="text-xl text-gray-600">{t('how_it_works_farmers_description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('how_it_works_step1_title')}</h3>
              <p className="text-gray-600">{t('how_it_works_step1_desc')}</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('how_it_works_step2_title')}</h3>
              <p className="text-gray-600">{t('how_it_works_step2_desc')}</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('how_it_works_step3_title')}</h3>
              <p className="text-gray-600">{t('how_it_works_step3_desc')}</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('how_it_works_step4_title')}</h3>
              <p className="text-gray-600">{t('how_it_works_step4_desc')}</p>
            </div>

            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-md">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                5
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{t('how_it_works_step5_title')}</h3>
              <p className="text-gray-600">{t('how_it_works_step5_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form / Call to Action */}
      <section id="daftar-lahan" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('register_land_now_title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('register_land_now_description')}
          </p>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>{t('land_registration_form_title')}</CardTitle>
              <CardDescription>{t('land_registration_form_description')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                {/* Nama Lengkap sesuai KTP */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="namaLengkap">{t('full_name_ktp_label')} *</Label>
                  <Input
                    id="namaLengkap"
                    placeholder={t('full_name_ktp_placeholder')}
                    value={registrationFormData.namaLengkap}
                    onChange={(e) => handleRegistrationInputChange('namaLengkap', e.target.value)}
                    required
                  />
                </div>

                {/* Nomor KTP */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="nomorKTP">{t('ktp_number_label')} *</Label>
                  <Input
                    id="nomorKTP"
                    type="text"
                    placeholder={t('ktp_number_placeholder')}
                    value={registrationFormData.nomorKTP}
                    onChange={(e) => handleRegistrationInputChange('nomorKTP', e.target.value)}
                    maxLength={16}
                    required
                  />
                </div>

                {/* Alamat Lengkap */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="alamatLengkap">{t('full_address_label')} *</Label>
                  <Textarea
                    id="alamatLengkap"
                    placeholder={t('full_address_placeholder')}
                    rows={3}
                    value={registrationFormData.alamatLengkap}
                    onChange={(e) => handleRegistrationInputChange('alamatLengkap', e.target.value)}
                    required
                  />
                </div>

                {/* Nama Kelompok Tani/Koperasi */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="namaKelompokTani">{t('farmer_group_name_label')}</Label>
                  <Input
                    id="namaKelompokTani"
                    placeholder={t('farmer_group_name_placeholder')}
                    value={registrationFormData.namaKelompokTani}
                    onChange={(e) => handleRegistrationInputChange('namaKelompokTani', e.target.value)}
                  />
                </div>

                {/* Informasi Kontak (Nomor Telepon/WhatsApp, Email) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-left">
                    <Label htmlFor="nomorTelepon">{t('phone_whatsapp_label')} *</Label>
                    <Input
                      id="nomorTelepon"
                      type="tel"
                      placeholder={t('phone_whatsapp_placeholder')}
                      value={registrationFormData.nomorTelepon}
                      onChange={(e) => handleRegistrationInputChange('nomorTelepon', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <Label htmlFor="email">{t('email_label')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('email_placeholder')}
                      value={registrationFormData.email}
                      onChange={(e) => handleRegistrationInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Lokasi Lahan (Provinsi, Kabupaten/Kota, Kecamatan, Desa/Kelurahan) - Changed to Input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-left">
                    <Label htmlFor="provinsi">{t('province_label')} *</Label>
                    <Input
                      id="provinsi"
                      placeholder={t('province_placeholder')}
                      value={registrationFormData.provinsi}
                      onChange={(e) => handleRegistrationInputChange('provinsi', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <Label htmlFor="kabupatenKota">{t('regency_city_label')} *</Label>
                    <Input
                      id="kabupatenKota"
                      placeholder={t('regency_city_placeholder')}
                      value={registrationFormData.kabupatenKota}
                      onChange={(e) => handleRegistrationInputChange('kabupatenKota', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <Label htmlFor="kecamatan">{t('district_label')} *</Label>
                    <Input
                      id="kecamatan"
                      placeholder={t('district_placeholder')}
                      value={registrationFormData.kecamatan}
                      onChange={(e) => handleRegistrationInputChange('kecamatan', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <Label htmlFor="desaKelurahan">{t('village_label')} *</Label>
                    <Input
                      id="desaKelurahan"
                      placeholder={t('village_placeholder')}
                      value={registrationFormData.desaKelurahan}
                      onChange={(e) => handleRegistrationInputChange('desaKelurahan', e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Nomor Dokumen Kepemilikan Tanah/lahan */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="nomorDokumenTanah">{t('land_ownership_doc_label')} *</Label>
                  <Input
                    id="nomorDokumenTanah"
                    placeholder={t('land_ownership_doc_placeholder')}
                    value={registrationFormData.nomorDokumenTanah}
                    onChange={(e) => handleRegistrationInputChange('nomorDokumenTanah', e.target.value)}
                    required
                  />
                </div>

                {/* Luas Lahan (dalam Hektar atau satuan lain yang relevan) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-left">
                    <Label htmlFor="luasLahan">{t('land_size_label_form')} *</Label>
                    <Input
                      id="luasLahan"
                      type="number"
                      step="0.01"
                      placeholder={t('land_size_placeholder_form')}
                      value={registrationFormData.luasLahan}
                      onChange={(e) => handleRegistrationInputChange('luasLahan', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <Label htmlFor="satuanLuasLahan">{t('land_unit_label')} *</Label>
                    <Select
                      value={registrationFormData.satuanLuasLahan}
                      onValueChange={(value) => handleRegistrationInputChange('satuanLuasLahan', value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t('select_unit_placeholder')} />
                      </SelectTrigger>
                      <SelectContent className="bg-white shadow-lg">
                        <SelectItem value="hektar">{t('unit_hectare')}</SelectItem>
                        <SelectItem value="meter-persegi">{t('unit_sqm')}</SelectItem>
                        <SelectItem value="are">{t('unit_are')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Jenis Tumbuhan yang Ada/Akan Ditanam */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="jenisTumbuhan">{t('plant_type_label')} *</Label>
                  <Select
                    value={registrationFormData.jenisTumbuhan[0] || ''} // Mengambil item pertama jika ada, atau string kosong
                    onValueChange={(value) => handleRegistrationInputChange('jenisTumbuhan', [value])} // Simpan sebagai array
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('select_plant_type_placeholder')} />
                    </SelectTrigger>
                    <SelectContent className="bg-white shadow-lg">
                      {jenisTumbuhanOptions.map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Jenis Tanaman Utama */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="jenisTanamanUtama">{t('main_crop_type_label')} *</Label>
                  <Input
                    id="jenisTanamanUtama"
                    placeholder={t('main_crop_type_placeholder')}
                    value={registrationFormData.jenisTanamanUtama}
                    onChange={(e) => handleRegistrationInputChange('jenisTanamanUtama', e.target.value)}
                    required
                  />
                </div>

                {/* Jenis Pohon Penaung */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="jenisPohonPenaung">{t('shade_tree_type_label')} *</Label>
                  <Input
                    id="jenisPohonPenaung"
                    placeholder={t('shade_tree_type_placeholder')}
                    value={registrationFormData.jenisPohonPenaung}
                    onChange={(e) => handleRegistrationInputChange('jenisPohonPenaung', e.target.value)}
                    required
                  />
                </div>

                {/* Tahun Tanam Pohon Penaung */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="tahunTanamPohonPenaung">{t('shade_tree_planting_year_label')} *</Label>
                  <Select
                    value={registrationFormData.tahunTanamPohonPenaung}
                    onValueChange={(value) => handleRegistrationInputChange('tahunTanamPohonPenaung', value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('select_year_placeholder')} />
                    </SelectTrigger>
                    <SelectContent className="bg-white shadow-lg">
                      {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(year => (
                        <SelectItem key={year} value={String(year)}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Jenis Tanah */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="jenisTanah">{t('soil_type_label')} *</Label>
                  <Select
                    value={registrationFormData.jenisTanah}
                    onValueChange={(value) => handleRegistrationInputChange('jenisTanah', value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('select_soil_type_placeholder')} />
                    </SelectTrigger>
                    <SelectContent className="bg-white shadow-lg">
                      {jenisTanahOptions.map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Kemiringan lahan dalam (%) */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="kemiringanLahan">{t('land_slope_label')} *</Label>
                  <Input
                    id="kemiringanLahan"
                    type="number"
                    step="0.1"
                    placeholder={t('land_slope_placeholder')}
                    value={registrationFormData.kemiringanLahan}
                    onChange={(e) => handleRegistrationInputChange('kemiringanLahan', e.target.value)}
                    required
                  />
                </div>

                {/* Riwayat Penggunaan Lahan sebelumnya */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="riwayatPenggunaanLahan">{t('land_use_history_label')} *</Label>
                  <Select
                    value={registrationFormData.riwayatPenggunaanLahan}
                    onValueChange={(value) => handleRegistrationInputChange('riwayatPenggunaanLahan', value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('select_land_use_history_placeholder')} />
                    </SelectTrigger>
                    <SelectContent className="bg-white shadow-lg">
                      {riwayatLahanOptions.map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Deskripsi aktivitas pertanian yang dilakukan */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="deskripsiAktivitasPertanian">{t('farming_activities_desc_label')}</Label>
                  <Textarea
                    id="deskripsiAktivitasPertanian"
                    placeholder={t('farming_activities_desc_placeholder')}
                    rows={3}
                    value={registrationFormData.deskripsiAktivitasPertanian}
                    onChange={(e) => handleRegistrationInputChange('deskripsiAktivitasPertanian', e.target.value)}
                  />
                </div>

                {/* Status Kepemilikan Lahan */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="statusKepemilikanLahan">{t('land_ownership_status_label')} *</Label>
                  <Select
                    value={registrationFormData.statusKepemilikanLahan}
                    onValueChange={(value) => handleRegistrationInputChange('statusKepemilikanLahan', value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t('select_ownership_status_placeholder')} />
                    </SelectTrigger>
                    <SelectContent className="bg-white shadow-lg">
                      {statusKepemilikanOptions.map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Upload Foto Lahan */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="fotoLahan">{t('upload_land_photos_label')} *</Label>
                  <Input
                    id="fotoLahan"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    multiple
                    onChange={(e) => handleFileUpload('fotoLahan', e.target.files)}
                    required
                  />
                  <p className="text-xs text-gray-500">{t('upload_land_photos_hint')}</p>
                </div>

                {/* Lampirkan pernyataan kesediaan (Kuasa Pengelolaan Penjualan Karbon) */}
                <div className="space-y-2 text-left">
                  <Label htmlFor="pernyataanKesediaan">{t('attach_consent_statement_label')} *</Label>
                  <Input
                    id="pernyataanKesediaan"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileUpload('pernyataanKesediaan', e.target.files)}
                    required
                  />
                  <p className="text-xs text-gray-500">{t('attach_consent_statement_hint')}</p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-medium hover:text-white"
                  disabled={submissionStatus === 'loading'}
                >
                  {submissionStatus === 'loading' ? t('submitting_form') : t('submit_registration_button')}
                  {submissionStatus === 'loading' ? null : <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </form>

              {/* Submission Status Message */}
              {submissionMessage && (
                <div className={`mt-4 p-3 rounded-lg text-sm ${
                  submissionStatus === 'success' ? 'bg-green-100 text-green-700' :
                  submissionStatus === 'error' ? 'bg-red-100 text-red-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {submissionMessage}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('faq_title_farmers')}</h2>
            <p className="text-xl text-gray-600">{t('faq_description_farmers')}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden bg-card dark:bg-card">
                <CardHeader
                  className="flex flex-row items-center justify-between space-x-4 cursor-pointer py-4 px-6 bg-white hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-primary" />{faq.question}
                  </CardTitle>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-600 transition-transform duration-300 transform rotate-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600 transition-transform duration-300 transform rotate-180" />
                  )}
                </CardHeader>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <CardContent className="overflow-hidden pt-0 pb-4 px-6 text-gray-700">
                    <p>{faq.answer}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info (Reused from Footer/Contact page for consistency) */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('contact_info_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact_info_description_farmers')}
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
                <p className="text-gray-700">+62 812-xxxx-xxxx</p>
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

export default ForFarmers;
