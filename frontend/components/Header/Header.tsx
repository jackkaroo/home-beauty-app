import React, { FC, useEffect, useState } from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from 'components/Header/header.module.scss';
import { useRouter } from 'next/router';
import {
  getLocalToken, removeLocalToken, getUserRole, getUserId, removeUserId, removeUserRole,
} from 'services/api/users/localStorage';

const Header: FC = () => {
  const [isAuth, setAuth] = useState(false);

  const router = useRouter();
  const isHomePage = router.route === '/';

  const checkToken = (): void => {
    if (getLocalToken()) {
      setAuth(true);
    }
  };

  useEffect(() => {
    console.log('ds');
    checkToken();
  }, []);

  const handleLogout = (): void => {
    removeLocalToken();
    removeUserId();
    removeUserRole();
    window.location.reload();
  };

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        Logo
      </a>
      {
        isAuth ? (
          <div>
            <a className={isHomePage ? styles.white : undefined} href={`/cab/${getUserRole()}/${getUserId()}`}>My cab</a>
            <a onClick={handleLogout} className={isHomePage ? styles.white : undefined}>Logout</a>
          </div>
        ) : (
          <div>
            <a href="/login" className={isHomePage ? styles.white : undefined}>Sign in</a>
            <a href="/register" className={isHomePage ? styles.white : undefined}>Sign up</a>
          </div>
        )
      }
    </header>
  );
};

export default Header;
