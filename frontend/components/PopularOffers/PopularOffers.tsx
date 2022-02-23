import React from 'react';
import Slider from 'react-slick';

import data from 'data/popular_offers';
import Offer from 'components/Offer/Offer';
import styles from 'components/PopularOffers/offers.module.scss';

interface Props {
  title: string;
}

const PopularOffers: React.FC<Props> = ({title}: Props) => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <Slider {...settings}>
        {data.map((item) => <Offer master={item} key={item.id}/>)}
      </Slider>
    </section>
  );
};

export default PopularOffers;

const getStaticProps = async () => {
  // get most populars masters
  const res = await fetch('https://.../posts');
  const dataK = await res.json();

  return {
    props: {
      dataK,
    },
  };
};