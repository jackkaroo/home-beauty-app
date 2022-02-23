import React, { useState } from 'react';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import { authorizeUser } from 'services/api/users';
import { useRouter } from 'next/router';
import { USER } from '_types';
import { setLocalToken } from 'services/api/base';

import styles from 'styles/Auth.module.scss';

const Login = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    authorizeUser({ email: values.email, password: values.password })
      .then((data) => {
        const user: USER = jwt_decode(data.token);

        setLocalToken('home_token', data.token);

        router.push('/');
        return user;
      })
      .catch(() => alert('Incorrect login or password. Try again.'));
  };

  const updateField = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            value={values.email}
            name="email"
            onChange={updateField}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={values.password}
            name="password"
            type="password"
            onChange={updateField}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
