export type Frontmatter = Record<string, string | boolean | undefined>;

export type ParsedMarkdown = {
  data: Frontmatter;
  body: string;
};

function cleanStringValue(value: string) {
  return value
    .trim()
    .replace(/^["']/, "")
    .replace(/["']$/, "")
    .trim();
}

function parseValue(value: string) {
  const trimmed = value.trim();

  if (/^[>|][+-]?$/.test(trimmed)) {
    return "";
  }

  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  return cleanStringValue(trimmed);
}

export function parseMarkdown(source: string): ParsedMarkdown {
  const match = source.match(
    /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/,
  );

  if (!match) {
    return {
      data: {},
      body: source.trim(),
    };
  }

  const data: Frontmatter = {};
  let currentKey: string | null = null;

  for (const line of match[1].split(/\r?\n/)) {
    if (
      /^\s+/.test(line) &&
      currentKey &&
      typeof data[currentKey] === "string"
    ) {
      data[currentKey] = `${data[currentKey]} ${line.trim()}`.trim();
      continue;
    }

    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      currentKey = null;
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1);

    if (!key) {
      continue;
    }

    data[key] = parseValue(value);
    currentKey = key;
  }

  for (const key of Object.keys(data)) {
    if (typeof data[key] === "string") {
      data[key] = cleanStringValue(data[key] as string);
    }
  }

  return {
    data,
    body: match[2].trim(),
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeHref(value: string) {
  const href = value.trim();

  if (
    href.startsWith("/") ||
    href.startsWith("#") ||
    href.startsWith("https://") ||
    href.startsWith("http://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  return "#";
}

function inlineMarkdown(value: string) {
  const links: string[] = [];

  const textWithLinkTokens = value.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, label: string, href: string) => {
      const safeHref = escapeHtml(sanitizeHref(href));
      const safeLabel = escapeHtml(label);

      const token = `__MARKDOWN_LINK_${links.length}__`;

      links.push(`<a href="${safeHref}">${safeLabel}</a>`);

      return token;
    },
  );

  let html = escapeHtml(textWithLinkTokens)
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");

  links.forEach((link, index) => {
    html = html.replace(`__MARKDOWN_LINK_${index}__`, link);
  });

  return html;
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const html: string[] = [];

  let paragraphLines: string[] = [];
  let listItems: string[] = [];
  let listType: "ul" | "ol" | null = null;

  function flushParagraph() {
    if (paragraphLines.length === 0) {
      return;
    }

    html.push(
      `<p>${inlineMarkdown(paragraphLines.join(" "))}</p>`,
    );

    paragraphLines = [];
  }

  function flushList() {
    if (listItems.length === 0 || !listType) {
      listItems = [];
      listType = null;
      return;
    }

    html.push(
      `<${listType}>${listItems.join("")}</${listType}>`,
    );

    listItems = [];
    listType = null;
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const unorderedListMatch = line.match(/^[-*]\s+(.+)$/);
    const orderedListMatch = line.match(/^\d+\.\s+(.+)$/);

    if (unorderedListMatch) {
      flushParagraph();

      if (listType && listType !== "ul") {
        flushList();
      }

      listType = "ul";

      listItems.push(
        `<li>${inlineMarkdown(unorderedListMatch[1])}</li>`,
      );

      continue;
    }

    if (orderedListMatch) {
      flushParagraph();

      if (listType && listType !== "ol") {
        flushList();
      }

      listType = "ol";

      listItems.push(
        `<li>${inlineMarkdown(orderedListMatch[1])}</li>`,
      );

      continue;
    }

    flushList();

    if (line.startsWith("#### ")) {
      flushParagraph();

      html.push(
        `<h4>${inlineMarkdown(line.slice(5))}</h4>`,
      );

      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();

      html.push(
        `<h3>${inlineMarkdown(line.slice(4))}</h3>`,
      );

      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();

      html.push(
        `<h2>${inlineMarkdown(line.slice(3))}</h2>`,
      );

      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();

      html.push(
        `<h1>${inlineMarkdown(line.slice(2))}</h1>`,
      );

      continue;
    }

    const blockquoteMatch = line.match(/^>\s+(.+)$/);

    if (blockquoteMatch) {
      flushParagraph();

      html.push(
        `<blockquote><p>${inlineMarkdown(
          blockquoteMatch[1],
        )}</p></blockquote>`,
      );

      continue;
    }

    if (/^(---|\*\*\*)$/.test(line)) {
      flushParagraph();
      html.push("<hr>");
      continue;
    }

    paragraphLines.push(line);
  }

  flushParagraph();
  flushList();

  return html.join("\n");
}