<img src="public/podcast-publisher-mark.svg" alt="Podcast Publisher logo" width="80" height="97">

# Podcast Publisher documentation

This is the Docus 5 site for the [Podcast Publisher](https://www.drupal.org/project/podcast_publisher) Drupal module.

## Local development

The project uses the Node version in `.nvmrc` and Yarn 1.

```bash
yarn install
yarn dev
```

Open the local address printed by Nuxt. Content lives in `content/`; images used in the guides live in `public/images/`.

## Verify a release build

Build the server bundle and generate the static site before publishing:

```bash
yarn build
yarn generate
```

Generated files are written to `.output/`, which is ignored by Git. Use `yarn preview` to inspect a generated build locally.

The Drupal screenshots in this checkout were captured from a disposable local DDEV site with generic sample content. They are documentation assets only; publishing the docs does not deploy or change a Drupal site.
