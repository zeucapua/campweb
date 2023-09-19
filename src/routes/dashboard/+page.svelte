<script lang="ts">
  import { enhance } from '$app/forms';
  import type { PageData } from '../$types';

  export let data : PageData;
  export let form : FormData;

  $: user = form ? form.user : data.user;
</script>

<svelte:head>
  <title>Dashboard | SPLAT</title> 
</svelte:head>

<main class="flex flex-col justify-center h-full m-8 p-8 gap-8 bg-gray-500 rounded-lg">
  <h2 class="text-3xl font-bold text-white">Dashboard</h2>

  <section class="flex flex-col gap-8 p-8 bg-gray-50 rounded-lg">
    <h3 class="text-2xl font-bold">Campers</h3>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {#if user.campers.length > 0}
        {#each user.campers as camper}
          <div class="flex flex-col gap-4 w-full h-full bg-gray-300 p-4 rounded-lg">
            {camper.name}
          </div>
        {/each}
      {/if}
      <form method="POST" action="/dashboard?/createCamper" class="flex flex-col gap-4 w-full h-full bg-gray-300 p-4 rounded-lg" use:enhance>
        <p class="text-xl font-bold">Create a new Camper</p>
        <input name="name" type="text" placeholder="Name"  class="px-4 py-2 rounded-md" />
        <button class="self-end px-4 py-2 rounded-md bg-gray-500 text-white">Create</button>
      </form>
    </div>
  </section>

  <section class="flex flex-col p-8 bg-gray-50 rounded-lg">
    <h3 class="text-2xl font-bold">Activities</h3>
  </section>
</main>
