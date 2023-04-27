import React, { FC } from 'react';
import Image from 'next/image';

import ImageBg from 'assets/hero_bg.jpeg';
import styles from 'components/HomePage/MainHero/hero.module.scss';

const MainHero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src={ImageBg} alt="bg" />
      </div>
      <div className={styles.text_wrapper}>
        <div className={styles.home}>HomeBeauty</div>
        <div className={styles.title}>Find your beauty service</div>
      </div>
    </section>
  );
};

export default MainHero;
