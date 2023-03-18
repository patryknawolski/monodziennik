<script>
import config from '/src/config'
import ArchiveSection from '$lib/ArchiveSection.svelte'
</script>

<svelte:head>
  <title>{config.siteTitle} Archive</title>
</svelte:head>

<div class="py1 md:py2">
  <ArchiveSection limit={false} />
</div>
