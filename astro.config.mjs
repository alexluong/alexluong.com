import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { access, d1, r2 } from "@emdash-cms/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";

export default defineConfig({
	site: "https://alexluong.com",
	output: "server",
	adapter: cloudflare(),
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto", coalesce: true }),
			storage: r2({ binding: "MEDIA" }),
			// Admin login is Cloudflare Access in production; local dev falls back to passkeys.
			auth: access({ teamDomain: "colliestudio.cloudflareaccess.com" }),
		}),
	],
	vite: { plugins: [tailwindcss()] },
	devToolbar: { enabled: false },
});
