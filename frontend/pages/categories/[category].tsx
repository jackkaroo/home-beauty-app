import React, { FC } from 'react';
import PopularOffers from 'components/PopularOffers/PopularOffers';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import styles from 'styles/pages/category.module.scss';
import ShortInfo from 'components/MasterPage/ShortInfo/ShortInfo';
import { GetStaticProps } from 'next';
import { API_URL } from 'services/api/base';
import { Master } from '_types';

interface Props {
  masters: Master[];
  popularMasters: Master[];
  category: any;
}

const Category: FC<Props> = ({ masters, category, popularMasters }) => {
  return (
    <div>
      <Header />
      <div className={styles.offers_wrapper}>
        <PopularOffers
          popularMasters={popularMasters}
          title={`${category.name} - Popular offers`}
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
            {masters?.map((item) => (
              <ShortInfo master={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const categoryId = context?.params?.category;
  const mastersRes = await fetch(`${API_URL}/users/category/${categoryId}`);
  const masters = await mastersRes.json();

  const categoryRes = await fetch(`${API_URL}/categories/${categoryId}`);
  const category = await categoryRes.json();

  const popularMastersJson = await fetch(`${API_URL}/users/popular`);
  const popularMasters = await popularMastersJson.json();
  return {
    props: { masters, category, popularMasters },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: '1' } },
      { params: { category: '2' } },
      { params: { category: '3' } },
    ],
    fallback: false,
  };
}

export default Category;
