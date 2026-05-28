import Link from "next/link";
import { redirect } from "next/navigation";
import { getLessons } from "@/lib/content";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const lessons = getLessons();

  const [progressRows, submissions] = await Promise.all([
    prisma.progress.findMany({
      where: { userId: user.id, completed: true },
      select: { slug: true },
    }),
    prisma.submission.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const completed = new Set(progressRows.map((r) => r.slug));
  const pct = Math.round((completed.size / lessons.length) * 100);

  // Best attempt per exercise.
  type Best = { slug: string; exerciseId: string; passedCount: number; total: number; passed: boolean };
  const best = new Map<string, Best>();
  for (const s of submissions) {
    const key = `${s.slug}:${s.exerciseId}`;
    const cur = best.get(key);
    if (!cur || s.passedCount > cur.passedCount) {
      best.set(key, {
        slug: s.slug,
        exerciseId: s.exerciseId,
        passedCount: s.passedCount,
        total: s.total,
        passed: s.passed,
      });
    }
  }
  const attempts = [...best.values()];

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="opacity-80 mt-1">Halo, {user.name}.</p>

      <section className="mt-6 rounded-lg border border-black/10 dark:border-white/15 p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Progres modul</span>
          <span className="opacity-70">
            {completed.size} / {lessons.length} selesai ({pct}%)
          </span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-black/10 dark:bg-white/15 overflow-hidden">
          <div
            className="h-full bg-foreground"
            style={{ width: `${pct}%` }}
          />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide opacity-60 mb-3">
          Latihan yang dinilai
        </h2>
        {attempts.length === 0 ? (
          <p className="text-sm opacity-70">
            Belum ada latihan yang diuji. Buka modul Python dan klik “Uji
            Jawaban”.
          </p>
        ) : (
          <ul className="space-y-2">
            {attempts.map((a) => (
              <li
                key={`${a.slug}:${a.exerciseId}`}
                className="flex items-center gap-3 rounded-lg border border-black/10 dark:border-white/15 px-4 py-2 text-sm"
              >
                <span>{a.passed ? "✅" : "⚠️"}</span>
                <Link href={`/lessons/${a.slug}`} className="flex-1 underline">
                  {a.slug} — {a.exerciseId}
                </Link>
                <span className="opacity-70">
                  {a.passedCount}/{a.total} tes
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide opacity-60 mb-3">
          Modul selesai
        </h2>
        <ul className="space-y-1 text-sm">
          {lessons.map((l) => (
            <li key={l.slug} className="flex items-center gap-2">
              <span className={completed.has(l.slug) ? "text-green-600 dark:text-green-400" : "opacity-30"}>
                {completed.has(l.slug) ? "✓" : "○"}
              </span>
              <Link href={`/lessons/${l.slug}`} className="hover:underline">
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
