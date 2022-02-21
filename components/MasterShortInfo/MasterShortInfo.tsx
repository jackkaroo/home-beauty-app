import React from 'react';

import styles from './master.module.scss';
import {Master, Service} from '../../_types';
import MasterService from './MasterService/MasterService';
import RateSquare from '../../components/atoms/RateSquare/RateSquare';

interface Props {
  master: Master;
}

const MasterShortInfo: React.FC<Props> = ({master}: Props) => {
  const slicedServices = master.services.slice(0, 3);

  return (
    <div className={styles.master_wrapper}>
      <a className={styles.master_image} href={`/masters/${master.id}`}></a>
      <div className={styles.master_info}>
        <a className={styles.title_row} href={`/masters/${master.id}`}>
          <div>
            <div className={styles.title}>{master.firstName} {master.lastName}</div>
            <div className={styles.address}>{master.address}</div>
          </div>
          <RateSquare rate={master.rate} reviews={master.reviews}/>
        </a>
        <div className={styles.master_services}>
          {slicedServices.map((service: Service) =>
            <MasterService service={service} />
          )}
          <a className={styles.see_more} href={`/masters/${master.id}`}>see more</a>
        </div>
      </div>
    </div>
  );
};

export default MasterShortInfo;

