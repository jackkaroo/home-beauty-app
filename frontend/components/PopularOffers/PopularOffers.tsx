import React from 'react';
import Slider from 'react-slick';
import Offer from 'components/PopularOffers/Offer/Offer';
import styles from 'components/PopularOffers/offers.module.scss';
import { Master } from '_types';

interface Props {
  title: string;
  popularMasters: Master[];
}

const PopularOffers: React.FC<Props> = ({ title, popularMasters }: Props) => {
  const popularMastersSliced = popularMasters?.slice(0, 4);

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
        {popularMastersSliced?.map((item) => (
          <Offer master={item} key={item.id} />
        ))}
      </Slider>
    </section>
  );
};

export default PopularOffers;
