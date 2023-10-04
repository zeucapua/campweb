<script lang="ts">
  import "../app.css";
  import type { LayoutData } from "./$types";

  export let data : LayoutData
  const user = data.user;
</script>

<div class="flex flex-col w-full h-full min-w-screen min-h-screen bg-neutral-900">

<nav class="flex justify-between p-2 items-center"> 
  <a href="/" class="px-4 py-2 border border-yellow-400 bg-yellow-400 rounded-md font-bold">Camp Web</a>
  {#if user}
    <div class="flex items-center gap-2">
      <a href="/dashboard" class="text-white px-4 py-2 border border-yellow-500 rounded-md">{user.username}</a>
      <form method="POST" action="/?/signOut">
        <button class="text-white px-4 py-2 border border-yellow-500 rounded-md">Sign Out</button>
      </form>
    </div>
  {:else}
    <a href="/auth/discord" class="text-white px-4 py-2 border border-yellow-500 rounded-md">Sign in with Discord</a>
  {/if}
</nav>

<slot />

</div>
