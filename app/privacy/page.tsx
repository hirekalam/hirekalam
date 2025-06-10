"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <Link href="/">
              <Button variant="ghost" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto prose prose-slate dark:prose-invert"
          >
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy describes how Hire Kalam ("I", "me", or "my") collects, uses, and protects your
                  information when you visit my website or use my services. I am committed to protecting your privacy
                  and ensuring the security of your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Information I Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When you contact me or use my services, I may collect:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>Name and contact information (email, phone number)</li>
                      <li>Project requirements and business information</li>
                      <li>Communication preferences</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Automatically Collected Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When you visit my website, I may automatically collect:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>IP address and browser information</li>
                      <li>Pages visited and time spent on the site</li>
                      <li>Referring website information</li>
                      <li>Device and operating system information</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">How I Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>To provide and improve my services</li>
                  <li>To communicate with you about projects and inquiries</li>
                  <li>To process payments and manage contracts</li>
                  <li>To send project updates and important notifications</li>
                  <li>To analyze website usage and improve user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I do not sell, trade, or rent your personal information to third parties. I may share your information
                  only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>With your explicit consent</li>
                  <li>With trusted service providers who assist in my business operations</li>
                  <li>When required by law or to protect legal rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of
                  transmission over the internet is 100% secure, and I cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability where applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or how I handle your personal information, please
                  contact me:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> contact@hirekalam.com
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> +91 7255965136
                  </p>
                  <p className="text-muted-foreground">
                    <strong>WhatsApp:</strong>{" "}
                    <Link
                      href="https://wa.me/+917255965136/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      +91 7255965136
                    </Link>
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-muted-foreground mb-6">
              If you have any concerns about how your data is handled, don't hesitate to reach out.
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Me</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
