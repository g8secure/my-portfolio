"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Moon, Sun, Zap } from "lucide-react";
import gsap from "gsap";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(0,0,0,0.85)"]);
  const headerBlur = useTransform(scrollY, [0, 80], [0, 20]);

  useEffect(() => {
    setMounted(true);
    // GSAP logo entrance
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }
    // GSAP nav items stagger
    if (navRef.current) {
      gsap.fromTo(
        navRef.current.querySelectorAll("a"),
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.4,
        }
      );
    }
  }, []);

  const scrollProgress = useTransform(scrollY, [0, 1000], [0, 1]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollProgress }}
      />

      <motion.header
        style={{
          backgroundColor: headerBg,
          backdropFilter: `blur(${headerBlur}px)`,
        } as React.CSSProperties}
        className="fixed top-0 w-full z-50 border-b border-white/5"
      >
        <div className="container">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <Link
              href="/"
              ref={logoRef}
              className="flex items-center gap-2.5 group"
              style={{ opacity: 0 }}
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap size={18} className="text-white" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 blur-md opacity-60 -z-10 group-hover:opacity-80 transition-opacity" />
              </div>
              <span className="text-xl font-bold tracking-tight" style={{ color: "var(--fg-primary)" }}>
                Sonny<span className="gradient-text">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav ref={navRef} className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-indigo-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                    style={{ opacity: 0 }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-white/8"
                        style={{ borderRadius: 8 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-400" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200"
                  style={{
                    background: "var(--bg-tertiary)",
                    borderColor: "var(--border-medium)",
                    color: "var(--fg-secondary)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={theme}
                      initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
              )}

              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden md:flex btn-primary text-sm py-2.5 px-5"
              >
                Hire Me
              </Link>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center border"
                style={{
                  background: "var(--bg-tertiary)",
                  borderColor: "var(--border-medium)",
                  color: "var(--fg-secondary)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
              style={{
                background: "var(--bg-secondary)",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <div className="container py-4 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        pathname === item.href
                          ? "bg-indigo-500/10 text-indigo-400"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="pt-2 border-t"
                  style={{ borderColor: "var(--border-subtle)" }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full justify-center mt-2"
                  >
                    Hire Me
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}