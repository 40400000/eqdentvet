import type { CollectionConfig } from "payload";
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
  LinkFeature,
  UploadFeature,
} from "@payloadcms/richtext-lexical";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: "Blogartikel",
    plural: "Blogartikelen",
  },
  access: {
    // Anyone can read published posts; drafts/scheduled stay hidden until logged in
    read: ({ req }) => {
      if (req.user) return true;
      return {
        _status: { equals: "published" },
      };
    },
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "_status", "publishedAt", "updatedAt"],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 800,
      },
    },
    maxPerDoc: 25,
  },
  fields: [
    {
      name: "title",
      label: "Titel",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "URL-slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        description:
          "Wordt gebruikt in de URL: /blog/uw-slug. Gebruik kleine letters en streepjes.",
      },
    },
    {
      name: "excerpt",
      label: "Korte introductie",
      type: "textarea",
      admin: {
        description:
          "Een korte samenvatting (1–2 zinnen) die in het overzicht en in social previews wordt getoond.",
      },
    },
    {
      name: "coverImage",
      label: "Coverafbeelding",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "publishedAt",
      label: "Publicatiedatum",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        position: "sidebar",
      },
    },
    {
      name: "author",
      label: "Auteur",
      type: "text",
      defaultValue: "drs. Mark van Manen",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "content",
      label: "Inhoud",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ["h2", "h3", "h4"] }),
          LinkFeature({}),
          UploadFeature({
            collections: {
              media: {
                fields: [
                  {
                    name: "caption",
                    label: "Bijschrift",
                    type: "text",
                  },
                ],
              },
            },
          }),
          BlocksFeature({ blocks: [] }),
          HorizontalRuleFeature(),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
  ],
};
