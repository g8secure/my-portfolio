"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, User, Hash, Mail, Zap, ArrowUpRight, Heart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const footerLinks = {
  Navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { Icon: Code, href: "https://github.com", label: "GitHub" },
  { Icon: User, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Hash, href: "https://twitter.com", label: "Twitter" },
  { Icon: Mail, href: "mailto:contact@sonnybernard.com", label: "Email" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-col",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--accent-primary), transparent)",
        }}
      />

      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="footer-col md:col-span-2" style={{ opacity: 0 }}>
            <Link href="/" className="flex items-center gap-2.5 mb-6 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Zap size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ color: "var(--fg-primary)" }}>
                Sonny<span className="gradient-text">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs" style={{ color: "var(--fg-muted)" }}>
              Full-stack developer & cybersecurity expert creating secure, scalable digital experiences.
              Based in Lagos, Nigeria.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200"
                  style={{
                    background: "var(--bg-tertiary)",
                    borderColor: "var(--border-medium)",
                    color: "var(--fg-muted)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: "var(--accent-primary)",
                    color: "var(--accent-primary)",
                    backgroundColor: "var(--accent-glow)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer-col" style={{ opacity: 0 }}>
              <h4
                className="text-sm font-semibold mb-5 tracking-wide uppercase"
                style={{ color: "var(--fg-primary)" }}
              >
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="footer-link flex items-center gap-1.5 group text-sm">
                      <span className="relative">
                        {link.name}
                        <span
                          className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                          style={{ background: "var(--accent-primary)" }}
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="footer-col md:col-span-2" style={{ opacity: 0 }}>
            <h4
              className="text-sm font-semibold mb-2 tracking-wide uppercase"
              style={{ color: "var(--fg-primary)" }}
            >
              Stay Updated
            </h4>
            <p className="text-sm mb-5" style={{ color: "var(--fg-muted)" }}>
              Get the latest posts and project updates delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="input-field flex-1 text-sm py-3"
              />
              <motion.button
                type="submit"
                className="btn-primary py-3 px-5 whitespace-nowrap text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
            © {new Date().getFullYear()} Sonny Bernard. All rights reserved.
          </p>
          <p className="text-sm flex items-center gap-1" style={{ color: "var(--fg-muted)" }}>
            Crafted with
            <Heart size={14} className="text-red-400 fill-red-400 animate-pulse" />
            using Next.js & Framer Motion
          </p>
          <a
            href="#"
            className="text-sm flex items-center gap-1 transition-colors"
            style={{ color: "var(--fg-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
          >
            Back to Top <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}