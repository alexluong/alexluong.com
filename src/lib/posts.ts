import { getEmDashCollection, getEmDashEntry } from "emdash";

export type Kind = "article" | "note";

const collections = { article: "articles", note: "notes" } as const;

export function postPath(kind: Kind, slug: string): string {
	return `/${collections[kind]}/${slug}`;
}

type Entry = Awaited<ReturnType<typeof getEmDashCollection<"articles">>>["entries"][number];

export interface Post {
	kind: Kind;
	slug: string;
	title: string;
	content: Entry["data"]["content"];
	external: string | undefined;
	publishedAt: Date;
	updatedAt: Date;
}

function toPost(kind: Kind, entry: Entry): Post {
	const { data } = entry;
	return {
		kind,
		slug: data.slug ?? entry.id,
		title: data.title,
		content: data.content,
		external: data.external || undefined,
		publishedAt: data.publishedAt ?? data.createdAt,
		updatedAt: data.updatedAt,
	};
}

/** All published articles and notes, newest first. */
export async function listPosts(): Promise<Post[]> {
	const [articles, notes] = await Promise.all([
		getEmDashCollection("articles"),
		getEmDashCollection("notes"),
	]);
	return [
		...articles.entries.map((e) => toPost("article", e)),
		...notes.entries.map((e) => toPost("note", e)),
	].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

export async function getPost(kind: Kind, slug: string): Promise<Post | undefined> {
	const { entry } = await getEmDashEntry(collections[kind], slug);
	return entry ? toPost(kind, entry) : undefined;
}

/** YYYY-MM-DD, the date format used across the site. */
export function formatDate(date: Date): string {
	return date.toISOString().slice(0, 10);
}
