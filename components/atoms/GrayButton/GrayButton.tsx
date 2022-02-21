import React from 'react';

import styles from './gray_button.module.scss';

interface Props {
  text: string;
}

const GrayButton: React.FC<Props> = ({ text }: Props) => {
  return (
    <a className={styles.button} href="/">
      {text}
    </a>
  );
};

export default GrayButton;
