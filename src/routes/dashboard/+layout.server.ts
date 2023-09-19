import { db } from "$lib/server/prisma";
import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {
  const session = await locals.auth.validate();
  if (!session) { 
    throw redirect(302, "/");
  }

  const user = await db.user.findUnique({
    where: { id: session.user.userId },
    include: {
      campers: true
    }
  });

  return { user }

}
