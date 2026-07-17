import Link from "next/link";
import Image from "next/image";

import { getAllPosts } from "@/lib/posts";

const fallbackColors = ["#0f3c57", "#1a4a2e", "#2f4f4f"];

function getInitials(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="section blog-preview-section">
      <span className="section-label">Do blog</span>

      <h2 className="section-title">
        Conteúdo técnico para decisões seguras
      </h2>

      <p className="section-sub">
        Publicamos artigos que educam proprietários, construtoras e advogados
        sobre regularização, topografia e seus direitos.
      </p>

      <div className="blog-grid">
        {posts.map((post, index) => (
          <article className="blog-card" key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="blog-card-link">
              <div
                className="blog-card-img"
                style={{ backgroundColor: fallbackColors[index % fallbackColors.length] }}
              >
                {post.coverImage ? (
                  <Image
                    alt={post.title}
                    className="blog-cover-image"
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    src={post.coverImage}
                  />
                ) : (
                  <span className="blog-card-icon" aria-hidden="true">
                    {getInitials(post.categoryLabel || post.title)}
                  </span>
                )}
                {post.categoryLabel ? (
                  <span className="cat-tag">{post.categoryLabel}</span>
                ) : null}
              </div>

              <div className="blog-card-body">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="blog-meta">{post.readTime}</div>
                <span className="read-more">Ler artigo</span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="blog-preview-action">
        <Link href="/blog" className="btn-outline btn-outline-dark">
          Ver todos os artigos
        </Link>
      </div>
    </section>
  );
}
