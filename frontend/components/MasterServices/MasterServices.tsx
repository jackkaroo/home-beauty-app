import React from 'react';
import {Master, Service} from '_types';
import MasterService from 'components/MasterServices/Service';
import styles from 'components/MasterServices/master_services.module.scss';

interface Props {
  master: Master;
}

const MasterServices: React.FC<Props> = ({master}: Props) => {
  return (
    <div>
      <div className={styles.title}>Services</div>
      {master.services.map((service: Service) => <MasterService service={service} key={service.service}/>)}
      <a className={styles.book} href="/">BOOK</a>
    </div>
  );
};

export default MasterServices;
