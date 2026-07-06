"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Github, GitFork, Star } from "lucide-react";
import type { GithubRepo } from "@/lib/github";
import GlowCard from "./ui/GlowCard";

export default function RepoGrid({
  repos,
  pageSize = 6,
}: {
  repos: GithubRepo[];
  pageSize?: number;
}) {
  const pageCount = Math.max(1, Math.ceil(repos.length / pageSize));
  const [page, setPage] = useState(0);
  const visibleRepos = repos.slice(page * pageSize, page * pageSize + pageSize);

  const goPrev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const goNext = () => setPage((p) => (p + 1) % pageCount);

  return (
    <>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleRepos.map((repo) => (
          <GlowCard key={repo.id} as="article" className="flex h-full flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="truncate font-display text-lg font-semibold text-white">
                  {repo.name}
                </h3>
                <Github className="h-4 w-4 shrink-0 text-white/30" />
              </div>
              <p className="mt-2 line-clamp-3 text-sm text-white/50">
                {repo.description || "No description provided."}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between text-xs text-white/40">
              <span className="inline-flex items-center gap-3">
                {repo.language && (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-signal" />
                    {repo.language}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <Star size={12} /> {repo.stargazers_count}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork size={12} /> {repo.forks_count}
                </span>
              </span>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-white/70 hover:text-signal"
              >
                View →
              </a>
            </div>
          </GlowCard>
        ))}
      </div>

      {pageCount > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous repos"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:border-signal/40 hover:text-white"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Go to repo set ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === page ? "w-6 bg-signal" : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next repos"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:border-signal/40 hover:text-white"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </>
  );
}
