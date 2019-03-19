import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.scss';

class Menu extends Component {

  render() {
    return (
      <header className={styles.Header}>

        <Link to="/">
          <button type="button">
            TvShows
          </button>
        </Link>

      </header>

    );
  }
}

export default Menu;
