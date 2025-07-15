// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Leaf, Users, Recycle, Forest, Zap, Shield } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Aktif':
        return 'bg-green-600 text-white';
      case 'Dalam Pengembangan':
        return 'bg-blue-500 text-white';
      case 'Perencanaan':
        return 'bg-yellow-500 text-gray-800';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 bg-gray-200">
        <img
          src={project.image || '/api/placeholder/400/250?text=Project+Image'}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
          {project.status}
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-3 flex items-center">
          <MapPin className="h-4 w-4 mr-2 text-primary-dark" /> {project.location}
        </p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{project.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Karbon Tersimpan:</span>
            <span className="font-semibold text-green-700">{project.carbonSaved}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Petani/Keluarga Terlibat:</span>
            <span className="font-semibold">{project.farmers}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.impactIcons && project.impactIcons.map((item, iconIndex) => {
            const IconComponent = item.icon; // Ambil komponen ikon
            return (
              <span key={iconIndex} className="flex items-center text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                {IconComponent && <IconComponent className="h-3 w-3 mr-1" />} {item.label}
              </span>
            );
          })}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <Button asChild className="w-full bg-primary-dark hover:bg-primary-dark/90 text-white">
            <Link to={`/proyek/${project.id || project.title.toLowerCase().replace(/\s+/g, '-')}`}>Lihat Detail</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;