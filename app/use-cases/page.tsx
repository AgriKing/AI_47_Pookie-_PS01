import { ArrowRight, Building, GraduationCap, ShoppingBag, HeartPulse, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import IndustrySection from "@/components/industry-section"
import TestimonialVideo from "@/components/testimonial-video"

export default function UseCasesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Industry{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Solutions
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Discover how businesses across different industries are leveraging our AI avatars to transform their customer
          experience.
        </p>
      </section>

      {/* Industry Sections */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-24">
          <IndustrySection
            icon={<Building className="h-10 w-10" />}
            title="Enterprise & Corporate"
            description="Large organizations use our AI avatars to streamline customer support operations, reduce costs, and provide consistent service across global markets."
            features={[
              "24/7 multilingual customer support",
              "Internal help desk automation",
              "Onboarding and training assistance",
            ]}
            stats={[
              { value: "65%", label: "Reduction in support costs" },
              { value: "3.2M", label: "Queries handled monthly" },
              { value: "99.8%", label: "Uptime reliability" },
            ]}
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Enterprise AI Avatar"
            reversed={false}
          />

          <IndustrySection
            icon={<ShoppingBag className="h-10 w-10" />}
            title="Retail & E-commerce"
            description="Retail businesses use our AI avatars to enhance the shopping experience, provide product recommendations, and handle customer inquiries instantly."
            features={[
              "Product recommendations and comparisons",
              "Order status tracking and updates",
              "Return and exchange processing",
            ]}
            stats={[
              { value: "28%", label: "Increase in conversion rates" },
              { value: "42%", label: "Reduction in cart abandonment" },
              { value: "4.8/5", label: "Customer satisfaction rating" },
            ]}
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Retail AI Avatar"
            reversed={true}
          />

          <IndustrySection
            icon={<HeartPulse className="h-10 w-10" />}
            title="Healthcare"
            description="Healthcare providers use our AI avatars to assist patients with appointment scheduling, medication reminders, and answering common health questions."
            features={[
              "Appointment scheduling and reminders",
              "Medication management assistance",
              "Basic symptom assessment",
            ]}
            stats={[
              { value: "35%", label: "Reduction in missed appointments" },
              { value: "24/7", label: "Patient support availability" },
              { value: "89%", label: "Patient satisfaction rate" },
            ]}
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Healthcare AI Avatar"
            reversed={false}
          />

          <IndustrySection
            icon={<Landmark className="h-10 w-10" />}
            title="Banking & Finance"
            description="Financial institutions use our AI avatars to provide secure account information, assist with transactions, and offer financial guidance to customers."
            features={[
              "Account balance and transaction inquiries",
              "Bill payment assistance",
              "Basic financial advice and product information",
            ]}
            stats={[
              { value: "52%", label: "Reduction in call center volume" },
              { value: "3.5M", label: "Transactions assisted monthly" },
              { value: "99.9%", label: "Security compliance rate" },
            ]}
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Banking AI Avatar"
            reversed={true}
          />

          <IndustrySection
            icon={<GraduationCap className="h-10 w-10" />}
            title="Education"
            description="Educational institutions use our AI avatars to support students with course information, assignment help, and administrative inquiries."
            features={[
              "Course registration and information",
              "Assignment deadline reminders",
              "Study resource recommendations",
            ]}
            stats={[
              { value: "45%", label: "Increase in student engagement" },
              { value: "78%", label: "Reduction in administrative queries" },
              { value: "24/7", label: "Learning support availability" },
            ]}
            imageSrc="/placeholder.svg?height=400&width=600"
            imageAlt="Education AI Avatar"
            reversed={false}
          />
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear directly from our customers about how AI avatars have transformed their businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialVideo
            name="Rajesh Kumar"
            role="CTO"
            company="TechSolutions India"
            imageSrc="/placeholder.svg?height=100&width=100"
            videoSrc="/placeholder.svg?height=300&width=400"
          />
          <TestimonialVideo
            name="Priya Sharma"
            role="Customer Experience Director"
            company="RetailGiant"
            imageSrc="/placeholder.svg?height=100&width=100"
            videoSrc="/placeholder.svg?height=300&width=400"
          />
          <TestimonialVideo
            name="Vikram Patel"
            role="Head of Digital Banking"
            company="Global Finance"
            imageSrc="/placeholder.svg?height=100&width=100"
            videoSrc="/placeholder.svg?height=300&width=400"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-white/90 text-lg mb-8">
              Join hundreds of businesses already using our AI avatars to provide exceptional support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

