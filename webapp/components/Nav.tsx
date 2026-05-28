import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import LogoutButton from "./LogoutButton";

export default async function Nav() {
  const user = await getCurrentUser();

  return (
    <header className="border-b border-black/10 dark:border-white/15">
      <nav className="mx-auto max-w-4xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">
          CS Bootcamp
        </Link>
        <div className="flex items-center gap-4 text-sm">
          {user ? (
            <>
              <Link href="/dashboard" className="opacity-80 hover:opacity-100">
                Dashboard
              </Link>
              <span className="opacity-60 hidden sm:inline">{user.name}</span>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login" className="opacity-80 hover:opacity-100">
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-md bg-foreground text-background px-3 py-1.5 font-medium"
              >
                Daftar
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
