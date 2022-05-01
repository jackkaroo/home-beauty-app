import React, { useEffect, useState } from 'react';
import { Service } from '_types';
import BookingModal from 'components/MasterPage/BookingModal/BookingModal';
import slots from 'data/slots';
import styles from './Service.module.scss';

interface Props {
  service: Service;
  masterId: string;
  shortInfo?: boolean;
}

const ServiceItem: React.FC<Props> = ({ masterId, service, shortInfo }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <>
      <BookingModal
        open={open}
        selectedService={service}
        handleClose={handleClose}
      />
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
          {shortInfo && <button type="submit" className={styles.book} onClick={handleOpen}>BOOK</button>}
          {!shortInfo && <input type="checkbox" className={styles.checkbox} />}
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
