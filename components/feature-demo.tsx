"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Mic, MicOff, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const demoResponses: Record<string, string[]> = {
  english: [
    "Hello! How can I help you today?",
    "I'd be happy to assist with your query about our product features.",
    "Our premium plan includes 24/7 support, unlimited queries, and custom avatar designs.",
    "You can integrate our AI avatars with your existing customer support systems easily.",
    "Is there anything else you'd like to know about our services?",
  ],
  hindi: [
    "नमस्ते! मैं आज आपकी कैसे मदद कर सकता हूँ?",
    "मुझे आपके उत्पाद सुविधाओं के बारे में प्रश्न का उत्तर देने में खुशी होगी।",
    "हमारे प्रीमियम प्लान में 24/7 सहायता, असीमित प्रश्न और कस्टम अवतार डिज़ाइन शामिल हैं।",
    "आप हमारे AI अवतारों को अपने मौजूदा ग्राहक सहायता प्रणालियों के साथ आसानी से एकीकृत कर सकते हैं।",
    "क्या आप हमारी सेवाओं के बारे में कुछ और जानना चाहेंगे?",
  ],
  tamil: [
    "வணக்கம்! நான் இன்று உங்களுக்கு எப்படி உதவ முடியும்?",
    "எங்கள் தயாரிப்பு அம்சங்கள் பற்றிய உங்கள் கேள்விக்கு உதவுவதில் நான் மகிழ்ச்சி அடைகிறேன்.",
    "எங்கள் பிரீமியம் திட்டத்தில் 24/7 ஆதரவு, வரம்பற்ற வினவல்கள் மற்றும் தனிப்பயன் அவதார வடிவமைப்புகள் ஆகியவை அடங்கும்.",
    "நீங்கள் எங்கள் AI அவதாரங்களை உங்கள் தற்போதைய வாடிக்கையாளர் ஆதரவு அமைப்புகளுடன் எளிதாக ஒருங்கிணைக்கலாம்.",
    "எங்கள் சேவைகள் பற்றி வேறு ஏதாவது தெரிந்து கொள்ள விரும்புகிறீர்களா?",
  ],
}

export default function FeatureDemo() {
  const [selectedLanguage, setSelectedLanguage] = useState("english")
  const [inputText, setInputText] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [conversation, setConversation] = useState<{ type: "user" | "bot"; text: string }[]>([
    { type: "bot", text: demoResponses[selectedLanguage][0] },
  ])

  const handleSend = () => {
    if (!inputText.trim()) return

    // Add user message
    setConversation([...conversation, { type: "user", text: inputText }])
    setInputText("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * (demoResponses[selectedLanguage].length - 1)) + 1
      setConversation((prev) => [
        ...prev,
        {
          type: "bot",
          text: demoResponses[selectedLanguage][randomIndex],
        },
      ])
      setIsLoading(false)
    }, 1000)
  }

  const toggleListening = () => {
    setIsListening(!isListening)

    if (!isListening) {
      // Simulate speech recognition
      setTimeout(() => {
        setInputText("Tell me about your premium features")
        setIsListening(false)
      }, 2000)
    }
  }

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value)
    setConversation([{ type: "bot", text: demoResponses[value][0] }])
  }

  return (
    <div className="max-w-3xl mx-auto rounded-xl border border-border overflow-hidden bg-background">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
            <span className="text-white font-bold">AI</span>
          </div>
          <div>
            <h3 className="font-medium">AI Avatar Assistant</h3>
            <p className="text-xs text-muted-foreground">Powered by advanced NLP</p>
          </div>
        </div>

        <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="hindi">Hindi</SelectItem>
            <SelectItem value="tamil">Tamil</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {conversation.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"
                }`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
              <div className="bg-secondary rounded-lg p-3">
                <Loader2 className="h-5 w-5 animate-spin" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t border-border">
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleListening}
            className={isListening ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400" : ""}
          >
            {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>

          <Input
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          <Button onClick={handleSend}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

