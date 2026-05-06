"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      scale: direction === "scale" ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedDiv(props: React.ComponentProps<typeof motion.div> & { initial?: object; animate?: object; transition?: object }) {
  return <motion.div {...props} />;
}

export function AnimatedArticle(props: React.ComponentProps<typeof motion.article>) {
  return <motion.article {...props} />;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = true,
}: {
  label: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <ScrollReveal className={`mb-16 ${centered ? "text-center" : ""}`}>
      <p className={`section-label ${centered ? "justify-center" : ""}`}>{label}</p>
      <h2 className="section-title mb-5" style={{ color: "var(--fg-primary)" }}>
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""}`}
          style={{ color: "var(--fg-muted)" }}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
