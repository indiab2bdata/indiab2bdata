import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/layout/JsonLd";
import { DirectoryBrowser } from "@/components/sections/hub/DirectoryBrowser";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/config/site";
import { databaseGroupMetadata, getDatabaseDirectoryGroups } from "@/lib/database-directory";
import { breadcrumbJsonLd, itemListJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { buildMetadata } from "@/lib/seo/metadata";

export const dynamicParams = false;
type Params = Promise<{ group: string }>;

export function generateStaticParams() {
  return getDatabaseDirectoryGroups().map((group) => ({ group: group.id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { group: id } = await params;
  const group = getDatabaseDirectoryGroups().find((g) => g.id === id);
  return group ? buildMetadata(databaseGroupMetadata(group)) : {};
}

export default async function DatabaseCategoryPage({ params }: { params: Params }) {
  const { group: id } = await params;
  const group = getDatabaseDirectoryGroups().find((g) => g.id === id);
  if (!group) notFound();
  const meta = databaseGroupMetadata(group);
  const url = `${siteConfig.url}${group.href}`;

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          { name: "IndiaB2BData Home", url: siteConfig.url },
          { name: "Database Directory", url: `${siteConfig.url}/database` },
          { name: `${group.heading} Databases`, url },
        ]),
        webPageJsonLd({ type: "CollectionPage", name: meta.title, description: meta.description, url }),
        itemListJsonLd(group.links.map((link) => ({ name: link.label, url: `${siteConfig.url}${link.href}` })), meta.title),
      ]} />
      <PageHero
        eyebrow="Database Category"
        title={`${group.heading} Databases`}
        description={group.description}
        breadcrumbs={[
          { label: "IndiaB2BData Home", href: "/" },
          { label: "Database Directory", href: "/database" },
          { label: `${group.heading} Databases` },
        ]}
      />
      <section className="max-w-7xl mx-auto px-5 py-16 md:px-8 md:py-20">
        <DirectoryBrowser groups={[group]} />
      </section>
    </>
  );
}
