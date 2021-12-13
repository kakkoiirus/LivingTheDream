import ReactMarkdown from 'react-markdown';

import { getAllPosts, getPostBySlug } from '../lib/post-api';

import Layout from "../components/layout";

export default function Post({ post }) {
  return (
    <Layout>
      <div className="content">
        <ReactMarkdown
          transformImageUri={(src) => `/${post.slug}/images/${src}`}
          components={{
            img: ({node, ...props}) => <img className="image" {...props} />
          }}
        >
          {post.content}
        </ReactMarkdown>
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
