import React, { FC, useState } from 'react';

import { createUser } from 'services/api/users';
import { useRouter } from 'next/router';
import Image from 'next/image';

import styles from 'styles/Auth.module.scss';
import RegisterForm from 'components/Auth/RegisterForm';
import FaceImg from 'assets/register_image.jpeg';

const Register: FC = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e): Promise<void> => {
    e.preventDefault();

    try {
      await createUser({
        ...values,
        role: 'USER',
      });
      await router.push('/login');
    } catch (err) {
      console.log('Incorrect login or password. Try again.');
    }

    // createUser({
    //   name: values.name,
    //   surname: values.surname,
    //   phone: values.phone,
    //   email: values.email,
    //   password: values.password,
    //   role: 'USER',
    // })
    //   .then((user) => {
    //     router.push('/login');
    //     return user;
    //   })
    //   .catch(() => console.log('Incorrect login or password. Try again.'));
  };

  const updateField = (e): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Sign up</h1>
      <div className={styles.content_wrapper}>
        <Image src={FaceImg} alt="" />
        <RegisterForm handleSubmit={handleSubmit} updateField={updateField} values={values} />
      </div>
    </div>
  );
};

export default Register;
