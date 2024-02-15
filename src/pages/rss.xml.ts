import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const sortPosts = (
  a: { data: { publishDate: Date } },
  b: { data: { publishDate: Date } },
) => {
  return Number(b.data.publishDate) - Number(a.data.publishDate);
};

function formatDate(date: Date) {
  date.setUTCHours(0);
  return date;
}

export const GET: APIRoute = async (context) => {
  const unsortedPosts = [...(await getCollection("blog"))];
  const posts = unsortedPosts.sort((a, b) => sortPosts(a, b));
  return rss({
    title: "Sean D’Souza's blog",
    description: "Sean D'Souza's blog",
    site: context.site!.href,
    items: posts.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      link: `/blog/${item.slug}/`,
      pubDate: formatDate(item.data.publishDate),
    })),
  });
};
