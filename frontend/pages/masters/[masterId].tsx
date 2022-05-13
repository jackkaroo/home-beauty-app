import React, { FC } from 'react';
import Header from 'components/Header/Header';
import RateSquare from 'components/atoms/RateSquare/RateSquare';

import Footer from 'components/Footer/Footer';
import GrayButton from 'components/atoms/GrayButton/GrayButton';
import styles from 'styles/pages/master.module.scss';
import MasterWorks from 'components/MasterPage/MasterWorks/MasterWorks';
import MasterServices from 'components/MasterPage/MasterServices/MasterServices';
import InfoBlock from 'components/MasterPage/InfoBlock/InfoBlock';
import { API_URL } from 'services/api/base';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Master } from '_types';

interface Props {
  master: Master;
}

const Master: FC<Props> = ({ master }) => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.title_row}>
          <div className={styles.background} />
          <div className={styles.flex}>
            <div className={styles.master_avatar} />
            <div>
              <div className={styles.title}>
                {master.name} {master.surname}
              </div>
              <div className={styles.desc}>
                <span>{master?.nickname}</span>
                <span>{master?.category?.name}</span>
              </div>
            </div>
          </div>
          <div className={styles.flex}>
            <RateSquare rate={master?.rate} reviews={master?.reviews} />
            <GrayButton text="Call" />
            <GrayButton text="Write a message" />
          </div>
        </div>
        <div className={styles.inner_wrapper}>
          <div>
            <MasterWorks master={master} />
            <MasterServices master={master} />
          </div>
          <InfoBlock master={master} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const masterId = context?.params?.masterId;
  const masterJson = await fetch(`${API_URL}/users/${masterId}`);
  const master = await masterJson.json();
  return {
    props: { master },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { masterId: '1' } },
      { params: { masterId: '2' } },
      { params: { masterId: '3' } },
    ],
    fallback: false,
  };
};

export default Master;
