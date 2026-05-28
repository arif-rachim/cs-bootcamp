import fs from "fs";
import path from "path";

export type LessonKind = "conceptual" | "pyodide" | "linkout";

export type LinkOut = {
  language: string;
  replitUrl: string;
  note: string;
};

export type Lesson = {
  slug: string;
  week: number;
  title: string;
  body: string;
  kind: LessonKind;
  linkOut?: LinkOut;
};

const CURRICULUM_DIR = path.join(process.cwd(), "..", "curriculum");

// Weeks that run pure Python in the browser (Pyodide). Others link out.
const PYODIDE_WEEKS = new Set([1, 2, 3, 4, 6, 7, 8, 9]);

const LINKOUT_CONFIG: Record<number, LinkOut> = {
  5: {
    language: "C",
    replitUrl: "https://replit.com/languages/c",
    note: "Modul ini memakai C. Pakai Replit (template C) atau CS50 Codespace untuk kompilasi & valgrind.",
  },
  10: {
    language: "SQL / SQLite",
    replitUrl: "https://replit.com/languages/sqlite",
    note: "Latihan SQL paling enak di SQLite. Buka Replit atau pakai DB Browser for SQLite.",
  },
  11: {
    language: "Web (HTML/CSS/JS + Flask)",
    replitUrl: "https://replit.com/languages/python3",
    note: "Aplikasi web butuh server. Pakai Replit (template Flask) atau Codespaces.",
  },
  12: {
    language: "Python + NumPy/Pandas",
    replitUrl: "https://replit.com/languages/python3",
    note: "Data science butuh paket berat (numpy/pandas). Disarankan Google Colab atau Replit.",
  },
  13: {
    language: "Python + scikit-learn",
    replitUrl: "https://replit.com/languages/python3",
    note: "Machine learning butuh scikit-learn. Disarankan Google Colab.",
  },
  14: {
    language: "Python + LLM API",
    replitUrl: "https://replit.com/languages/python3",
    note: "Butuh API key LLM (mis. Anthropic). Jalankan di Colab/Replit dengan secret tersimpan aman.",
  },
  15: {
    language: "Bebas",
    replitUrl: "https://replit.com/languages",
    note: "Proyek capstone: pilih environment sesuai topik proyekmu.",
  },
};

function parseWeek(slug: string): number {
  const m = slug.match(/^week-(\d+)/);
  return m ? parseInt(m[1], 10) : 999;
}

function parseTitle(body: string, fallback: string): string {
  const line = body.split("\n").find((l) => l.startsWith("# "));
  return line ? line.replace(/^#\s+/, "").trim() : fallback;
}

function kindForWeek(week: number): LessonKind {
  if (week === 0) return "conceptual";
  if (PYODIDE_WEEKS.has(week)) return "pyodide";
  return "linkout";
}

let cache: Lesson[] | null = null;

export function getLessons(): Lesson[] {
  if (cache) return cache;
  const files = fs
    .readdirSync(CURRICULUM_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort();

  const lessons: Lesson[] = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const body = fs.readFileSync(path.join(CURRICULUM_DIR, file), "utf8");
    const week = parseWeek(slug);
    const kind = kindForWeek(week);
    return {
      slug,
      week,
      title: parseTitle(body, slug),
      body,
      kind,
      linkOut: kind === "linkout" ? LINKOUT_CONFIG[week] : undefined,
    };
  });

  lessons.sort((a, b) => a.week - b.week);
  cache = lessons;
  return lessons;
}

export function getLesson(slug: string): Lesson | undefined {
  return getLessons().find((l) => l.slug === slug);
}
