import React, { FC } from 'react';

import CategoryItem from 'components/HomePage/PopularCategories/CategoryItem/CategoryItem';
import styles from './categories.module.scss';
import { Category } from '_types';

interface Props {
  categories: Category[];
}

const PopularCategories: FC<Props> = ({ categories }) => {
  return (
    <section>
      <h2>Most popular categories</h2>
      <div className={styles.wrapper}>
        {categories?.map((item) => (
          <CategoryItem category={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
