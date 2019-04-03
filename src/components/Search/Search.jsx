import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Search.scss';

class Search extends Component {
  state = {
    searchValue: '',
  }

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div className="Search">
        <input
          className={styles.InputSearch}
          type="text"
          value={searchValue}
          onChange={this.handleChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              // this.findTv();
            }
          }}
          placeholder="Search"
        />

        <Link to={`/search/${searchValue}`}>
          <button type="button" onClick={this.findTv}>
            findTv
          </button>
        </Link>
      </div>
    );
  }
}

export default Search;
