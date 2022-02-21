import React from 'react';

import styles from 'components/atoms/RateSquare/rate.module.scss';

interface Props {
  rate: string;
  reviews: number;
}

const RateSquare: React.FC<Props> = ({rate, reviews}: Props) => {
  return (
    <div className={styles.rate_wrapper}>
      <div className={styles.rate}>{rate}</div>
      <div className={styles.reviews}>
        {reviews}
        {' '}
        reviews
      </div>
    </div>
  );
};

export default RateSquare;
