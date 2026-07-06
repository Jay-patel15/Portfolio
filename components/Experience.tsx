"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { experience } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          index="05"
          title="Experience"
          description="Hands-on QA and data-validation work shipping directly into an AI product."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-signal via-white/10 to-transparent" />

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
                <span className="absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-signal shadow-signal">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>

                <GlowCard>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {job.role}
                    </h3>
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-mono text-xs text-signal">{job.period}</span>
                      {job.experienceLetterUrl && (
                        <a
                          href={job.experienceLetterUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-white/70 transition-colors hover:border-signal/40 hover:text-white"
                        >
                          <FileText size={12} /> View Letter
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-1 text-sm font-medium text-white/50">{job.company}</p>

                  <ul className="mt-5 space-y-3">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-white/60">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
