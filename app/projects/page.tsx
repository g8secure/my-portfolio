export const metadata = {
  title: "Projects | Sonny Bernard",
  description: "Explore projects showcasing secure, modern web applications and cybersecurity solutions.",
};

import { AnimatedDiv } from "@/components/AnimatedMotion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "Vulnerability Scanner",
    description: "A comprehensive web vulnerability scanner built with Python and Flask. Features automated scanning, detailed reporting, and real-time monitoring.",
    image: "/project1.jpg",
    technologies: ["Python", "Flask", "SQLite", "HTML/CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, animations, and SEO optimization.",
    image: "/project2.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Cybersecurity Dashboard",
    description: "A real-time cybersecurity monitoring dashboard with threat detection, incident response, and analytics capabilities.",
    image: "/project3.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "API Security Tool",
    description: "An automated tool for testing and securing REST APIs against common vulnerabilities like injection, authentication bypass, and rate limiting issues.",
    image: "/project4.jpg",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                My Projects
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A showcase of my recent work in web development and cybersecurity.
              </p>
            </AnimatedDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <AnimatedDiv
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                    {/* Placeholder for project image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span>Project Image</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Code size={20} className="mr-2" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Demo
                      </a>
                    </div>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}