import React from "react";
import { getPost } from "@/lib/serverMethods/blog/postMethods";

export default async function page({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return (
    <main className="u-main-container u-padding-content-container">
      <article className="u-article-card grid grid-cols-1 md:grid-cols-2">
        <div className="u-article-card-accent" aria-hidden="true" />
        <div className="flex h-full flex-col p-6">
          <header className="mb-6">
            <h1 className="text-4xl mb-3 ">{post.title}</h1>
            <p>{post.markdownArticle}</p>
            <p className="text-sm text-zinc-500">{post.author}</p>
          </header>
        </div>
      </article>
    </main>
  );
}
