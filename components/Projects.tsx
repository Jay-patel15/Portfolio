"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";

export default function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          title="Featured Projects"
          description="Data engineering pipelines, custom regex parsers, and machine learning models."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
            >
              <Card className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl font-semibold text-ink">
                      {project.title}
                    </h3>
                    <div className="shrink-0 text-right">
                      <div className="font-serif text-2xl font-semibold text-accent">
                        {project.metric.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-wide text-ink-muted">
                        {project.metric.label}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-ink-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {project.githubUrl && (
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-accent transition-colors hover:text-ink"
                    >
                      <Github size={15} />
                      <span>View Code on GitHub →</span>
                    </a>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
