import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Posts } from "./collections/Posts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const blobReadWriteToken = process.env.BLOB_READ_WRITE_TOKEN;

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " — EQDent Admin",
    },
    components: {
      graphics: {
        Icon: false,
        Logo: false,
      },
    },
  },
  editor: lexicalEditor({}),
  collections: [Posts, Media, Users],
  secret: process.env.PAYLOAD_SECRET ?? "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI ?? "file:./eqdent.db",
    },
  }),
  sharp,
  plugins: blobReadWriteToken
    ? [
        vercelBlobStorage({
          enabled: true,
          collections: {
            media: true,
          },
          token: blobReadWriteToken,
        }),
      ]
    : [],
});
