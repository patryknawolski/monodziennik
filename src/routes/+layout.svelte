<script>
import '/src/css/index.css'
import config from '/src/config'
import Header from '$lib/Header.svelte'
import PageLoader from './PageLoader.svelte'

export let data
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <!-- Analytics for Demo Website; you can safely remove this section -->
  {#if data.host === 'tablogdemo.vercel.app'}<script
      defer
      data-domain="tablogdemo.vercel.app"
      src="https://plausible.io/js/script.js"
    ></script>{/if}
</svelte:head>

<PageLoader />

<div class="minvh mindvh col max49">
  <div>
    <header class="px1 py2 md:p2">
      <div class="row justify-between items-start w100">
        <a href="/" title={config.siteTitle}><h1 class="h2 lh1 lsh bold">dziennik</h1></a>
        <h2 class="h5 sd:h4 lh1 lsh bold">stanisław szpineta - mono</h2>
      </div>
    </header>
  </div>

  <main class="span1">
    <slot />
  </main>

  <footer class="px1 py2 md:p2">
    <div class="copy h5 lh2">
      <p
        >&copy; {new Date().getFullYear()}
        {config.siteTitle} <span class="inlineblock mx05 gray lum80">|</span> built by
        <a href="https://www.upwork.com/freelancers/pnnnn" target="_blank" rel="noreferrer">Netronom</a>
        for our close friend stanisław szpineta
      </p></div
    >
  </footer>
</div>
