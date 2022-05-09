import React from 'react';
import Image from 'next/image';

import { Master, Service } from '_types';
import RateSquare from 'components/atoms/RateSquare/RateSquare';
import styles from 'components/MasterPage/ShortInfo/ShortInfo.module.scss';
import ServiceItem from 'components/MasterPage/ServiceItem/Service';

interface Props {
  master: Master;
}

const ShortInfo: React.FC<Props> = ({ master }: Props) => {
  console.log(master);
  const slicedServices = master.services?.slice(0, 3);

  return (
    <div className={styles.master_wrapper}>
      <a className={styles.master_image} href={`/masters/${master.id}`}>
        {' '}
        {/*<Image src={master.image} />*/}
      </a>
      <div className={styles.master_info}>
        <a className={styles.title_row} href={`/masters/${master.id}`}>
          <div>
            <div className={styles.title}>
              {master.name} {master.surname}
            </div>
            <div className={styles.address}>{master.address}</div>
          </div>
          <RateSquare rate={master.rate} reviews={master.reviews} />
        </a>
        <div className={styles.master_services}>
          {slicedServices?.map((service: Service) => (
            <ServiceItem
              service={service}
              key={`short_${service.name}`}
              masterId={master.id}
            />
          ))}
          <a className={styles.see_more} href={`/masters/${master.id}`}>
            see more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShortInfo;
