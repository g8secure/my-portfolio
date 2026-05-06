export const metadata = {
  title: "About | Sonny Bernard — Full-Stack Developer & Cybersecurity Specialist",
  description: "Learn about Sonny Bernard's journey, skills, and expertise in full-stack development and cybersecurity.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem, SectionHeader } from "@/components/AnimatedMotion";
import {
  Code, Shield, Database, Users, Download, MapPin, Mail,
  Briefcase, GraduationCap, Award, CheckCircle, Coffee
} from "lucide-react";
import Link from "next/link";

const skills = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Node.js / Express", level: 88, category: "Backend" },
  { name: "Python / Flask", level: 85, category: "Backend" },
  { name: "Cybersecurity", level: 92, category: "Security" },
  { name: "PostgreSQL / MongoDB", level: 82, category: "Database" },
  { name: "AWS / Cloud", level: 78, category: "DevOps" },
  { name: "Docker / CI/CD", level: 80, category: "DevOps" },
];

const expertise = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Expert in React, Next.js, Node.js, and modern web technologies.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Certified in cybersecurity with expertise in threat analysis and risk mitigation.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Proficient in SQL and NoSQL databases, data modeling, and optimization.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Experienced in leading development teams and mentoring junior developers.",
    color: "from-amber-500 to-orange-600",
  },
];

const timeline = [
  {
    year: "2024",
    role: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    type: "work",
    description: "Led development of enterprise security platform serving 50,000+ users.",
  },
  {
    year: "2022",
    role: "Cybersecurity Engineer",
    company: "SecureBank Ltd.",
    type: "work",
    description: "Performed 10+ penetration tests, identified and remediated critical vulnerabilities.",
  },
  {
    year: "2021",
    role: "BSc Computer Science",
    company: "University of Lagos",
    type: "education",
    description: "Graduated with First Class Honours. Thesis on Zero-Day Vulnerability Detection.",
  },
  {
    year: "2019",
    role: "Frontend Developer",
    company: "StartupXYZ",
    type: "work",
    description: "Built responsive web applications reaching 20,000+ monthly active users.",
  },
];

const certifications = [
  "CompTIA Security+",
  "CEH — Certified Ethical Hacker",
  "AWS Solutions Architect",
  "Google Professional Cloud Developer",
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1" style={{ paddingTop: "80px" }}>

        {/* ── Hero ── */}
        <section
          className="section-padding relative overflow-hidden hero-gradient"
        >
          <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <ScrollReveal direction="right">
                <p className="section-label">About Me</p>
                <h1 className="hero-title mb-6" style={{ color: "var(--fg-primary)" }}>
                  Building the future,{" "}
                  <span className="gradient-text">one line</span>
                  <br /> at a time.
                </h1>
                <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--fg-muted)" }}>
                  With over 5 years of experience in software development and cybersecurity,
                  I've dedicated my career to building robust digital solutions that protect
                  and empower users across the globe.
                </p>
                <div className="flex flex-wrap gap-6 mb-8 text-sm" style={{ color: "var(--fg-muted)" }}>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} style={{ color: "var(--accent-primary)" }} />
                    Lagos, Nigeria
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail size={16} style={{ color: "var(--accent-primary)" }} />
                    contact@sonnybernard.com
                  </span>
                  <span className="flex items-center gap-2">
                    <Coffee size={16} style={{ color: "var(--accent-primary)" }} />
                    Available for freelance
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="#" download className="btn-primary">
                    <Download size={18} />
                    Download CV
                  </a>
                  <Link href="/contact" className="btn-secondary">
                    Get In Touch
                  </Link>
                </div>
              </ScrollReveal>

              {/* Right — Profile Card */}
              <ScrollReveal direction="left" delay={0.2}>
                <div className="relative">
                  {/* Avatar */}
                  <div
                    className="relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                      padding: "3px",
                    }}
                  >
                    <div
                      className="rounded-3xl p-10 text-center"
                      style={{ background: "var(--bg-secondary)" }}
                    >
                      {/* Avatar Circle */}
                      <div
                        className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold"
                        style={{
                          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                          color: "#fff",
                        }}
                      >
                        SB
                      </div>
                      <h3 className="text-xl font-bold mb-1" style={{ color: "var(--fg-primary)" }}>
                        Sonny Bernard
                      </h3>
                      <p className="text-sm mb-6" style={{ color: "var(--fg-muted)" }}>
                        Full-Stack Developer & Security Expert
                      </p>

                      {/* Quick Facts */}
                      <div className="space-y-3 text-left">
                        {[
                          "5+ years of professional experience",
                          "30+ projects delivered successfully",
                          "Cybersecurity certified specialist",
                          "Open-source contributor",
                        ].map((fact) => (
                          <div key={fact} className="flex items-center gap-3 text-sm" style={{ color: "var(--fg-secondary)" }}>
                            <CheckCircle size={16} style={{ color: "var(--accent-primary)" }} className="flex-shrink-0" />
                            {fact}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div
                    className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-xs font-bold text-white animate-float"
                    style={{ background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))" }}
                  >
                    🔒 Security Expert
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full text-xs font-bold text-white animate-float"
                    style={{
                      background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                      animationDelay: "1s",
                    }}
                  >
                    ⚡ React Ninja
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Expertise ── */}
        <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <SectionHeader
              label="Expertise"
              title={<>What I <span className="gradient-text">specialize</span> in</>}
              description="A well-rounded skill set built over 5+ years of hands-on experience."
            />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title}>
                    <div className="service-card text-center group h-full">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-3" style={{ color: "var(--fg-primary)" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <ScrollReveal direction="right">
                <p className="section-label">Skills</p>
                <h2 className="section-title mb-6" style={{ color: "var(--fg-primary)" }}>
                  Technical <span className="gradient-text">proficiency</span>
                </h2>
                <p className="leading-relaxed mb-8" style={{ color: "var(--fg-muted)" }}>
                  My journey began with a fascination for how technology solves real-world
                  problems. I've since built expertise across the full development stack,
                  from pixel-perfect frontends to hardened backend systems.
                </p>
                <div className="flex flex-col gap-5">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold" style={{ color: "var(--fg-primary)" }}>
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="tech-tag text-xs">{skill.category}</span>
                          <span className="text-sm font-bold" style={{ color: "var(--accent-primary)" }}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill animate"
                          style={{ transform: `scaleX(${skill.level / 100})` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Timeline */}
              <ScrollReveal direction="left" delay={0.2}>
                <p className="section-label">Experience</p>
                <h2 className="section-title mb-8" style={{ color: "var(--fg-primary)" }}>
                  My <span className="gradient-text">journey</span>
                </h2>
                <div className="relative">
                  {/* Line */}
                  <div
                    className="absolute left-5 top-0 bottom-0 w-px"
                    style={{ background: "var(--border-medium)" }}
                  />
                  <div className="space-y-8">
                    {timeline.map((item, i) => (
                      <div key={i} className="flex gap-6 pl-4 relative">
                        {/* Dot */}
                        <div
                          className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center z-10"
                          style={{
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            boxShadow: "0 0 0 3px var(--bg-primary), 0 0 0 5px var(--accent-glow)",
                          }}
                        >
                          {item.type === "work" ? (
                            <Briefcase size={16} className="text-white" />
                          ) : (
                            <GraduationCap size={16} className="text-white" />
                          )}
                        </div>
                        <div className="pb-2">
                          <span
                            className="text-xs font-bold tracking-wider uppercase mb-1 block"
                            style={{ color: "var(--accent-primary)" }}
                          >
                            {item.year}
                          </span>
                          <h4 className="text-base font-bold mb-0.5" style={{ color: "var(--fg-primary)" }}>
                            {item.role}
                          </h4>
                          <p className="text-sm font-medium mb-2" style={{ color: "var(--accent-secondary)" }}>
                            {item.company}
                          </p>
                          <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className="section-padding-sm" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <ScrollReveal className="text-center mb-12">
              <p className="section-label justify-center">Credentials</p>
              <h2 className="section-title" style={{ color: "var(--fg-primary)" }}>
                Certifications & <span className="gradient-text">Awards</span>
              </h2>
            </ScrollReveal>
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert) => (
                <StaggerItem key={cert}>
                  <div
                    className="flex items-center gap-3 p-4 rounded-2xl border transition-all duration-200 hover:-translate-y-1"
                    style={{
                      background: "var(--bg-primary)",
                      borderColor: "var(--border-subtle)",
                    }}
                  >
                    <Award size={20} style={{ color: "var(--accent-primary)" }} className="flex-shrink-0" />
                    <span className="text-sm font-semibold" style={{ color: "var(--fg-primary)" }}>
                      {cert}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}