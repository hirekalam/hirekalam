"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/hirekalam/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/hirekalam",
      icon: <Facebook className="h-5 w-5" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/hirekalam/",
      icon: <Instagram className="h-5 w-5" />,
    },
  ]

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Design 'n Maintenance", href: "/services#web-design" },
        { name: "Ads Campaigns", href: "/services#digital-marketing" },
        { name: "Social Media Management", href: "/services#digital-marketing" },
        { name: "Local SEO & Google Business Setup", href: "/services#web-hosting" },
        { name: "Graphic Design", href: "/services#graphic-design" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "FAQ", href: "/faq" },
      ],
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
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-bold text-gradient">Hire Kalam</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Professional web developer and digital marketing expert offering custom solutions for businesses in Dubai,
              UAE, and worldwide.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:text-primary hover:border-primary transition-colors"
                  >
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <motion.div variants={itemVariants} key={column.title}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Hire Kalam. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +91 7255965136
              </span>
              <span className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                kalam_ansari@outlook.com
              </span>
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Bihar, India
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
