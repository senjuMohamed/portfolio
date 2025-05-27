"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github as GitHub, ExternalLink, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Project type
type Project = {
  id: number;
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Event Management System (Laravel)",
    description: "Worked on this during your internship. Solo project, with guidance from a senior at first.",
    details: [
      "CRUD for DemandeReservation, Salleservices, etc.",
      "Soft deletes for produit table.",
      "Relationship between category produit, produit, purchase, and purchase line.",
      "Frontend with Blade layouts (dynamic sidebar, table components).",
      "Archive feature and WhatsApp bot integration (in progress).",
      "Goal: Make the project valuable for the company and revenue-generating."
    ],
    technologies: ["Laravel", "Blade", "PHP", "WhatsApp API"],
    status: "In Progress"
  },
  {
    id: 2,
    title: "Facture Management System",
    description: "Laravel-based payment system.",
    details: [
      "Dynamic calculation: total, montant_paye, reste.",
      "Status (payé / non payé / partiellement payé) auto-determined.",
      "Tax range customization (20–100).",
      "Invoice logic using relationships between models."
    ],
    technologies: ["Laravel", "PHP"],
    status: "Completed"
  },
  {
    id: 3,
    title: "Multilingual System (Planned Project)",
    description: "Preparing to handle complex multilingual Laravel applications to prove skills.",
    details: [
      "Will be your second milestone after event management."
    ],
    technologies: ["Laravel", "PHP"],
    status: "Planned"
  },
  {
    id: 4,
    title: "Standalone Third Project (Upcoming)",
    description: "Will be built 100% independently.",
    details: [
      "Goal: Solve all problems solo and reach senior-level mastery."
    ],
    technologies: ["TBD"],
    status: "Upcoming"
  },
  {
    id: 5,
    title: "PHP MVC Project (UML-Based)",
    description: "Entities: Produit, Categorie, Utilisateur, Commande, Facture, Rapport, etc.",
    details: [
      "Models, controllers, and views: index.php, show.php, form.php.",
      "Setup routing and database structure."
    ],
    technologies: ["PHP", "MVC"],
    status: "Completed"
  },
  {
    id: 6,
    title: "React TypeScript Frontend for Laravel API",
    description: "Migrating Blade views to React TSX components.",
    details: [
      "Dynamic list and form views.",
      "Dashboard layout with sidebar logic.",
      "Connected to Laravel backend via API.",
      "Professional UI with Tailwind + Soft UI dashboard."
    ],
    technologies: ["React", "TypeScript", "Laravel", "Tailwind"],
    status: "In Progress"
  },
  {
    id: 7,
    title: "WordPress ↔ Laravel Integration",
    description: "Made a WordPress page communicate with a Laravel API using GET and PUT.",
    details: [
      "Use case: Public data display from event management project."
    ],
    technologies: ["WordPress", "Laravel", "API"],
    status: "Completed"
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");

  // Collect all unique technologies for filter buttons
  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies).filter((t) => t !== "TBD"))
  );

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.technologies.includes(filter));

  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects You've Worked On</h1>
          <p className="text-muted-foreground text-lg mb-8">
            A showcase of your real-world experience and growth as a developer.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={filter === "All" ? "default" : "outline"}
              className={filter === "All" ? "bg-[#0a0f4f] hover:bg-[#0a0f4f]/90" : ""}
              onClick={() => setFilter("All")}
            >
              All
            </Button>
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant={filter === tech ? "default" : "outline"}
                className={filter === tech ? "bg-[#0a0f4f] hover:bg-[#0a0f4f]/90" : ""}
                onClick={() => setFilter(tech)}
              >
                {tech}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="project-card"
              >
                <Card className="h-full overflow-hidden border group hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{project.description}</p>
                    <ul className="list-disc list-inside text-sm mb-2">
                      {project.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.status && (
                      <span className="inline-block text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                        {project.status}
                      </span>
                    )}
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <GitHub className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button className="bg-[#0a0f4f] hover:bg-[#0a0f4f]/90" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Code className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">
              No projects match the selected filter.
            </p>
            <Button onClick={() => setFilter("All")}>View All Projects</Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}