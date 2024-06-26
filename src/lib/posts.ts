import { readdir } from "fs/promises";
import { type Category } from "./categories";

export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  categories: Category[];
}

export const postsPerPage = 3 as const;

export async function getPosts(lng: string): Promise<Post[]> {
  // Retrieve slugs from post routes
  const slugs = (
    await readdir('./src/posts', { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  console.log({slugs});

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../posts/${name}/${lng}.mdx`);
      return { slug: name, ...metadata };
    })
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

export async function getPostsByCategory({
  category,
  lng
}: {
  category: Category;
  lng: string;
}): Promise<Post[]> {
  const allPosts = await getPosts(lng);

  // Filter posts by specified category
  const posts = allPosts.filter(
    (post) => post.categories.indexOf(category) !== -1
  );

  return posts;
}

export async function getPaginatedPosts({
  lng,
  page,
  limit,
}: {
  lng: string;
  page: number;
  limit: number;
}): Promise<{ posts: Post[]; total: number }> {
  const allPosts = await getPosts(lng);

  // Get a subset of posts pased on page and limit
  const paginatedPosts = allPosts.slice((page - 1) * limit, page * limit);

  return {
    posts: paginatedPosts,
    total: allPosts.length,
  };
}

export async function getPaginatedPostsByCategory({
  page,
  limit,
  category,
  lng
}: {
  page: number;
  limit: number;
  category: Category;
  lng: string;
}): Promise<{ posts: Post[]; total: number }> {
  const allCategoryPosts = await getPostsByCategory({ category, lng });

  // Get a subset of posts pased on page and limit
  const paginatedCategoryPosts = allCategoryPosts.slice(
    (page - 1) * limit,
    page * limit
  );

  return {
    posts: paginatedCategoryPosts,
    total: allCategoryPosts.length,
  };
}