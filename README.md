# Blue Earth Media

Two deployable static experiences:

- Root: `blueearthe.media` — performance marketing / media / growth site.
- `publishing/`: `publishing.blueearthe.media` — publisher monetization site.

## Cloudflare deployment

Recommended: create two Cloudflare Pages projects from this repository.

### Main site
- Branch: `main`
- Build command: none
- Output directory: `/`
- Custom domains: `blueearthe.media`, `www.blueearthe.media`

### Publishing
Because Cloudflare Pages does not use a repository subdirectory as a standalone root without a build step, use:
- Build command: `mkdir -p dist && cp -R publishing/* dist/`
- Output directory: `dist`
- Custom domain: `publishing.blueearthe.media`

Do not change the current VPS DNS until the Pages preview URL has been verified.
