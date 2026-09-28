<script setup lang="ts">
useSeoMeta({
  title: 'Podcast Publisher',
  titleTemplate: '%s · Podcast publishing for Drupal',
  description: 'Create podcasts, publish episodes, and share an RSS feed from your Drupal site.',
  ogImage: '/preview.png'
})
const paths = [
  { number: '01', title: 'Set up your site', description: 'Install the module, give editors access, and create your first podcast.', to: '/get-started', label: 'Start with installation' },
  { number: '02', title: 'Publish an episode', description: 'Add the recording, write shownotes, and give your episode a home.', to: '/get-started/add-episode', label: 'Follow the publishing guide' },
  { number: '03', title: 'Share your feed', description: 'Check your RSS feed and share it with listeners and podcast directories.', to: '/get-started/feed', label: 'Find your feed URL' }
]
</script>

<template>
  <div class="publisher-home">
    <section class="home-hero">
      <div class="home-hero-inner">
        <div class="hero-copy">
          <p class="home-eyebrow">Podcast publishing for Drupal</p>
          <h1>Your podcast.<br>Your Drupal site.</h1>
          <p class="hero-description">Create a show, publish episodes, and share your feed. Keep your podcast in the Drupal site you already know.</p>
          <div class="hero-actions">
            <NuxtLink class="home-button" to="/get-started">Start publishing <span aria-hidden="true">→</span></NuxtLink>
            <a class="home-text-link" href="https://www.drupal.org/project/podcast_publisher">View the Drupal project <span aria-hidden="true">↗</span></a>
          </div>
          <div class="install-command"><span aria-hidden="true">$</span><code>composer require drupal/podcast_publisher</code></div>
        </div>
        <div class="hero-mark" aria-hidden="true"><img src="/podcast-publisher-mark.svg" width="300" height="360" alt=""></div>
      </div>
    </section>
    <section class="home-guides" aria-labelledby="guide-heading">
      <div class="guide-intro">
        <p class="home-eyebrow">From setup to your next episode</p>
        <h2 id="guide-heading">A guide for every step.</h2>
        <p>For the people building the site and the editors bringing the show to life.</p>
      </div>
      <div class="home-paths">
        <NuxtLink v-for="path in paths" :key="path.number" :to="path.to" class="home-path">
          <span class="path-number">{{ path.number }}</span>
          <h3>{{ path.title }}</h3>
          <p>{{ path.description }}</p>
          <span class="path-link">{{ path.label }} <span aria-hidden="true">→</span></span>
        </NuxtLink>
      </div>
      <div class="analytics-strip">
        <div><h2>Curious about downloads?</h2><p>Set up the optional analytics module and learn what its counts tell you.</p></div>
        <NuxtLink class="home-text-link" to="/analytics">Explore analytics <span aria-hidden="true">→</span></NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.publisher-home { color: var(--brand-ink); }
.home-hero { background: var(--brand-pale); border-bottom: 1px solid #d5e7f0; }
.home-hero-inner { max-width: 1200px; margin: auto; padding: 88px 32px 80px; display: grid; grid-template-columns: 1.7fr 1fr; align-items: center; gap: 64px; }
.home-eyebrow { margin: 0 0 22px; font-size: .8rem; letter-spacing: .12em; text-transform: uppercase; font-weight: 700; color: #486175; }
.hero-copy h1 { margin: 0; font-size: clamp(3rem, 5.5vw, 4.75rem); line-height: 1.03; letter-spacing: -.045em; font-weight: 700; }
.hero-description { max-width: 490px; font-size: 1.2rem; line-height: 1.6; margin: 24px 0 28px; color: #36546c; }
.hero-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 22px; }
.home-button { padding: 12px 22px; border-radius: 5px; background: var(--brand-link); color: white; font-weight: 600; display: inline-flex; align-items: center; gap: 22px; }
.home-button:hover { background: #005f88; }
.home-text-link { color: var(--brand-link); font-weight: 600; text-decoration: none; }
.home-text-link:hover { text-decoration: underline; }
.install-command { display: flex; gap: 12px; margin-top: 30px; font-size: .8rem; color: #36546c; max-width: 100%; }
.install-command span { color: var(--brand-link); }
.install-command code { overflow-wrap: anywhere; }
.hero-mark { display: flex; align-items: center; justify-content: center; }
.hero-mark img { width: 265px; height: auto; }
.home-guides { max-width: 1200px; padding: 64px 32px 48px; margin: auto; }
.guide-intro .home-eyebrow { margin-bottom: 12px; }
.guide-intro h2 { font-size: 2rem; line-height: 1.2; font-weight: 700; margin: 0 0 12px; letter-spacing: -.025em; }
.guide-intro > p:last-child { color: #486175; margin: 0; }
.home-paths { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 36px; border-top: 1px solid #ccdbe5; border-bottom: 1px solid #ccdbe5; }
.home-path { padding: 28px 30px 30px 0; display: flex; flex-direction: column; }
.home-path + .home-path { border-left: 1px solid #ccdbe5; padding-left: 30px; }
.path-number { color: var(--brand-link); font-weight: 600; font-size: .85rem; margin-bottom: 18px; }
.home-path h3 { font-size: 1.4rem; font-weight: 700; margin: 0 0 10px; }
.home-path p { color: #486175; line-height: 1.6; margin: 0 0 22px; }
.path-link { margin-top: auto; color: var(--brand-link); font-size: .95rem; font-weight: 600; }
.home-path:hover h3 { color: var(--brand-link); }
.home-path:hover .path-link { text-decoration: underline; }
.analytics-strip { display: flex; gap: 24px; align-items: center; justify-content: space-between; padding-top: 36px; }
.analytics-strip h2 { font-size: 1.15rem; font-weight: 700; margin: 0 0 5px; }
.analytics-strip p { color: #486175; margin: 0; font-size: 1rem; }
.analytics-strip a { white-space: nowrap; }
@media (max-width: 767px) {
  .home-hero-inner { padding: 48px 24px; grid-template-columns: 1fr; gap: 0; }
  .hero-mark { display: none; }
  .hero-copy h1 { font-size: clamp(2.7rem, 10vw, 4rem); }
  .hero-description { font-size: 1.1rem; }
  .home-guides { padding: 40px 24px; }
  .home-paths { grid-template-columns: 1fr; margin-top: 28px; }
  .home-path, .home-path + .home-path { padding: 24px 0; border-left: none; }
  .home-path + .home-path { border-top: 1px solid #ccdbe5; }
  .path-number { margin-bottom: 8px; }
  .analytics-strip { flex-direction: column; align-items: flex-start; }
}
</style>

