export default defineAppConfig({
  docus: {
    locale: 'en',
    colorMode: 'light'
  },
  seo: {
    title: 'Podcast Publisher',
    titleTemplate: '%s · Podcast Publisher',
    description: 'Create podcasts, publish episodes, and generate RSS feeds from Drupal.'
  },
  header: {
    title: 'Podcast Publisher',
    logo: {
      alt: 'Podcast Publisher',
      favicon: '/favicon.svg'
    }
  },
  ui: {
    colors: {
      primary: 'sky',
      neutral: 'slate'
    }
  },
  socials: {
    drupal: 'https://www.drupal.org/project/podcast_publisher'
  }
})
