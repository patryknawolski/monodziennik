<script>
import config from '/src/config'
import PostSection from '$lib/PostSection.svelte'
import ArchiveSection from '$lib/ArchiveSection.svelte'

export const data = {
  post: {
    content: `mojej mamie,<br/>
tacie,<br/>
komorowskim kwiatom,<br/>
księżycowi,<br/>
piotrowi sibińskiemu<br/>
i sobie.`,
    description: 'mono - stanisław szpineta',
  },
}
</script>

<svelte:head>
  <title>{config.siteTitle} &ndash; {config.siteTagline}</title>
  <meta name="description" content={data.post.description} />
</svelte:head>

<PostSection post={data.post} />

<ArchiveSection />
