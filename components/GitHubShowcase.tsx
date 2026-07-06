import { getPinnedOrRecentRepos } from "@/lib/github";
import { profile } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import GithubCalendar from "./GithubCalendar";
import RepoGrid from "./RepoGrid";

export default async function GitHubShowcase() {
  const repos = await getPinnedOrRecentRepos(profile.githubUsername, 24);

  return (
    <section id="github" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          title="Live from GitHub"
          description="Repositories and activity pulled directly from my GitHub profile at request time."
        />

        <GithubCalendar username={profile.githubUsername} />

        {repos.length > 0 ? (
          <RepoGrid repos={repos} pageSize={6} />
        ) : (
          <p className="mt-10 text-sm text-white/40">
            GitHub repositories are temporarily unavailable — check back shortly.
          </p>
        )}
      </div>
    </section>
  );
}
