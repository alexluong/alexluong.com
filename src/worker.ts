import handler, { createScheduledHandler } from "@emdash-cms/cloudflare/worker";

export default {
	...handler,
	// Scheduled publishing, backups and maintenance (cron in wrangler.jsonc).
	scheduled: createScheduledHandler(),
} satisfies ExportedHandler;
