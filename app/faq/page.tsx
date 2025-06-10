"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Home, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"

export default function FAQPage() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I offer web design, mobile app development, digital marketing, web hosting, graphic design, and video editing services for businesses in Dubai, UAE, and worldwide.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the complexity of the project. Simple websites can be completed in 1-2 weeks, while more complex projects may take 4-8 weeks.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Each project is unique, so pricing varies based on requirements. I offer competitive rates and provide detailed quotes after understanding your project needs.",
    },
    {
      question: "Do you offer website maintenance?",
      answer: "Yes, I offer website maintenance packages to keep your site updated, secure, and running smoothly.",
    },
    {
      question: "Can you help with existing websites?",
      answer:
        "Yes, I can help improve, update, or redesign existing websites to enhance their performance and user experience.",
    },
    {
      question: "Do you provide hosting services?",
      answer: "Yes, I offer reliable web hosting services with high uptime, fast servers, and excellent support.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "I work with clients in Dubai, across the UAE, and worldwide. Remote collaboration makes it easy to work together regardless of location.",
    },
    {
      question: "How do we start working together?",
      answer:
        "The process begins with a consultation to understand your requirements. Then I provide a proposal with timeline and pricing. Once approved, we begin the project.",
    },
    {
      question: "What is your payment structure?",
      answer: "I typically require a 50% deposit to begin work, with the remaining 50% due upon project completion.",
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, I'm happy to sign Non-Disclosure Agreements to protect your business information and ideas.",
    },
    {
      question: "Can you help with SEO?",
      answer:
        "Yes, I offer SEO services to help improve your website's visibility in search engines and drive more organic traffic.",
    },
    {
      question: "Do you create mobile-responsive websites?",
      answer:
        "Yes, all websites I create are fully responsive and look great on all devices, from desktops to smartphones.",
    },
  ]

  const categories = [
    { name: "Services", items: [0, 3, 5, 10] },
    { name: "Process", items: [1, 7, 8, 9] },
    { name: "Technical", items: [4, 6, 11] },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about my services, process, and working together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="flex space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm" className="group">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Homepage
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="sm" className="group">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-primary/10 rounded-lg p-6 text-center"
              >
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                <p className="text-muted-foreground">{category.items.length} questions</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="bg-background rounded-lg border">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-left font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <SectionHeading
              title="Still Have Questions?"
              subtitle="Feel free to reach out if you couldn't find the answer to your question"
              center
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="https://wa.me/+917255965136/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="group">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
