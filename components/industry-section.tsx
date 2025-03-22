"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface IndustrySectionProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  stats: { value: string; label: string }[]
  imageSrc: string
  imageAlt: string
  reversed?: boolean
}

export default function IndustrySection({
  icon,
  title,
  description,
  features,
  stats,
  imageSrc,
  imageAlt,
  reversed = false,
}: IndustrySectionProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      <div className={`lg:w-1/2 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-lg bg-primary/10 mr-3">{icon}</div>
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>

        <p className="text-lg text-muted-foreground mb-6">{description}</p>

        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 mt-1 bg-primary/20 rounded-full p-1">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <p>{feature}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-background border border-border">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className={`lg:w-1/2 ${reversed ? "lg:order-1" : "lg:order-2"}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative rounded-xl overflow-hidden border border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10"></div>
          <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="w-full h-auto" />
        </div>
      </motion.div>
    </div>
  )
}

