import type { Metadata } from "next";
import { BlogTemplate } from "@/components/templates/pages/BlogTemplate";
import { BLOG } from "@/content/pages/blog";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata(BLOG.meta);

export default function BlogHubPage() {
  return <BlogTemplate />;
}
