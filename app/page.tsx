"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Code, Database, Globe, Layout, MessageSquare, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import AnimatedText from "@/components/animated-text"
import ServiceCard from "@/components/service-card"
import ClientLogoSlider from "@/components/client-logo-slider"

export default function HomePage() {
  const services = [
    {
      title: "Website Design and Maintenance",
      description:
        "I design Fast, Modern SEO-friendly websites design that look great on all devices, and maintenance solution.",
      icon: <Layout className="h-10 w-10" />,
    },
    {
      title: "Ads Campaigns (Google & Facebook Ads)",
      description:
        "Targeted ad campaigns on Google, Meta and all social media platforms to generate real leads and increase sales.",
      icon: <Smartphone className="h-10 w-10" />,
    },
    {
      title: "Social Media Management",
      description:
        "Promote your services on Facebook, Instagram, and other platforms to reach local customers.",
      icon: <Globe className="h-10 w-10" />,
    },
    {
      title: "Local SEO & Google Business Setup",
      description:
        "Get found on Google when people search for your services in your area.",
      icon: <Database className="h-10 w-10" />,
    },
  ]

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "100%", label: "Client Satisfaction" },
  ]

  const testimonials = [
    {
      name: "Tirath Sharma",
      role: "CEO, Eptain & Company",
      content:
        "Kalam created an amazing website for our IT firm. The design is modern and the functionality is perfect. Highly recommend!",
      avatar: "/client.webp?height=40&width=40",
    },
    {
      name: "Ahmad Badar",
      role: "Owner, Dubai Cleaning Services",
      content:
        "Our cleaning service website looks professional and brings in new clients every day. Great work on SEO too!",
      avatar: "/client.webp?height=40&width=40",
    },
    {
      name: "R. Raj",
      role: "Director, Zevroc Training Institute",
      content:
        "The website Kalam built for our training institute has helped us reach more students. The design is clean and user-friendly.",
      avatar: "/client.webp?height=40&width=40",
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
      <section className="min-h-screen pt-32 pb-16 px-4 flex items-center relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Badge className="mb-4 px-4 py-1.5 text-sm font-medium">Web Developer & Digital Marketing Expert</Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Creating <span className="text-gradient">Digital Solutions</span> for{" "}
                <AnimatedText words={["Dubai", "UAE", "Worldwide"]} highlightClassName="text-gradient-purple" />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-xl text-muted-foreground max-w-lg"
              >
                I create professional websites, logos, and run targeted Google Ads & Meta Ads campaigns along with marketing solutions that help small businesses grow faster.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button size="lg" variant="outline">
                    View My Work
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/abu-zaid-pic.webp?height=500&width=500"
                  alt="Hire Kalam - Web Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-background border shadow-lg rounded-lg p-4 w-48"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Available for hire</span>
                </div>
                <p className="text-sm text-muted-foreground">Let's discuss your project today!</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </section>

      {/* Client Logo Slider */}
      <ClientLogoSlider />

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Services I Offer"
            subtitle="Professional digital services for businesses in Dubai, UAE, and worldwide"
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button size="lg" variant="outline" className="group">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px]"
            >
              <Image
                src="/hire-kalam-pic.webp?height=400&width=600"
                alt="About Hire Kalam"
                fill
                className="object-cover rounded-lg"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-background border shadow-lg rounded-lg p-4"
              >
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span className="font-medium">5+ Years Experience</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Web Developer & Digital Marketing Expert from India</h2>
              <p className="text-muted-foreground">
                I help businesses grow online with custom web solutions and digital marketing strategies. With over 5
                years of experience, I've worked with clients from Dubai, UAE, and worldwide.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Custom website development for businesses of all sizes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Mobile app development for iOS and Android</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Digital marketing strategies that drive results</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>SEO optimization for better search rankings</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/about">
                  <Button size="lg" className="group">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <SectionHeading
            title="What My Clients Say"
            subtitle="Feedback from businesses in Dubai, UAE, and worldwide"
            center
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">"{testimonial.content}"</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary/10 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create a digital solution that helps your business grow. Contact me today for a
              free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Get in Touch
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

      {/* FAQ Preview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about my services"
            center
          />

          <div className="max-w-3xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-2">
                      {i === 1 && "How long does it take to build a website?"}
                      {i === 2 && "Do you offer website maintenance?"}
                      {i === 3 && "What areas do you serve?"}
                    </h3>
                    <p className="text-muted-foreground">
                      {i === 1 &&
                        "Most websites take 2-4 weeks to complete, depending on complexity. Simple websites can be done in 1 week, while larger projects may take 6-8 weeks."}
                      {i === 2 &&
                        "Yes, I offer website maintenance packages to keep your site updated, secure, and running smoothly."}
                      {i === 3 &&
                        "I work with clients in Dubai, across the UAE, and worldwide. Remote collaboration makes it easy to work together regardless of location."}
                    </p>
                  </CardContent>
                </Card>
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
                <Button variant="outline" size="lg" className="group">
                  View All FAQs
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
