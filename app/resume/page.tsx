"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const workExperience: Experience[] = [
  {
    title: "Laravel Intern & Solo Developer",
    company: "Event Management System – Internship Project",
    period: "2024 – Present",
    description: [
      "Developed a complete event management system using Laravel with Blade components.",
      "Built core modules: DemandeReservation, Salleservices, produit, category produit, purchase, and facture.",
      "Implemented features like soft delete, archiving, status automation (paid/unpaid), and dynamic tax handling.",
      "Designed a professional admin dashboard UI and reusable components (index, edit, show, form views).",
      "Began transition to a React (TypeScript) frontend consuming Laravel APIs.",
      "Planned integration with WhatsApp Bot and WordPress (data sync using GET/PUT)."
    ]
  },
  {
    title: "Freelance Developer",
    company: "PHP MVC Application – Independent Study Project",
    period: "2023 – 2024",
    description: [
      "Created an MVC architecture from scratch based on UML diagrams.",
      "Modeled entities: Produit, Categorie, Utilisateur, Commande, Facture, Rapport, etc.",
      "Implemented dynamic views (index, show, form) and relational controllers.",
      "Strengthened skills in OOP, custom routing, and database-first development."
    ]
  },
  {
    title: "Frontend Practice & Project Preparation",
    company: "",
    period: "2022 – 2023",
    description: [
      "Focused on UI/UX using The Odin Project, Frontend Mentor, and CSSBattle.",
      "Built several small to medium projects with HTML, CSS, JS, and Tailwind CSS.",
      "Practiced responsive layouts, custom component creation, and performance optimization."
    ]
  }
];

const education: Education[] = [
  {
    degree: "Licence Professionnelle en Développement Web Full Stack",
    institution: "ENSA Tanger (Formation Continue)",
    period: "2024 – 2025 (Ongoing)",
    description: "Courses in advanced programming, databases, DevOps, cybersecurity, and digital transformation. Real-world Laravel/React projects developed as part of coursework."
  },
  {
    degree: "Technicien Spécialisé en Développement Digital",
    institution: "ISTA Larache",
    period: "2021 – 2023",
    description: "Hands-on training in full-stack web development. Focused on PHP, Laravel, JavaScript, and relational databases. Built several CRUD-based projects and admin panels."
  }
];

export default function ResumePage() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animation for timeline (temporarily commented out for debugging)
    // if (timelineRef.current) {
    //   const timelineItems = gsap.utils.toArray(".timeline-item");
    //   timelineItems.forEach((item, index) => {
    //     gsap.from(item, {
    //       opacity: 0,
    //       x: index % 2 === 0 ? -50 : 50,
    //       duration: 0.8,
    //       scrollTrigger: {
    //         trigger: item as Element,
    //         start: "top bottom-=100",
    //         toggleActions: "play none none none",
    //       },
    //     });
    //   });
    // }
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
          <p className="text-muted-foreground text-lg mb-8">
            My professional journey and educational background
          </p>
          <Button asChild className="bg-[#0a0f4f] hover:bg-[#0a0f4f]/90">
            <a href="/Mohamed EL Oumari (1).pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="mr-2 h-5 w-5 text-[#0a0f4f] dark:text-blue-400" />
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>
            
            <div ref={timelineRef} className="space-y-6">
              {workExperience.map((job, index) => (
                <Card key={index} className="timeline-item border-l-4 border-l-[#0a0f4f] dark:border-l-blue-400">
                  <CardHeader>
                    <div className="flex items-center mb-1">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <CardDescription>{job.period}</CardDescription>
                    </div>
                    <CardTitle>{job.title}</CardTitle>
                    {job.company && (
                      <CardDescription className="font-medium text-[#e60e27] dark:text-red-400">
                        {job.company}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                      {job.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <Separator className="my-10" />

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="mr-2 h-5 w-5 text-[#0a0f4f] dark:text-blue-400" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="timeline-item border-l-4 border-l-[#e60e27] dark:border-l-red-400">
                  <CardHeader>
                    <div className="flex items-center mb-1">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <CardDescription>{edu.period}</CardDescription>
                    </div>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription className="font-medium text-[#0a0f4f] dark:text-blue-400">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <Separator className="my-10" />

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Skills Summary</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: "Programming Languages",
                  skills: "PHP, JavaScript, TypeScript, HTML, CSS, SQL"
                },
                {
                  category: "Frameworks & Libraries",
                  skills: "Laravel, React, Next.js (learning), Tailwind CSS, Bootstrap, GSAP, Framer Motion"
                },
                {
                  category: "Tools & Platforms",
                  skills: "Git, GitHub, VS Code, WordPress, Soft UI Dashboard, Figma, Vercel, Postman"
                },
                {
                  category: "Databases",
                  skills: "MySQL, PostgreSQL"
                },
                {
                  category: "Development Concepts",
                  skills: "REST APIs, MVC, OOP, CRUD, Soft Delete, Auth systems, Responsive Design, Component-Based UI"
                },
                {
                  category: "Current Focus",
                  skills: "React + Laravel integration, WhatsApp API, multilingual Laravel, Cybersecurity (Google cert), Cisco networking, Hack The Box"
                }
              ].map((item, index) => (
                <Card key={index} className="border hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.skills}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}