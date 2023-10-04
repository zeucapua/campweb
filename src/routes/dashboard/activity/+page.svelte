<script lang="ts">
  export let data;

  const activity = data.activity;
</script>

<main class="flex lg:flex-row w-full h-full min-w-screen">
  <section class="grow p-8 rounded-md bg-yellow-400 lg:m-8">
    <form method="POST" action="/dashboard/activity?/updateActivity">
      <label class="flex flex-col w-fit">
        Title
        <input name="title" type="text" value={activity.title} class="px-4 py-2 rounded-md" />
      </label>
      <label class="flex flex-col w-fit">
        Description
        <textarea
          name="description" value={activity.description} 
          class="flex-shrink h-full min-h-12 leading-loose px-4 py-2 rounded-md" 
        />
      </label>
    </form>
  </section>
</main>
