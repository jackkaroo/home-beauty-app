import React, { FC, useEffect, useState } from 'react';
import styles from 'components/Header/header.module.scss';
import { getLocalToken, removeLocalToken } from 'services/api/base';
import { useRouter } from 'next/router';

const Header: FC = () => {
  const [isAuth, setAuth] = useState(false);

  const router = useRouter();
  const isHomePage = router.route === '/';

  const checkToken = (): void => {
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

  const handleLogout = (): void => {
    removeLocalToken('home_token');
    window.location.reload();
  };

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        {/* <Image src={Logo} alt="logo"/> */}
      </a>
      {
        isAuth ? (
          <div>
            <a>My cab</a>
            <a onClick={handleLogout}>Logout</a>
          </div>
        ) : (
          <div>
            <a href="/login" className={isHomePage && styles.white}>Sign in</a>
            <a href="/register" className={isHomePage && styles.white}>Sign up</a>
          </div>
        )
      }
    </header>
  );
};

export default Header;
