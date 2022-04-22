import React, { FC } from 'react';
import Head from 'next/head';

import PopularOffers from 'components/PopularOffers/PopularOffers';
import MainHero from 'components/HomePage/MainHero/MainHero';
import PopularCategories from 'components/HomePage/PopularCategories/PopularCategories';
import PromoteBlock from 'components/HomePage/PromoteBlock/PromoteBlock';
import Footer from 'components/Footer/Footer';

import styles from 'styles/Home.module.css';

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainHero />
        <div className="container">
          <PopularOffers title="Popular offers " />
          <PopularCategories />
          <PromoteBlock />
          <PromoteBlock isReverse />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
