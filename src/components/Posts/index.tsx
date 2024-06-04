import { type Post } from "@/lib/posts";
import Link from "next/link";

export function Posts({ posts, lng }: { posts: Post[]; lng: string }) {
  return (
    <ol>
      {posts.map(({ slug, title, publishDate, categories }) => (
        <li key={slug}>
          <h2>
            <Link href={`/${lng}/blog/page/${slug}`}>{title}</Link>
          </h2>
          <p>
            <strong>Published:</strong>{" "}
            {new Date(publishDate).toLocaleDateString()}{" "}
            <strong>Categories:</strong>{" "}
            {categories.map((cat, i) => `${i ? ", " : ""}${cat}`)}
          </p>
        </li>
      ))}
    </ol>
  );
}