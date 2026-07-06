"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { profile } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import MagneticButton from "./ui/MagneticButton";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email me directly.");
      return;
    }

    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          index="06"
          title="Let's talk data"
          description="Have a role, a dataset, or a problem worth analyzing? Send a message."
        />

        <form
          onSubmit={handleSubmit}
          className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl shadow-glass"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="text-xs font-medium text-white/50">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-void-900/60 px-4 py-3 text-sm text-white shadow-neu-dark-inset outline-none transition-colors focus:border-signal/50"
                placeholder="Your name"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="text-xs font-medium text-white/50">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-void-900/60 px-4 py-3 text-sm text-white shadow-neu-dark-inset outline-none transition-colors focus:border-signal/50"
                placeholder="you@email.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-xs font-medium text-white/50">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-void-900/60 px-4 py-3 text-sm text-white shadow-neu-dark-inset outline-none transition-colors focus:border-signal/50"
                placeholder="Tell me about the role or project..."
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <MagneticButton type="submit" disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </MagneticButton>

            <a
              href={`mailto:${profile.email}`}
              className="text-xs font-medium text-white/40 hover:text-white"
            >
              or email directly
            </a>
          </div>

          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                role="status"
                className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
              >
                <CheckCircle2 size={16} /> Message sent — I'll get back to you soon.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                role="alert"
                className="mt-5 flex items-center gap-2 rounded-xl border border-signal/30 bg-signal/10 px-4 py-3 text-sm text-signal-glow"
              >
                <AlertCircle size={16} /> {errorMsg}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}
