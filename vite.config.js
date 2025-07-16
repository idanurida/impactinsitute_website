import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Tambahkan opsi ini untuk memastikan folder 'public' disalin ke 'dist'
  // Atau jika Anda ingin folder 'locales' disalin langsung
  // Vite secara default akan menyalin semua yang ada di folder 'public'
  // Jadi, kita akan memindahkan folder 'locales' ke dalam folder 'public'

  // Opsi 1: Pindahkan folder 'locales' ke 'public'
  // Ini adalah cara paling umum dan disarankan di Vite
  // Anda tidak perlu konfigurasi tambahan di sini jika folder 'locales' berada di 'public'
  // publicDir: 'public', // Ini adalah default, tidak perlu ditulis ulang kecuali diubah

  // Opsi 2: Jika Anda ingin mempertahankan 'locales' di root dan menyalinnya
  // Ini lebih kompleks dan tidak disarankan dibandingkan opsi 1
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: path.resolve(__dirname, 'index.html')
  //     },
  //     // Ini akan menyalin folder locales, tapi biasanya lebih baik pakai publicDir
  //     // atau pastikan mereka ada di public
  //     external: ['/locales/**']
  //   }
  // }
})
