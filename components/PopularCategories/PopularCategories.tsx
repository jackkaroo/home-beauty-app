import React from 'react';

import styles from './categories.module.scss';
import Category from './Category/Category';

const PopularCategories = () => {
  const categories = [
    {
      name: "Manicure",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Cosmetology",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Massage",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Pedicure",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Haircut",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "Laser",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ]
  return (
    <section>
      <h2>Most popular categories</h2>
      <div className={styles.wrapper}>
        {categories.map((item) => <Category category={item} key={item.name} />)}
      </div>
    </section>
  );
};

export default PopularCategories;

const getStaticProps = async () => {
  // get all categories
  const res = await fetch('https://.../posts')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
