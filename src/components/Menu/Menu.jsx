import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.scss';

const Menu = () => (
  <header className={styles.header}>

    <Link to="/" className={styles.tvShowsLink}>
      <button type="button" className={styles.tvShows}>
        TvShows
      </button>
    </Link>

    <div className={styles.auth}>
      <Link to="/login">
        <button type="button" className={styles.log}>
          Login
        </button>
      </Link>
    </div>

  </header>

);

export default Menu;
