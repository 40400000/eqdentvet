import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload";
import config from "@payload-config";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Media, Post } from "@/payload-types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Verhalen, kennis en ervaringen uit de paardentandheelkundige praktijk van EQDent en drs. Mark van Manen.",
  alternates: { canonical: "https://eqdent.nl/blog" },
  openGraph: {
    title: "Blog — EQDent",
    description:
      "Verhalen, kennis en ervaringen uit de paardentandheelkundige praktijk van EQDent.",
    url: "https://eqdent.nl/blog",
  },
};

const formatDate = (value?: string | null) => {
  if (!value) return "";
  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
};

export default async function BlogIndexPage() {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "posts",
    where: { _status: { equals: "published" } },
    sort: "-publishedAt",
    limit: 50,
    depth: 1,
  });

  const posts = result.docs as Post[];

  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="white" />

      <section
        className="pt-32 pb-12"
        style={{ backgroundColor: "var(--eqdent-white-green)" }}
      >
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-primary mb-6">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verhalen, achtergronden en kennis uit de paardentandheelkundige
            praktijk. Lees mee over zorg, expertise en het welzijn van uw
            paard.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Er zijn nog geen artikelen gepubliceerd. Kom binnenkort terug.
              </p>
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2">
              {posts.map((post) => {
                const cover =
                  post.coverImage && typeof post.coverImage !== "string"
                    ? (post.coverImage as Media)
                    : null;
                return (
                  <article
                    key={post.id}
                    className="group bg-background rounded-xl shadow-sm border border-border overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                  >
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="relative aspect-[16/10] bg-muted">
                        {cover?.url ? (
                          <Image
                            src={cover.url}
                            alt={cover.alt ?? post.title}
                            fill
                            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                            sizes="(min-width: 768px) 50vw, 100vw"
                          />
                        ) : (
                          <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                              backgroundColor: "var(--eqdent-green-light)",
                            }}
                          >
                            <span className="text-primary font-light text-2xl">
                              EQDent
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                      {post.publishedAt ? (
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                          {formatDate(post.publishedAt)}
                        </p>
                      ) : null}
                      <h2 className="text-xl font-medium text-primary mb-3">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:opacity-80 transition-opacity"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      {post.excerpt ? (
                        <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                          {post.excerpt}
                        </p>
                      ) : null}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center font-medium text-primary hover:opacity-80 transition-opacity mt-auto"
                      >
                        Lees verder →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
