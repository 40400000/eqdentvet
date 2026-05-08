import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@payload-config";
import type { Post } from "@/payload-types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://eqdent.nl";

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/algemene-voorwaarden`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "posts",
      where: { _status: { equals: "published" } },
      limit: 500,
      depth: 0,
    });
    const postEntries: MetadataRoute.Sitemap = (result.docs as Post[]).map(
      (post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      }),
    );
    return [...staticEntries, ...postEntries];
  } catch {
    return staticEntries;
  }
}
