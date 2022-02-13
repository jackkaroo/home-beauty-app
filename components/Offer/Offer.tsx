import React from 'react';

import styles from './offer.module.scss';
import {Master} from '../../_types';

interface Props {
  master: Master;
}

const Offer: React.FC<Props> = ({master}: Props) => {
  return (
    <div className={styles.offer_wrapper}>
      <div className={styles.image}/>
      <div className={styles.first_line}>
        <div>
          {master.rate}
          <div className={styles.reviews}>{master.reviews} reviews</div>
        </div>
        <div><b>{master.price}</b></div>
      </div>
      <div className={styles.flex}>
        <div>{master.firstName} {master.lastName}</div>
        <div className={styles.category}>{master.category}</div>
      </div>
      <div className={styles.address}>{master.address}</div>
    </div>
  );
};

export default Offer;
