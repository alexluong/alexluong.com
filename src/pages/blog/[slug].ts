import type { APIRoute } from "astro";

/** v4 lived at /blog/:slug. */
export const GET: APIRoute = ({ params, redirect }) => redirect(`/articles/${params.slug}`, 308);
