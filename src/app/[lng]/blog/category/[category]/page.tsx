import { Pagination } from "@/components/Pagination";
import { Posts } from "@/components/Posts";
import { categories, type Category } from "@/lib/categories";
import {
  getPaginatedPostsByCategory,
  postsPerPage,
} from "@/lib/posts";
import { notFound } from "next/navigation";


export function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}

export default async function Category({
  params,
}: {
  params: { category: Category; lng: string; };
}) {
  const { category, lng } = params;

  // 404 if the category does not exist
  if (categories.indexOf(category) == -1) notFound();

  const { posts, total } = await getPaginatedPostsByCategory({
    category,
    page: 1,
    limit: postsPerPage,
    lng: lng,
  });

  return (
    <main>
      <h1>Category: {category}</h1>
      <Posts posts={posts} lng={lng} />

      <Pagination
        baseUrl={`/${lng}/blog/category/${category}`}
        page={1}
        perPage={postsPerPage}
        total={total}
      />
    </main>
  );
}