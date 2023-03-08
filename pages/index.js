import Layout from '../components/layout';
import PostCard from '../components/postCard';

import { getAllPosts } from '../lib/post-api';

export default function Home({ allPosts }) {
  return (
    <Layout>
      <div className="container grid grid-cols-1 gap-4 px-4 py-4 mx-auto md:grid-cols-2 lg:gap-8 lg:grid-cols-3">
        {allPosts.map(({ slug, data }) => (
          <PostCard key={slug} slug={slug} data={data} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: { allPosts }
  }
}
