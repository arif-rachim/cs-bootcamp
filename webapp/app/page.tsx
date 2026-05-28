import Link from "next/link";
import { getLessons } from "@/lib/content";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const SECTIONS = [
  { title: "Fondasi", weeks: [0, 1, 2, 3] },
  { title: "Inti Computer Science", weeks: [4, 5, 6, 7, 8] },
  { title: "Aplikasi & Data", weeks: [9, 10, 11] },
  { title: "Menuju AI", weeks: [12, 13, 14] },
  { title: "Capstone", weeks: [15] },
];

function kindBadge(kind: string, language?: string) {
  if (kind === "pyodide") return "Python (live)";
  if (kind === "conceptual") return "Konsep";
  return language ?? "Link-out";
}

export default async function Home() {
  const lessons = getLessons();
  const user = await getCurrentUser();

  let completed = new Set<string>();
  if (user) {
    const rows = await prisma.progress.findMany({
      where: { userId: user.id, completed: true },
      select: { slug: true },
    });
    completed = new Set(rows.map((r) => r.slug));
  }

  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold">Bootcamp Computer Science</h1>
        <p className="mt-2 opacity-80">
          Kurikulum berbasis CS50 Harvard, Python-first, dengan latihan coding
          langsung di browser.{" "}
          {user
            ? `Selamat datang kembali, ${user.name}.`
            : "Daftar untuk menyimpan progres & nilai latihanmu."}
        </p>
      </section>

      {SECTIONS.map((section) => {
        const items = section.weeks
          .map((w) => lessons.find((l) => l.week === w))
          .filter((l): l is NonNullable<typeof l> => Boolean(l));
        if (items.length === 0) return null;
        return (
          <section key={section.title} className="mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide opacity-60 mb-3">
              {section.title}
            </h2>
            <ul className="space-y-2">
              {items.map((lesson) => (
                <li key={lesson.slug}>
                  <Link
                    href={`/lessons/${lesson.slug}`}
                    className="flex items-center gap-3 rounded-lg border border-black/10 dark:border-white/15 px-4 py-3 hover:bg-black/[.03] dark:hover:bg-white/[.05]"
                  >
                    <span className="text-xs font-mono opacity-50 w-14 shrink-0">
                      Minggu {String(lesson.week).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-medium">{lesson.title}</span>
                    <span className="text-xs rounded-full border border-black/15 dark:border-white/20 px-2 py-0.5 opacity-70">
                      {kindBadge(lesson.kind, lesson.linkOut?.language)}
                    </span>
                    {completed.has(lesson.slug) && (
                      <span className="text-green-600 dark:text-green-400">✓</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
