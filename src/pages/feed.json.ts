import type { APIRoute } from "astro";

import { FEED_AUTHOR, FEED_TITLE, toFeedItem } from "../lib/feed";
import { listPosts } from "../lib/posts";

export const GET: APIRoute = async ({ site }) => {
	const items = (await listPosts()).map((post) => toFeedItem(post, site!));
	const feed = {
		version: "https://jsonfeed.org/version/1.1",
		title: FEED_TITLE,
		home_page_url: site!.href,
		feed_url: new URL("/feed.json", site).href,
		authors: [{ name: FEED_AUTHOR.name }],
		items: items.map((item) => ({
			id: item.url,
			url: item.url,
			title: item.title,
			content_html: item.html,
			date_published: item.published.toISOString(),
			date_modified: item.updated.toISOString(),
		})),
	};
	return Response.json(feed, { headers: { "Content-Type": "application/feed+json; charset=utf-8" } });
};
