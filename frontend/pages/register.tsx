import React, { ChangeEvent, FC, useState } from 'react';

import { createUser } from 'services/api/users';
import { useRouter } from 'next/router';
import Image from 'next/image';

import styles from 'styles/pages/Auth.module.scss';
import RegisterForm from 'components/Auth/RegisterForm';
import FaceImg from 'assets/register_image.jpeg';

export interface RegisterUser {
  name: string;
  surname: string;
  phone: string;
  email: string;
  password: string;
  role: string;
  categoryId: number;
}

const Register: FC = () => {
  const router = useRouter();

  const [values, setValues] = useState<RegisterUser>({
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
    role: 'client',
    categoryId: 1,
  });
  console.log(values);
  const [error, setError] = useState('');

  const handleSubmit = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();

    createUser({
      ...values,
    })
      .then((data) => {
        if (data?.error) {
          throw new Error(data?.error?.message);
        }
        router.push('/login');
      })
      .catch((err) => {
        setError(err.toString());
      });
  };

  const updateField = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e?.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign up</h1>
      <div className={styles.content_wrapper}>
        <Image src={FaceImg} alt="" />
        <RegisterForm
          handleSubmit={handleSubmit}
          updateField={updateField}
          values={values}
          error={error}
        />
      </div>
    </div>
  );
};

export default Register;
