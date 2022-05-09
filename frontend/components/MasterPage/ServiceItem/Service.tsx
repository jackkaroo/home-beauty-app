import React, { useEffect, useState } from 'react';
import { Service } from '_types';
import BookingModal from 'components/MasterPage/BookingModal/BookingModal';
import { getLocalToken } from 'services/api/users/localStorage';
import { useRouter } from 'next/router';
import styles from './Service.module.scss';

interface Props {
  service: Service;
  masterId: number;
}

const ServiceItem: React.FC<Props> = ({ masterId, service }: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  console.log(service);

  const handleOpen = (): void => {
    if (getLocalToken()) {
      setOpen(true);
    } else {
      router.push('/login');
    }
  };
  const handleClose = (): void => setOpen(false);

  return (
    <>
      <BookingModal
        open={open}
        selectedService={service}
        handleClose={handleClose}
      />
      <div className={styles.service_wrapper}>
        <div className={styles.service}>{service.name}</div>
        <div className={styles.booking}>
          <div>
            <div className={styles.price}>{service.price} UAH</div>
            <div className={styles.duration}>{service.duration}</div>
          </div>
          <button type="submit" className={styles.book} onClick={handleOpen}>
            BOOK
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
