import React from 'react';
import { Service } from '_types';
import styles from './master.module.scss';

interface Props {
  service: Service;
}

const MasterService: React.FC<Props> = ({ service }: Props) => {
  return (
    <div className={styles.service_wrapper}>
      <div className={styles.service}>{service.service}</div>
      <div className={styles.booking}>
        <div>
          <div className={styles.price}>
            {service.price}
            {' '}
            UAH
          </div>
          <div className={styles.duration}>{service.duration}</div>
        </div>
        <a className={styles.book} href="/">BOOK</a>
      </div>
    </div>
  );
};

export default MasterService;
