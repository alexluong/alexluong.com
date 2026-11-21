import { escapeHTML, toHTML } from "@portabletext/to-html";

import { formatDate, postPath, type Post } from "./posts";

export const FEED_TITLE = "Alex Luong's Website";
export const FEED_AUTHOR = { name: "Alex Luong", email: "alex@alexluong.com" };

// Entry ids from the previous site's feed, which dated them by last edit.
// Keeping them stops feed readers from showing these posts as new again.
const legacyIdDates: Record<string, string> = {
	"/notes/netlify-drop": "2026-02-21",
	"/notes/colima-host-docker-internal": "2026-01-08",
	"/notes/run-local-golangci-lint": "2025-02-06",
	"/notes/collielab-observability-init": "2024-11-05",
	"/notes/go-otel-remote-tracing": "2024-09-27",
	"/notes/go-setting-up-and-tearing-down-unit-tests": "2024-09-05",
	"/articles/docker-and-firewall": "2024-09-02",
	"/notes/website-redesign-v5": "2024-09-01",
	"/notes/hello-world": "2024-08-30",
	"/articles/react-battle-cra-gatsby-next": "2024-09-01",
	"/articles/comprehensive-guide-to-twitter-webhook": "2024-09-01",
	"/articles/tweet-scheduler-a-technical-retro": "2024-09-01",
	"/articles/a-journey-through-gatsby-build-process-via-building-a-plugin": "2024-09-01",
	"/articles/creating-your-first-gatsby-theme": "2024-09-01",
	"/articles/gatsby-image-sharp-from-url": "2024-09-01",
	"/articles/first-non-mlh-hackathon": "2024-09-01",
	"/articles/first-oss-contribution": "2024-09-01",
};

export interface FeedItem {
	id: string;
	url: string;
	title: string;
	html: string;
	published: Date;
	updated: Date;
}

export function toFeedItem(post: Post, site: URL): FeedItem {
	const path = postPath(post.kind, post.slug);
	const idDate = legacyIdDates[path] ?? formatDate(post.publishedAt);
	return {
		id: `tag:${site.host},${idDate}:${path}`,
		url: new URL(path, site).href,
		title: post.title,
		html: post.content ? toHTML(post.content, { components: { types: blockTypes(site) } }) : "",
		published: post.publishedAt,
		updated: post.updatedAt,
	};
}

function blockTypes(site: URL) {
	return {
		code: ({ value }: { value: { code: string; language?: string } }) => {
			const lang = value.language ? ` class="language-${escapeHTML(value.language)}"` : "";
			return `<pre${lang}><code>${escapeHTML(value.code)}</code></pre>`;
		},
		image: ({ value }: { value: { asset: { url: string }; alt?: string } }) => {
			const src = new URL(value.asset.url, site).href;
			return `<img src="${escapeHTML(src)}" alt="${escapeHTML(value.alt ?? "")}">`;
		},
	};
}

export { escapeHTML as escapeXml };
