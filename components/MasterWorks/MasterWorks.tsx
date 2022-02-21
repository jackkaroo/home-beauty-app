import React from 'react';
import {Master} from '../../_types';
import styles from './works.module.scss';

interface Props {
  master: Master;
}

const MasterWorks: React.FC<Props> = ({master}: Props) => {
  return (
    <div>
      <div className={styles.title}>My work</div>
      <div className={styles.works}>
        <div className={styles.image}/>
        <div>See more</div>
      </div>
    </div>
  );
};

export default MasterWorks;
