"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, LayoutPanelTop, Server, GraduationCap, Brain } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#0a0f4f] dark:to-[#1e293b]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="hero-title text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0a0f4f] via-[#e60e27] to-[#0a0f4f] dark:from-blue-400 dark:via-red-400 dark:to-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Mohamed El Oumari
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="block mb-2 text-[#0a0f4f] dark:text-blue-400 font-semibold tracking-wide">
                Laravel Specialist & Full-Stack Developer
              </span>
              My mission: Become Morocco’s top Laravel developer and build a world-class IT company. I specialize in Laravel, PHP MVC, and modern web stacks, delivering robust solutions and leading projects from backend to UI.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-[#0a0f4f] hover:bg-[#0a0f4f]/90 text-white shadow-lg">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-background to-transparent -z-10"></div>
      </section>

      {/* Goals & Tech Stack Section */}
      <section className="py-16 bg-white/80 dark:bg-[#0a0f4f]/60 backdrop-blur-md">
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
              <Brain className="h-7 w-7 text-[#e60e27]" /> Personal Goals
            </h2>
            <ul className="list-disc list-inside text-lg text-muted-foreground mx-auto max-w-xl">
              <li>Become the best developer in Morocco within 5 years.</li>
              <li>Build a powerful IT company to conquer the global tech industry.</li>
            </ul>
          </motion.div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              🛠️ Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-muted-foreground">
              <div>
                <span className="font-semibold text-[#0a0f4f] dark:text-blue-400">Backend:</span> <br />
                Laravel 10, PHP MVC, MySQL, PostgreSQL, REST API development
              </div>
              <div>
                <span className="font-semibold text-[#e60e27]">Frontend:</span> <br />
                Blade Templates, HTML/CSS, React (TypeScript), Tailwind CSS, Bootstrap 5
              </div>
              <div>
                <span className="font-semibold text-[#0a0f4f] dark:text-blue-400">Tools & Libraries:</span> <br />
                Git, GitHub, WhatsApp API (planned), Soft UI Dashboard, Figma/Uizard, WordPress integration
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="h-7 w-7 text-[#0a0f4f]" /> Learning & Certifications
            </h2>
            <ul className="list-disc list-inside text-lg text-muted-foreground mx-auto max-w-xl">
              <li>Google Cybersecurity Certificate (in progress)</li>
              <li>Cisco Networking (planned)</li>
              <li>Hack The Box training (planned)</li>
              <li>DevOps & InfoSec learning roadmap already structured</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              🧠 Mindset
            </h2>
            <ul className="list-disc list-inside text-lg text-muted-foreground mx-auto max-w-xl">
              <li>Daily hour for mind management: thinking, adjusting, and improving leadership.</li>
              <li>Balancing development with continuous improvement of soft skills and strategy.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to build something great together?
            </h2>
            <Button asChild size="lg" className="bg-[#e60e27] hover:bg-[#0a0f4f]/90 text-white shadow-lg">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}