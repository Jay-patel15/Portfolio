"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";

export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="01" title="About" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlowCard>
            <div className="space-y-4">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-white/60">
                  {p}
                </p>
              ))}
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
