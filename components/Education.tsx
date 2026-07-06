"use client";

import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, ExternalLink, FileText } from "lucide-react";
import { education, certifications } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";

export default function Education() {
  return (
    <section id="education" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="06" title="Education & Certifications" />

        <div className="relative mb-12">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-signal via-white/10 to-transparent" />

          <div className="space-y-10">
            {education.map((ed, i) => (
              <motion.div
                key={ed.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-signal shadow-signal">
                  <GraduationCap size={9} className="text-white" />
                </span>

                <GlowCard>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {ed.degree}
                    </h3>
                    <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
                      <span className="font-mono text-xs text-signal">{ed.period}</span>
                      {ed.marksheetUrl && (
                        <a
                          href={ed.marksheetUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-white/70 transition-colors hover:border-signal/40 hover:text-white"
                        >
                          <FileText size={12} /> View Result
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-white/50">{ed.institution}</p>
                  <p className="mt-1 text-xs font-medium text-signal">{ed.score}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <GlowCard>
            <h3 className="flex items-center gap-2 font-display text-base font-semibold text-white">
              <BadgeCheck size={18} className="text-signal" /> Certifications
            </h3>
            <ul className="mt-5 space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-white"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    <span className="underline decoration-white/20 underline-offset-4 group-hover:decoration-signal">
                      {cert.name}
                    </span>
                    <ExternalLink
                      size={12}
                      className="mt-0.5 shrink-0 text-white/30 group-hover:text-signal"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
