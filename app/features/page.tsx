"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, MessageSquare, Bot, Zap, Globe, BarChart, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FeatureDemo from "@/components/feature-demo"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Powerful{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Features</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Discover how our AI avatars can transform your customer experience with these powerful capabilities.
        </p>
      </section>

      {/* Dynamic Grid Layout */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<MessageSquare className="h-8 w-8 text-purple-500" />}
            title="Natural Language Processing"
            description="Our avatars understand context, sentiment, and intent to provide human-like conversations."
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8 text-indigo-500" />}
            title="Multilingual Support"
            description="Communicate in over 30 languages including Hindi, Tamil, Telugu, Bengali, and more."
          />
          <FeatureCard
            icon={<Bot className="h-8 w-8 text-violet-500" />}
            title="Customizable Avatars"
            description="Create avatars that match your brand identity and connect with your audience."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-purple-500" />}
            title="Real-time Responses"
            description="Instant answers to customer queries with no waiting time, 24/7 availability."
          />
          <FeatureCard
            icon={<BarChart className="h-8 w-8 text-indigo-500" />}
            title="Advanced Analytics"
            description="Gain insights from every interaction to continuously improve your customer experience."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-violet-500" />}
            title="Enterprise Security"
            description="Bank-grade encryption and data protection for all your customer interactions."
          />
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Try It Yourself</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the power of our AI avatars with this interactive demo.
          </p>
        </div>

        <FeatureDemo />
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-16 bg-background/80 backdrop-blur-sm rounded-xl border border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See the Difference</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare traditional support with our AI-powered solution.
          </p>
        </div>

        <Tabs defaultValue="traditional" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="traditional">Traditional Support</TabsTrigger>
              <TabsTrigger value="ai">AI-Powered Support</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="traditional" className="space-y-4">
            <ComparisonItem
              title="Response Time"
              value="15-20 minutes average wait time"
              percentage={30}
              color="bg-gray-400"
            />
            <ComparisonItem
              title="Language Support"
              value="Limited to staff language skills"
              percentage={20}
              color="bg-gray-400"
            />
            <ComparisonItem title="Availability" value="Business hours only" percentage={40} color="bg-gray-400" />
            <ComparisonItem
              title="Consistency"
              value="Varies by agent and workload"
              percentage={50}
              color="bg-gray-400"
            />
            <ComparisonItem
              title="Scalability"
              value="Requires hiring and training"
              percentage={35}
              color="bg-gray-400"
            />
          </TabsContent>

          <TabsContent value="ai" className="space-y-4">
            <ComparisonItem
              title="Response Time"
              value="Instant responses, no waiting"
              percentage={95}
              color="bg-purple-500"
            />
            <ComparisonItem
              title="Language Support"
              value="30+ languages simultaneously"
              percentage={90}
              color="bg-indigo-500"
            />
            <ComparisonItem title="Availability" value="24/7, 365 days a year" percentage={100} color="bg-violet-500" />
            <ComparisonItem
              title="Consistency"
              value="Always consistent quality"
              percentage={95}
              color="bg-purple-500"
            />
            <ComparisonItem
              title="Scalability"
              value="Infinitely scalable on demand"
              percentage={98}
              color="bg-indigo-500"
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Customer Experience?</h2>
            <p className="text-white/90 text-lg mb-8">
              Join hundreds of businesses already using our AI avatars to provide exceptional support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="group">
                Get Started
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="relative rounded-xl border border-border bg-background overflow-hidden cursor-pointer"
      whileHover={{ y: -5 }}
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      <motion.div className="p-6" layout>
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          className="mt-4 pt-4 border-t border-border"
        >
          <h4 className="font-medium mb-2">Key Benefits:</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>Improved customer satisfaction</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>Reduced operational costs</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>Scalable to any business size</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 w-full"></div>
    </motion.div>
  )
}

interface ComparisonItemProps {
  title: string
  value: string
  percentage: number
  color: string
}

function ComparisonItem({ title, value, percentage, color }: ComparisonItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h4 className="font-medium">{title}</h4>
        <span className="text-sm text-muted-foreground">{value}</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

