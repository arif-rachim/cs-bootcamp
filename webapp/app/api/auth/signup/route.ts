import { prisma } from "@/lib/prisma";
import { hashPassword, setSessionCookie } from "@/lib/auth";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name?.trim() || !email?.trim() || !password) {
    return Response.json({ error: "Semua field wajib diisi." }, { status: 400 });
  }
  if (password.length < 6) {
    return Response.json(
      { error: "Password minimal 6 karakter." },
      { status: 400 },
    );
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const existing = await prisma.user.findUnique({
    where: { email: normalizedEmail },
  });
  if (existing) {
    return Response.json({ error: "Email sudah terdaftar." }, { status: 409 });
  }

  const user = await prisma.user.create({
    data: {
      name: String(name).trim(),
      email: normalizedEmail,
      password: await hashPassword(password),
    },
  });

  await setSessionCookie(user.id);
  return Response.json({ ok: true });
}
