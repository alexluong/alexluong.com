# alexluong.com

[https://alexluong.com](https://alexluong.com)

Personal site: articles and notes, written in a CMS. Built with [EmDash](https://github.com/emdash-cms/emdash) (an Astro CMS) and Tailwind, running on Cloudflare Workers with D1 and R2.

## Local

```sh
mise install          # node + pnpm (see mise.toml)
pnpm install
pnpm dev              # http://localhost:4321, admin at /_emdash/admin
```

First run opens the EmDash setup wizard, which creates the `articles` and `notes` collections from `seed/seed.json`. Local dev runs on Wrangler's local D1 and R2 (in `.wrangler/`).

## Deploy

```sh
pnpm run deploy       # astro build && wrangler deploy
```

The admin (`/_emdash`) sits behind Cloudflare Access. The Worker needs the secrets `CF_ACCESS_AUDIENCE` and `EMDASH_ENCRYPTION_KEY`.

Older versions of the site live on the `v1`–`v5` branches.
