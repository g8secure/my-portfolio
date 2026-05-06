import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import {
  ArrowRight, Sparkles, Shield, LayoutGrid, MessageCircle,
  Code, Zap, Star, Quote, Users, CheckCircle
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem, SectionHeader } from "@/components/AnimatedMotion";

export const metadata = {
  title: "Home | Sonny Bernard — Full-Stack Developer & Cybersecurity Expert",
  description: "Premium portfolio of Sonny Bernard — full-stack developer and cybersecurity expert crafting secure, scalable digital experiences.",
};

const services = [
  {
    title: "Secure Web Apps",
    description: "Building production-ready web applications with security-first architecture and modern best practices.",
    icon: Shield,
    color: "from-indigo-500 to-purple-600",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    title: "Creative Interfaces",
    description: "Designing responsive, user-centric digital experiences that captivate and convert.",
    icon: LayoutGrid,
    color: "from-purple-500 to-pink-600",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    title: "Project Strategy",
    description: "Turning complex ideas into scalable software products with reliable delivery workflows.",
    icon: Sparkles,
    color: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.3)",
  },
];

const featuredProjects = [
  {
    title: "VigiScan",
    description: "Enterprise vulnerability scanner with real-time threat detection and automated reporting.",
    tags: ["Python", "Flask", "Security"],
    href: "/projects",
    gradient: "from-indigo-600 to-purple-700",
  },
  {
    title: "Portfolio Platform",
    description: "A modern, animated developer portfolio with GSAP and Framer Motion.",
    tags: ["Next.js", "TypeScript", "GSAP"],
    href: "/projects",
    gradient: "from-purple-600 to-pink-700",
  },
  {
    title: "CyberDash",
    description: "Real-time cybersecurity monitoring dashboard with threat analytics.",
    tags: ["React", "Node.js", "Socket.io"],
    href: "/projects",
    gradient: "from-cyan-600 to-blue-700",
  },
];

const testimonials = [
  {
    name: "John Smith",
    role: "CTO, TechCorp",
    content: "Sonny delivered exceptional work on our web application. His attention to security and code quality is outstanding.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Security Manager, SecureBank",
    content: "Working with Sonny on our cybersecurity assessment was a game-changer. Critical vulnerabilities identified and fixed.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Founder, StartupXYZ",
    content: "Sonny not only built our platform but mentored our team. His leadership and technical skills are world-class.",
    rating: 5,
  },
];

const stats = [
  { value: "5+", label: "Years Experience", icon: Zap },
  { value: "30+", label: "Projects Completed", icon: Code },
  { value: "15+", label: "Happy Clients", icon: Users },
  { value: "10+", label: "Security Audits", icon: Shield },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* ── Services Preview ── */}
        <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
          <div className="container">
            <SectionHeader
              label="What I Do"
              title={
                <>
                  Services built for{" "}
                  <span className="gradient-text">excellence</span>
                </>
              }
              description="From secure web applications to creative digital experiences, I deliver solutions that exceed expectations."
            />

            <StaggerContainer className="grid gap-6 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={service.title}>
                    <div className="service-card group h-full">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                        style={{
                          background: `linear-gradient(135deg, ${service.color.includes("indigo") ? "rgba(99,102,241,0.12)" : service.color.includes("purple") ? "rgba(139,92,246,0.12)" : "rgba(6,182,212,0.12)"}, transparent)`,
                          border: `1px solid ${service.glow.replace("0.3", "0.2")}`,
                        }}
                      >
                        <Icon
                          className="w-7 h-7 transition-colors duration-300"
                          style={{ color: "var(--accent-primary)" }}
                        />
                      </div>
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ color: "var(--fg-primary)" }}
                      >
                        {service.title}
                      </h3>
                      <p className="leading-relaxed mb-6" style={{ color: "var(--fg-muted)" }}>
                        {service.description}
                      </p>
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        Learn More <ArrowRight size={16} />
                      </Link>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Stats ── */}
        <section
          className="section-padding-sm relative overflow-hidden"
          style={{ background: "var(--bg-secondary)" }}
        >
          <div
            className="absolute inset-0 grid-pattern opacity-30"
            style={{ pointerEvents: "none" }}
          />
          <div className="container relative z-10">
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <StaggerItem key={stat.label}>
                    <div
                      className="p-8 rounded-3xl text-center border transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "var(--bg-primary)",
                        borderColor: "var(--border-subtle)",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl mx-auto mb-4 flex items-center justify-center"
                        style={{
                          background: "rgba(99,102,241,0.1)",
                          border: "1px solid rgba(99,102,241,0.2)",
                        }}
                      >
                        <Icon size={20} style={{ color: "var(--accent-primary)" }} />
                      </div>
                      <div className="counter-num">{stat.value}</div>
                      <p className="text-sm mt-1" style={{ color: "var(--fg-muted)" }}>
                        {stat.label}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Featured Projects ── */}
        <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <ScrollReveal>
                <p className="section-label">Featured Work</p>
                <h2 className="section-title" style={{ color: "var(--fg-primary)" }}>
                  Projects designed to{" "}
                  <span className="gradient-text">impress</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
                  style={{ color: "var(--accent-primary)" }}
                >
                  View all projects <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>

            <StaggerContainer className="grid gap-6 md:grid-cols-3">
              {featuredProjects.map((project) => (
                <StaggerItem key={project.title}>
                  <Link href={project.href} className="project-card group block">
                    {/* Project Banner */}
                    <div
                      className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                    >
                      {/* Decorative circles */}
                      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                      <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/10" />
                      <div className="absolute top-4 left-4">
                        <Code size={32} className="text-white/60" />
                      </div>
                      <div className="project-card-overlay" />
                      {/* Hover CTA */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-sm font-semibold flex items-center gap-1">
                          View Project <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: "var(--fg-primary)" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tech-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Testimonials Preview ── */}
        <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <ScrollReveal>
                <p className="section-label">Client Love</p>
                <h2 className="section-title" style={{ color: "var(--fg-primary)" }}>
                  What people{" "}
                  <span className="gradient-text">say</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <Link
                  href="/testimonials"
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Read all testimonials <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>

            <StaggerContainer className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <StaggerItem key={t.name}>
                  <div className="testimonial-card h-full">
                    {/* Stars */}
                    <div className="stars mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={16} className="star-filled" />
                      ))}
                    </div>
                    <Quote
                      size={28}
                      className="mb-4 opacity-30"
                      style={{ color: "var(--accent-primary)" }}
                    />
                    <p
                      className="text-sm leading-relaxed mb-6 italic"
                      style={{ color: "var(--fg-secondary)" }}
                    >
                      "{t.content}"
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                          color: "#fff",
                        }}
                      >
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "var(--fg-primary)" }}>
                          {t.name}
                        </p>
                        <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
          <div className="container">
            <ScrollReveal>
              <div
                className="relative rounded-3xl overflow-hidden text-center p-16"
                style={{
                  background: "linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 50%, var(--accent-tertiary) 100%)",
                }}
              >
                {/* Pattern */}
                <div
                  className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"
                  style={{ borderRadius: "24px" }}
                />
                <div className="relative z-10">
                  <span className="badge bg-white/20 text-white mb-6 inline-flex">
                    <MessageCircle size={14} />
                    Ready to collaborate?
                  </span>
                  <h2 className="section-title text-white mb-4">
                    Let's build something
                    <br />
                    remarkable together.
                  </h2>
                  <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                    Whether you need a portfolio, a secure SaaS platform, or a complete
                    digital transformation — I'm here to make it happen.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-1 shadow-lg"
                    >
                      Start a Project <ArrowRight size={18} />
                    </Link>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200 hover:-translate-y-1"
                    >
                      View My Work
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
