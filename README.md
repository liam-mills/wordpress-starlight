# Headless WordPress + Astro Starlight

A small starter theme for a headless WordPress frontend making use of Astro Starlight.

## Prerequisites

- Create a `.env` file in the project root folder, and populate the data as outlined in `.env.example`.
- Have your WordPress instance running.
- Configure WordPress permalinks to use "Post name" for the Permalink structure (Settings > Permalinks).

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |