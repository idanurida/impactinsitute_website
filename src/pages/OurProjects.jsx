// src/OurProjects.jsx
import ProjectCard from '@/components/ProjectCard'; // Impor ProjectCard
import { MapPin, Forest, Recycle, Zap, Leaf, Users } from 'lucide-react'; // Impor ikon yang dibutuhkan

const OurProjects = () => {
  // Data proyek (Anda bisa memindahkannya ke file terpisah atau mengambil dari API di masa depan)
  const allProjects = [
    {
      title: 'Agroforestri Kopi Berkelanjutan Aceh',
      location: 'Aceh Tengah, Aceh',
      carbonSaved: '2,450 ton CO2e',
      farmers: 150,
      description: 'Proyek ini berfokus pada pengembangan sistem agroforestri kopi yang terintegrasi dengan penanaman pohon pelindung, meningkatkan serapan karbon sekaligus produksi kopi berkualitas tinggi.',
      image: '/api/placeholder/400/250?text=Kopi+Aceh',
      status: 'Aktif',
      impactIcons: [
        { icon: Leaf, label: 'Biodiversitas' },
        { icon: Users, label: 'Pemberdayaan Masyarakat' }
      ]
    },
    {
      title: 'Restorasi Hutan Mangrove Lampung Timur',
      location: 'Lampung Timur, Lampung',
      carbonSaved: '3,200 ton CO2e',
      farmers: 89,
      description: 'Inisiatif restorasi ekosistem mangrove yang kritis, melindungi garis pantai, menyediakan habitat bagi biota laut, dan menyerap karbon dalam jumlah besar.',
      image: '/api/placeholder/400/250?text=Mangrove+Lampung',
      status: 'Aktif',
      impactIcons: [
        { icon: Forest, label: 'Konservasi' },
        { icon: Recycle, label: 'Penyerapan Karbon' }
      ]
    },
    {
      title: 'Perkebunan Karet Ramah Lingkungan Jambi',
      location: 'Jambi',
      carbonSaved: '1,800 ton CO2e',
      farmers: 120,
      description: 'Menerapkan praktik berkelanjutan dalam perkebunan karet, mengurangi jejak karbon, dan memastikan kesejahteraan petani melalui diversifikasi pendapatan.',
      image: '/api/placeholder/400/250?text=Karet+Jambi',
      status: 'Selesai',
      impactIcons: [
        { icon: Leaf, label: 'Pertanian Berkelanjutan' },
        { icon: Zap, label: 'Efisiensi Sumber Daya' }
      ]
    },
    {
      title: 'Inovasi Pertanian Lahan Kering NTB',
      location: 'Lombok, NTB',
      carbonSaved: '1,100 ton CO2e',
      farmers: 75,
      description: 'Mengembangkan metode pertanian tahan kekeringan yang berkelanjutan untuk meningkatkan produktivitas lahan dan pendapatan petani di daerah kering.',
      image: '/api/placeholder/400/250?text=Lahan+Kering+NTB',
      status: 'Aktif',
      impactIcons: [
        { icon: Users, label: 'Pemberdayaan Petani' },
        { icon: Recycle, label: 'Pengelolaan Air' }
      ]
    },
    {
      title: 'Konservasi Gambut Kalimantan Tengah',
      location: 'Palangka Raya, Kalteng',
      carbonSaved: '5,000 ton CO2e',
      farmers: 45,
      description: 'Proyek restorasi dan konservasi lahan gambut untuk mencegah kebakaran hutan dan maksimalkan penyerapan karbon.',
      image: '/api/placeholder/400/250?text=Gambut+Kalteng',
      status: 'Aktif',
      impactIcons: [
        { icon: Forest, label: 'Konservasi' },
        { icon: Zap, label: 'Mitigasi Bencana' }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Proyek Kami</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan berbagai proyek karbon inovatif yang kami kerjakan bersama petani mitra kami untuk menciptakan dampak positif bagi iklim dan masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Anda bisa menambahkan fitur pagination, filter, atau pencarian di sini */}
        <div className="text-center mt-12">
          <p className="text-gray-600">Terus pantau untuk proyek-proyek baru!</p>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;