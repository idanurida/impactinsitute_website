import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  Leaf, 
  Users, 
  TrendingUp, 
  Shield,
  CheckCircle,
  ArrowRight,
  FileText,
  Calculator,
  Award,
  Phone,
  Mail,
  MapPin,
  User,
  Building,
  Calendar
} from 'lucide-react'

const ForFarmers = () => {
  const [language, setLanguage] = useState('id')
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    idNumber: '',
    phoneNumber: '',
    email: '',
    address: '',
    
    // Land Information
    landArea: '',
    landType: '',
    currentCrop: '',
    landOwnership: '',
    landCertificate: '',
    
    // Location Information
    province: '',
    regency: '',
    district: '',
    village: '',
    coordinates: '',
    
    // Farming Information
    farmingExperience: '',
    currentPractices: '',
    organicCertification: false,
    previousProjects: '',
    
    // Additional Information
    bankAccount: '',
    bankName: '',
    accountHolder: '',
    additionalNotes: '',
    
    // Agreements
    termsAccepted: false,
    dataProcessingAccepted: false
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const content = {
    id: {
      title: "Untuk Petani",
      subtitle: "Bergabunglah dengan Gerakan Karbon Positif",
      hero: {
        description: "Daftarkan lahan Anda dan mulai mendapatkan penghasilan tambahan dari praktik pertanian berkelanjutan. Impact Institute membantu petani Indonesia berkontribusi pada solusi perubahan iklim sambil meningkatkan kesejahteraan ekonomi."
      },
      benefits: {
        title: "Manfaat Bergabung dengan Impact Institute",
        items: [
          {
            icon: TrendingUp,
            title: "Penghasilan Tambahan",
            description: "Dapatkan kompensasi finansial dari serapan karbon lahan Anda dengan harga yang kompetitif dan transparan."
          },
          {
            icon: Leaf,
            title: "Praktik Berkelanjutan",
            description: "Pelajari dan terapkan teknik pertanian berkelanjutan yang meningkatkan produktivitas dan kualitas tanah."
          },
          {
            icon: Users,
            title: "Pendampingan Ahli",
            description: "Dapatkan bimbingan dari tim ahli kami dalam implementasi proyek karbon dan praktik pertanian terbaik."
          },
          {
            icon: Shield,
            title: "Jaminan Transparan",
            description: "Sistem monitoring dan pelaporan yang transparan dengan verifikasi independen untuk setiap proyek."
          },
          {
            icon: Award,
            title: "Sertifikasi Internasional",
            description: "Proyek Anda akan mendapat sertifikasi dari standar internasional seperti VCS dan Gold Standard."
          },
          {
            icon: Calculator,
            title: "Teknologi Terdepan",
            description: "Manfaatkan teknologi satelit, IoT, dan AI untuk monitoring dan optimalisasi proyek karbon Anda."
          }
        ]
      },
      process: {
        title: "Proses Pendaftaran",
        steps: [
          {
            number: "1",
            title: "Daftar Online",
            description: "Isi formulir pendaftaran dengan lengkap dan upload dokumen yang diperlukan."
          },
          {
            number: "2", 
            title: "Verifikasi Lahan",
            description: "Tim kami akan melakukan survei dan verifikasi kelayakan lahan Anda."
          },
          {
            number: "3",
            title: "Perencanaan Proyek",
            description: "Kami akan mengembangkan rencana proyek karbon yang sesuai dengan kondisi lahan Anda."
          },
          {
            number: "4",
            title: "Implementasi",
            description: "Mulai implementasi dengan pendampingan penuh dari tim ahli kami."
          }
        ]
      },
      form: {
        title: "Formulir Pendaftaran Lahan",
        subtitle: "Lengkapi informasi berikut untuk memulai proses pendaftaran",
        steps: [
          "Informasi Pribadi",
          "Informasi Lahan", 
          "Lokasi Lahan",
          "Informasi Pertanian",
          "Informasi Tambahan"
        ],
        personalInfo: {
          title: "Informasi Pribadi",
          fullName: "Nama Lengkap",
          idNumber: "Nomor KTP/NIK",
          phoneNumber: "Nomor Telepon/WhatsApp",
          email: "Alamat Email",
          address: "Alamat Lengkap"
        },
        landInfo: {
          title: "Informasi Lahan",
          landArea: "Luas Lahan (Hektar)",
          landType: "Jenis Tutupan Lahan",
          currentCrop: "Tanaman Saat Ini",
          landOwnership: "Status Kepemilikan",
          landCertificate: "Nomor Sertifikat Tanah"
        },
        locationInfo: {
          title: "Lokasi Lahan",
          province: "Provinsi",
          regency: "Kabupaten/Kota",
          district: "Kecamatan",
          village: "Desa/Kelurahan",
          coordinates: "Koordinat GPS (Opsional)"
        },
        farmingInfo: {
          title: "Informasi Pertanian",
          farmingExperience: "Pengalaman Bertani (Tahun)",
          currentPractices: "Praktik Pertanian Saat Ini",
          organicCertification: "Memiliki Sertifikat Organik",
          previousProjects: "Pengalaman Proyek Lingkungan Sebelumnya"
        },
        additionalInfo: {
          title: "Informasi Tambahan",
          bankAccount: "Nomor Rekening Bank",
          bankName: "Nama Bank",
          accountHolder: "Nama Pemegang Rekening",
          additionalNotes: "Catatan Tambahan"
        },
        agreements: {
          terms: "Saya menyetujui syarat dan ketentuan Impact Institute",
          dataProcessing: "Saya menyetujui pemrosesan data pribadi untuk keperluan program"
        },
        buttons: {
          next: "Lanjut",
          previous: "Kembali",
          submit: "Kirim Pendaftaran"
        }
      }
    },
    en: {
      title: "For Farmers",
      subtitle: "Join the Carbon Positive Movement",
      hero: {
        description: "Register your land and start earning additional income from sustainable farming practices. Impact Institute helps Indonesian farmers contribute to climate change solutions while improving economic welfare."
      },
      benefits: {
        title: "Benefits of Joining Impact Institute",
        items: [
          {
            icon: TrendingUp,
            title: "Additional Income",
            description: "Get financial compensation from your land's carbon sequestration at competitive and transparent prices."
          },
          {
            icon: Leaf,
            title: "Sustainable Practices",
            description: "Learn and implement sustainable farming techniques that increase productivity and soil quality."
          },
          {
            icon: Users,
            title: "Expert Guidance",
            description: "Get guidance from our expert team in carbon project implementation and best farming practices."
          },
          {
            icon: Shield,
            title: "Transparent Guarantee",
            description: "Transparent monitoring and reporting system with independent verification for every project."
          },
          {
            icon: Award,
            title: "International Certification",
            description: "Your project will be certified by international standards such as VCS and Gold Standard."
          },
          {
            icon: Calculator,
            title: "Advanced Technology",
            description: "Utilize satellite technology, IoT, and AI for monitoring and optimizing your carbon projects."
          }
        ]
      },
      process: {
        title: "Registration Process",
        steps: [
          {
            number: "1",
            title: "Register Online",
            description: "Complete the registration form and upload required documents."
          },
          {
            number: "2",
            title: "Land Verification", 
            description: "Our team will conduct surveys and verify your land's eligibility."
          },
          {
            number: "3",
            title: "Project Planning",
            description: "We will develop a carbon project plan suitable for your land conditions."
          },
          {
            number: "4",
            title: "Implementation",
            description: "Start implementation with full guidance from our expert team."
          }
        ]
      },
      form: {
        title: "Land Registration Form",
        subtitle: "Complete the following information to start the registration process",
        steps: [
          "Personal Information",
          "Land Information",
          "Land Location", 
          "Farming Information",
          "Additional Information"
        ],
        personalInfo: {
          title: "Personal Information",
          fullName: "Full Name",
          idNumber: "ID Card Number/NIK",
          phoneNumber: "Phone Number/WhatsApp",
          email: "Email Address",
          address: "Complete Address"
        },
        landInfo: {
          title: "Land Information",
          landArea: "Land Area (Hectares)",
          landType: "Land Cover Type",
          currentCrop: "Current Crop",
          landOwnership: "Ownership Status",
          landCertificate: "Land Certificate Number"
        },
        locationInfo: {
          title: "Land Location",
          province: "Province",
          regency: "Regency/City",
          district: "District",
          village: "Village",
          coordinates: "GPS Coordinates (Optional)"
        },
        farmingInfo: {
          title: "Farming Information",
          farmingExperience: "Farming Experience (Years)",
          currentPractices: "Current Farming Practices",
          organicCertification: "Have Organic Certification",
          previousProjects: "Previous Environmental Project Experience"
        },
        additionalInfo: {
          title: "Additional Information",
          bankAccount: "Bank Account Number",
          bankName: "Bank Name",
          accountHolder: "Account Holder Name",
          additionalNotes: "Additional Notes"
        },
        agreements: {
          terms: "I agree to Impact Institute's terms and conditions",
          dataProcessing: "I agree to personal data processing for program purposes"
        },
        buttons: {
          next: "Next",
          previous: "Previous",
          submit: "Submit Registration"
        }
      }
    }
  }

  const currentContent = content[language]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert(language === 'id' 
        ? 'Pendaftaran berhasil dikirim! Tim kami akan menghubungi Anda dalam 2-3 hari kerja.' 
        : 'Registration successfully submitted! Our team will contact you within 2-3 business days.'
      )
      setIsSubmitting(false)
      // Reset form
      setFormData({
        fullName: '', idNumber: '', phoneNumber: '', email: '', address: '',
        landArea: '', landType: '', currentCrop: '', landOwnership: '', landCertificate: '',
        province: '', regency: '', district: '', village: '', coordinates: '',
        farmingExperience: '', currentPractices: '', organicCertification: false, previousProjects: '',
        bankAccount: '', bankName: '', accountHolder: '', additionalNotes: '',
        termsAccepted: false, dataProcessingAccepted: false
      })
      setCurrentStep(1)
    }, 2000)
  }

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-semibold text-primary-dark mb-4">
              {currentContent.form.personalInfo.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">{currentContent.form.personalInfo.fullName} *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="idNumber">{currentContent.form.personalInfo.idNumber} *</Label>
                <Input
                  id="idNumber"
                  value={formData.idNumber}
                  onChange={(e) => handleInputChange('idNumber', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">{currentContent.form.personalInfo.phoneNumber} *</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{currentContent.form.personalInfo.email} *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">{currentContent.form.personalInfo.address} *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  rows={3}
                  required
                />
              </div>
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-semibold text-primary-dark mb-4">
              {currentContent.form.landInfo.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="landArea">{currentContent.form.landInfo.landArea} *</Label>
                <Input
                  id="landArea"
                  type="number"
                  step="0.1"
                  value={formData.landArea}
                  onChange={(e) => handleInputChange('landArea', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="landType">{currentContent.form.landInfo.landType} *</Label>
                <Select value={formData.landType} onValueChange={(value) => handleInputChange('landType', value)}>
                  <SelectTrigger className="transition-all duration-300 focus:scale-105">
                    <SelectValue placeholder={language === 'id' ? 'Pilih jenis lahan' : 'Select land type'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sawah">Sawah</SelectItem>
                    <SelectItem value="ladang">Ladang</SelectItem>
                    <SelectItem value="kebun">Kebun</SelectItem>
                    <SelectItem value="hutan">Hutan</SelectItem>
                    <SelectItem value="agroforestri">Agroforestri</SelectItem>
                    <SelectItem value="perkebunan">Perkebunan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="currentCrop">{currentContent.form.landInfo.currentCrop}</Label>
                <Input
                  id="currentCrop"
                  value={formData.currentCrop}
                  onChange={(e) => handleInputChange('currentCrop', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="landOwnership">{currentContent.form.landInfo.landOwnership} *</Label>
                <Select value={formData.landOwnership} onValueChange={(value) => handleInputChange('landOwnership', value)}>
                  <SelectTrigger className="transition-all duration-300 focus:scale-105">
                    <SelectValue placeholder={language === 'id' ? 'Pilih status kepemilikan' : 'Select ownership status'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="milik-sendiri">{language === 'id' ? 'Milik Sendiri' : 'Own Property'}</SelectItem>
                    <SelectItem value="sewa">{language === 'id' ? 'Sewa' : 'Rent'}</SelectItem>
                    <SelectItem value="bagi-hasil">{language === 'id' ? 'Bagi Hasil' : 'Profit Sharing'}</SelectItem>
                    <SelectItem value="hibah">{language === 'id' ? 'Hibah' : 'Grant'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="landCertificate">{currentContent.form.landInfo.landCertificate}</Label>
                <Input
                  id="landCertificate"
                  value={formData.landCertificate}
                  onChange={(e) => handleInputChange('landCertificate', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
            </div>
          </div>
        )
      
      case 3:
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-semibold text-primary-dark mb-4">
              {currentContent.form.locationInfo.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="province">{currentContent.form.locationInfo.province} *</Label>
                <Input
                  id="province"
                  value={formData.province}
                  onChange={(e) => handleInputChange('province', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="regency">{currentContent.form.locationInfo.regency} *</Label>
                <Input
                  id="regency"
                  value={formData.regency}
                  onChange={(e) => handleInputChange('regency', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">{currentContent.form.locationInfo.district} *</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) => handleInputChange('district', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="village">{currentContent.form.locationInfo.village} *</Label>
                <Input
                  id="village"
                  value={formData.village}
                  onChange={(e) => handleInputChange('village', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="coordinates">{currentContent.form.locationInfo.coordinates}</Label>
                <Input
                  id="coordinates"
                  value={formData.coordinates}
                  onChange={(e) => handleInputChange('coordinates', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  placeholder="Contoh: -6.2088, 106.8456"
                />
              </div>
            </div>
          </div>
        )
      
      case 4:
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-semibold text-primary-dark mb-4">
              {currentContent.form.farmingInfo.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="farmingExperience">{currentContent.form.farmingInfo.farmingExperience} *</Label>
                <Input
                  id="farmingExperience"
                  type="number"
                  value={formData.farmingExperience}
                  onChange={(e) => handleInputChange('farmingExperience', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="organicCertification">{currentContent.form.farmingInfo.organicCertification}</Label>
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox
                    id="organicCertification"
                    checked={formData.organicCertification}
                    onCheckedChange={(checked) => handleInputChange('organicCertification', checked)}
                  />
                  <Label htmlFor="organicCertification" className="text-sm">
                    {language === 'id' ? 'Ya, saya memiliki sertifikat organik' : 'Yes, I have organic certification'}
                  </Label>
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="currentPractices">{currentContent.form.farmingInfo.currentPractices}</Label>
                <Textarea
                  id="currentPractices"
                  value={formData.currentPractices}
                  onChange={(e) => handleInputChange('currentPractices', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  rows={3}
                  placeholder={language === 'id' 
                    ? 'Jelaskan praktik pertanian yang saat ini Anda terapkan...' 
                    : 'Describe the farming practices you currently apply...'
                  }
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="previousProjects">{currentContent.form.farmingInfo.previousProjects}</Label>
                <Textarea
                  id="previousProjects"
                  value={formData.previousProjects}
                  onChange={(e) => handleInputChange('previousProjects', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  rows={3}
                  placeholder={language === 'id' 
                    ? 'Jelaskan pengalaman proyek lingkungan sebelumnya (jika ada)...' 
                    : 'Describe previous environmental project experience (if any)...'
                  }
                />
              </div>
            </div>
          </div>
        )
      
      case 5:
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-semibold text-primary-dark mb-4">
              {currentContent.form.additionalInfo.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="bankAccount">{currentContent.form.additionalInfo.bankAccount} *</Label>
                <Input
                  id="bankAccount"
                  value={formData.bankAccount}
                  onChange={(e) => handleInputChange('bankAccount', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bankName">{currentContent.form.additionalInfo.bankName} *</Label>
                <Input
                  id="bankName"
                  value={formData.bankName}
                  onChange={(e) => handleInputChange('bankName', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="accountHolder">{currentContent.form.additionalInfo.accountHolder} *</Label>
                <Input
                  id="accountHolder"
                  value={formData.accountHolder}
                  onChange={(e) => handleInputChange('accountHolder', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="additionalNotes">{currentContent.form.additionalInfo.additionalNotes}</Label>
                <Textarea
                  id="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  rows={3}
                  placeholder={language === 'id' 
                    ? 'Tambahkan informasi lain yang menurut Anda penting...' 
                    : 'Add other information you think is important...'
                  }
                />
              </div>
            </div>
            
            {/* Agreements */}
            <div className="space-y-4 pt-6 border-t">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="termsAccepted"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange('termsAccepted', checked)}
                  required
                />
                <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
                  {currentContent.form.agreements.terms}
                </Label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="dataProcessingAccepted"
                  checked={formData.dataProcessingAccepted}
                  onCheckedChange={(checked) => handleInputChange('dataProcessingAccepted', checked)}
                  required
                />
                <Label htmlFor="dataProcessingAccepted" className="text-sm leading-relaxed">
                  {currentContent.form.agreements.dataProcessing}
                </Label>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen">
      {/* Language Toggle */}
      <div className="fixed top-20 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2">
          <button
            onClick={() => setLanguage('id')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === 'id' 
                ? 'bg-accent-teal text-white' 
                : 'text-gray-600 hover:text-accent-teal'
            }`}
          >
            ID
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              language === 'en' 
                ? 'bg-accent-teal text-white' 
                : 'text-gray-600 hover:text-accent-teal'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary-medium to-accent-teal text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {currentContent.title}
            </h1>
            <p className="text-xl text-gray-100 max-w-4xl mx-auto mb-8">
              {currentContent.subtitle}
            </p>
            <p className="text-lg text-gray-200 max-w-5xl mx-auto">
              {currentContent.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.benefits.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.benefits.items.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-accent-teal" />
                  </div>
                  <CardTitle className="text-xl text-primary-dark">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.process.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.process.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registration-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.form.title}
            </h2>
            <p className="text-xl text-gray-600">
              {currentContent.form.subtitle}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {currentContent.form.steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    currentStep > index + 1 
                      ? 'bg-accent-teal text-white' 
                      : currentStep === index + 1 
                        ? 'bg-accent-orange text-primary-dark' 
                        : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > index + 1 ? <CheckCircle className="h-5 w-5" /> : index + 1}
                  </div>
                  <span className={`text-xs mt-2 text-center transition-colors duration-300 ${
                    currentStep >= index + 1 ? 'text-primary-dark' : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-accent-teal h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                {renderFormStep()}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="transition-all duration-300 hover:scale-105"
                  >
                    {currentContent.form.buttons.previous}
                  </Button>
                  
                  {currentStep < 5 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="bg-accent-teal hover:bg-accent-teal/90 transition-all duration-300 hover:scale-105"
                    >
                      {currentContent.form.buttons.next}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!formData.termsAccepted || !formData.dataProcessingAccepted || isSubmitting}
                      className="bg-accent-orange text-primary-dark hover:bg-accent-orange/90 transition-all duration-300 hover:scale-105"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-dark mr-2"></div>
                          {language === 'id' ? 'Mengirim...' : 'Submitting...'}
                        </div>
                      ) : (
                        currentContent.form.buttons.submit
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            {language === 'id' ? 'Butuh Bantuan?' : 'Need Help?'}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {language === 'id' 
              ? 'Tim kami siap membantu Anda dalam proses pendaftaran' 
              : 'Our team is ready to help you with the registration process'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-teal hover:bg-accent-teal/90">
              <a href="https://wa.me/6281218269298" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp: +62 812-1826-9298
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:daftarlahan@impactinstitute.asia">
                <Mail className="mr-2 h-5 w-5" />
                daftarlahan@impactinstitute.asia
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ForFarmers

