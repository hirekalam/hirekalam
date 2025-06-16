"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import SectionHeading from "@/components/section-heading"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  const categories = ["All", "Web Design", "Mobile App", "Digital Marketing", "E-commerce"]
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      title: "Eptain & Company",
      description: "Corporate website for an IT firm with modern design and user-friendly interface.",
      image: "/eptain.webp?height=300&width=500",
      tags: ["Web Design", "Corporate"],
      category: "Web Design",
      demoUrl: "https://eptain.io",
      githubUrl: "https://github.com/hirekalam",
    },
    {
      title: "Dubai Cleaning Services",
      description: "Website for a cleaning service company in Dubai with booking functionality.",
      image: "/cleaning-company-dubai.webp?height=300&width=500",
      tags: ["Web Design", "Booking System"],
      category: "Web Design",
      demoUrl: "https://cleaninguae.github.io/dubai/",
      githubUrl: "https://github.com/hirekalam",
    },
    {
      title: "UAE Cleaning Services",
      description: "Website for a cleaning service company in UAE with booking functionality.",
      image: "/cleaning-company-uae.webp?height=300&width=500",
      tags: ["Web Design", "Directory"],
      category: "Web Design",
      demoUrl: "https://cleaninguae.github.io/",
      githubUrl: "https://github.com/hirekalam",
    },
    {
      title: "Zevroc Training Institute",
      description: "Website for an IT training institute in Noida with course management system.",
      image: "/zevroc.webp?height=300&width=500",
      tags: ["Web Design", "Education"],
      category: "Web Design",
      demoUrl: "https://zevroc.com",
      githubUrl: "https://github.com/hirekalam",
    },
    {
      title: "Alcazaar International",
      description: "SM & Web Deve. of Manpower cunsultant's website located in New Delhi, India.",
      image: "/alcazaar-international.webp?height=300&width=500",
      tags: ["Digital Marketing", "Blog"],
      category: "Digital Marketing",
      demoUrl: "https://alcazaarinternational.com",
      githubUrl: "https://github.com/hirekalam",
    },
    {
      title: "Red Carped LLC Dubai",
      description: "I've been worked with RC as admin cum Social Media Manager",
      image: "/red-carpet-llc-dubai.webp?height=300&width=500",
      tags: ["Digital Marketing", "Blog"],
      category: "Digital Marketing",
      demoUrl: "https://www.redcarpetllc.ae/",
      githubUrl: "https://github.com/hirekalam",
    },
    {
      title: "Online Store",
      description: "E-commerce website with product catalog, cart, and secure checkout system.",
      image: "/bathua-online-mart.webp?height=300&width=500",
      tags: ["Web Design", "E-commerce"],
      category: "E-commerce",
      demoUrl: "#",
      githubUrl: "https://github.com/hirekalam",
    },
    {
      title: "Web Audio Player",
      description: "Islamic Web Audio Player with playlist, modern design, and advanced SEO.",
      image: "/islamic-web-audio-player.webp?height=300&width=500",
      tags: ["Web Design", "Education"],
      category: "SEO",
      demoUrl: "https://islamicaudio.github.io/",
      githubUrl: "https://github.com/hirekalam",
    },
    {
      title: "Logo Design",
      description: "Simple and attractive logo design of Expert Computer Training Institute",
      image: "/computer-training-institute-logo.webp?height=300&width=500",
      tags: ["Web Design", "Education"],
      category: "SEO",
      demoUrl: "/computer-training-institute-logo.webp",
      githubUrl: "https://github.com/hirekalam",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work for clients in Dubai, UAE, and worldwide. Browse through my latest projects.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant={activeCategory === category ? "default" : "outline"}
                  className="px-4 py-2 text-sm cursor-pointer"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  demoUrl={project.demoUrl}
                  githubUrl={project.githubUrl}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <SectionHeading
            title="Technologies I Use"
            subtitle="Modern tools and frameworks for building high-quality digital solutions"
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "Node.js", icon: "🟢" },
              { name: "TypeScript", icon: "🔷" },
              { name: "Tailwind CSS", icon: "🌊" },
              { name: "MongoDB", icon: "🍃" },
              { name: "WordPress", icon: "🔤" },
              { name: "Figma", icon: "🎨" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 text-center border shadow-sm"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="font-medium">{tech.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading title="My Project Process" subtitle="How I approach each project to ensure success" center />

          <div className="mt-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Research & Planning",
                  description:
                    "I start by understanding your business goals and target audience to create a strategic plan.",
                },
                {
                  step: "02",
                  title: "Design & Development",
                  description: "I design and develop your project using modern technologies and best practices.",
                },
                {
                  step: "03",
                  title: "Testing & Launch",
                  description: "I thoroughly test your project before launch to ensure everything works perfectly.",
                },
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-5xl font-bold text-primary/10 mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create a digital solution that helps your business grow. Contact me today to
              discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Start a Project
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
