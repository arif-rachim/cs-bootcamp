import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson } from "@/lib/content";
import { getExercises } from "@/lib/exercises";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import MarkdownView from "@/components/MarkdownView";
import PythonRunner from "@/components/PythonRunner";
import LinkOutCard from "@/components/LinkOutCard";
import LessonComplete from "@/components/LessonComplete";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const user = await getCurrentUser();
  const exercises = getExercises(slug);

  let completed = false;
  if (user) {
    const row = await prisma.progress.findUnique({
      where: { userId_slug: { userId: user.id, slug } },
      select: { completed: true },
    });
    completed = row?.completed ?? false;
  }

  return (
    <article>
      <Link href="/" className="text-sm underline opacity-70">
        ← Semua modul
      </Link>

      <MarkdownView>{lesson.body}</MarkdownView>

      <section className="mt-10 border-t border-black/10 dark:border-white/15 pt-8">
        <h2 className="text-xl font-bold mb-4">Latihan</h2>

        {lesson.kind === "pyodide" && exercises.length > 0 && (
          <div className="space-y-6">
            {exercises.map((ex) => (
              <PythonRunner
                key={ex.id}
                slug={slug}
                loggedIn={Boolean(user)}
                exercise={ex}
              />
            ))}
          </div>
        )}

        {lesson.kind === "pyodide" && exercises.length === 0 && (
          <div>
            <p className="text-sm opacity-80 mb-3">
              Belum ada soal otomatis untuk modul ini — pakai editor di bawah
              untuk bereksperimen dengan Python.
            </p>
            <PythonRunner slug={slug} loggedIn={Boolean(user)} />
          </div>
        )}

        {lesson.kind === "linkout" && lesson.linkOut && (
          <LinkOutCard linkOut={lesson.linkOut} />
        )}

        {lesson.kind === "conceptual" && (
          <p className="text-sm opacity-80">
            Modul ini fokus pada konsep — tidak ada coding. Baca materi, kerjakan
            problem set di teks, lalu tandai selesai.
          </p>
        )}
      </section>

      <div className="mt-8">
        <LessonComplete
          slug={slug}
          loggedIn={Boolean(user)}
          initialCompleted={completed}
        />
      </div>
    </article>
  );
}
