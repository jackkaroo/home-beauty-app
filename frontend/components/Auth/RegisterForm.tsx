import React from 'react';
import { RegisterUser } from 'pages/register';
import styles from './Auth.module.scss';

interface Props {
  handleSubmit: (e: any) => Promise<void>;
  values: RegisterUser;
  updateField: (e: any) => void;
  error: string;
}

const RegisterForm: React.FC<Props> = ({
  handleSubmit,
  values,
  updateField,
  error,
}: Props) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.name_wrapper}>
        <label className={styles.label}>
          FirstName
          <input
            value={values.name}
            name="name"
            onChange={updateField}
            className={styles.input_name}
          />
        </label>
        <label className={styles.label}>
          LastName
          <input
            value={values.surname}
            name="surname"
            onChange={updateField}
            className={styles.input_name}
          />
        </label>
      </div>
      <div className={styles.name_wrapper}>
        <label className={styles.label}>
          Phone
          <input
            value={values.phone}
            name="phone"
            onChange={updateField}
            className={styles.input_name}
          />
        </label>
        <label className={styles.label}>
          Client / Business
          <select
            className={styles.select}
            name="role"
            value={values.role}
            onChange={updateField}
          >
            <option value="CLIENT">Client</option>
            <option value="MASTER">Business</option>
          </select>
        </label>
      </div>
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
      <div>{error}</div>
      <button type="submit" onClick={handleSubmit} className={styles.button}>
        Submit
      </button>
      <div className={styles.subbutton}>
        Already have an account?
        <a href="/login">
          <b> Sign in</b>
        </a>
      </div>
    </form>
  );
};

export default RegisterForm;
