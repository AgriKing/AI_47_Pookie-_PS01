"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TestimonialVideoProps {
  name: string
  role: string
  company: string
  imageSrc: string
  videoSrc: string
}

export default function TestimonialVideo({ name, role, company, imageSrc, videoSrc }: TestimonialVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.div
      className="rounded-xl border border-border overflow-hidden bg-background"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-video bg-muted">
        <img
          src={videoSrc || "/placeholder.svg"}
          alt={`${name} testimonial video`}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <Button variant="secondary" size="icon" className="rounded-full h-12 w-12" onClick={togglePlay}>
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-1" />}
          </Button>
        </div>

        {isPlaying && (
          <div className="absolute bottom-4 left-4 right-4 h-1 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 30, ease: "linear" }}
            />
          </div>
        )}
      </div>

      <div className="p-4 flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
          <img src={imageSrc || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>

        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

