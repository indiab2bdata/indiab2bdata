import type { Metadata } from "next";
import { BlogTemplate } from "@/components/templates/pages/BlogTemplate";
import { BLOG } from "@/content/pages/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(BLOG.meta);

export default function BlogHubPage() {
  return <BlogTemplate />;
}
