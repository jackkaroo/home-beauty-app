import React from 'react';
import { Master, Service } from '_types';
import ServiceItem from 'components/MasterPage/ServiceItem/Service';
import styles from './master_services.module.scss';

interface Props {
  master: Master;
}

const MasterServices: React.FC<Props> = ({ master }: Props) => {
  return (
    <div>
      <div className={styles.title}>Services</div>
      {master?.services?.map((service: Service) => (
        <ServiceItem
          service={service}
          key={service.name}
          masterId={master.id}
        />
      ))}
    </div>
  );
};

export default MasterServices;
