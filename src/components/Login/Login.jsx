import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    const { loadIsAuthentication } = this.props;
    const { name, password } = this.state;
    await loadIsAuthentication(name, password);
    const { history, isAuthentication } = this.props;
    if (isAuthentication) {
      history.push('/');
      sessionStorage.setItem('name', name);
    }
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
  isAuthentication: PropTypes.instanceOf(Object),
};

Login.defaultProps = {
  history: undefined,
  loadIsAuthentication: () => { },
  isAuthentication: null,
};
