import React, { FC, useEffect, useState } from 'react';
import LockIcon from 'assets/icons/logo.svg';
import styles from 'components/Header/header.module.scss';
import { useRouter } from 'next/router';
import {
  getLocalToken,
  removeLocalToken,
  getUserRole,
  getUserId,
  removeUserId,
  removeUserRole,
} from 'services/api/users/localStorage';

const Header: FC = () => {
  const [isAuth, setAuth] = useState(false);

  const router = useRouter();
  const linkStyles = router.route === '/' ? styles.white : undefined;

  const checkToken = (): void => {
    if (getLocalToken()) {
      setAuth(true);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const handleLogout = (): void => {
    removeLocalToken();
    removeUserId();
    removeUserRole();
    window.location.reload();
    router.push('/');
  };

  return (
    <header className={styles.header}>
      <a className={linkStyles} href="/">
        Logo
      </a>
      {isAuth ? (
        <div>
          <a
            className={linkStyles}
            href={`/cab/${getUserRole()}/${getUserId()}`}
          >
            My cab
          </a>
          <a onClick={handleLogout} className={linkStyles}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          <a href="/login" className={linkStyles}>
            Sign in
          </a>
          <a href="/register" className={linkStyles}>
            Sign up
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
