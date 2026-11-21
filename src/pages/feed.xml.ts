import type { APIRoute } from "astro";

import { escapeXml, FEED_AUTHOR, FEED_TITLE, toFeedItem } from "../lib/feed";
import { listPosts } from "../lib/posts";

export const GET: APIRoute = async ({ site }) => {
	const items = (await listPosts()).map((post) => toFeedItem(post, site!));
	const entries = items.map(
		(item) => `  <entry>
    <title>${escapeXml(item.title)}</title>
    <id>${escapeXml(item.id)}</id>
    <link href="${escapeXml(item.url)}" rel="alternate"></link>
    <published>${item.published.toISOString()}</published>
    <updated>${item.updated.toISOString()}</updated>
    <summary type="html">${escapeXml(item.html)}</summary>
  </entry>`,
	);
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(FEED_TITLE)}</title>
  <id>${site!.href}</id>
  <updated>${new Date().toISOString()}</updated>
  <link href="${site!.href}"></link>
  <link href="${new URL("/feed.xml", site).href}" rel="self"></link>
  <author>
    <name>${FEED_AUTHOR.name}</name>
    <email>${FEED_AUTHOR.email}</email>
  </author>
${entries.join("\n")}
</feed>`;
	return new Response(xml, { headers: { "Content-Type": "application/atom+xml; charset=utf-8" } });
};
