<script>
import Copy from '$lib/Copy.svelte'

export let post
</script>

{#key post.id}
  <section>
    <article>
      <Copy>{@html post.content}</Copy>
    </article>
  </section>
{/key}
