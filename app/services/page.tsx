export const metadata = {
  title: "Services | Sonny Bernard",
  description: "Professional services for web development, cybersecurity consulting, and cloud solutions.",
};

import { AnimatedDiv } from "@/components/AnimatedMotion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, Shield, Cloud, Users, Search, Wrench } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
    features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Scalable Architecture"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Consulting",
    description: "Comprehensive security assessments, vulnerability testing, and risk mitigation strategies.",
    features: ["Security Audits", "Penetration Testing", "Compliance Support", "Security Training"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud infrastructure setup, deployment, and management using AWS, Azure, and GCP.",
    features: ["Infrastructure as Code", "Auto Scaling", "Monitoring & Logging", "Cost Optimization"],
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Technical leadership, team mentoring, and project management for development teams.",
    features: ["Code Reviews", "Architecture Design", "Agile Methodologies", "Knowledge Sharing"],
  },
  {
    icon: Search,
    title: "Security Research",
    description: "In-depth research on emerging threats, security trends, and best practices.",
    features: ["Threat Analysis", "Security Research", "Blog Writing", "Community Engagement"],
  },
  {
    icon: Wrench,
    title: "DevOps & Automation",
    description: "CI/CD pipeline setup, automated testing, and deployment automation.",
    features: ["CI/CD Pipelines", "Automated Testing", "Containerization", "Monitoring"],
  },
];

export default function Services() {
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
                My Services
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Professional services to help you build secure, scalable, and efficient solutions.
              </p>
            </AnimatedDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedDiv
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </AnimatedDiv>
              ))}
            </div>

            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Start a Project?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Let's discuss how I can help bring your ideas to life.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get In Touch
              </button>
            </AnimatedDiv>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}