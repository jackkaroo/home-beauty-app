import React, { useState } from 'react';

import { createUser } from 'services/api/users';
import { useRouter } from 'next/router';

import styles from 'styles/Auth.module.scss';

const Register = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createUser({
      name: values.name,
      surname: values.surname,
      phone: values.phone,
      email: values.email,
      password: values.password,
      role: 'USER',
    })
      .then((user) => {
        console.log(user);

        router.push('/login');
        return user;
      })
      .catch(() => alert('Incorrect login or password. Try again.'));

    console.log(values);
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
          FirstName:
          <input
            value={values.name}
            name="name"
            onChange={updateField}
          />
        </label>
        <br />
        <label>
          LastName:
          <input
            value={values.surname}
            name="surname"
            onChange={updateField}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            value={values.phone}
            name="phone"
            onChange={updateField}
          />
        </label>
        <br />
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

export default Register;
