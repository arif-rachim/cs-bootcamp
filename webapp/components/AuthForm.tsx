"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setBusy(true);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const endpoint = mode === "signup" ? "/api/auth/signup" : "/api/auth/login";

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setBusy(false);
    if (res.ok) {
      router.push("/dashboard");
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Terjadi kesalahan.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {mode === "signup" && (
        <div>
          <label className="block text-sm font-medium mb-1">Nama</label>
          <input
            name="name"
            required
            className="w-full rounded-md border border-black/15 dark:border-white/20 bg-transparent px-3 py-2"
          />
        </div>
      )}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-black/15 dark:border-white/20 bg-transparent px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          name="password"
          type="password"
          required
          minLength={6}
          className="w-full rounded-md border border-black/15 dark:border-white/20 bg-transparent px-3 py-2"
        />
      </div>

      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-md bg-foreground text-background px-4 py-2 font-medium disabled:opacity-50"
      >
        {busy ? "Memproses…" : mode === "signup" ? "Daftar" : "Login"}
      </button>

      <p className="text-sm opacity-70 text-center">
        {mode === "signup" ? (
          <>
            Sudah punya akun?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </>
        ) : (
          <>
            Belum punya akun?{" "}
            <Link href="/signup" className="underline">
              Daftar
            </Link>
          </>
        )}
      </p>
    </form>
  );
}
