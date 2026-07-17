import Card from "./ui/Card";

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
  0: "bg-line",
  1: "bg-accent/30",
  2: "bg-accent/55",
  3: "bg-accent/85",
  4: "bg-accent",
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
  const total = days.reduce((sum, d) => sum + d.count, 0);

  return (
    <Card>
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs text-ink-muted">
          {total.toLocaleString()} contributions in the last year
        </p>
      </div>
      <div className="mt-4 overflow-x-auto pb-1">
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: `repeat(${weeks.length}, minmax(10px, 1fr))`,
            minWidth: `${weeks.length * 11}px`,
          }}
        >
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((day) => (
                <div
                  key={day.date}
                  title={`${day.count} contributions on ${day.date}`}
                  className={`aspect-square w-full rounded-[3px] ${levelColor[day.level]}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
