export default defineAppConfig({
  docus: {
    locale: 'en',
    colorMode: 'light'
  },
  seo: {
    title: 'Podcast Publisher',
    titleTemplate: '%s · Podcast Publisher',
    description: 'Own your podcast and your data. Self-host with Drupal and share your show through open RSS.'
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
