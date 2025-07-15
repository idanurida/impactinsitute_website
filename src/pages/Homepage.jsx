// src/pages/Homepage.jsx

import React from 'react';
// Impor komponen ProductList yang baru Anda buat
import ProductList from '../components/ProductList';

/**
 * Komponen Homepage untuk aplikasi Anda.
 * Ini akan menampilkan berbagai bagian dari halaman beranda,
 * termasuk daftar produk yang diimpor dari ProductList.
 */
function Homepage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Contoh Header (Anda bisa mengganti ini dengan komponen Header Anda sendiri) */}
      <header className="bg-primary text-primary-foreground py-6 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Selamat Datang di Impact Institute</h1>
          <p className="mt-2 text-lg">Temukan produk dan layanan terbaik kami.</p>
        </div>
      </header>

      <main>
        {/* Bagian Hero Section (Contoh) */}
        <section className="py-20 text-center bg-accent-green text-primary-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Misi Kami</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Memberdayakan individu dan organisasi untuk menciptakan dampak positif melalui inovasi dan pendidikan.
            </p>
            <button className="mt-8 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </section>

        {/* Gunakan komponen ProductList di sini */}
        {/* Ini akan mengambil konten daftar produk dari ProductList.jsx */}
        <ProductList />

        {/* Contoh Bagian Lain (Anda bisa menambahkan lebih banyak bagian di sini) */}
        <section className="py-16 bg-card dark:bg-card text-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary-dark dark:text-primary-foreground">
              Mengapa Memilih Kami?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="p-6 bg-background dark:bg-background rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-2 text-accent-teal dark:text-accent">Inovasi</h3>
                <p className="text-muted-foreground">Kami selalu mencari cara baru untuk meningkatkan pengalaman Anda.</p>
              </div>
              <div className="p-6 bg-background dark:bg-background rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-2 text-accent-teal dark:text-accent">Kualitas</h3>
                <p className="text-muted-foreground">Produk dan layanan kami dibuat dengan standar tertinggi.</p>
              </div>
              <div className="p-6 bg-background dark:bg-background rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-2 text-accent-teal dark:text-accent">Dampak</h3>
                <p className="text-muted-foreground">Kami berkomitmen untuk membuat perbedaan positif di dunia.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Contoh Footer (Anda bisa mengganti ini dengan komponen Footer Anda sendiri) */}
      <footer className="bg-primary-dark text-primary-foreground py-8 text-center shadow-inner">
        <div className="container mx-auto px-4">
          <p>&copy; 2025 Impact Institute. Hak Cipta Dilindungi.</p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="#" className="hover:text-accent-teal transition-colors duration-200">Privasi</a>
            <a href="#" className="hover:text-accent-teal transition-colors duration-200">Ketentuan</a>
            <a href="#" className="hover:text-accent-teal transition-colors duration-200">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
