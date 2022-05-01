import React from 'react';

import CategoryItem from 'components/HomePage/PopularCategories/CategoryItem/CategoryItem';
import styles from './categories.module.scss';

const PopularCategories = () => {
  const categories = [
    {
      id: 'nails',
      name: 'Manicure',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 'cosmetology',
      name: 'Cosmetology',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 'massage',
      name: 'Massage',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 'makeup',
      name: 'MakeUp',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 'haircut',
      name: 'Haircut',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 'laser',
      name: 'Laser',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
  return (
    <section>
      <h2>Most popular categories</h2>
      <div className={styles.wrapper}>
        {categories.map((item) => <CategoryItem category={item} key={item.id} />)}
      </div>
    </section>
  );
};

export default PopularCategories;

const getStaticProps = async () => {
  // get all categories
  const res = await fetch('https://.../posts');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
