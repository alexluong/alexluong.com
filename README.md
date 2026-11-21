# alexluong.com

[https://alexluong.com](https://alexluong.com)

Personal site: articles and notes, written in a CMS. Built with [EmDash](https://github.com/emdash-cms/emdash) (an Astro CMS) and Tailwind.

## Local

```sh
mise install          # node + pnpm (see mise.toml)
pnpm install
pnpm dev              # http://localhost:4321, admin at /_emdash/admin
```

First run opens the EmDash setup wizard, which creates the `articles` and `notes` collections from `seed/seed.json`. Content lives in `data.db` (SQLite) and media in `uploads/`, both gitignored.

Older versions of the site live on the `v1`–`v5` branches.
