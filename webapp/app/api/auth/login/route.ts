import { prisma } from "@/lib/prisma";
import { verifyPassword, setSessionCookie } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email?.trim() || !password) {
    return Response.json(
      { error: "Email dan password wajib diisi." },
      { status: 400 },
    );
  }

  const user = await prisma.user.findUnique({
    where: { email: String(email).trim().toLowerCase() },
  });
  if (!user || !(await verifyPassword(password, user.password))) {
    return Response.json(
      { error: "Email atau password salah." },
      { status: 401 },
    );
  }

  await setSessionCookie(user.id);
  return Response.json({ ok: true });
}
