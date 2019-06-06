import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Menu.scss';

class Menu extends Component {
  componentDidMount = async () => {
    const { loadIsAuthentication } = this.props;
    if (localStorage.token) await loadIsAuthentication(true);
  }

  signOut = async () => {
    const { loadIsAuthentication } = this.props;
    await loadIsAuthentication(false);
    localStorage.clear();
  }

  render() {
    const { isAuthentication } = this.props;
    return (
      <header className={styles.header}>

        <Link to="/" className={styles.tvShowsLink}>
          <button type="button" className={styles.tvShows}>
            TvShows
          </button>
        </Link>

        <div className={styles.auth}>
          {!isAuthentication && (
            <Link to="/login">
              <button type="button" className={styles.log}>
                Login
              </button>
            </Link>
          )}

          {isAuthentication && (
            <Link to="/profile">
              <button type="button" className={styles.profile}>
                Profile
              </button>
            </Link>
          )}

          {isAuthentication && (
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

Menu.propTypes = {
  loadIsAuthentication: PropTypes.func,
  isAuthentication: PropTypes.bool,
};

Menu.defaultProps = {
  loadIsAuthentication: () => { },
  isAuthentication: false,
};
