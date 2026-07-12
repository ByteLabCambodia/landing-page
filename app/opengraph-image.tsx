import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const brandFont = await readFile(
    join(process.cwd(), "public/fonts/Byte-Lab-Regular.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "linear-gradient(135deg, #17293f 0%, #213a63 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontFamily: "ByteLab",
            fontSize: 120,
            lineHeight: 1.1,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 44,
            marginTop: 24,
            color: "#38bdf8",
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 32,
            maxWidth: 900,
            color: "#aec3e6",
            lineHeight: 1.4,
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "ByteLab",
          data: brandFont,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
