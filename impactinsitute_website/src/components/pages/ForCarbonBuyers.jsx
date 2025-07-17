import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { 
  Building, 
  TrendingUp, 
  Shield, 
  Globe,
  CheckCircle,
  ArrowRight,
  Award,
  BarChart3,
  Leaf,
  Target,
  Phone,
  Mail,
  Users,
  FileText,
  Calendar
} from 'lucide-react'

const ForCarbonBuyers = () => {
  const [language, setLanguage] = useState('id')
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    companyType: '',
    industry: '',
    companySize: '',
    registrationNumber: '',
    taxNumber: '',
    
    // Contact Information
    contactPerson: '',
    position: '',
    email: '',
    phoneNumber: '',
    companyAddress: '',
    
    // Carbon Requirements
    carbonNeed: '',
    projectType: '',
    certificationStandard: '',
    timeline: '',
    budget: '',
    
    // Sustainability Goals
    sustainabilityGoals: '',
    netZeroTarget: '',
    reportingRequirements: '',
    
    // Additional Information
    previousExperience: '',
    additionalRequirements: '',
    
    // Agreements
    termsAccepted: false,
    dataProcessingAccepted: false
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const content = {
    id: {
      title: "Untuk Pembeli Karbon",
      subtitle: "Wujudkan Komitmen Keberlanjutan Perusahaan Anda",
      hero: {
        description: "Bergabunglah dengan perusahaan-perusahaan terdepan yang berkomitmen pada net-zero emissions. Impact Institute menyediakan kredit karbon berkualitas tinggi yang terverifikasi dan transparan untuk membantu mencapai target keberlanjutan Anda."
      },
      benefits: {
        title: "Mengapa Memilih Impact Institute",
        items: [
          {
            icon: Shield,
            title: "Kualitas Terjamin",
            description: "Semua kredit karbon kami tersertifikasi oleh standar internasional seperti VCS dan Gold Standard dengan verifikasi pihak ketiga."
          },
          {
            icon: Globe,
            title: "Dampak Nyata",
            description: "Setiap pembelian kredit karbon berkontribusi langsung pada pemberdayaan petani dan konservasi lingkungan di Indonesia."
          },
          {
            icon: BarChart3,
            title: "Transparansi Penuh",
            description: "Akses real-time ke data proyek, monitoring progres, dan laporan dampak yang komprehensif untuk kebutuhan pelaporan ESG."
          },
          {
            icon: Target,
            title: "Solusi Terintegrasi",
            description: "Dari konsultasi strategi karbon hingga implementasi dan pelaporan, kami menyediakan solusi end-to-end untuk kebutuhan Anda."
          },
          {
            icon: Award,
            title: "Portofolio Beragam",
            description: "Pilihan proyek karbon yang beragam dari berbagai sektor: agroforestri, restorasi hutan, energi terbarukan, dan pertanian berkelanjutan."
          },
          {
            icon: Users,
            title: "Dukungan Ahli",
            description: "Tim ahli kami siap membantu dalam strategi karbon, due diligence, dan optimalisasi portofolio karbon perusahaan Anda."
          }
        ]
      },
      services: {
        title: "Layanan Kami",
        items: [
          {
            title: "Konsultasi Strategi Karbon",
            description: "Analisis jejak karbon perusahaan dan pengembangan strategi net-zero yang komprehensif."
          },
          {
            title: "Portofolio Kredit Karbon",
            description: "Kurasi kredit karbon berkualitas tinggi yang sesuai dengan nilai dan target perusahaan Anda."
          },
          {
            title: "Due Diligence Proyek",
            description: "Verifikasi mendalam terhadap setiap proyek untuk memastikan kualitas dan dampak yang terukur."
          },
          {
            title: "Monitoring & Pelaporan",
            description: "Dashboard real-time dan laporan berkala untuk tracking progres dan kebutuhan compliance."
          },
          {
            title: "Custom Project Development",
            description: "Pengembangan proyek karbon khusus sesuai dengan kebutuhan dan preferensi perusahaan."
          },
          {
            title: "ESG Reporting Support",
            description: "Dukungan dalam penyusunan laporan keberlanjutan dan compliance dengan standar internasional."
          }
        ]
      },
      process: {
        title: "Proses Kemitraan",
        steps: [
          {
            number: "1",
            title: "Konsultasi Awal",
            description: "Diskusi mendalam tentang kebutuhan, target, dan preferensi perusahaan Anda."
          },
          {
            number: "2",
            title: "Analisis & Rekomendasi",
            description: "Analisis jejak karbon dan rekomendasi strategi serta portofolio kredit karbon yang optimal."
          },
          {
            number: "3",
            title: "Due Diligence",
            description: "Verifikasi proyek dan penyusunan dokumentasi lengkap untuk setiap kredit karbon."
          },
          {
            number: "4",
            title: "Eksekusi & Monitoring",
            description: "Pembelian kredit karbon dan monitoring berkelanjutan dengan pelaporan transparan."
          }
        ]
      },
      form: {
        title: "Formulir Registrasi Pembeli Karbon",
        subtitle: "Lengkapi informasi berikut untuk memulai kemitraan dengan kami",
        steps: [
          "Informasi Perusahaan",
          "Kontak & Alamat",
          "Kebutuhan Karbon",
          "Target Keberlanjutan"
        ],
        companyInfo: {
          title: "Informasi Perusahaan",
          companyName: "Nama Perusahaan",
          companyType: "Jenis Perusahaan",
          industry: "Industri/Sektor",
          companySize: "Ukuran Perusahaan",
          registrationNumber: "Nomor Registrasi Perusahaan",
          taxNumber: "NPWP"
        },
        contactInfo: {
          title: "Informasi Kontak",
          contactPerson: "Nama Kontak Person",
          position: "Jabatan",
          email: "Email Perusahaan",
          phoneNumber: "Nomor Telepon",
          companyAddress: "Alamat Perusahaan"
        },
        carbonRequirements: {
          title: "Kebutuhan Karbon",
          carbonNeed: "Kebutuhan Kredit Karbon (ton CO2e/tahun)",
          projectType: "Jenis Proyek yang Diinginkan",
          certificationStandard: "Standar Sertifikasi",
          timeline: "Timeline Kebutuhan",
          budget: "Budget Range"
        },
        sustainabilityGoals: {
          title: "Target Keberlanjutan",
          sustainabilityGoals: "Tujuan Keberlanjutan Perusahaan",
          netZeroTarget: "Target Net-Zero",
          reportingRequirements: "Kebutuhan Pelaporan"
        },
        additionalInfo: {
          title: "Informasi Tambahan",
          previousExperience: "Pengalaman Sebelumnya dengan Kredit Karbon",
          additionalRequirements: "Kebutuhan Khusus Lainnya"
        },
        agreements: {
          terms: "Saya menyetujui syarat dan ketentuan Impact Institute",
          dataProcessing: "Saya menyetujui pemrosesan data perusahaan untuk keperluan kemitraan"
        },
        buttons: {
          next: "Lanjut",
          previous: "Kembali",
          submit: "Kirim Registrasi"
        }
      }
    },
    en: {
      title: "For Carbon Buyers",
      subtitle: "Realize Your Company's Sustainability Commitment",
      hero: {
        description: "Join leading companies committed to net-zero emissions. Impact Institute provides high-quality, verified and transparent carbon credits to help achieve your sustainability targets."
      },
      benefits: {
        title: "Why Choose Impact Institute",
        items: [
          {
            icon: Shield,
            title: "Guaranteed Quality",
            description: "All our carbon credits are certified by international standards such as VCS and Gold Standard with third-party verification."
          },
          {
            icon: Globe,
            title: "Real Impact",
            description: "Every carbon credit purchase directly contributes to farmer empowerment and environmental conservation in Indonesia."
          },
          {
            icon: BarChart3,
            title: "Full Transparency",
            description: "Real-time access to project data, progress monitoring, and comprehensive impact reports for ESG reporting needs."
          },
          {
            icon: Target,
            title: "Integrated Solutions",
            description: "From carbon strategy consulting to implementation and reporting, we provide end-to-end solutions for your needs."
          },
          {
            icon: Award,
            title: "Diverse Portfolio",
            description: "Diverse carbon project options from various sectors: agroforestry, forest restoration, renewable energy, and sustainable agriculture."
          },
          {
            icon: Users,
            title: "Expert Support",
            description: "Our expert team is ready to assist with carbon strategy, due diligence, and optimization of your company's carbon portfolio."
          }
        ]
      },
      services: {
        title: "Our Services",
        items: [
          {
            title: "Carbon Strategy Consulting",
            description: "Corporate carbon footprint analysis and comprehensive net-zero strategy development."
          },
          {
            title: "Carbon Credit Portfolio",
            description: "Curation of high-quality carbon credits that align with your company's values and targets."
          },
          {
            title: "Project Due Diligence",
            description: "In-depth verification of each project to ensure quality and measurable impact."
          },
          {
            title: "Monitoring & Reporting",
            description: "Real-time dashboard and regular reports for progress tracking and compliance needs."
          },
          {
            title: "Custom Project Development",
            description: "Development of custom carbon projects according to company needs and preferences."
          },
          {
            title: "ESG Reporting Support",
            description: "Support in sustainability reporting and compliance with international standards."
          }
        ]
      },
      process: {
        title: "Partnership Process",
        steps: [
          {
            number: "1",
            title: "Initial Consultation",
            description: "In-depth discussion about your company's needs, targets, and preferences."
          },
          {
            number: "2",
            title: "Analysis & Recommendations",
            description: "Carbon footprint analysis and recommendations for optimal strategy and carbon credit portfolio."
          },
          {
            number: "3",
            title: "Due Diligence",
            description: "Project verification and preparation of complete documentation for each carbon credit."
          },
          {
            number: "4",
            title: "Execution & Monitoring",
            description: "Carbon credit purchase and continuous monitoring with transparent reporting."
          }
        ]
      },
      form: {
        title: "Carbon Buyer Registration Form",
        subtitle: "Complete the following information to start partnership with us",
        steps: [
          "Company Information",
          "Contact & Address",
          "Carbon Requirements",
          "Sustainability Targets"
        ],
        companyInfo: {
          title: "Company Information",
          companyName: "Company Name",
          companyType: "Company Type",
          industry: "Industry/Sector",
          companySize: "Company Size",
          registrationNumber: "Company Registration Number",
          taxNumber: "Tax Number"
        },
        contactInfo: {
          title: "Contact Information",
          contactPerson: "Contact Person Name",
          position: "Position",
          email: "Company Email",
          phoneNumber: "Phone Number",
          companyAddress: "Company Address"
        },
        carbonRequirements: {
          title: "Carbon Requirements",
          carbonNeed: "Carbon Credit Needs (tons CO2e/year)",
          projectType: "Desired Project Type",
          certificationStandard: "Certification Standard",
          timeline: "Timeline Requirements",
          budget: "Budget Range"
        },
        sustainabilityGoals: {
          title: "Sustainability Targets",
          sustainabilityGoals: "Company Sustainability Goals",
          netZeroTarget: "Net-Zero Target",
          reportingRequirements: "Reporting Requirements"
        },
        additionalInfo: {
          title: "Additional Information",
          previousExperience: "Previous Experience with Carbon Credits",
          additionalRequirements: "Other Specific Requirements"
        },
        agreements: {
          terms: "I agree to Impact Institute's terms and conditions",
          dataProcessing: "I agree to company data processing for partnership purposes"
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
    if (currentStep < 4) {
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
        ? 'Registrasi berhasil dikirim! Tim kami akan menghubungi Anda dalam 1-2 hari kerja untuk konsultasi awal.' 
        : 'Registration successfully submitted! Our team will contact you within 1-2 business days for initial consultation.'
      )
      setIsSubmitting(false)
      // Reset form
      setFormData({
        companyName: '', companyType: '', industry: '', companySize: '', registrationNumber: '', taxNumber: '',
        contactPerson: '', position: '', email: '', phoneNumber: '', companyAddress: '',
        carbonNeed: '', projectType: '', certificationStandard: '', timeline: '', budget: '',
        sustainabilityGoals: '', netZeroTarget: '', reportingRequirements: '',
        previousExperience: '', additionalRequirements: '',
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
              {currentContent.form.companyInfo.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">{currentContent.form.companyInfo.companyName} *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyType">{currentContent.form.companyInfo.companyType} *</Label>
                <Select value={formData.companyType} onValueChange={(value) => handleInputChange('companyType', value)}>
                  <SelectTrigger className="transition-all duration-300 focus:scale-105">
                    <SelectValue placeholder={language === 'id' ? 'Pilih jenis perusahaan' : 'Select company type'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt">PT (Perseroan Terbatas)</SelectItem>
                    <SelectItem value="cv">CV (Commanditaire Vennootschap)</SelectItem>
                    <SelectItem value="koperasi">Koperasi</SelectItem>
                    <SelectItem value="yayasan">Yayasan</SelectItem>
                    <SelectItem value="multinational">Multinational Corporation</SelectItem>
                    <SelectItem value="government">Government Agency</SelectItem>
                    <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">{currentContent.form.companyInfo.industry} *</Label>
                <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                  <SelectTrigger className="transition-all duration-300 focus:scale-105">
                    <SelectValue placeholder={language === 'id' ? 'Pilih industri' : 'Select industry'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="energy">Energy & Utilities</SelectItem>
                    <SelectItem value="finance">Financial Services</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="retail">Retail & Consumer Goods</SelectItem>
                    <SelectItem value="transportation">Transportation & Logistics</SelectItem>
                    <SelectItem value="agriculture">Agriculture & Food</SelectItem>
                    <SelectItem value="construction">Construction & Real Estate</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="companySize">{currentContent.form.companyInfo.companySize} *</Label>
                <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                  <SelectTrigger className="transition-all duration-300 focus:scale-105">
                    <SelectValue placeholder={language === 'id' ? 'Pilih ukuran perusahaan' : 'Select company size'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                    <SelectItem value="small">Small (11-50 employees)</SelectItem>
                    <SelectItem value="medium">Medium (51-250 employees)</SelectItem>
                    <SelectItem value="large">Large (251-1000 employees)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="registrationNumber">{currentContent.form.companyInfo.registrationNumber}</Label>
                <Input
                  id="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="taxNumber">{currentContent.form.companyInfo.taxNumber}</Label>
                <Input
                  id="taxNumber"
                  value={formData.taxNumber}
                  onChange={(e) => handleInputChange('taxNumber', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                />
              </div>
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-semibold text-primary-dark mb-4">
              {currentContent.form.contactInfo.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contactPerson">{currentContent.form.contactInfo.contactPerson} *</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">{currentContent.form.contactInfo.position} *</Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{currentContent.form.contactInfo.email} *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">{currentContent.form.contactInfo.phoneNumber} *</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="companyAddress">{currentContent.form.contactInfo.companyAddress} *</Label>
                <Textarea
                  id="companyAddress"
                  value={formData.companyAddress}
                  onChange={(e) => handleInputChange('companyAddress', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  rows={3}
                  required
                />
              </div>
            </div>
          </div>
        )
      
      case 3:
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-semibold text-primary-dark mb-4">
              {currentContent.form.carbonRequirements.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="carbonNeed">{currentContent.form.carbonRequirements.carbonNeed} *</Label>
                <Input
                  id="carbonNeed"
                  type="number"
                  value={formData.carbonNeed}
                  onChange={(e) => handleInputChange('carbonNeed', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="projectType">{currentContent.form.carbonRequirements.projectType}</Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger className="transition-all duration-300 focus:scale-105">
                    <SelectValue placeholder={language === 'id' ? 'Pilih jenis proyek' : 'Select project type'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agroforestry">Agroforestry</SelectItem>
                    <SelectItem value="forest-restoration">Forest Restoration</SelectItem>
                    <SelectItem value="sustainable-agriculture">Sustainable Agriculture</SelectItem>
                    <SelectItem value="renewable-energy">Renewable Energy</SelectItem>
                    <SelectItem value="mangrove-restoration">Mangrove Restoration</SelectItem>
                    <SelectItem value="mixed-portfolio">Mixed Portfolio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="certificationStandard">{currentContent.form.carbonRequirements.certificationStandard}</Label>
                <Select value={formData.certificationStandard} onValueChange={(value) => handleInputChange('certificationStandard', value)}>
                  <SelectTrigger className="transition-all duration-300 focus:scale-105">
                    <SelectValue placeholder={language === 'id' ? 'Pilih standar sertifikasi' : 'Select certification standard'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vcs">VCS (Verified Carbon Standard)</SelectItem>
                    <SelectItem value="gold-standard">Gold Standard</SelectItem>
                    <SelectItem value="plan-vivo">Plan Vivo</SelectItem>
                    <SelectItem value="ccb">CCB (Climate, Community & Biodiversity)</SelectItem>
                    <SelectItem value="any">Any International Standard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">{currentContent.form.carbonRequirements.timeline}</Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                  <SelectTrigger className="transition-all duration-300 focus:scale-105">
                    <SelectValue placeholder={language === 'id' ? 'Pilih timeline' : 'Select timeline'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                    <SelectItem value="short-term">Short-term (3-6 months)</SelectItem>
                    <SelectItem value="medium-term">Medium-term (6-12 months)</SelectItem>
                    <SelectItem value="long-term">Long-term (1+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="budget">{currentContent.form.carbonRequirements.budget}</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger className="transition-all duration-300 focus:scale-105">
                    <SelectValue placeholder={language === 'id' ? 'Pilih range budget' : 'Select budget range'} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50k">Under $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                    <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                    <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )
      
      case 4:
        return (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xl font-semibold text-primary-dark mb-4">
              {currentContent.form.sustainabilityGoals.title}
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="sustainabilityGoals">{currentContent.form.sustainabilityGoals.sustainabilityGoals}</Label>
                <Textarea
                  id="sustainabilityGoals"
                  value={formData.sustainabilityGoals}
                  onChange={(e) => handleInputChange('sustainabilityGoals', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  rows={3}
                  placeholder={language === 'id' 
                    ? 'Jelaskan tujuan keberlanjutan dan komitmen ESG perusahaan Anda...' 
                    : 'Describe your company\'s sustainability goals and ESG commitments...'
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="netZeroTarget">{currentContent.form.sustainabilityGoals.netZeroTarget}</Label>
                <Input
                  id="netZeroTarget"
                  value={formData.netZeroTarget}
                  onChange={(e) => handleInputChange('netZeroTarget', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  placeholder={language === 'id' ? 'Contoh: 2030, 2050' : 'Example: 2030, 2050'}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reportingRequirements">{currentContent.form.sustainabilityGoals.reportingRequirements}</Label>
                <Textarea
                  id="reportingRequirements"
                  value={formData.reportingRequirements}
                  onChange={(e) => handleInputChange('reportingRequirements', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  rows={3}
                  placeholder={language === 'id' 
                    ? 'Jelaskan kebutuhan pelaporan ESG, compliance, atau standar yang harus dipenuhi...' 
                    : 'Describe ESG reporting needs, compliance, or standards that must be met...'
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="previousExperience">{currentContent.form.additionalInfo.previousExperience}</Label>
                <Textarea
                  id="previousExperience"
                  value={formData.previousExperience}
                  onChange={(e) => handleInputChange('previousExperience', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  rows={3}
                  placeholder={language === 'id' 
                    ? 'Jelaskan pengalaman sebelumnya dengan pembelian kredit karbon atau proyek keberlanjutan...' 
                    : 'Describe previous experience with carbon credit purchases or sustainability projects...'
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="additionalRequirements">{currentContent.form.additionalInfo.additionalRequirements}</Label>
                <Textarea
                  id="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                  className="transition-all duration-300 focus:scale-105"
                  rows={3}
                  placeholder={language === 'id' 
                    ? 'Tambahkan kebutuhan khusus atau preferensi lainnya...' 
                    : 'Add specific requirements or other preferences...'
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              {currentContent.services.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.services.items.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary-dark">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
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
      <section id="registration-form" className="py-20 bg-gray-50">
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
                style={{ width: `${(currentStep / 4) * 100}%` }}
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
                  
                  {currentStep < 4 ? (
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
            {language === 'id' ? 'Konsultasi Gratis' : 'Free Consultation'}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {language === 'id' 
              ? 'Tim ahli kami siap membantu mengembangkan strategi karbon yang tepat untuk perusahaan Anda' 
              : 'Our expert team is ready to help develop the right carbon strategy for your company'
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
              <a href="mailto:carbonbuyers@impactinstitute.asia">
                <Mail className="mr-2 h-5 w-5" />
                carbonbuyers@impactinstitute.asia
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ForCarbonBuyers

