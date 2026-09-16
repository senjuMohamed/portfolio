"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

const Tabs = ({ children, defaultValue, className }: TabsProps) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children }: { children: React.ReactNode }) => (
  <div className="grid w-full grid-cols-2 mb-8">
    {children}
  </div>
);

const TabsTrigger = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => {
  const tabs = React.useContext(TabsContext);
  const isActive = tabs?.activeTab === value;

  return (
    <button
      type="button"
      onClick={() => tabs?.setActiveTab(value)}
      aria-pressed={isActive}
      className={`py-3 px-6 rounded-t-lg border-b-2 font-semibold ${
        isActive
          ? "border-[#0a0f4f] text-[#0a0f4f] dark:border-blue-400 dark:text-blue-400"
          : "border-transparent text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => {
  const tabs = React.useContext(TabsContext);

  return tabs?.activeTab === value ? <div>{children}</div> : null;
};

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const technicalSkills: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Laravel", level: 90 },
      { name: "PHP, MVC & OOP", level: 75 },
      { name: "MySQL", level: 65 },
      { name: "REST API development", level: 65 },
      { name: "CRUD & authentication", level: 75 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Blade templates", level: 75 },
      { name: "HTML & CSS", level: 75 },
      { name: "JavaScript", level: 65 },
      { name: "Tailwind CSS", level: 65 },
      { name: "Bootstrap 5", level: 60 },
    ],
  },
  {
    category: "Tools & Integrations",
    skills: [
      { name: "Git & GitHub", level: 65 },
      { name: "WordPress integration", level: 60 },
      { name: "Postman", level: 65 },
      { name: "Figma", level: 60 },
      { name: "Soft UI Dashboard", level: 60 },
    ],
  },
];

const softSkills = [
  { name: "Communication", level: 90 },
  { name: "Teamwork", level: 95 },
  { name: "Problem Solving", level: 90 },
  { name: "Time Management", level: 85 },
  { name: "Leadership", level: 80 },
  { name: "Adaptability", level: 90 },
  { name: "Creativity", level: 85 },
];

// Progress bar component (no GSAP)
const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: number }
>(({ value, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-full bg-muted rounded-full overflow-hidden ${className ?? ""} skill-progress`}
      {...props}
      style={{ height: 8 }}
    >
      <div
        className="h-full bg-[#0a0f4f] transition-all duration-700 dark:bg-blue-400"
        style={{ width: `${value}%` }}
      />
    </div>
  );
});
Progress.displayName = "Progress";

export default function SkillsPage() {
  const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 text-foreground transition-colors">
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of my technical and soft skills that I've
            developed throughout my career.
          </p>
        </motion.div>

        <div ref={skillsRef}>
          <Tabs defaultValue="technical" className="max-w-4xl mx-auto">
            <TabsList>
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="technical">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {technicalSkills.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  >
                    <h2 className="text-xl font-semibold mb-6">
                      {category.category}
                    </h2>
                    <div className="space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span>{skill.name}</span>
                            <span className="text-sm font-medium">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="soft">
              <motion.div
                className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {softSkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>{skill.name}</span>
                        <span className="text-sm font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
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
