import fs from "node:fs";
import path from "node:path";

import { markdownToHtml, parseMarkdown } from "./markdown";

const pagesDirectory = path.join(process.cwd(), "content", "pages");

export type CmsPage = {
  title: string;
  slug: string;
  description: string;
  body: string;
  html: string;
};

export function getCmsPage(slug: string): CmsPage | null {
  const filePath = path.join(pagesDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const parsed = parseMarkdown(fs.readFileSync(filePath, "utf8"));
  const title = String(parsed.data.title ?? slug);

  return {
    title,
    slug: String(parsed.data.slug ?? slug),
    description: String(parsed.data.description ?? ""),
    body: parsed.body,
    html: markdownToHtml(parsed.body),
  };
}
