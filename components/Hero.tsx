"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Button from "./ui/Button";
import { profile } from "@/lib/data";

const headline = ["Jay", "Patel."];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const word = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const headlineVariants = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : container;
  const wordVariants = reduceMotion
    ? { hidden: { opacity: 1, y: "0%" }, show: { opacity: 1, y: "0%" } }
    : word;

  return (
    <section
      id="top"
      className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden px-6 pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-end"
      >
        <span className="translate-x-[18%] select-none whitespace-nowrap font-serif text-[40vw] font-bold leading-none text-ink/[0.06]">
          JP
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium text-ink-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </motion.div>

        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          Data Analyst — {profile.location}
        </p>

        <motion.h1
          variants={headlineVariants}
          initial="hidden"
          animate="show"
          className="mt-3 font-serif text-hero-sm font-semibold text-ink sm:text-hero-md lg:text-hero-lg"
          aria-label={profile.name}
        >
          {headline.map((w, i) => (
            <span key={w + i} className="block overflow-hidden pb-[0.12em]">
              <motion.span
                variants={wordVariants}
                className={`inline-block ${w === "Patel." ? "text-accent" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-8 max-w-xl text-lg text-ink-muted sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#projects" variant="solid">
            View Work
          </Button>
          <Button href="#contact" variant="ghost">
            Get in Touch
          </Button>
          <Button
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            variant="ghost"
          >
            <Download size={16} /> Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-14 flex flex-wrap items-center gap-6 text-sm text-ink-muted"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} /> {profile.location}
          </span>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            <Mail size={14} /> {profile.email}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-5 w-5 animate-bounce text-ink-muted/60" />
      </motion.div>
    </section>
  );
}
