import { db } from "$lib/server/prisma";
import { error, fail, redirect } from "@sveltejs/kit";

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
        campers: true,
        activities: true,
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
        campers: true,
        activities: true,
      }
    });

    if (!user) {
      throw fail(500, { message: "Unable to delete camper" }); 
    }

    return { user }
  },
  

  createActivity: async ({ locals, request }) => {
    const session = await locals.auth.validate();
    if (!session) {
      throw error(401, "Unauthorized");
    }

    const form_data = await request.formData();
    const title = form_data.get("title");

    const user = await db.user.update({
      where: { id: session.user.userId },
      data: {
        activities: {
          create: [
            { title, description: "" }
          ]
        }
      },
      include: {
        campers: true,
        activities: true,
      }
    });

    if (!user) {
      throw fail(500, { message: "Unable to create activity" });
    }

    return { user };
  },
  deleteActivity: async ({ locals, request }) => {
    const session = await locals.auth.validate();
    if (!session) {
      throw error(401, "Unauthorized");
    }

    const form_data = await request.formData();
    const activity_id = form_data.get("activity_id");

    const user = await db.user.update({
      where: { id: session.user.userId },
      data: {
        activities: {
          deleteMany: [{ id: activity_id }]
        }
      },
      include: {
        campers: true,
        activities: true,
      }
    });

    if (!user) {
      throw fail(500, { message: "Unable to delete activity" }); 
    }

    return { user }
  },


}
