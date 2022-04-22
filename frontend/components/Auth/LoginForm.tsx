import React from 'react';
import styles from './Auth.module.scss';

interface Props {
  handleSubmit,
  values,
  updateField
}

const RegisterForm: React.FC<Props> = ({ handleSubmit, values, updateField }: Props) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Email
        <input
          value={values.email}
          name="email"
          onChange={updateField}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          value={values.password}
          name="password"
          type="password"
          onChange={updateField}
          className={styles.input}
        />
      </label>
      <button type="submit" onClick={handleSubmit} className={styles.button}>Submit</button>
      <div className={styles.subbutton}>
        Dont have an account?
        <a href="/login"><b> Join free</b></a>
      </div>
    </form>
  );
};

export default RegisterForm;
