"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { experience } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="05"
          title="Experience"
          description="Hands-on software test automation and data-validation experience shipping directly into production AI pipelines."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-line to-transparent" />

          <div className="space-y-14">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-bg" />
                </span>

                <Card>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="font-serif text-xl font-semibold text-ink">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
                      <span className="font-mono text-xs text-accent">{job.period}</span>
                      {job.experienceLetterUrl && (
                        <a
                          href={job.experienceLetterUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-muted px-3 py-1 text-[11px] font-medium text-ink-muted transition-colors hover:border-accent/40 hover:text-ink"
                        >
                          <FileText size={12} /> View Letter
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-1 text-sm font-medium text-ink-muted">{job.company}</p>

                  <ul className="mt-5 space-y-3">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-ink-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
