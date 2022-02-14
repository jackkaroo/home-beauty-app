import React from 'react';

import Head from 'next/head';

import PopularOffers from '../components/PopularOffers/PopularOffers';
import MainHero from '../components/MainHero/MainHero';

import styles from '../styles/Home.module.css';
import PopularCategories from '../components/PopularCategories/PopularCategories';
import PromoteBlock from '../components/PromoteBlock/PromoteBlock';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainHero />
        <div className={styles.container}>
          <PopularOffers title="Popular offers "/>
          <PopularCategories />
          <PromoteBlock />
          <PromoteBlock isReverse />
        </div>
      </main>
    </div>
  );
};

export default Home;
