// src/lib/utils.js

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Fungsi utilitas untuk menggabungkan kelas Tailwind CSS secara kondisional.
 * Menggunakan `clsx` untuk menggabungkan string kelas, array, atau objek secara kondisional,
 * dan `twMerge` dari `tailwind-merge` untuk secara cerdas menggabungkan kelas Tailwind
 * yang berpotensi konflik (misalnya, `p-4` dan `p-6` akan menghasilkan `p-6`).
 *
 * @param {...(string|string[]|object)} inputs - Kelas-kelas CSS yang akan digabungkan.
 * @returns {string} String kelas CSS yang digabungkan.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
