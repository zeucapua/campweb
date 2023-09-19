<script lang="ts">
  import "../app.css";
  import type { LayoutData } from "./$types";

  export let data : LayoutData
  const user = data.user;
</script>

<nav class="flex justify-between p-2 items-center"> 
  <a href="/" class="px-4 py-2 border border-black rounded-md font-bold">Camp Web</a>
  {#if user}
    <div class="flex items-center gap-2">
      <a href="/dashboard" class="">
        <img src={user.avatar} alt={`${user.username} profile picture`} class="w-12 h-12 border border-black rounded-full" />
      </a>
      <form method="POST" action="/?/signOut">
        <button class="px-4 py-2 border border-black rounded-md">Sign Out</button>
      </form>
    </div>
  {:else}
    <a href="/auth/discord" class="px-4 py-2 border border-black rounded-md">Sign in with Discord</a>
  {/if}
</nav>

<slot />
