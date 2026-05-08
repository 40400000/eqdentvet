import path from "path";
import { fileURLToPath } from "url";
import type { Payload } from "payload";
import type { Post } from "../payload-types";

const ADMIN_EMAIL = "admin@eqdent.nl";
const ADMIN_PASSWORD = "EQDentnaardetop2026";
const ADMIN_NAME = "EQDent Admin";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

let seeding: Promise<void> | null = null;

export const seed = async (payload: Payload): Promise<void> => {
  if (seeding) return seeding;
  seeding = (async () => {
    try {
      await ensureAdminUser(payload);
      await ensureWelcomePost(payload);
    } catch (err) {
      payload.logger.error({ err }, "Seeding failed");
    }
  })();
  return seeding;
};

async function ensureAdminUser(payload: Payload): Promise<void> {
  const existing = await payload.find({
    collection: "users",
    where: { email: { equals: ADMIN_EMAIL } },
    limit: 1,
  });
  if (existing.totalDocs > 0) return;

  await payload.create({
    collection: "users",
    data: {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      name: ADMIN_NAME,
    },
  });
  payload.logger.info("Created admin user");
}

async function ensureWelcomePost(payload: Payload): Promise<void> {
  const existing = await payload.find({
    collection: "posts",
    limit: 1,
  });
  if (existing.totalDocs > 0) return;

  // Upload the EQDent logo as the cover image (if not already there)
  let coverImageId: number | undefined;
  try {
    const logoPath = path.resolve(dirname, "..", "public", "eqdentlogo.png");
    const media = await payload.create({
      collection: "media",
      data: { alt: "EQDent logo" },
      filePath: logoPath,
    });
    coverImageId =
      typeof media.id === "number" ? media.id : Number(media.id);
  } catch (err) {
    payload.logger.warn({ err }, "Could not upload welcome cover image");
  }

  await payload.create({
    collection: "posts",
    data: {
      title: "Welkom bij EQDent",
      slug: "welkom-bij-eqdent",
      excerpt:
        "Professionele paardentandheelkunde bij het paard thuis. Met meer dan 15 jaar ervaring biedt drs. Mark van Manen tweedelijns tandheelkundige zorg op locatie, voor het welzijn, de gezondheid en de duurzame prestaties van uw paard.",
      author: "drs. Mark van Manen",
      publishedAt: new Date().toISOString(),
      coverImage: coverImageId,
      _status: "published",
      content: welcomeContent,
    },
  });
  payload.logger.info("Created welcome blog post");
}

const p = (text: string) => ({
  type: "paragraph",
  format: "",
  indent: 0,
  version: 1,
  direction: "ltr",
  textFormat: 0,
  textStyle: "",
  children: [
    {
      mode: "normal",
      text,
      type: "text",
      style: "",
      detail: 0,
      format: 0,
      version: 1,
    },
  ],
});

const h2 = (text: string) => ({
  type: "heading",
  tag: "h2",
  format: "",
  indent: 0,
  version: 1,
  direction: "ltr",
  children: [
    {
      mode: "normal",
      text,
      type: "text",
      style: "",
      detail: 0,
      format: 0,
      version: 1,
    },
  ],
});

const welcomeContent: Post["content"] = {
  root: {
    type: "root",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    children: [
      p(
        "Welkom op de kennisbank van EQDent. Hier delen we kennis, verhalen en achtergronden uit onze paardentandheelkundige praktijk over zorg, expertise en het welzijn van uw paard.",
      ),
      h2("Professionele zorg op locatie"),
      p(
        "Bij EQDent geloven we dat tandheelkunde meer is dan het verzorgen van een gebit. Het is een essentieel onderdeel van het welzijn, de gezondheid en de duurzame prestaties van elk paard. Wij combineren medische expertise op tweedelijns niveau met een persoonlijke aanpak die zorgt voor vertrouwen en rust, voor paard én eigenaar.",
      ),
      h2("Periodieke en expertise zorg"),
      p(
        "Goede paardentandheelkunde vraagt meer dan techniek alleen. Het vraagt inzicht in de samenhang tussen gebit, voeding, training en gedrag. Naast periodieke controles voeren wij ook geavanceerde ingrepen uit, zoals extracties, behandeling van EOTRH en sinusitis, met dezelfde aandacht en precisie als in een klinische setting.",
      ),
      h2("Bij u op de stal"),
      p(
        "EQDent komt naar uw locatie. Met meer dan 15 jaar ervaring werken wij in een straal van ongeveer 30 minuten rond Wezep, in Gelderland en Overijssel. In de komende artikelen leest u meer over onze werkwijze, de behandelingen die wij uitvoeren en praktische tips om het gebit van uw paard gezond te houden.",
      ),
    ],
  },
};
