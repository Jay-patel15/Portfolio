import { Github, GitFork, Star } from "lucide-react";
import { getPinnedOrRecentRepos } from "@/lib/github";
import { profile } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import GlowCard from "./ui/GlowCard";
import GithubCalendar from "./GithubCalendar";

export default async function GitHubShowcase() {
  const repos = await getPinnedOrRecentRepos(profile.githubUsername, 6);

  return (
    <section id="github" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          title="Live from GitHub"
          description="Repositories and activity pulled directly from my GitHub profile at request time."
        />

        <GithubCalendar username={profile.githubUsername} />

        {repos.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
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
        ) : (
          <p className="mt-10 text-sm text-white/40">
            GitHub repositories are temporarily unavailable — check back shortly.
          </p>
        )}
      </div>
    </section>
  );
}
