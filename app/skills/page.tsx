"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const technicalSkills: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Laravel 10", level: 90, icon: "🔺" },
      { name: "PHP MVC", level: 65, icon: "🐘" },
      { name: "MySQL", level: 65, icon: "🗄️" },
      { name: "PostgreSQL", level: 60, icon: "🐘" },
      { name: "REST API development", level: 65, icon: "🔄" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Blade Templates", level: 65, icon: "📝" },
      { name: "HTML/CSS", level: 65, icon: "🌐" },
      { name: "React (TypeScript)", level: 65, icon: "⚛️" },
      { name: "Tailwind CSS", level: 65, icon: "🎨" },
      { name: "Bootstrap 5", level: 60, icon: "🅱️" },
    ],
  },
  {
    category: "Tools & Libraries",
    skills: [
      { name: "Git, GitHub", level: 65, icon: "🔄" },
      { name: "WhatsApp API (planned)", level: 60, icon: "💬" },
      { name: "Soft UI Dashboard", level: 60, icon: "📊" },
      { name: "Figma/Uizard", level: 60, icon: "🎨" },
      { name: "WordPress integration", level: 60, icon: "🌍" },
    ],
  },
];

const softSkills = [
  { name: "Communication", level: 90, icon: "🗣️" },
  { name: "Teamwork", level: 95, icon: "👥" },
  { name: "Problem Solving", level: 90, icon: "🧩" },
  { name: "Time Management", level: 85, icon: "⏰" },
  { name: "Leadership", level: 80, icon: "👑" },
  { name: "Adaptability", level: 90, icon: "🔄" },
  { name: "Creativity", level: 85, icon: "🎨" },
];

export default function SkillsPage() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      const progressBars = gsap.utils.toArray<HTMLElement>(".skill-progress");
      
      progressBars.forEach((bar) => {
        gsap.from(bar, {
          width: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        });
      });
    }
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of my technical and soft skills that I've developed throughout my career.
          </p>
        </motion.div>

        <div ref={skillsRef}>
          <Tabs defaultValue="technical" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {technicalSkills.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    className="bg-card rounded-lg p-6 shadow-sm border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  >
                    <h2 className="text-xl font-semibold mb-6">{category.category}</h2>
                    <div className="space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="mr-2 text-xl">{skill.icon}</span>
                              <span>{skill.name}</span>
                            </div>
                            <span className="text-sm font-medium">{skill.level}%</span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2 skill-progress"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="soft">
              <motion.div
                className="bg-card rounded-lg p-6 shadow-sm border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {softSkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="mr-2 text-xl">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 skill-progress"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-center">Professional Development</h3>
                <div className="space-y-8">
                  {[{
                    title: "Leadership & Team Management",
                    description: "Led cross-functional teams to deliver complex projects on time and within budget. Developed team members through mentoring and code reviews."
                  }, {
                    title: "Problem Solving & Critical Thinking",
                    description: "Analyzed complex technical challenges and implemented innovative solutions, resulting in improved performance and user experience."
                  }, {
                    title: "Communication & Collaboration",
                    description: "Effectively communicated technical concepts to non-technical stakeholders and collaborated with designers, product managers, and other developers."
                  }].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-card rounded-lg p-6 shadow-sm border"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
