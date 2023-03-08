import { useMemo } from 'react';
import { MDXRemote } from "next-mdx-remote";

import { getAllPosts, getPostContentBySlug } from '../lib/post-api';

import Image from 'next/image';
import Layout from "../components/layout";

export default function Post({ post }) {
  const components = useMemo(() => ({
    img: (props) => (
      <Image {...props} src={`/${post.slug}/images/${props.src}`} alt={props.alt} />
    ),
  }), [post]);

  return (
    <Layout>
      <div className='container px-4 mx-auto prose'>
        <h2 className='mb-6 text-xl font-bold text-left'>{post.data.title}</h2>
        <div className="">
          <MDXRemote {...post.content} components={{...components}} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPostContentBySlug(params.slug);

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
