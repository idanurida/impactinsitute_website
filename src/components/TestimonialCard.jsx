// src/components/TestimonialCard.jsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react'; // Menggunakan ikon bintang

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        fill={i < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <Card className="flex flex-col rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <CardContent className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex mb-3">
            {renderStars(testimonial.rating)}
          </div>
          <p className="text-gray-700 text-base italic mb-4 line-clamp-5">"{testimonial.quote}"</p>
        </div>
        <div className="flex items-center mt-auto">
          {testimonial.avatar && (
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-green-500"
            />
          )}
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;