"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, ArrowRight, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [queryVolume, setQueryVolume] = useState(5000)

  const calculateMonthlySavings = () => {
    // Assume traditional support costs $2 per query
    const traditionalCost = queryVolume * 2

    // AI Avatar costs based on plan tiers
    let aiCost = 0
    if (queryVolume <= 1000) {
      aiCost = 99
    } else if (queryVolume <= 5000) {
      aiCost = 299
    } else if (queryVolume <= 20000) {
      aiCost = 799
    } else {
      aiCost = 1499
    }

    return traditionalCost - aiCost
  }

  const monthlySavings = calculateMonthlySavings()
  const annualSavings = monthlySavings * 12

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Simple,{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Transparent
          </span>{" "}
          Pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Choose the plan that's right for your business. All plans include our core features.
        </p>

        <div className="flex items-center justify-center space-x-4 mb-12">
          <Label htmlFor="billing-toggle" className={!isAnnual ? "font-medium" : "text-muted-foreground"}>
            Monthly
          </Label>
          <Switch id="billing-toggle" checked={isAnnual} onCheckedChange={setIsAnnual} />
          <Label htmlFor="billing-toggle" className={isAnnual ? "font-medium" : "text-muted-foreground"}>
            Annual <span className="text-sm text-green-600 dark:text-green-400">(Save 20%)</span>
          </Label>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            description="Perfect for small businesses just getting started."
            price={isAnnual ? 79 : 99}
            period={isAnnual ? "/month, billed annually" : "/month"}
            features={[
              "Up to 1,000 queries per month",
              "3 AI avatar templates",
              "Basic analytics",
              "Email support",
              "Single language support",
            ]}
            limitations={["No custom avatar designs", "No API access", "Limited integrations"]}
            ctaText="Start Free Trial"
            popular={false}
            isAnnual={isAnnual}
          />

          <PricingCard
            title="Professional"
            description="Ideal for growing businesses with moderate support needs."
            price={isAnnual ? 239 : 299}
            period={isAnnual ? "/month, billed annually" : "/month"}
            features={[
              "Up to 5,000 queries per month",
              "10 AI avatar templates",
              "Advanced analytics",
              "Priority email & chat support",
              "5 language support",
              "Basic custom avatar designs",
              "API access",
            ]}
            limitations={["Limited integrations"]}
            ctaText="Start Free Trial"
            popular={true}
            isAnnual={isAnnual}
          />

          <PricingCard
            title="Enterprise"
            description="For organizations with high-volume support requirements."
            price={isAnnual ? 639 : 799}
            period={isAnnual ? "/month, billed annually" : "/month"}
            features={[
              "Up to 20,000 queries per month",
              "Unlimited AI avatar templates",
              "Enterprise analytics & reporting",
              "24/7 priority support",
              "Unlimited language support",
              "Advanced custom avatar designs",
              "Full API access",
              "All integrations",
              "Dedicated account manager",
            ]}
            limitations={[]}
            ctaText="Contact Sales"
            popular={false}
            isAnnual={isAnnual}
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom plan?{" "}
            <a href="/contact" className="text-primary hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto rounded-xl border border-border overflow-hidden">
          <div className="bg-primary p-6 text-primary-foreground">
            <div className="flex items-center space-x-3">
              <Calculator className="h-6 w-6" />
              <h2 className="text-2xl font-bold">ROI Calculator</h2>
            </div>
            <p className="mt-2">See how much you could save by switching to AI Avatars</p>
          </div>

          <div className="p-6 bg-background">
            <div className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="query-volume">
                  Monthly Support Query Volume: <span className="font-medium">{queryVolume.toLocaleString()}</span>
                </Label>
                <Slider
                  id="query-volume"
                  min={1000}
                  max={50000}
                  step={1000}
                  value={[queryVolume]}
                  onValueChange={(value) => setQueryVolume(value[0])}
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1,000</span>
                  <span>50,000</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900">
                  <h3 className="font-medium text-red-700 dark:text-red-400 mb-2">Traditional Support Costs</h3>
                  <p className="text-3xl font-bold text-red-700 dark:text-red-400">
                    ${(queryVolume * 2).toLocaleString()}/month
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-900">
                  <h3 className="font-medium text-green-700 dark:text-green-400 mb-2">AI Avatar Costs</h3>
                  <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                    ${queryVolume <= 1000 ? "99" : queryVolume <= 5000 ? "299" : queryVolume <= 20000 ? "799" : "1,499"}
                    /month
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border border-purple-100 dark:border-purple-900">
                <div className="text-center">
                  <h3 className="text-xl font-medium mb-2">Your Estimated Savings</h3>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Monthly</p>
                      <p className="text-4xl font-bold text-green-600 dark:text-green-400">
                        ${monthlySavings.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Annually</p>
                      <p className="text-4xl font-bold text-green-600 dark:text-green-400">
                        ${annualSavings.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our pricing and plans.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <FaqItem
            question="What happens if I exceed my monthly query limit?"
            answer="If you exceed your monthly query limit, you'll be charged a small overage fee for each additional query. We'll notify you when you're approaching your limit so you can decide whether to upgrade your plan or pay for overages."
          />
          <FaqItem
            question="Can I switch plans at any time?"
            answer="Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new pricing will be effective immediately. If you downgrade, the new pricing will take effect at the start of your next billing cycle."
          />
          <FaqItem
            question="Do you offer a free trial?"
            answer="Yes, we offer a 14-day free trial on all our plans. No credit card required to start. You can experience all the features of your chosen plan before making a commitment."
          />
          <FaqItem
            question="What payment methods do you accept?"
            answer="We accept all major credit cards (Visa, Mastercard, American Express), as well as PayPal. For Enterprise plans, we also offer invoice-based payments with net-30 terms."
          />
          <FaqItem
            question="Is there a setup fee?"
            answer="No, there are no setup fees for any of our plans. You only pay the advertised monthly or annual subscription fee."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Customer Experience?</h2>
            <p className="text-white/90 text-lg mb-8">Start your 14-day free trial today. No credit card required.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

interface PricingCardProps {
  title: string
  description: string
  price: number
  period: string
  features: string[]
  limitations: string[]
  ctaText: string
  popular: boolean
  isAnnual: boolean
}

function PricingCard({
  title,
  description,
  price,
  period,
  features,
  limitations,
  ctaText,
  popular,
  isAnnual,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-xl overflow-hidden ${
        popular ? "border-2 border-primary shadow-lg" : "border border-border"
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
          Most Popular
        </div>
      )}

      <Card className="border-0 h-full flex flex-col">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-muted-foreground">{period}</span>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="space-y-4">
            <h4 className="font-medium text-sm">INCLUDES:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {limitations.length > 0 && (
              <>
                <h4 className="font-medium text-sm mt-6">LIMITATIONS:</h4>
                <ul className="space-y-2">
                  {limitations.map((limitation, index) => (
                    <li key={index} className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className={`w-full ${popular ? "bg-primary" : ""}`} variant={popular ? "default" : "outline"}>
            {ctaText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full p-4 text-left font-medium flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ArrowRight className="h-5 w-5 transform -rotate-90" />
        </motion.div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 pt-0 border-t border-border">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      </motion.div>
    </div>
  )
}

