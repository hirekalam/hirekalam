"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function TermsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
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

      {/* Terms Content */}
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
                <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the services provided by Hire Kalam ("I", "me", or "my"), you accept and agree
                  to be bound by the terms and provision of this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Services Provided</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I provide the following professional services:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Web development and design</li>
                  <li>Mobile application development</li>
                  <li>Digital marketing and SEO</li>
                  <li>Web hosting services</li>
                  <li>Graphic design</li>
                  <li>Video editing</li>
                  <li>Software consulting and technical advisory</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Project Terms</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Project Scope</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All projects will have a clearly defined scope of work agreed upon before commencement. Any
                      changes to the scope may result in additional charges and timeline adjustments.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Timeline</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Project timelines are estimates based on the agreed scope. Delays caused by client feedback,
                      content provision, or scope changes may affect the delivery timeline.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Revisions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Each project includes a reasonable number of revisions as specified in the project agreement.
                      Additional revisions beyond the agreed limit may incur extra charges.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Payment Schedule</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Small projects (under $1000): Full payment upfront</li>
                      <li>Medium projects ($1000-$5000): 50% upfront, 50% on completion</li>
                      <li>Large projects (over $5000): Milestone-based payments as agreed</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Late Payments</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Late payments may result in project suspension and additional fees. Work will resume upon payment
                      of outstanding amounts.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Client Ownership</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Upon full payment, clients own the final deliverables and custom code created specifically for
                      their project.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Third-Party Components</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Third-party libraries, frameworks, and tools remain under their respective licenses. I retain
                      rights to general methodologies and techniques.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Portfolio Rights</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I reserve the right to showcase completed work in my portfolio unless otherwise agreed in writing.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Warranties and Disclaimers</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Service Warranty</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I warrant that services will be performed with professional skill and care. Bug fixes for issues
                      in delivered code are provided free of charge for 30 days post-delivery.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Limitation of Liability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      My liability is limited to the amount paid for services. I am not liable for indirect,
                      consequential, or incidental damages.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate the agreement with written notice. In case of termination, payment is due
                  for work completed up to the termination date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by the laws of the United Arab Emirates. Any disputes will be resolved
                  through negotiation or mediation before pursuing legal action.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions about these Terms of Service, please contact me:
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
            <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-6">
              Now that you understand the terms, let's discuss your project and get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Start a Project</Button>
              </Link>
              <Link href="/faq">
                <Button variant="outline" size="lg">
                  View FAQ
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
