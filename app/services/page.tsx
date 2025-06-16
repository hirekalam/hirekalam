"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, FileText, Globe, Layout, MessageSquare, Smartphone, Video } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import ServiceCard from "@/components/service-card"

export default function ServicesPage() {
  const services = [
  {
    id: "web-design",
    title: "Web Design",
    description:
      "Custom modern websites for businesses in Dubai, UAE, and worldwide. Responsive designs that look great on all devices.",
    icon: <Layout className="h-10 w-10" />,
    features: [
      "Custom website design",
      "Responsive layouts",
      "User-friendly interfaces",
      "Fast loading speeds",
      "SEO-friendly structure",
    ],
    image: "/web-design.webp", // Add image URL
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. User-friendly interfaces with powerful functionality.",
    icon: <Smartphone className="h-10 w-10" />,
    features: [
      "iOS and Android apps",
      "Cross-platform development",
      "User-friendly interfaces",
      "Performance optimization",
      "App store submission",
    ],
    image: "/mobile-app.webp",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to grow your business. SEO, social media, and content marketing for UAE and global clients.",
    icon: <Globe className="h-10 w-10" />,
    features: [
      "Search engine optimization (SEO)",
      "Social media marketing",
      "Content marketing",
      "Email marketing campaigns",
      "Performance analytics",
    ],
    image: "/digital-marketing.webp",
  },
  {
    id: "web-hosting",
    title: "Web Hosting",
    description:
      "Safe, reliable website hosting with high uptime. Fast servers and excellent support for businesses worldwide.",
    icon: <Database className="h-10 w-10" />,
    features: [
      "99.9% uptime guarantee",
      "Fast SSD storage",
      "Free SSL certificates",
      "Daily backups",
      "24/7 technical support",
    ],
    image: "/web-hosting.webp",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Professional logo and visual design for branding. Creative solutions for businesses in Dubai and beyond.",
    icon: <FileText className="h-10 w-10" />,
    features: [
      "Logo design",
      "Brand identity",
      "Marketing materials",
      "Social media graphics",
      "Print design",
    ],
    image: "/graphic-design.webp",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description:
      "Professional video editing services for marketing and social media. High-quality videos for clients globally and in UAE.",
    icon: <Video className="h-10 w-10" />,
    features: [
      "Marketing videos",
      "Social media content",
      "Motion graphics",
      "Video optimization",
      "Custom animations",
    ],
    image: "/video-editing.webp",
  },
];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional digital services for businesses in Dubai, UAE, and worldwide. Custom solutions to help your
              business grow online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={service.id}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Sections */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-20 px-4 ${index % 2 === 0 ? "bg-muted/30" : ""}`}>
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`space-y-6 ${index % 2 !== 0 ? "lg:order-2" : ""}`}
              >
                <div className="inline-block text-primary mb-2">{service.icon}</div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-muted-foreground text-lg">{service.description}</p>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {service.features.map((feature, i) => (
                    <motion.li key={i} variants={itemVariants} className="flex items-start gap-2">
                      <div className="mt-1 text-primary">
                        <Code className="h-5 w-5" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
      <img
      src={service.image}
      alt={`${service.title} illustration`}
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="My Work Process"
            subtitle="How I approach projects to deliver the best results"
            center
          />

          <div className="mt-12 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "I start by understanding your business, goals, and requirements to create a tailored solution.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Next, I create a detailed plan with timelines, deliverables, and milestones for your project.",
              },
              {
                step: "03",
                title: "Design",
                description:
                  "I design user-friendly interfaces and experiences that align with your brand and business goals.",
              },
              {
                step: "04",
                title: "Development",
                description:
                  "I build your website or app using the latest technologies and best practices for optimal performance.",
              },
              {
                step: "05",
                title: "Testing",
                description: "Thorough testing ensures your project works perfectly across all devices and browsers.",
              },
              {
                step: "06",
                title: "Launch",
                description: "Once approved, I launch your project and provide training on how to use and maintain it.",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {index !== 5 && <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border" />}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary/10 border border-primary flex items-center justify-center text-primary font-bold">
                  {process.step}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary/10 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a solution that helps your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
