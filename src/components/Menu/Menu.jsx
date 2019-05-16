import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

import styles from './Menu.scss';
import { checkAuthentication, login, logout } from '../../auth/helpers';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = { isAuthenticated: null };

    this.checkAuthentication = checkAuthentication.bind(this);
    this.login = login.bind(this);
    this.logout = logout.bind(this);
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
    console.log('rege');
  }

  render() {
    const { isAuthenticated } = this.state;
    console.log('isAuthenticated', isAuthenticated);
    console.log(this.props.auth);
    return (
      <header className={styles.header}>

        <Link to="/">
          <button type="button" className={styles.tvShows}>
            TvShows
          </button>
        </Link>

        {!isAuthenticated && (
          <Link to="/login">
            <button type="button" className={styles.login} onClick={this.login}>
              Login
            </button>
          </Link>
        )}

        {isAuthenticated && (
          <Link to="/">
            <button type="button" className={styles.login} onClick={this.logout}>
              Logout
            </button>
          </Link>
        )}

      </header>
    );
  }
}

export default withAuth(Menu);
