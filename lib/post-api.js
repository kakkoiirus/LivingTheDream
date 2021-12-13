import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import dayjs from 'dayjs';

const postDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs
    .readdirSync(postDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

export function getPostBySlug(slug) {
  const fullpath = join(postDirectory, slug, 'index.md');
  const fileContents = fs.readFileSync(fullpath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug, data, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();

  return slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => dayjs(a.data.date) - dayjs(b.data.date));
}
