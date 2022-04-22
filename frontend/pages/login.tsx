import React, { FC, useState } from 'react';
// eslint-disable-next-line camelcase
import { authorizeUser } from 'services/api/users';
import { useRouter } from 'next/router';

import styles from 'styles/Auth.module.scss';
import { setLocalToken } from 'services/api/base';
import Image from 'next/image';
import FaceImg from 'assets/register_image.jpeg';
import LoginForm from 'components/Auth/LoginForm';

const Login: FC = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e): Promise<void> => {
    e.preventDefault();

    try {
      const data = await authorizeUser(values);
      // const user: USER = jwt_decode(data.token);
      setLocalToken('home_token', data.token);
      await router.push('/');
    } catch (err) {
      console.log('Incorrect login or password. Try again.');
    }

    // authorizeUser(values)
    //   .then((data) => {
    //     const user: USER = jwt_decode(data?.token);
    //
    //     setLocalToken('home_token', data.token);
    //
    //     router.push('/');
    //     return user;
    //   })
    //   .catch(() => alert('Incorrect login or password. Try again.'));
  };

  const updateField = (e): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign in</h1>
      <div className={styles.content_wrapper}>
        <Image src={FaceImg} alt="" />
        <LoginForm handleSubmit={handleSubmit} updateField={updateField} values={values} />
      </div>
    </div>
  );
};

export default Login;
