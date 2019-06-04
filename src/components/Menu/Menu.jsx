import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.scss';

class Menu extends Component {
  signOut = () => {
    sessionStorage.clear();
  }

  render() {
    return (
      <header className={styles.header}>

        <Link to="/" className={styles.tvShowsLink}>
          <button type="button" className={styles.tvShows}>
            TvShows
          </button>
        </Link>

        <div className={styles.auth}>
          {!sessionStorage.name && (
            <Link to="/login">
              <button type="button" className={styles.log}>
                Login
              </button>
            </Link>
          )}

          {sessionStorage.name && (
            <Link to="/login">
              <button type="button" className={styles.log} onClick={this.signOut}>
                Logout
              </button>
            </Link>
          )}

        </div>

      </header>
    );
  }
}

export default Menu;
