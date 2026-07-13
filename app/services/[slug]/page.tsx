import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceSlugs, type ServiceSlug } from "@/lib/services";
import ServiceDetail from "@/components/ServiceDetail";
import { strings } from "@/lib/strings";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const index = serviceSlugs.indexOf(slug as ServiceSlug);
  if (index === -1) return {};
  const item = strings.en.whatWeDo.items[index];
  return {
    title: item.title,
    description: item.body,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: item.title,
      description: item.body,
      url: `/services/${slug}`,
      images: ["/OG_preview.jpg"],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = serviceSlugs.indexOf(slug as ServiceSlug);
  if (index === -1) notFound();
  return <ServiceDetail index={index} />;
}
