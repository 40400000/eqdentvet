import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RichText } from "@/components/blog/RichText";
import type { Media, Post } from "@/payload-types";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

const formatDate = (value?: string | null) => {
  if (!value) return "";
  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
};

async function fetchPost(slug: string): Promise<Post | null> {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "posts",
    where: {
      slug: { equals: slug },
      _status: { equals: "published" },
    },
    limit: 1,
    depth: 2,
  });
  return (result.docs[0] as Post | undefined) ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) return { title: "Artikel niet gevonden" };

  const cover =
    post.coverImage && typeof post.coverImage !== "string"
      ? (post.coverImage as Media)
      : null;

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    alternates: { canonical: `https://eqdent.nl/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      url: `https://eqdent.nl/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt ?? undefined,
      images: cover?.url
        ? [
            {
              url: cover.url,
              width: cover.width ?? 1200,
              height: cover.height ?? 630,
              alt: cover.alt ?? post.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) notFound();

  const cover =
    post.coverImage && typeof post.coverImage !== "string"
      ? (post.coverImage as Media)
      : null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="white" />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            ← Terug naar blog
          </Link>

          <header className="mb-10">
            {post.publishedAt ? (
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                {formatDate(post.publishedAt)}
                {post.author ? <> &middot; {post.author}</> : null}
              </p>
            ) : null}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary leading-tight">
              {post.title}
            </h1>
            {post.excerpt ? (
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            ) : null}
          </header>

          {cover?.url ? (
            <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden shadow-sm">
              <Image
                src={cover.url}
                alt={cover.alt ?? post.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 768px, 100vw"
              />
            </div>
          ) : null}

          <div className="prose prose-eqdent max-w-none">
            <RichText data={post.content} />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
