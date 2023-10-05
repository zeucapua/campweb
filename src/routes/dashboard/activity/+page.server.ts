import { db } from "$lib/server/prisma";
import { fail, redirect } from "@sveltejs/kit";

export async function load({  url }) {
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


export const actions = {
  updateActivity: async ({ request }) => {
    const form_data = await request.formData();
    const activity_id = form_data.get("activity_id");
    const title = form_data.get("title");
    const description = form_data.get("description");

    const activity = await db.activity.update({
      where: { id: activity_id },
      data: {
        title,
        description
      }
    });

    console.log({ activity });

    if (!activity) {
      console.log("fail");
      return fail(500, { message: "Unable to update activity" });
    }

    return { activity };
  }
}
