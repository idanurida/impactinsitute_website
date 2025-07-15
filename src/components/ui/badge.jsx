// src/components/ui/badge.jsx

import * as React from "react"
import { cva } from "class-variance-authority"; // Import cva
import { cn } from "@/lib/utils" // Pastikan jalur ini benar untuk utils Anda

/**
 * Mendefinisikan varian gaya untuk komponen Badge menggunakan `cva` dari `class-variance-authority`.
 * Ini memungkinkan Anda memiliki beberapa varian badge (default, secondary, destructive, outline)
 * dengan properti gaya yang berbeda.
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * Komponen Badge yang dapat digunakan kembali.
 * Menerima props `variant` untuk mengubah gaya, `className` untuk kustomisasi tambahan,
 * dan props HTML lainnya untuk elemen `div`.
 */
function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
