import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from "next-mdx-remote/serialize";
import imageSize from "rehype-img-size";
import dayjs from 'dayjs';

const postDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs
    .readdirSync(postDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

export function getPostBySlug(slug, withContent = true) {
  const fullpath = join(postDirectory, slug, 'index.md');
  const fileContents = fs.readFileSync(fullpath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug, data, content: withContent ? content : '' };
}

export async function getPostContentBySlug(slug) {
  const { data, content } = getPostBySlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[imageSize, { dir: `public/${slug}/images` }]],
      parseFrontmatter: true,
    },
  });

  return { slug, data, content: mdxSource };
}

export function getAllPosts() {
  const slugs = getPostSlugs();

  return slugs
    .map((slug) => getPostBySlug(slug, false))
    .sort((a, b) => dayjs(a.data.date) - dayjs(b.data.date));
}
