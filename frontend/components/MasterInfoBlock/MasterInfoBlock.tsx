import React from 'react';

import {Master} from '_types';
import styles from 'components/MasterInfoBlock/info_block.module.scss';

interface Props {
  master: Master;
}

const MasterInfoBlock: React.FC<Props> = ({master}: Props) => {
  const workingHours = [
    {
      day: 'Monday',
      time: '10:00 - 20:00',
    },
    {
      day: 'Tuesday',
      time: '10:00 - 20:00',
    },
    {
      day: 'Wednesday',
      time: '10:00 - 20:00',
    },
    {
      day: 'Thursday',
      time: '10:00 - 20:00',
    },
    {
      day: 'Friday',
      time: '10:00 - 20:00',
    },
    {
      day: 'Saturday',
      time: '10:00 - 20:00',
    },
    {
      day: 'Sunday',
      time: 'Closed',
    },
  ];

  return (
    <div className={styles.info_block}>
      <div className={styles.title}>Info</div>
      <hr className={styles.hr}/>
      <div className="flex">
        <div className={styles.rate}>{master.rate}</div>
        <div className={styles.reviews}>
          {master.reviews}
          {' '}
          reviews
        </div>
      </div>
      <hr className={styles.hr}/>
      <div>
        <div className={styles.subtitle}>Contacts</div>
        <div className={styles.text}>{master.phone}</div>
      </div>
      <hr className={styles.hr}/>
      <div>
        <div className={styles.subtitle}>Working hours</div>
        {workingHours.map((day) => (
          <div className={styles.working} key={day.day}>
            <div>{day.day}</div>
            <div>{day.time}</div>
          </div>
        ))}
      </div>
      <hr className={styles.hr}/>
      <div>
        <div className={styles.subtitle}>Prices</div>
        <div className={styles.text}>{master.price}</div>
      </div>
      <hr className={styles.hr}/>
      <div>
        <div className={styles.subtitle}>Social media</div>
        <div className={styles.text}>{master.nickname}</div>
      </div>
    </div>
  );
};

export default MasterInfoBlock;
