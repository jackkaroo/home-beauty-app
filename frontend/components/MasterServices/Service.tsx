import React from 'react';
import {Service} from '_types';
import styles from 'components/MasterServices/master_services.module.scss';

interface Props {
  service: Service;
}

const MasterService: React.FC<Props> = ({service}: Props) => {
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
        <input type="checkbox" className={styles.checkbox}/>
      </div>
    </div>
  );
};

export default MasterService;
