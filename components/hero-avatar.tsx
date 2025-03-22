"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroAvatar() {
  const [isListening, setIsListening] = useState(false)
  const [greeting, setGreeting] = useState("Hello! How can I help you today?")
  const [language, setLanguage] = useState("English")

  // Simulate changing languages
  useEffect(() => {
    const languages = [
      { lang: "English", text: "Hello! How can I help you today?" },
      { lang: "Hindi", text: "नमस्ते! आज मैं आपकी कैसे मदद कर सकता हूँ?" },
      { lang: "Tamil", text: "வணக்கம்! நான் உங்களுக்கு எப்படி உதவ முடியும்?" },
      { lang: "Telugu", text: "నమస్కారం! నేను మీకు ఎలా సహాయం చేయగలను?" },
      { lang: "Bengali", text: "নমস্কার! আমি আপনাকে কীভাবে সাহায্য করতে পারি?" },
    ]

    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % languages.length
      setLanguage(languages[index].lang)
      setGreeting(languages[index].text)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Simulate listening state
  const handleAvatarClick = () => {
    setIsListening(true)
    setTimeout(() => setIsListening(false), 3000)
  }

  return (
    <div className="relative w-full max-w-md aspect-square">
      <div className="relative w-full h-full rounded-full overflow-hidden cursor-pointer" onClick={handleAvatarClick}>
        {/* Avatar background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 animate-gradient"></div>

        {/* Avatar image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-3/4 h-3/4 rounded-full overflow-hidden border-4 border-white/10">
            <img src="/placeholder.svg?height=300&width=300" alt="AI Avatar" className="w-full h-full object-cover" />

            {/* Listening animation */}
            <AnimatePresence>
              {isListening && (
                <motion.div
                  className="absolute inset-0 bg-purple-500/30 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex space-x-2">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-white rounded-full"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Animated rings */}
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full rounded-full border-4 border-purple-500/30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full rounded-full border-4 border-indigo-500/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>
      </div>

      {/* Speech bubble */}
      <motion.div
        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background p-4 rounded-xl shadow-lg border border-border max-w-[90%] min-w-[250px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background rotate-45 border-t border-l border-border"></div>
        <p className="text-sm text-center">{greeting}</p>
        <p className="text-xs text-center text-muted-foreground mt-1">Speaking: {language}</p>
      </motion.div>
    </div>
  )
}

