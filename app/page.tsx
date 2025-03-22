import { ArrowRight, MessageSquare, BarChart, Zap, Globe } from "lucide-react"
import HeroAvatar from "@/components/hero-avatar"
import FeatureCard from "@/components/feature-card"
import Testimonials from "@/components/testimonials"
import MatrixBackground from "@/components/matrix-background"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Matrix Background */}
      <div className="fixed inset-0 z-0 opacity-10">
        <MatrixBackground />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden">
        <div className="container flex flex-col-reverse items-center justify-between gap-12 mx-auto md:flex-row">
          <div className="flex flex-col space-y-6 text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600">
              AI-Powered Avatars for Immersive Support
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your customer experience with intelligent avatars that understand and respond in multiple
              languages.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button size="lg" className="group">
                Try Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Request Demo
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <HeroAvatar />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Transforming Customer Interactions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-purple-500" />}
              title="Multilingual Support"
              description="Our AI avatars communicate fluently in multiple Indian languages, breaking down language barriers."
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-indigo-500" />}
              title="Natural Conversations"
              description="Advanced NLP enables human-like interactions that understand context and nuance."
            />
            <FeatureCard
              icon={<BarChart className="h-10 w-10 text-violet-500" />}
              title="Analytics Dashboard"
              description="Gain insights from every interaction to continuously improve your customer experience."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-purple-500" />}
              title="Real-time Responses"
              description="Instant answers to customer queries with no waiting time."
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-indigo-500" />}
              title="Custom Avatars"
              description="Personalize your AI representative to match your brand identity."
            />
            <FeatureCard
              icon={<MessageSquare className="h-10 w-10 text-violet-500" />}
              title="Voice & Text"
              description="Interact through text or voice for maximum accessibility."
            />
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Traditional vs. AI-Powered Support</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-background/80 backdrop-blur-sm border border-border">
                  <h3 className="text-xl font-semibold mb-3">Traditional Support</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Long wait times and limited availability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Language barriers with international customers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Inconsistent quality of service</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-300">
                    AI-Powered Support
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">•</span>
                      <span>24/7 instant responses with no waiting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">•</span>
                      <span>Support in multiple languages simultaneously</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-purple-500">•</span>
                      <span>Consistent quality with continuous improvement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-border bg-background/80 backdrop-blur-sm flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10"></div>
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="AI Avatar Demo"
                  className="w-3/4 h-3/4 object-cover rounded-full"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-border">
                  <p className="text-sm font-medium">Try our interactive demo to experience the difference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Customer Experience?</h2>
              <p className="text-white/90 text-lg mb-8">
                Join hundreds of businesses already using our AI avatars to provide exceptional support.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

