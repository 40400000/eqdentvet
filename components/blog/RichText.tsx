import Image from "next/image";
import Link from "next/link";
import type {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  SerializedUploadNode,
} from "@payloadcms/richtext-lexical";
import {
  RichText as LexicalRichText,
  type JSXConvertersFunction,
} from "@payloadcms/richtext-lexical/react";
import type { Media } from "@/payload-types";

type Props = {
  data: Parameters<typeof LexicalRichText>[0]["data"];
  className?: string;
};

const internalDocToHref = (link: SerializedLinkNode): string => {
  const { fields } = link;
  if (!fields) return "#";
  if (fields.linkType === "custom" && fields.url) return fields.url;
  if (
    fields.linkType === "internal" &&
    fields.doc &&
    typeof fields.doc !== "string"
  ) {
    const slug =
      typeof fields.doc.value === "object" &&
      fields.doc.value !== null &&
      "slug" in fields.doc.value
        ? (fields.doc.value as { slug?: string }).slug
        : undefined;
    if (fields.doc.relationTo === "posts" && slug) return `/blog/${slug}`;
  }
  return fields.url ?? "#";
};

const converters: JSXConvertersFunction<
  DefaultNodeTypes | SerializedBlockNode
> = ({ defaultConverters }) => ({
  ...defaultConverters,
  upload: ({ node }: { node: SerializedUploadNode }) => {
    const value = node.value;
    if (!value || typeof value !== "object") return null;
    const media = value as Media;
    if (!media.url) return null;
    const caption =
      node.fields && typeof node.fields === "object" && "caption" in node.fields
        ? (node.fields as { caption?: string }).caption
        : undefined;
    return (
      <figure className="my-8">
        <div className="relative w-full overflow-hidden rounded-xl shadow-sm border border-border">
          <Image
            src={media.url}
            alt={media.alt ?? ""}
            width={media.width ?? 1600}
            height={media.height ?? 900}
            className="w-full h-auto object-cover"
          />
        </div>
        {caption ? (
          <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    );
  },
  link: ({ node, nodesToJSX }) => {
    const href = internalDocToHref(node);
    const children = nodesToJSX({ nodes: node.children });
    const newTab =
      node.fields && typeof node.fields === "object" && "newTab" in node.fields
        ? Boolean((node.fields as { newTab?: boolean }).newTab)
        : false;
    return (
      <Link
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className="text-primary underline underline-offset-4 hover:opacity-80"
      >
        {children}
      </Link>
    );
  },
});

export function RichText({ data, className }: Props) {
  if (!data) return null;
  return (
    <LexicalRichText
      data={data}
      converters={converters}
      className={className}
    />
  );
}
