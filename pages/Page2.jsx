import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Page2.module.scss";

const Page2 = () => {
  return (
    <Layout>
      <div className={styles.page2}>
        <Head>
          <title>Page2</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`script is running`)}
        />
        <div className={styles.title}>
          Welcome to Page 2<br></br>
        </div>

        <Link href={"/"}>
          <a className={styles.home}>&larr; back to HOME</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Page2;
