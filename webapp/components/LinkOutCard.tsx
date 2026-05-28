import type { LinkOut } from "@/lib/content";

export default function LinkOutCard({ linkOut }: { linkOut: LinkOut }) {
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/15 p-5 bg-black/[.03] dark:bg-white/[.04]">
      <div className="text-sm font-semibold uppercase tracking-wide opacity-60">
        Environment Coding
      </div>
      <div className="mt-1 text-lg font-semibold">{linkOut.language}</div>
      <p className="mt-2 text-sm opacity-80">{linkOut.note}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={linkOut.replitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium"
        >
          Buka di Replit ↗
        </a>
        <a
          href="https://github.com/codespaces"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-foreground px-4 py-2 text-sm font-medium"
        >
          Buka GitHub Codespaces ↗
        </a>
      </div>
    </div>
  );
}
