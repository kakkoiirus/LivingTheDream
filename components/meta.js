import Head from 'next/head';

import { BLOG_NAME } from "../shared/constants";

export default function Meta(props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>{BLOG_NAME}</title>
      <meta name="Description" content="Живущие мечтой"></meta>
    </Head>
  )
}
