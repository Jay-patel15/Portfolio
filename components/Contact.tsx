"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

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

    try {
      const res = await fetch("https://formsubmit.co/ajax/f00e0d25915fc1212cad3971657db607", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: `New portfolio message from ${form.name.trim()}`,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          index="07"
          title="Let's talk data"
          description="Have a role, a dataset, or a problem worth analyzing? Send a message."
        />

        <form
          onSubmit={handleSubmit}
          className="relative rounded-3xl border border-line bg-surface p-8 shadow-card"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="text-xs font-medium text-ink-muted">
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
                className="mt-2 w-full rounded-xl border border-line-strong bg-surface-muted px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="text-xs font-medium text-ink-muted">
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
                className="mt-2 w-full rounded-xl border border-line-strong bg-surface-muted px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                placeholder="you@email.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-xs font-medium text-ink-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full resize-none rounded-xl border border-line-strong bg-surface-muted px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent"
                placeholder="Tell me about the role or project..."
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>

            <a
              href={`mailto:${profile.email}`}
              className="text-xs font-medium text-ink-muted hover:text-ink"
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
                className="mt-5 flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 px-4 py-3 text-sm text-success"
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
                className="mt-5 flex items-center gap-2 rounded-xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger"
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
