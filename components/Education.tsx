"use client";

import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck } from "lucide-react";
import { education, certifications } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";

export default function Education() {
  return (
    <section id="education" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" title="Education & Certifications" />

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <GlowCard className="h-full">
              <h3 className="flex items-center gap-2 font-display text-base font-semibold text-white">
                <GraduationCap size={18} className="text-signal" /> Education
              </h3>
              <div className="mt-5 space-y-6">
                {education.map((ed) => (
                  <div key={ed.id}>
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="font-medium text-white">{ed.degree}</p>
                      <span className="shrink-0 font-mono text-xs text-white/40">
                        {ed.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-white/50">{ed.institution}</p>
                    <p className="mt-1 text-xs font-medium text-signal">{ed.score}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlowCard className="h-full">
              <h3 className="flex items-center gap-2 font-display text-base font-semibold text-white">
                <BadgeCheck size={18} className="text-signal" /> Certifications
              </h3>
              <ul className="mt-5 space-y-4">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-3 text-sm text-white/60">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {cert}
                  </li>
                ))}
              </ul>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
