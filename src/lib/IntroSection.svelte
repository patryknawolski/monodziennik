<script>
import Intro from '$lib/assets/images/intro.jpg'
import { onMount } from 'svelte'

let headerEl

onMount(() => {
  const scrollingTimeout = setTimeout(() => {
    const body = document.getElementsByTagName('body')[0]
    const headerHeight = headerEl.getBoundingClientRect().height

    // scroll window to header height with specific easing over one second
    window.scrollTo({
      top: headerHeight,
      behavior: 'smooth',
    })
  }, 1000)

  window.addEventListener('scroll', () => {
    clearTimeout(scrollingTimeout)
  })
})
</script>

<header bind:this={headerEl}>
  <img src={Intro} alt="Cover" />
</header>

<style>
header {
  width: 100vw;
  height: 100vh;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
