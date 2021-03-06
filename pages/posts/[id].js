import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import date from "../../components/date";
import Date from "../../components/date";

export default function Post({ postData }) {
  return (
    <Layout>
      {
        <Head>
          <title>{postData.title}</title>
        </Head>
      }
      {postData.title}
      <br />
      {postData.id}
      <br />
      {<Date dateString={postData.date} />}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
