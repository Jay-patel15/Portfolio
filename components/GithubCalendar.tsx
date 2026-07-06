import GlowCard from "./ui/GlowCard";

type ContributionDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

async function getContributions(username: string): Promise<ContributionDay[]> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.contributions ?? []) as ContributionDay[];
  } catch {
    return [];
  }
}

const levelColor: Record<number, string> = {
  0: "bg-white/[0.04]",
  1: "bg-signal/20",
  2: "bg-signal/45",
  3: "bg-signal/70",
  4: "bg-signal",
};

export default async function GithubCalendar({ username }: { username: string }) {
  const days = await getContributions(username);

  if (days.length === 0) {
    return null;
  }

  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  const recentWeeks = weeks.slice(-26);
  const total = days.reduce((sum, d) => sum + d.count, 0);

  return (
    <GlowCard className="overflow-x-auto">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs text-white/40">
          {total.toLocaleString()} contributions in the last year
        </p>
      </div>
      <div className="mt-4 flex gap-1">
        {recentWeeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day) => (
              <div
                key={day.date}
                title={`${day.count} contributions on ${day.date}`}
                className={`h-2.5 w-2.5 rounded-[3px] ${levelColor[day.level]}`}
              />
            ))}
          </div>
        ))}
      </div>
    </GlowCard>
  );
}
