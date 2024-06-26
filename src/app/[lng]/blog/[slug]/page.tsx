import { readFileSync, readdirSync } from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const slugs = (
    readdirSync('./src/posts', { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  return slugs.map(({ name }) => ({ slug: name }))
}

export default async function RemoteMdxPage({ params: { lng, slug } }: any) {
  const markdown = readFileSync(`./src/posts/${slug}/${lng}.mdx`);
  return <MDXRemote source={markdown} />
}