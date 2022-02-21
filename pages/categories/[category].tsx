import React from 'react';
import { useRouter } from 'next/router'

import PopularOffers from '../../components/PopularOffers/PopularOffers';
import styles from './category.module.scss';
import {data} from '../../data/popular_offers';
import MasterShortInfo from '../../components/MasterShortInfo/MasterShortInfo';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <Header />
      <div className={styles.offers_wrapper}>
        <PopularOffers title={`${capitalizeFirstLetter(category)} - Popular offers`} />
      </div>
      <div className={styles.divider} />
      <div className={styles.container}>
        <div className={styles.btn_wrapper}>
          <a className={styles.filter_btn}>Sort By</a>
          <a className={styles.filter_btn}>Filters</a>
        </div>
        <div>
          {data.map((item) => <MasterShortInfo master={item} key={item.id} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;

function capitalizeFirstLetter(string) {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
}

const getStaticProps = async () => {
  // get masters by categories
  const res = await fetch('https://.../posts')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
