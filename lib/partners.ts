import fs from "fs";
import path from "path";

export type PartnerLogo = { src: string; alt: string };

const IMAGE_EXTENSIONS = new Set([".webp", ".png", ".jpg", ".jpeg", ".svg", ".avif"]);

/**
 * Reads every image in public/partners and returns it as a logo entry.
 * Drop a new file in that folder and it shows up on the next render/build —
 * no code change needed. The alt text is derived from the filename
 * (e.g. "ATC-Main-Logo.webp" -> "ATC Main Logo").
 */
export function getPartnerLogos(): PartnerLogo[] {
  const dir = path.join(process.cwd(), "public", "partners");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => ({
      src: `/partners/${file}`,
      alt: path
        .basename(file, path.extname(file))
        .replace(/[-_]+/g, " ")
        .trim(),
    }));
}
