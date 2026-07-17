import { notFound } from "next/navigation";
import Image from "next/image";

import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || post.draft) {
    notFound();
  }

  return (
    <main>
      <section className="sobre-hero">
        <span className="section-label">{post.categoryLabel || "Blog"}</span>
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
        </div>
        <div
          className="cms-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
  );
}
