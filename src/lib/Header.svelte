<script>
export const classNames = 'h2 lh1 lsh bold'
export let tag = 'h1'
</script>

<header class="p1 md:p2">
  {#if tag === 'h1'}
    <h1 class={classNames}><slot /></h1>
  {:else if tag === 'h2'}
    <h2 class={classNames}><slot /></h2>
  {/if}
</header>
