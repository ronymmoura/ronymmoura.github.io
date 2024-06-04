import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Page({ params: { lng } }: any) {
  const posts = await getPosts(lng);

  return (
    <ol>
      {posts.map(({ slug, title, publishDate, categories }) => (
        <li key={slug}>
          <h2>
            <Link href={`/${lng}/blog/page/${slug}`}>{title}</Link>
          </h2>
          <p>
            <strong>Published:</strong>{' '}
            {new Date(publishDate).toLocaleDateString()}{' '}
            <strong>Categories:</strong>{' '}
            {categories.map((cat, i) => `${i ? ', ' : ''}${cat}`)}
          </p>
        </li>
      ))}
    </ol>
  )
}