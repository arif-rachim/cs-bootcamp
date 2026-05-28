"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LessonComplete({
  slug,
  loggedIn,
  initialCompleted,
}: {
  slug: string;
  loggedIn: boolean;
  initialCompleted: boolean;
}) {
  const router = useRouter();
  const [completed, setCompleted] = useState(initialCompleted);
  const [busy, setBusy] = useState(false);

  if (!loggedIn) {
    return (
      <p className="text-sm opacity-70">
        <Link href="/login" className="underline">
          Login
        </Link>{" "}
        untuk menandai modul selesai dan menyimpan progres.
      </p>
    );
  }

  async function toggle() {
    setBusy(true);
    const next = !completed;
    const res = await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, completed: next }),
    });
    setBusy(false);
    if (res.ok) {
      setCompleted(next);
      router.refresh();
    }
  }

  return (
    <button
      onClick={toggle}
      disabled={busy}
      className={`rounded-md px-4 py-2 text-sm font-medium disabled:opacity-50 ${
        completed
          ? "border border-green-600 text-green-600 dark:text-green-400"
          : "bg-foreground text-background"
      }`}
    >
      {completed ? "✓ Selesai (klik untuk batal)" : "Tandai modul selesai"}
    </button>
  );
}
