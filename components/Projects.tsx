"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          title="Featured Projects"
          description="Applied machine learning and analytics projects, from raw data to measurable outcomes."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <GlowCard className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="shrink-0 text-right">
                    <div className="font-display text-3xl font-bold text-signal">
                      {project.metric.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-wide text-white/40">
                      {project.metric.label}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/55">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-white/60">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/[0.08] px-3 py-1 text-xs font-medium text-white/50"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
