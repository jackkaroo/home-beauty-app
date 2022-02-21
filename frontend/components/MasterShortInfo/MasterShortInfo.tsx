import React from 'react';

import {Master, Service} from '_types';
import RateSquare from 'components/atoms/RateSquare/RateSquare';
import MasterService from 'components/MasterShortInfo/MasterService';
import styles from 'components/MasterShortInfo/master.module.scss';

interface Props {
  master: Master;
}

const MasterShortInfo: React.FC<Props> = ({master}: Props) => {
  const slicedServices = master.services.slice(0, 3);

  return (
    <div className={styles.master_wrapper}>
      <a className={styles.master_image} href={`/masters/${master.id}`}/>
      <div className={styles.master_info}>
        <a className={styles.title_row} href={`/masters/${master.id}`}>
          <div>
            <div className={styles.title}>
              {master.firstName}
              {' '}
              {master.lastName}
            </div>
            <div className={styles.address}>{master.address}</div>
          </div>
          <RateSquare rate={master.rate} reviews={master.reviews}/>
        </a>
        <div className={styles.master_services}>
          {slicedServices.map((service: Service) => <MasterService service={service} key={service.service}/>)}
          <a className={styles.see_more} href={`/masters/${master.id}`}>see more</a>
        </div>
      </div>
    </div>
  );
};

export default MasterShortInfo;
