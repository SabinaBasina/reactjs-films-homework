import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

import styles from './Menu.scss';
import { checkAuthentication } from '../../auth/helpers';

class Menu extends Component {
  state = { isAuthenticated: null }

  async componentDidMount() {
    checkAuthentication();
  }

  async componentDidUpdate() {
    checkAuthentication();
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <header className={styles.header}>

        <Link to="/">
          <button type="button" className={styles.tvShows}>
            TvShows
          </button>
        </Link>

        {!isAuthenticated && (
          <Link to="/login">
            <button type="button" className={styles.login}>
              Login
            </button>
          </Link>
        )}

        {isAuthenticated && (
          <Link to="/">
            <button type="button" className={styles.login}>
              Logout
            </button>
          </Link>
        )}

      </header>
    );
  }
}

export default withAuth(Menu);
