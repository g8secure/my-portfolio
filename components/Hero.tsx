"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, ChevronRight, Code, Shield, Sparkles } from "lucide-react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

const roles = ["Full-Stack Developer", "Cybersecurity Expert", "UI/UX Enthusiast", "Problem Solver"];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
];

const techStack = ["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2500);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // GSAP entrance timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: 0.3 }
      )
        .fromTo(
          ".hero-title-line",
          { opacity: 0, y: 60, skewY: 3 },
          { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.12 },
          "-=0.4"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          ".hero-stat",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          ".tech-pill",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.07 },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; hue: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        hue: Math.random() * 60 + 220,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((p2) => {
          const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(${p.hue}, 80%, 70%, ${(120 - dist) / 120 * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Particle Canvas */}
      <canvas ref={canvasRef} id="particle-canvas" />

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="animate-blob absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="animate-blob animate-blob-delay-1 absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="animate-blob animate-blob-delay-2 absolute top-3/4 left-1/2 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 text-center py-20"
      >
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 mb-8" style={{ opacity: 0 }}>
          <span className="badge badge-accent">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for hire
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-title mb-6 max-w-5xl mx-auto" style={{ color: "var(--fg-primary)" }}>
          <span className="hero-title-line block" style={{ opacity: 0 }}>
            Crafting Digital
          </span>
          <span className="hero-title-line block gradient-text" style={{ opacity: 0 }}>
            Experiences
          </span>
          <span className="hero-title-line block" style={{ opacity: 0 }}>
            That Matter
          </span>
        </h1>

        {/* Typewriter Role */}
        <div
          className="hero-subtitle text-lg md:text-2xl font-medium mb-4 h-9"
          style={{ color: "var(--fg-secondary)", opacity: 0 }}
        >
          <span className="text-indigo-400">&gt;</span>{" "}
          <span>{displayText}</span>
          <span className="typing-cursor" style={{ color: "var(--accent-primary)" }} />
        </div>

        {/* Description */}
        <p
          className="hero-subtitle text-base md:text-lg max-w-2xl mx-auto mb-10"
          style={{ color: "var(--fg-muted)", opacity: 0 }}
        >
          I build secure, scalable, and stunning web applications with a focus on
          performance and exceptional user experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/projects" className="hero-cta btn-primary" style={{ opacity: 0 }}>
            <Sparkles size={18} />
            View My Work
          </Link>
          <Link href="/contact" className="hero-cta btn-secondary" style={{ opacity: 0 }}>
            Start a Project
            <ChevronRight size={18} />
          </Link>
          <a
            href="#"
            download
            className="hero-cta btn-secondary"
            style={{ opacity: 0 }}
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="hero-stat text-center"
              style={{ opacity: 0 }}
            >
              <div className="counter-num">{stat.value}</div>
              <div className="text-sm font-medium" style={{ color: "var(--fg-muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="tech-pill tech-tag" style={{ opacity: 0 }}>
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--fg-muted)" }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}