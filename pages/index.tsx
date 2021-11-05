import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Got Waax?</title>
        <meta
          name="description"
          content="Web page for South Bay Area based car supply vendor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <Image
            src="/static/red_car.jpg"
            alt="red sports car"
            width="5184"
            height="2376"
            priority
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
