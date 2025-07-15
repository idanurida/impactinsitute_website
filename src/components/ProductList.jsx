// src/components/ProductList.jsx

import React from 'react';

/**
 * Komponen ProductList menampilkan daftar produk.
 * Ini dirancang untuk menjadi komponen yang dapat digunakan kembali
 * untuk menampilkan item produk dalam tata letak grid yang responsif.
 */
function ProductList() {
  // Data produk dummy untuk demonstrasi.
  // Dalam aplikasi nyata, data ini mungkin datang dari API atau state manajemen.
  const products = [
    { id: 1, name: 'Produk Unggulan A', description: 'Deskripsi singkat produk A yang menarik.', price: 'Rp 150.000', imageUrl: 'https://placehold.co/300x200/0E2C40/C1E1A7?text=Produk+A' },
    { id: 2, name: 'Produk Terbaik B', description: 'Deskripsi singkat produk B dengan fitur unik.', price: 'Rp 220.000', imageUrl: 'https://placehold.co/300x200/1A4A5A/EFBC75?text=Produk+B' },
    { id: 3, name: 'Produk Baru C', description: 'Deskripsi singkat produk C yang baru diluncurkan.', price: 'Rp 95.000', imageUrl: 'https://placehold.co/300x200/148D8D/0E2C40?text=Produk+C' },
    { id: 4, name: 'Produk Diskon D', description: 'Deskripsi singkat produk D dengan penawaran spesial.', price: 'Rp 180.000', imageUrl: 'https://placehold.co/300x200/C1E1A7/1A4A5A?text=Produk+D' },
    { id: 5, name: 'Produk Populer E', description: 'Deskripsi singkat produk E yang sangat diminati.', price: 'Rp 300.000', imageUrl: 'https://placehold.co/300x200/EFBC75/148D8D?text=Produk+E' },
  ];

  return (
    <section className="py-12 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-dark dark:text-primary">
          Produk Unggulan Kami
        </h2>

        {/* Grid responsif untuk menampilkan kartu produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card dark:bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4 border border-input"
                // Fallback image in case the primary image fails to load
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/CCCCCC/000000?text=Image+Error"; }}
              />
              <h3 className="text-xl font-semibold mb-2 text-primary-dark dark:text-primary-foreground">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-accent-teal dark:text-accent">
                  {product.price}
                </span>
                <button className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-2 px-4 rounded-md transition-colors duration-300">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
