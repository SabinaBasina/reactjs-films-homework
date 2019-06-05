import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import http from 'axios';

import styles from './Login.scss';

class Login extends Component {
  state = {
    name: '',
    password: '',
  }

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  }

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  signIn = async () => {
    const { loadIsAuthentication, history } = this.props;
    const { name, password } = this.state;
    await http.post('/login', {
      name,
      password,
    })
      .then((response) => {
        loadIsAuthentication(true);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.payload.id);
        history.push('/');
      })
      .catch(error => console.log(error));
  }

  render() {
    const { name, password } = this.state;
    return (
      <form className={styles.form}>
        <p className={styles.form_header}>Sign In</p>
        <input
          type="text"
          className={styles.form_name}
          placeholder="Name"
          value={name}
          onChange={this.handleChangeName}
        />
        <input
          type="password"
          className={styles.form_password}
          placeholder="Password"
          value={password}
          onChange={this.handleChangePassword}
        />
        <input
          type="button"
          className={styles.form_button}
          value="Sign in"
          onClick={this.signIn}
        />
      </form>
    );
  }
}

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.instanceOf(Object),
  loadIsAuthentication: PropTypes.func,
};

Login.defaultProps = {
  history: undefined,
  loadIsAuthentication: () => { },
};
