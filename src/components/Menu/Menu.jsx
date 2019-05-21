import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

import styles from './Menu.scss';
import { checkAuthentication, login, logout } from '../../auth/helpers';

class Menu extends Component {
    state = { authenticated: null };

    checkAuthentication = checkAuthentication.bind(this);

    login = login.bind(this);

    logout = logout.bind(this);

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    render() {
      const { authenticated, user } = this.state;
      return (
        <header className={styles.header}>

          <Link to="/" className={styles.tvShowsLink}>
            <button type="button" className={styles.tvShows}>
              TvShows
            </button>
          </Link>

          <div className={styles.auth}>
            {!authenticated && (
              <Link to="/login">
                <button type="button" className={styles.log} onClick={this.login}>
                  Login
                </button>
              </Link>
            )}

            {authenticated && (
              <Link to="/profile">
                <button type="button" className={styles.profile}>
                  {user && user.name}
                </button>
              </Link>
            )}

            {authenticated && (
              <Link to="/login">
                <button type="button" className={styles.log} onClick={this.logout}>
                  Logout
                </button>
              </Link>
            )}
          </div>

        </header>
      );
    }
}

export default withAuth(Menu);
