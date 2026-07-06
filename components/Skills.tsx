"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          title="Skills & Toolkit"
          description="The languages, frameworks, and tools I use to turn raw data into decisions."
        />

        <div className="grid gap-5 md:grid-cols-4">
          {skills.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={group.span}
            >
              <GlowCard className="h-full">
                <h3 className="font-display text-base font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-void-900/60 px-3 py-1.5 text-xs font-medium text-white/60 shadow-neu-dark-inset transition-colors hover:border-signal/40 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
