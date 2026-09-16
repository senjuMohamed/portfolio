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
      className={`py-3 px-6 rounded-t-lg border-b-2 font-semibold ${
        isActive
          ? "border-blue-600 text-blue-600"
          : "border-transparent text-gray-600 hover:text-blue-500"
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

// Progress bar component (no GSAP)
const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: number }
>(({ value, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`w-full bg-gray-300 rounded-full overflow-hidden ${className ?? ""} skill-progress`}
      {...props}
      style={{ height: 8 }}
    >
      <div
        className="bg-blue-600 h-full transition-all duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  );
});
Progress.displayName = "Progress";

export default function SkillsPage() {
  const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
          <p className="text-gray-600 text-lg">
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
                    className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
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
                            <div className="flex items-center">
                              <span className="mr-2 text-xl">{skill.icon}</span>
                              <span>{skill.name}</span>
                            </div>
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
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
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
