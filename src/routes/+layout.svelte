<script>
import '/src/css/index.css'
import config from '/src/config'
import PageLoader from './PageLoader.svelte'
import IntroSection from '$lib/IntroSection.svelte'

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

{#if data.pathname === '/'}
  <IntroSection />
{/if}

<div class="minvh mindvh col">
  {#if data.pathname === '/'}
    <div>
      <header class="px1 py2 md:p2">
        <!-- <div class="row justify-between items-start w100"> -->
        <a href="/" title={config.siteTitle}><h1 class="h2 md:h1 lh1 lsh bold">dziennik</h1></a>
        <h2 class="h5 sd:h4 md:h3 lh1 lsh bold">stanisław szpineta - mono</h2>
        <!-- </div> -->
      </header>
    </div>
  {/if}

  <main class="span1 max49">
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
