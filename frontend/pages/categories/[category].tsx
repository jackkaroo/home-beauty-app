import React, { FC } from 'react';
import { useRouter } from 'next/router';

import PopularOffers from 'components/PopularOffers/PopularOffers';
import data from 'data/popular_offers';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import styles from 'pages/categories/category.module.scss';
import ShortInfo from 'components/MasterPage/ShortInfo/ShortInfo';

const capitalizeFirstLetter = (
  string: string | undefined | string[]
): string => {
  if (typeof string !== 'string') {
    return '';
  }
  return string?.charAt(0).toUpperCase() + string?.slice(1);
};

const Category: FC = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <Header />
      <div className={styles.offers_wrapper}>
        <PopularOffers
          title={`${capitalizeFirstLetter(category)} - Popular offers`}
        />
      </div>
      <div className={styles.divider} />
      <div className={styles.container_bg}>
        <div className={styles.container}>
          <div className={styles.btn_wrapper}>
            <a className={styles.filter_btn}>Sort By</a>
            <a className={styles.filter_btn}>Filters</a>
          </div>
          <div>
            {data.map((item) => (
              <ShortInfo master={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;

const getStaticProps = async () => {
  // get masters by categories
  const res = await fetch('https://.../posts');
  const dataK = await res.json();

  return {
    props: {
      dataK,
    },
  };
};
