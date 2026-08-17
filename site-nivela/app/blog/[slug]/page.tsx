import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL = "https://nivela.eng.br";

function absoluteUrl(value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,

    alternates: {
      canonical: `/blog/${post.slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date || undefined,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.draft) {
    notFound();
  }

  const articleUrl = `${SITE_URL}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: articleUrl,
    mainEntityOfPage: articleUrl,

    ...(post.date
      ? {
          datePublished: post.date,
        }
      : {}),

    ...(post.coverImage
      ? {
          image: absoluteUrl(post.coverImage),
        }
      : {}),

    ...(post.categoryLabel
      ? {
          articleSection: post.categoryLabel,
        }
      : {}),

    author: {
      "@type": "Organization",
      name: "Nivela Território & Patrimônio",
      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",
      name: "Nivela Território & Patrimônio",
      url: SITE_URL,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="sobre-hero">
        <span className="section-label">
          {post.categoryLabel || "Blog"}
        </span>

        <h1>{post.title}</h1>

        {post.description ? <p>{post.description}</p> : null}
      </section>

      <article className="section blog-article">
        {post.coverImage ? (
          <div className="blog-article-cover">
            <Image
              alt={post.title}
              className="blog-cover-image"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 760px"
              src={post.coverImage}
            />
          </div>
        ) : null}

        <div className="blog-article-meta">
          {post.date ? <span>{formatPostDate(post.date)}</span> : null}

          <span>{post.readTime}</span>

          <span>Por Nivela Território & Patrimônio</span>
        </div>

        <div
          className="cms-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      <section className="cta-band">
        <h2>
          Esse conteúdo se parece com a situação do seu imóvel?{" "}
          <em>Entenda o próximo passo técnico.</em>
        </h2>

        <div className="cta-btns">
          <Link href="/servicos" className="btn-petrol">
            Conhecer os Serviços
          </Link>

          <Link
            href="/contato?assunto=diagnostico-tecnico"
            className="btn-gold"
          >
            Solicitar Diagnóstico Técnico
          </Link>
        </div>
      </section>
    </main>
  );
}