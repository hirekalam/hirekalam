"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, MessageSquare, Phone } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setIsSubmitting(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 7255965136",
      link: "https://wa.me/+917255965136/",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "kalam_ansaari@outlook.com",
      link: "mailto:kalam_ansaari@outlook.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Bihar, India",
      link: "https://wa.me/+917255965136/",
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/hirekalam/",
      color: "bg-blue-500",
    },
    {
      name: "WhatsApp",
      icon: <MessageSquare className="h-5 w-5" />,
      href: "https://wa.me/+917255965136/",
      color: "bg-green-500",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      href: "https://www.facebook.com/hirekalam",
      color: "bg-blue-600",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/hirekalam/",
      color: "bg-pink-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how I can help your business grow with custom digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name and Country</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message and budget</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message, budget and WhatsApp number"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
                  {contactInfo.map((item) => (
                    <motion.div
                      key={item.title}
                      variants={itemVariants}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                    >
                      <div className="p-3 rounded-full bg-primary/10 text-primary">{item.icon}</div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <Link href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 p-3 rounded-lg text-white ${social.color} hover:opacity-90 transition-opacity`}
                      >
                        {social.icon}
                        <span>{social.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Working Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Saturday - Thursday</span>
                      <span>7:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday</span>
                      <span>2:00 PM - 10:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about my services"
            center
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  question: "How long does it take to complete a website?",
                  answer:
                    "The timeline depends on the complexity of the project. Simple websites can be completed in 1-2 weeks, while more complex projects may take 4-8 weeks.",
                },
                {
                  question: "Do you offer website maintenance services?",
                  answer:
                    "Yes, I offer website maintenance packages to keep your site updated, secure, and running smoothly.",
                },
                {
                  question: "What is your payment structure?",
                  answer:
                    "I typically require a 50% deposit to begin work, with the remaining 50% due upon project completion.",
                },
              ].map((faq, index) => (
                <motion.div key={index} variants={itemVariants} className="bg-background rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-8"
            >
              <Link href="/faq">
                <Button variant="outline">View All FAQs</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
