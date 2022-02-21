import React from 'react';
import styles from 'components/PromoteBlock/promote_block.module.scss';

interface Props {
  isReverse?: boolean;
}

const PromoteBlock: React.FC<Props> = ({isReverse}: Props) => {
  return (
    <section className={isReverse ? styles.wrapper_right : styles.wrapper}>
      <div className={styles.image}/>
      <div className={styles.text_wrapper}>
        <div className={styles.title}>
          Got your business?
          <br/>
          {' '}
          Manage it with HomeBeauty
        </div>
        <div className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec, in consectetur
          pharetra in ipsum dignissim.
        </div>
        <div className={styles.button}><a href="/">GET STARTED</a></div>
      </div>
    </section>
  );
};

export default PromoteBlock;
