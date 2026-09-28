<script setup lang="ts">
const route = useRoute()
const groups = [
  { title: 'Get started', links: [
    ['Installation', '/get-started'],
    ['Create a podcast', '/get-started/create-podcast'],
    ['Add an episode', '/get-started/add-episode'],
    ['Make an episode page', '/get-started/episode-page'],
    ['Check and share the feed', '/get-started/feed']
  ] },
  { title: 'Site building', links: [
    ['Overview', '/site-building'],
    ['Permissions', '/site-building/permissions'],
    ['Troubleshooting', '/site-building/troubleshooting']
  ] },
  { title: 'Analytics', links: [['Setup and reports', '/analytics']] }
]
</script>

<template>
  <nav class="guide-navigation" aria-label="Documentation">
    <section v-for="group in groups" :key="group.title">
      <h2>{{ group.title }}</h2>
      <ul>
        <li v-for="[label, path] in group.links" :key="path">
          <NuxtLink :to="path" :aria-current="route.path.replace(/\/$/, '') === path ? 'page' : undefined">{{ label }}</NuxtLink>
        </li>
      </ul>
    </section>
  </nav>
</template>

<style scoped>
.guide-navigation section + section { margin-top: 1.8rem; }
.guide-navigation h2 { margin: 0 0 .55rem; padding-left: .8rem; color: var(--brand-ink); font-size: .9rem; font-weight: 700; }
.guide-navigation ul { list-style: none; padding: 0; margin: 0; }
.guide-navigation a { display: block; padding: .45rem .8rem; border-radius: .35rem; color: var(--brand-muted); font-size: .95rem; line-height: 1.45; }
.guide-navigation a:hover { background: var(--brand-pale); color: var(--brand-link); }
.guide-navigation a[aria-current="page"] { background: var(--brand-pale); color: var(--brand-link); font-weight: 600; }
</style>

