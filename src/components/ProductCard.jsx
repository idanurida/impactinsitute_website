// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tag, DollarSign, Package } from 'lucide-react'; // Contoh ikon relevan

const ProductCard = ({ product }) => {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 bg-gray-200">
        <img
          src={product.image || '/api/placeholder/400/250?text=Product+Image'}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isFeatured && (
          <div className="absolute top-4 right-4 bg-accent-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
            Unggulan
          </div>
        )}
      </div>
      <CardHeader className="p-6 pb-2">
        <CardTitle className="text-xl font-semibold text-gray-900 mb-1 line-clamp-1">{product.name}</CardTitle>
        <CardDescription className="text-gray-600 text-sm line-clamp-2">{product.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between">
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 flex items-center"><DollarSign className="h-4 w-4 mr-1"/> Harga Mulai:</span>
            <span className="font-bold text-green-700">{product.price}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500 flex items-center"><Package className="h-4 w-4 mr-1"/> Kategori:</span>
            <span className="font-semibold">{product.category}</span>
          </div>
        </div>

        <div className="mt-auto">
          <Button asChild className="w-full bg-primary-dark hover:bg-primary-dark/90 text-white">
            <Link to={`/marketplace/${product.id || product.name.toLowerCase().replace(/\s+/g, '-')}`}>Lihat Detail Produk</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;