import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return Response.json({ error: "Belum login." }, { status: 401 });
  }

  const { slug, exerciseId, code, passed, passedCount, total } =
    await req.json();
  if (!slug || !exerciseId) {
    return Response.json(
      { error: "slug & exerciseId wajib ada." },
      { status: 400 },
    );
  }

  await prisma.submission.create({
    data: {
      userId: user.id,
      slug,
      exerciseId,
      code: String(code ?? "").slice(0, 10000),
      passed: !!passed,
      passedCount: Number(passedCount) || 0,
      total: Number(total) || 0,
    },
  });

  return Response.json({ ok: true });
}
