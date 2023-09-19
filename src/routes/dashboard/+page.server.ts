import { db } from "$lib/server/prisma";
import { error, fail } from "@sveltejs/kit";

export const actions = {
  createCamper: async ({ locals, request }) => {
    const session = await locals.auth.validate();
    if (!session) { 
      throw error(401, "Unauthorized");
    }

    const form_data = await request.formData();
    const name = form_data.get("name");
    
    const user = await db.user.update({
      where: { id: session.user.userId },
      data: {
        campers: {
          create: [
            { name }
          ]
        }
      }
    });

    if (!user) {
      throw fail(500, { message: "Unable to create camper" });
    }

    return { user }
  }
}
