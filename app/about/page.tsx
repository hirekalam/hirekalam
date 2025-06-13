"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Download, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "@/components/section-heading"

export default function AboutPage() {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 85 },
    { name: "SEO", level: 80 },
    { name: "Digital Marketing", level: 75 },
  ]

  const experiences = [
    {
      position: "Freelance Web Developer",
      company: "Self-employed",
      period: "2020 - Present",
      description:
        "Working with clients from Dubai, UAE, and worldwide to create custom websites, mobile apps, and digital marketing strategies.",
    },
    {
      position: "Web Developer",
      company: "Tech Solutions Dubai",
      period: "2018 - 2020",
      description:
        "Developed websites and web applications for businesses in the UAE. Worked on e-commerce sites, corporate websites, and custom web applications.",
    },
    {
      position: "Digital Marketing Specialist",
      company: "Marketing Agency",
      period: "2016 - 2018",
      description:
        "Managed digital marketing campaigns for clients. Focused on SEO, content marketing, and social media strategies.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2012 - 2016",
      description: "Specialized in web development and software engineering. Graduated with honors.",
    },
    {
      degree: "Digital Marketing Certification",
      institution: "Google Digital Academy",
      period: "2017",
      description: "Comprehensive training in digital marketing strategies, SEO, and analytics.",
    },
    {
      degree: "UI/UX Design Course",
      institution: "Design Institute",
      period: "2019",
      description: "Advanced training in user interface and user experience design principles.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn more about my background, skills, and experience as a web developer and digital marketing expert.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
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
                className="absolute -bottom-6 -right-6 bg-background border shadow-lg rounded-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Badge variant="default">Available for hire</Badge>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Web Developer & Digital Marketing Expert</h2>
              <p className="text-muted-foreground">
                Hello! I'm Kalam, a passionate web developer and digital marketing expert based in Bihar, India. I help
                businesses grow their online presence with custom websites, mobile apps, and effective digital marketing
                strategies.
              </p>
              <p className="text-muted-foreground">
                With over 5 years of experience, I've worked with clients from various industries, creating digital
                solutions that drive results. My goal is to help businesses succeed online by combining beautiful design
                with powerful functionality.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Name</p>
                  <p className="text-muted-foreground">Kalam</p>
                </div>
                <div>
                  <p className="font-medium">Based in</p>
                  <p className="text-muted-foreground">Bihar, India</p>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 7255965136</p>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">contact@hirekalam.com</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="group">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <SectionHeading
            title="My Skills"
            subtitle="Technical skills and expertise I've developed over the years"
            center
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey as a web developer and digital marketer"
            center
          />

          <div className="mt-12 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {index !== experiences.length - 1 && <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border" />}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <SectionHeading title="Education" subtitle="My academic background and professional certifications" center />

          <div className="mt-12 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {index !== education.length - 1 && <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border" />}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Why Choose Me"
            subtitle="What sets me apart as a web developer and digital marketing expert"
            center
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Quality Work",
                description:
                  "I deliver high-quality websites and digital marketing solutions that meet your business needs and exceed expectations.",
              },
              {
                title: "Timely Delivery",
                description:
                  "I understand the importance of deadlines and always deliver projects on time without compromising on quality.",
              },
              {
                title: "Ongoing Support",
                description:
                  "I provide continuous support after project completion to ensure everything runs smoothly and efficiently.",
              },
              {
                title: "Custom Solutions",
                description:
                  "Every business is unique, so I create custom solutions tailored to your specific requirements and goals.",
              },
              {
                title: "SEO Expertise",
                description:
                  "I optimize websites for search engines to help your business rank higher and attract more organic traffic.",
              },
              {
                title: "Responsive Design",
                description:
                  "All websites I create are fully responsive and look great on all devices, from desktops to smartphones.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 text-primary">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing for your business. Contact me today to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View My Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
