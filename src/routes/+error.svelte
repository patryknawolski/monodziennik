<script>
import { page } from '$app/stores'
import Action from '$lib/Action.svelte'
import Button from '$lib/Button.svelte'
import Header from '$lib/Header.svelte'
</script>

<svelte:head>
  <title>Error {$page.status}</title>
</svelte:head>

<section>
  <Header>Error {$page.status}</Header>

  <div class="px1 md:px2">
    <div class="copy h5 lh2">
      {#if $page.status === 404}
        <p>Page not found.</p>
      {:else}
        <p>{$page.error.message}.</p>
      {/if}
    </div>
  </div>

  <Action class="px1 py2 md:p2">
    <Button href="/archive">Return home</Button>
  </Action>
</section>
