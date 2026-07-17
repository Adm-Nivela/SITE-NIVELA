export type Frontmatter = Record<string, string | boolean | undefined>;

export type ParsedMarkdown = {
  data: Frontmatter;
  body: string;
};

function parseValue(value: string) {
  const trimmed = value.trim();

  if (/^>[+-]?$/.test(trimmed)) {
    return "";
  }

  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  return trimmed.replace(/^["']|["']$/g, "");
}

export function parseMarkdown(source: string): ParsedMarkdown {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    return { data: {}, body: source.trim() };
  }

  const data: Frontmatter = {};
  let currentKey: string | null = null;

  for (const line of match[1].split(/\r?\n/)) {
    if (/^\s+/.test(line) && currentKey && typeof data[currentKey] === "string") {
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

    if (key) {
      data[key] = parseValue(value);
      currentKey = key;
    }
  }

  return { data, body: match[2].trim() };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function inlineMarkdown(value: string) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const html: string[] = [];
  let listItems: string[] = [];

  function flushList() {
    if (listItems.length === 0) {
      return;
    }

    html.push(`<ul>${listItems.join("")}</ul>`);
    listItems = [];
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      continue;
    }

    const listMatch = line.match(/^[-*]\s+(.+)$/);

    if (listMatch) {
      listItems.push(`<li>${inlineMarkdown(listMatch[1])}</li>`);
      continue;
    }

    flushList();

    if (line.startsWith("### ")) {
      html.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`);
    } else if (line.startsWith("## ")) {
      html.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`);
    } else if (line.startsWith("# ")) {
      html.push(`<h1>${inlineMarkdown(line.slice(2))}</h1>`);
    } else {
      html.push(`<p>${inlineMarkdown(line)}</p>`);
    }
  }

  flushList();

  return html.join("\n");
}
