import React, { Component } from 'react';
import http from 'axios';

import styles from './Login.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  signIn = async () => {
    const { email, password } = this.state;
    const response = await http.post('http://localhost:3000/login', {
      email,
      password,
    });
    console.log(response.data);
  }

  render() {
    const { email, password } = this.state;
    console.log(email, password);
    return (
      <form className={styles.form}>
        <p className={styles.form_header}>Sign In</p>
        <input
          type="text"
          className={styles.form_email}
          placeholder="Name"
          value={email}
          onChange={this.handleChangeEmail}
        />
        <input
          type="password"
          className={styles.form_password}
          placeholder="Password"
          value={password}
          onChange={this.handleChangePassword}
        />
        <input
          type="submit"
          className={styles.form_button}
          value="Sign in"
          onClick={this.signIn}
        />
      </form>
    );
  }
}

export default Login;
