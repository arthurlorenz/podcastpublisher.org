export default defineNuxtConfig({
  extends: ['docus'],
  nitro: {
    prerender: { failOnError: true }
  },
  site: {
    name: 'Podcast Publisher',
    url: 'https://podcastpublisher.org'
  },
  llms: {
    domain: 'https://podcastpublisher.org',
    full: false
  },
  fonts: {
    families: [
      {
        name: 'Source Sans 3',
        provider: 'none'
      }
    ],
    providers: {
      adobe: false,
      google: false,
      googleicons: false,
      bunny: false,
      fontshare: false,
      fontsource: false,
      npm: false
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ]
    }
  },
  compatibilityDate: '2025-07-22'
})
