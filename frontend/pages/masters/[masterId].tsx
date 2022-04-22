import React, { FC } from 'react';
import Header from 'components/Header/Header';
import RateSquare from 'components/atoms/RateSquare/RateSquare';

import Footer from 'components/Footer/Footer';
import GrayButton from 'components/atoms/GrayButton/GrayButton';
import styles from 'pages/masters/master.module.scss';
import MasterWorks from 'components/MasterPage/MasterWorks/MasterWorks';
import MasterServices from 'components/MasterPage/MasterServices/MasterServices';
import MasterInfoBlock from 'components/MasterPage/MasterInfoBlock/MasterInfoBlock';

const master = {
  id: 2,
  firstName: 'Maria',
  lastName: 'Avramenko',
  address: 'Kreschatyk street, Kyiv',
  rate: '5.0',
  reviews: 171,
  price: '$$',
  category: 'nails',
  nickname: 'maria007',
  phone: '+123456789',
  services: [
    {
      service: 'manicure',
      duration: '1,5 hour',
      price: '120',
    },
    {
      service: 'manicure',
      duration: '1,5 hour',
      price: '120',
    },
    {
      service: 'manicure',
      duration: '1,5 hour',
      price: '120',
    },
  ],
  background: '#C4BDAC',
};

// get master from static props
const Master: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.title_row}>
          <div className={styles.background} style={{ background: master.background }} />
          <div className={styles.flex}>
            <div className={styles.master_avatar} />
            <div>
              <span className={styles.title}>
                {master.firstName}
                {' '}
                {master.lastName}
              </span>
              <div className={styles.desc}>
                <span>@maria007</span>
                <span>manicure, haircut, spa</span>
              </div>
            </div>
          </div>
          <div className={styles.flex}>
            <RateSquare rate={master.rate} reviews={master.reviews} />
            <GrayButton text="Call" />
            <GrayButton text="Write a message" />
          </div>
        </div>
        <div className={styles.inner_wrapper}>
          <div>
            <MasterWorks master={master} />
            <MasterServices master={master} />
          </div>
          <MasterInfoBlock master={master} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Master;

const getStaticProps = async () => {
  // get master by id
  const res = await fetch('https://.../posts');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
