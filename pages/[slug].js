import ReactMarkdown from 'react-markdown';

import { getAllPosts, getPostBySlug } from '../lib/post-api';

import Layout from "../components/layout";

export default function Post({ post }) {
  return (
    <Layout>
      <div className='prose container mx-auto px-4'>
        <h2 className='mb-6 text-xl text-left font-bold'>{post.data.title}</h2>
        <div className="">
          <ReactMarkdown
            transformImageUri={(src) => `/${post.slug}/images/${src}`}
            components={{
              img: ({node, ...props}) => <img className="image" {...props} />
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

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
