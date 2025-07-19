// File: src/app/about-us/page.jsx
'use client'
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
    // ... ID dan EN content seperti di file lama ...
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen">
      {/* Masukkan layout dan konten di sini */}
      <h1>{currentContent.pageTitle}</h1>
      <p>{currentContent.heroSubtitle}</p>
      {/* dst... */}
    </div>
  )
}

export default function AboutUsPage() {
  return <AboutUs />
}
