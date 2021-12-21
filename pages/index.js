import Link from 'next/link';

import Layout from '../components/layout';
import { getAllPosts } from '../lib/post-api';
import styles from '../styles/Home.module.css';

export default function Home({ allPosts }) {

  return (
    <Layout>
      {allPosts.map(({ slug, data }, index) => (
        <div className="block" key={index}>
          <div className="columns">
            <div className="column  is-8  is-offset-2">
              <h3 className="title">
                {data.title}
              </h3>
              <div className="content">
                <Link href={encodeURIComponent(slug)} prefetch={false}>
                  <a>Читать дальше</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: { allPosts }
  }
}
