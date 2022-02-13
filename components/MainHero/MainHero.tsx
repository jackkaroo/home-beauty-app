import React from 'react';
import Image from 'next/image';

import ImageBg from '../../assets/hero_bg.jpeg';
import styles from './hero.module.scss';

const MainHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src={ImageBg} alt="bg" />
      </div>
      <div className={styles.text_wrapper}>
        <h1 className={styles.title}>Find your beauty service</h1>
      </div>
    </section>
  );
};

export default MainHero;
