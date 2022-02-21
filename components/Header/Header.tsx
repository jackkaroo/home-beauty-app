import React from 'react';
import Image from 'next/image'

import Logo from '../../assets/logo.png';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        <Image src={Logo} alt="logo" />
      </a>
    </header>
  );
};

export default Header;
