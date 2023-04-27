import React from 'react';
import Image from 'next/image';

import PromoteImg from 'assets/promote_image1.jpeg';
import PromoteImg2 from 'assets/promote_image2.jpeg';
import styles from 'components/HomePage/PromoteBlock/promote_block.module.scss';

interface Props {
  isReverse?: boolean;
}

const PromoteBlock: React.FC<Props> = ({ isReverse }: Props) => {
  return (
    <section className={isReverse ? styles.wrapper_right : styles.wrapper}>
      <div className={isReverse ? styles.image_right : styles.image}>
        <Image src={isReverse ? PromoteImg : PromoteImg2} alt="" />
      </div>
      <div className={styles.text_wrapper}>
        <div className={styles.title}>
          Got your business?
          <br /> Manage it with HomeBeauty
        </div>
        <div className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec, in
          consectetur pharetra in ipsum dignissim.
        </div>
        <div className={styles.button}>
          <a href="/register">GET STARTED</a>
        </div>
      </div>
    </section>
  );
};

export default PromoteBlock;
