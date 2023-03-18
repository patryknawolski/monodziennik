<script>
import { page } from '$app/stores'
import Header from '$lib/Header.svelte'
import Action from '$lib/Action.svelte'
import Button from '$lib/Button.svelte'

export let limit = 5
export let postId
export const postsList = $page.data.posts
  .filter((post) => (postId ? post.id !== postId : true))
  .slice(0, limit || Infinity)
</script>

<section>
  {#if limit}
    <Header tag="h2">tutaj znajdziesz więcej moich wierszy</Header>
  {/if}
  <div class="px1 md:px2">
    <ul class="h5 lh2">
      {#each postsList as item (item.id)}
        <li class="py025 row justify-between items-end gap1"
          ><a class="ul ellipsis" href="/{item.id}">{item.title}</a>
          <span class="span1 border-bottom border-dashed border-gray border-alpha20" style="min-width: 1rem;" />
        </li>
      {/each}
    </ul>
  </div>
  {#if limit}
    <Action class="px1 py2 md:p2">
      <Button href="/archive">zobacz więcej wierszy &rarr;</Button>
    </Action>
  {/if}
</section>
