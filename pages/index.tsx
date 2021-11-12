import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Nav from '../components/Nav';
import ImgHeader from '../components/ImgHeader';
import HorizontalCard from '../components/HorizontalCard';

const paragraphs = [
  'Reprehenderit sint esse sunt ut nisi tempor qui ut non. Nisi elit Lorem aliquip laborum commodo minim. Est sunt voluptate exercitation ullamco ea pariatur sint qui do aliqua ea.',
  'Ipsum voluptate amet consequat fugiat occaecat laboris excepteur excepteur anim sint mollit aute amet. Dolor veniam est ipsum id adipisicing pariatur cillum consequat. Ullamco cillum magna culpa sunt sit culpa.',
  'Cillum velit consectetur voluptate ea dolore cillum ad ullamco nisi id irure voluptate cillum nostrud. Ex quis ad minim ipsum laboris non esse quis et exercitation. Est minim ut et adipisicing labore ut eu deserunt labore do pariatur aliqua sit velit. Excepteur excepteur id ipsum reprehenderit officia anim ad veniam proident ipsum ea. Elit pariatur exercitation laborum laborum elit pariatur ut magna.',
];

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
      <ImgHeader imgUrl="/static/yellow_car_driving.jpg" overlay="Welcome!" />
      <main className={styles.main}>
        <section className={styles.cardSection}>
          <HorizontalCard
            img="/static/red_car.jpg"
            title="Lorem Ipsum!"
            paragraphs={paragraphs}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
