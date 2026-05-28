"use client";

import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import type { Exercise } from "@/lib/exercises";

const PYODIDE_VERSION = "v0.26.4";
const CDN = `https://cdn.jsdelivr.net/pyodide/${PYODIDE_VERSION}/full/`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let pyodidePromise: Promise<any> | null = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function loadPyodide(): Promise<any> {
  if (pyodidePromise) return pyodidePromise;
  pyodidePromise = new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    const start = () =>
      w.loadPyodide({ indexURL: CDN }).then(resolve).catch(reject);
    if (w.loadPyodide) return start();
    const script = document.createElement("script");
    script.src = `${CDN}pyodide.js`;
    script.onload = start;
    script.onerror = () =>
      reject(new Error("Gagal memuat Pyodide dari CDN. Cek koneksi internet."));
    document.head.appendChild(script);
  });
  return pyodidePromise;
}

type TestResult = { name: string; passed: boolean; error: string | null };

function buildHarness(userCode: string, tests: Exercise["tests"]): string {
  let s = userCode + "\n\nimport json as __json\n__results = []\n";
  tests.forEach((t, i) => {
    const indented = t.body
      .split("\n")
      .map((l) => "    " + l)
      .join("\n");
    s += `def __t${i}():\n${indented}\n`;
    s += `try:\n    __t${i}()\n    __results.append({"name": ${JSON.stringify(
      t.name,
    )}, "passed": True, "error": None})\n`;
    s += `except Exception as __e:\n    __results.append({"name": ${JSON.stringify(
      t.name,
    )}, "passed": False, "error": repr(__e)})\n`;
  });
  s += `print("__RESULTS__" + __json.dumps(__results))\n`;
  return s;
}

export default function PythonRunner({
  slug,
  loggedIn,
  exercise,
}: {
  slug: string;
  loggedIn: boolean;
  exercise?: Exercise;
}) {
  const [code, setCode] = useState(exercise?.starter ?? "# Tulis kode Python di sini\nprint('Halo, Tazkia!')\n");
  const [output, setOutput] = useState("");
  const [results, setResults] = useState<TestResult[] | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "running">("idle");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function getRuntime(): Promise<any> {
    setStatus("loading");
    const py = await loadPyodide();
    setStatus("running");
    return py;
  }

  async function run() {
    setResults(null);
    setOutput("");
    try {
      const py = await getRuntime();
      let buf = "";
      py.setStdout({ batched: (s: string) => (buf += s + "\n") });
      py.setStderr({ batched: (s: string) => (buf += s + "\n") });
      await py.runPythonAsync(code);
      setOutput(buf || "(tidak ada output)");
    } catch (e) {
      setOutput(String(e));
    } finally {
      setStatus("idle");
    }
  }

  async function runTests() {
    if (!exercise) return;
    setResults(null);
    setOutput("");
    try {
      const py = await getRuntime();
      let buf = "";
      py.setStdout({ batched: (s: string) => (buf += s + "\n") });
      py.setStderr({ batched: (s: string) => (buf += s + "\n") });
      await py.runPythonAsync(buildHarness(code, exercise.tests));

      const marker = buf.indexOf("__RESULTS__");
      let parsed: TestResult[] = [];
      if (marker >= 0) {
        const rest = buf.slice(marker + "__RESULTS__".length);
        const end = rest.indexOf("\n");
        const json = end >= 0 ? rest.slice(0, end) : rest;
        parsed = JSON.parse(json);
        setOutput(buf.slice(0, marker).trim());
      } else {
        setOutput(buf);
      }
      setResults(parsed);

      const passedCount = parsed.filter((r) => r.passed).length;
      const total = parsed.length;
      if (loggedIn && total > 0) {
        void fetch("/api/submissions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            slug,
            exerciseId: exercise.id,
            code,
            passed: passedCount === total,
            passedCount,
            total,
          }),
        });
      }
    } catch (e) {
      setOutput(String(e));
      setResults([
        { name: "Kode error sebelum diuji", passed: false, error: String(e) },
      ]);
    } finally {
      setStatus("idle");
    }
  }

  const busy = status !== "idle";
  const allPassed =
    results !== null && results.length > 0 && results.every((r) => r.passed);

  return (
    <div className="rounded-lg border border-black/10 dark:border-white/15 overflow-hidden">
      {exercise && (
        <div className="bg-black/[.03] dark:bg-white/[.04] px-4 py-3 border-b border-black/10 dark:border-white/15">
          <div className="font-semibold">{exercise.title}</div>
          <p className="text-sm opacity-80 mt-1">{exercise.prompt}</p>
        </div>
      )}
      <CodeMirror
        value={code}
        height="220px"
        extensions={[python()]}
        onChange={(v) => setCode(v)}
        theme="dark"
      />
      <div className="flex flex-wrap items-center gap-2 p-3 bg-black/[.03] dark:bg-white/[.04] border-t border-black/10 dark:border-white/15">
        <button
          onClick={run}
          disabled={busy}
          className="rounded-md bg-foreground text-background px-4 py-1.5 text-sm font-medium disabled:opacity-50"
        >
          {status === "loading" ? "Memuat Python…" : status === "running" ? "Menjalankan…" : "Run"}
        </button>
        {exercise && (
          <button
            onClick={runTests}
            disabled={busy}
            className="rounded-md border border-foreground px-4 py-1.5 text-sm font-medium disabled:opacity-50"
          >
            Uji Jawaban
          </button>
        )}
        {results !== null && (
          <span
            className={`text-sm font-medium ${allPassed ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}`}
          >
            {results.filter((r) => r.passed).length}/{results.length} tes lulus
            {allPassed ? " — mantap!" : ""}
          </span>
        )}
        {exercise && !loggedIn && (
          <span className="text-xs opacity-60">(login untuk menyimpan progres)</span>
        )}
      </div>

      {results && (
        <ul className="divide-y divide-black/10 dark:divide-white/10 text-sm">
          {results.map((r, i) => (
            <li key={i} className="px-4 py-2 flex gap-2">
              <span>{r.passed ? "✅" : "❌"}</span>
              <span className="flex-1">
                {r.name}
                {r.error && (
                  <span className="block text-xs opacity-70 font-mono mt-0.5">
                    {r.error}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}

      {output && (
        <pre className="px-4 py-3 text-sm font-mono whitespace-pre-wrap bg-black/[.02] dark:bg-white/[.02] border-t border-black/10 dark:border-white/15 overflow-x-auto">
          {output}
        </pre>
      )}
    </div>
  );
}
