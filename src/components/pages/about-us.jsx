// File: src/pages/about-us.jsx
import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Leaf, Users, Award, Globe, Target, Eye, Heart, Shield } from 'lucide-react'

const AboutUs = () => {
  const [language, setLanguage] = useState('id')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'id'
    setLanguage(savedLanguage)
  }, [])

  const content = {
    id: {
      pageTitle: "Tentang Impact Institute",
      heroSubtitle: "Membangun masa depan pertanian berkelanjutan bersama petani Indonesia",
      description: "Impact Institute adalah platform yang menghubungkan petani Indonesia dengan praktik pertanian berkelanjutan. Kami berkomitmen untuk menciptakan dampak positif bagi lingkungan dan ekonomi masyarakat melalui inovasi, pendampingan, dan sertifikasi internasional.",
      missionTitle: "Misi Kami",
      missionText: "Memberdayakan petani Indonesia dengan pengetahuan, teknologi, dan akses pasar untuk praktik pertanian berkelanjutan yang menguntungkan secara ekonomi dan ramah lingkungan.",
      visionTitle: "Visi Kami",
      visionText: "Menjadi platform terdepan dalam transformasi pertanian berkelanjutan di Indonesia, menciptakan ekosistem yang mendukung kesejahteraan petani dan kelestarian lingkungan.",
      valuesTitle: "Nilai-Nilai Kami",
      sustainability: {
        title: "Keberlanjutan",
        description: "Mengutamakan praktik yang menjaga keseimbangan ekosistem"
      },
      integrity: {
        title: "Integritas",
        description: "Berkomitmen pada transparansi dan akuntabilitas"
      },
      innovation: {
        title: "Inovasi",
        description: "Menggunakan teknologi terdepan untuk solusi pertanian"
      },
      collaboration: {
        title: "Kolaborasi",
        description: "Membangun kemitraan yang saling menguntungkan"
      },
      achievementsTitle: "Pencapaian Kami",
      farmerPartners: "Petani Mitra",
      activeProjects: "Proyek Aktif",
      provinces: "Provinsi",
      hectares: "Hektar Lahan",
      whyChooseTitle: "Mengapa Memilih Kami?",
      expertise: {
        title: "Keahlian",
        description: "Tim ahli dengan pengalaman luas di pertanian berkelanjutan."
      },
      network: {
        title: "Jaringan Luas",
        description: "Terhubung dengan para ahli, pasar, dan pemangku kepentingan."
      },
      impact: {
        title: "Dampak Nyata",
        description: "Fokus pada hasil yang terukur dan berkelanjutan."
      },
      support: {
        title: "Dukungan Penuh",
        description: "Pendampingan dan pelatihan berkelanjutan bagi petani."
      }
    },
    en: {
      pageTitle: "About Impact Institute",
      heroSubtitle: "Building the future of sustainable agriculture with Indonesian farmers",
      description: "Impact Institute is a platform that connects Indonesian farmers with sustainable agricultural practices. We are committed to creating positive impacts for the environment and community economy through innovation, mentoring, and international certification.",
      missionTitle: "Our Mission",
      missionText: "Empowering Indonesian farmers with knowledge, technology, and market access for economically profitable and environmentally friendly sustainable agricultural practices.",
      visionTitle: "Our Vision",
      visionText: "To become the leading platform in sustainable agricultural transformation in Indonesia, creating an ecosystem that supports farmer welfare and environmental sustainability.",
      valuesTitle: "Our Values",
      sustainability: {
        title: "Sustainability",
        description: "Prioritizing practices that maintain ecosystem balance"
      },
      integrity: {
        title: "Integrity",
        description: "Committed to transparency and accountability"
      },
      innovation: {
        title: "Innovation",
        description: "Using cutting-edge technology for agricultural solutions"
      },
      collaboration: {
        title: "Collaboration",
        description: "Building mutually beneficial partnerships"
      },
      achievementsTitle: "Our Achievements",
      farmerPartners: "Farmer Partners",
      activeProjects: "Active Projects",
      provinces: "Provinces",
      hectares: "Hectares of Land",
      whyChooseTitle: "Why Choose Us?",
      expertise: {
        title: "Expertise",
        description: "Team of experts with extensive experience in sustainable agriculture."
      },
      network: {
        title: "Extensive Network",
        description: "Connected to experts, markets, and stakeholders."
      },
      impact: {
        title: "Real Impact",
        description: "Focus on measurable and sustainable results."
      },
      support: {
        title: "Full Support",
        description: "Ongoing guidance and training for farmers."
      }
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen">
      {/* Your component JSX here */}
    </div>
  )
}

export default function AboutUsPage() {
  return <AboutUs />
}
