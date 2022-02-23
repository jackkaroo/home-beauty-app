import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Logo from 'assets/logo.svg';
import styles from 'components/Header/header.module.scss';
import { getLocalToken, removeLocalToken } from 'services/api/base';

const Header = () => {
  const [isAuth, setAuth] = useState(false);

  const checkToken = () => {
    if (getLocalToken('home_token')) {
      setAuth(true);
    }
  };
  // doesnt work
  useEffect(() => {
    checkToken();
    window.addEventListener('storage', checkToken);

    return () => {
      window.removeEventListener('storage', checkToken);
    };
  }, []);

  const handleLogout = () => {
    removeLocalToken('home_token');
    window.location.reload();
  };

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        <Image src={Logo} alt="logo" />
      </a>
      {
        isAuth ? (
          <div>
            <a>My cab</a>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <a onClick={handleLogout}>Logout</a>
          </div>
        ) : (
          <div>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        )
      }
    </header>
  );
};

export default Header;
