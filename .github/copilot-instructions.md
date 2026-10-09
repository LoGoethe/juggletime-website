# Repository Guidelines

## Architecture

- This is a static two-page site: `index.html` is the home page and `services.html` contains the service galleries. Both pages load the shared `styles.css` and `script.js`; Bulma and icon/font assets are loaded from external CDNs.
- `script.js` wires page behavior to HTML classes, IDs, and `data-*` attributes after `DOMContentLoaded`. It handles the responsive navigation on both pages, service galleries on the services page, and the image modal, testimonials, and video behavior where their corresponding markup exists.
- Images are organized by page or service category under `images/`. Service-gallery thumbnails live in each category's `thumbs/` directory; their `data-full-src` points to the corresponding full-size image.
- GitHub Actions deploys the repository root directly to Azure Static Web Apps on pushes and pull requests to `main`. There is no separate build output directory. `staticwebapp.config.json` redirects `/index.html` to `/`.

## Conventions

- Keep page-specific behavior conditional on its markup being present; the shared script runs on both HTML pages.
- When adding or reordering a service-gallery image, keep the thumbnail's `data-index`, full-size `data-full-src`, and the main image's `data-index` in sync. Preserve matching thumbnail/full-size filenames and category paths.
- The home-page modal uses `.clickable-image` elements with `data-full` and `data-index`; update these attributes when changing its image collection.
- Preserve the existing page structure and metadata in HTML, including canonical/Open Graph tags and section IDs used by navigation links.
- Keep shared visual styling in `styles.css`; it defines the site's color variables and custom classes alongside Bulma's utility classes.
- The booking form is submitted directly to Formspree from the HTML; there is no application server or API layer in this repository.

## Build, Test, and Lint

- There is no `package.json`, build script, test runner, or lint configuration, so this repository has no project-defined build, test, lint, or single-test command.
- Deployment is performed by the GitHub Actions workflow in `.github/workflows/`; Azure Static Web Apps serves the source files directly.
