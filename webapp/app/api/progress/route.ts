import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return Response.json({ error: "Belum login." }, { status: 401 });
  }

  const { slug, completed } = await req.json();
  if (!slug) {
    return Response.json({ error: "slug wajib ada." }, { status: 400 });
  }

  await prisma.progress.upsert({
    where: { userId_slug: { userId: user.id, slug } },
    update: { completed: !!completed },
    create: { userId: user.id, slug, completed: !!completed },
  });

  return Response.json({ ok: true });
}
