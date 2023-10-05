<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "../../$types.js";

  export let data;
  export let form : ActionData

  const activity = data.activity;

  $: console.log({ form });
</script>

<main class="flex lg:flex-row w-full h-full min-w-screen">
  <section class="grow p-8 rounded-md bg-yellow-400 lg:m-8">
    <form use:enhance method="POST" action="/dashboard/activity?/updateActivity" class="flex flex-col gap-8">
      <label class="flex flex-col">
        Title
        <input name="title" type="text" value={form ? form.activity?.title : activity.title} class="px-4 py-2 rounded-md" />
      </label>
      <label class="flex flex-col">
        Description
        <textarea
          name="description" value={form ? form.activity?.description : activity.description} 
          class="flex-shrink h-full min-h-12 leading-loose px-4 py-2 rounded-md" 
        />
      </label>

      <input name="activity_id" type="hidden" value={activity.id} />
      <button class="px-4 py-2 bg-white w-fit rounded-full">Update</button>
    </form>
  </section>
</main>
