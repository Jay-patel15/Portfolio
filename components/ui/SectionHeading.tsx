"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14"
    >
      <div className="flex items-baseline gap-3 text-sm font-mono text-signal">
        <span>{index}</span>
        <span className="h-px w-8 bg-signal/50" />
      </div>
      <h2 className="mt-3 text-4xl font-display font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-base text-white/50">{description}</p>
      )}
    </motion.div>
  );
}
