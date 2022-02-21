import React from 'react';
import Image from 'next/image';

import Arrow from '../../../assets/arrow.png';
import styles from '../categories.module.scss';
import {Category} from '../../../_types';


interface Props {
  category: Category;
}

const Category: React.FC<Props> = ({category}: Props) => {
  return (
    <a className={styles.category_wrapper} href={`/categories/${category.id}`}>
      <div className={styles.name}>{category.name}</div>
      <div>{category.desc}</div>
      <div className={styles.arrow}>
        <Image src={Arrow} alt="" />
      </div>
    </a>
  );
};

export default Category;
