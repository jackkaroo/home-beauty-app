import React from 'react';
import Image from 'next/image';

import { Master } from '_types';
import styles from 'components/PopularOffers/Offer/offer.module.scss';

interface Props {
  master: Master;
}

const Offer: React.FC<Props> = ({ master }: Props) => {
  return (
    <a className={styles.offer_wrapper} href={`/masters/${master.id}`}>
      <div className={styles.image}>
        {master.avatar ? (
          <Image src={master.avatar} width={400} height={200} />
        ) : (
          <></>
        )}
      </div>
      <div className={styles.first_line}>
        <div>
          {master.rate}
          <div className={styles.reviews}>{master.reviews} reviews</div>
        </div>
        <div>
          <b>{master.price}</b>
        </div>
      </div>
      <div className={styles.flex}>
        <div>
          {master.name} {master.surname}
        </div>
        <div className={styles.category}>{master.category}</div>
      </div>
      <div className={styles.address}>{master.address}</div>
    </a>
  );
};

export default Offer;
