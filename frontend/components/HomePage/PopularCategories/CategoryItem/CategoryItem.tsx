import React from 'react';
import Image from 'next/image';

import Arrow from 'assets/icons/arrow.png';
import { Category } from '_types';
import styles from 'components/HomePage/PopularCategories/categories.module.scss';

interface Props {
  category: Category;
}

const CategoryItem: React.FC<Props> = ({ category }: Props) => {
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

export default CategoryItem;
