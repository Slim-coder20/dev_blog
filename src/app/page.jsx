import Link from "next/link";
import { connectToDB } from "@/lib/utils/db/connectToDB";
import { getPosts } from "@/lib/serverMethods/blog/postMethods";

export default async function Home() {
  await connectToDB();

  const posts = await getPosts();
  console.log("real", posts);
  return (
    <div className="u-main-container u-padding-content-container">
      <header className="mb-14">
        <p className="t-section-title mb-3">Blog tech</p>
        <h1 className="t-main-title">
          Stay up to date with{" "}
          <span className="t-brand-accent text-3xl md:text-5xl">DEV+</span>
        </h1>
        <p className="t-main-subtitle">Tech news and useful knowledge</p>
      </header>

      <section>
        <div className="mb-6 flex items-center gap-4">
          <h2 className="text-lg font-semibold text-zinc-900">
            Latest articles
          </h2>
          <span className="hidden h-px max-w-xs flex-1 bg-zinc-200 sm:block" />
        </div>

        <ul className="u-articles-grid">
          {posts.map((post) => (
            <li className="group u-article-card" key={post.title}>
              <div className="u-article-card-accent" aria-hidden="true" />
              <article className="flex h-full flex-col p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <time
                    dateTime={new Date().toISOString()}
                    className="text-xs font-medium uppercase tracking-wide text-zinc-500"
                  >
                    {new Date().toLocaleDateString("en-EN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <Link
                    href={`/categories/author/${post.author}`}
                    className="inline-flex max-w-[55%] items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-lapis-lazuli"
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lapis-lazuli/10 text-xs font-semibold text-lapis-lazuli"
                      aria-hidden="true"
                    >
                      {post.author.charAt(0)}
                    </span>
                    <span className="truncate">{post.author}</span>
                  </Link>
                </div>

                <Link
                  href={`/article/${post.slug}`}
                  className="mt-auto text-lg font-semibold leading-snug text-zinc-900 transition-colors group-hover:text-lapis-lazuli"
                >
                  {post.title}
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
