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
      },
      include: {
        campers: true 
      }
    });

    if (!user) {
      throw fail(500, { message: "Unable to create camper" });
    }

    return { user }
  },
  deleteCamper: async ({ locals, request }) => {
    const session = await locals.auth.validate();
    if (!session) {
      throw error(401, "Unauthorized");
    }

    const form_data = await request.formData();
    const camper_id = form_data.get("camper_id");

    const user = await db.user.update({
      where: { id: session.user.userId },
      data: {
        campers: {
          deleteMany: [{ id: camper_id }]
        }
      },
      include: {
        campers: true 
      }
    });

    console.log("deleteCamper returns", { user });

    if (!user) {
      throw fail(500, { message: "Unable to delete camper" }); 
    }

    return { user }
  },
}
