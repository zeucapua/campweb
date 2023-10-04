import { db } from "$lib/server/prisma";
import { redirect } from "@sveltejs/kit";

export async function load({ locals, url }) {
  const id = url.searchParams.get("id");

  if (!id) {
    throw redirect(302, "/dashboard");
  }

  const activity = await db.activity.findUnique({
    where: { id },
  });

  if (!activity) {
    throw redirect(302, "/dashboard");
  }

  return { activity }
}
