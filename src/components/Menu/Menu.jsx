import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.scss';

const Menu = () => (
  <header className={styles.Header}>

    <Link to="/">
      <button type="button">
        TvShows
      </button>
    </Link>

  </header>

);

export default Menu;
