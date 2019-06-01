import React, { Component } from 'react';

import styles from './Login.scss';

class Login extends Component {
  state = {}

  render() {
    return (
      <form className={styles.form}>
        <p className={styles.form_header}>Sign In</p>
        <input
          type="email"
          className={styles.form_email}
          placeholder="Email"
        />
        <input
          type="password"
          className={styles.form_password}
          placeholder="Password"
        />
        <input type="submit" className={styles.form_button} value="Sign in" />
      </form>
    );
  }
}

export default Login;
