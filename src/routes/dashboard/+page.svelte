<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageData, ActionData } from '../$types';

  export let data : PageData;
  export let form : ActionData;

  $: user = form ? form.user : data.user;
</script>

<svelte:head>
  <title>Dashboard | SPLAT</title> 
</svelte:head>

<main class="flex flex-col justify-center h-full m-8 p-8 gap-8 bg-neutral-500/95 rounded-lg drop-shadow-lg">
  <h2 class="text-3xl font-bold text-white">Dashboard</h2>

  <section class="flex flex-col gap-8 p-8 bg-neutral-50 rounded-lg drop-shadow-md">
    <h3 class="text-2xl font-bold">Campers</h3>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {#if user.campers.length > 0}
        {#each user.campers as camper}
          <div class="flex flex-col gap-4 w-full h-full bg-neutral-300 p-4 rounded-lg">
            {camper.name}
            <form method="POST" action="/dashboard?/deleteCamper">
              <input name="camper_id" type="hidden" value={camper.id} /> 
              <button class="self-end px-4 py-2 rounded-md bg-neutral-500 text-white">Delete</button>
            </form>
          </div>
        {/each}
      {/if}
      <form method="POST" action="/dashboard?/createCamper" class="flex flex-col gap-4 w-full h-full bg-neutral-300 p-4 rounded-lg" use:enhance>
        <p class="text-xl font-bold">Create a new Camper</p>
        <input name="name" type="text" placeholder="Name"  class="px-4 py-2 rounded-md" />
        <button class="self-end px-4 py-2 rounded-md bg-neutral-500 text-white">Create</button>
      </form>
    </div>
  </section>

  <section class="flex flex-col p-8 bg-neutral-50 rounded-lg drop-shadow-md">
    <h3 class="text-2xl font-bold">Activities</h3>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {#if user.activities.length > 0}
        {#each user.activities as activity}
          <div class="flex flex-col gap-4 w-full h-full bg-neutral-300 p-4 rounded-lg">
            {activity.title}
            <a href={`/dashboard/activity?id=${activity.id}`}>
              Edit
            </a>
            <form method="POST" action="/dashboard?/deleteActivity">
              <input name="activity_id" type="hidden" value={activity.id} /> 
              <button class="self-end px-4 py-2 rounded-md bg-neutral-500 text-white">Delete</button>
            </form>
          </div>
        {/each}
      {/if}
      <form method="POST" action="/dashboard?/createActivity" class="flex flex-col gap-4 w-full h-full bg-neutral-300 p-4 rounded-lg">
        <p class="text-xl font-bold">Create a new Activity</p>
        <input name="title" type="text" placeholder="Title"  class="px-4 py-2 rounded-md" />
        <button class="self-end px-4 py-2 rounded-md bg-neutral-500 text-white">Create</button>
      </form>
    </div>
  </section>
</main>
