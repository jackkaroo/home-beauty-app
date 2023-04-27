import React, { ChangeEvent, FC, useState } from 'react';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';

import styles from 'styles/pages/Auth.module.scss';
import Image from 'next/image';
import FaceImg from 'assets/register_image.jpeg';
import LoginForm from 'components/Auth/LoginForm';
import { USER } from '_types';
import { authorizeUser } from 'services/api/users';
import {
  setLocalToken,
  setUserId,
  setUserRole,
} from 'services/api/users/localStorage';

const Login: FC = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();

    authorizeUser(values)
      .then(async (data) => {
        if (data?.error) {
          throw new Error(data?.error?.message);
        }

        const user: USER = jwt_decode(data.token);
        setUserId(user.id);
        setUserRole(user.role);
        console.log(user);

        setLocalToken(data.token);
        await router.push('/');
        router.reload();
      })
      .catch((err) => {
        setError(err.toString());
      });
  };

  const updateField = (e: ChangeEvent<HTMLInputElement>): void => {
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
        <LoginForm
          handleSubmit={handleSubmit}
          updateField={updateField}
          values={values}
          error={error}
        />
      </div>
    </div>
  );
};

export default Login;
