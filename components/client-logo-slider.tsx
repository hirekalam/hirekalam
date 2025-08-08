"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const clientLogos = [
  { name: "Eptain & Company", logo: "/red carpet dubai logo.webp?height=60&width=120" },
  { name: "Zevroc Training Institute", logo: "/zevroc logo.webp?height=60&width=120" },
  { name: "Dubai Cleaning Services", logo: "/creative graphic ksa.webp?height=60&width=120" },
  { name: "UAE Cleaning Directory", logo: "/cleaning-company-logo.webp?height=60&width=120" },
  { name: "Ras Al Khaimah Services", logo: "/al sharif.webp?height=60&width=120" },
  { name: "Tech Solutions", logo: "/alcazaar-international-logo.webp?height=60&width=120" },
  { name: "Digital Marketing Agency", logo: "/computer-training-institute-logo-by-hk.webp?height=60&width=120" },
  { name: "Web Hosting Company", logo: "/ccs uae.webp?height=60&width=120" },
]

// Duplicate logos for continuous scrolling
const allLogos = [...clientLogos, ...clientLogos]

export default function ClientLogoSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden py-10 bg-muted/30">
      <motion.div style={{ x }} className="flex items-center gap-16 whitespace-nowrap">
        {allLogos.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex items-center justify-center h-16 w-32 relative grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
