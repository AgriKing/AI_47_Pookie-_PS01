"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Customer Service Director",
    company: "TechSolutions India",
    content:
      "Implementing these AI avatars has reduced our response time by 80% while handling queries in 5 different Indian languages simultaneously.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "CEO",
    company: "FinServe Technologies",
    content:
      "Our customer satisfaction scores have increased by 35% since we deployed these AI avatars across our banking support channels.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Head of Digital Transformation",
    company: "RetailGiant",
    content:
      "The multilingual capabilities have allowed us to expand into new markets without hiring additional support staff. The ROI has been incredible.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-10 md:-translate-x-full">
        <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm" onClick={prev}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10 md:translate-x-full">
        <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm" onClick={next}>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="overflow-hidden relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-background border border-border relative"
          >
            <div className="absolute -top-5 left-8 bg-background p-2 rounded-full border border-border">
              <MessageSquare className="h-6 w-6 text-purple-500" />
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-200 dark:border-purple-800">
                  <img
                    src={testimonials[current].avatar || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-lg mb-4">"{testimonials[current].content}"</p>
                <div>
                  <h4 className="font-semibold">{testimonials[current].name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role}, {testimonials[current].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === current ? "bg-purple-500" : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

