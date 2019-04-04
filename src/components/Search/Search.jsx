/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { history } = this.props;
    return (
      <div>
        <label htmlFor="search" />
        <input
          id="search"
          className={styles.InputSearch}
          type="text"
          value={searchValue}
          onChange={this.handleChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              history.push(`/search/${e.target.value}`);
            }
          }}
          placeholder="Search"
        />
      </div>
    );
  }
}

export default Search;

Search.propTypes = {
  history: PropTypes.instanceOf(Object),
};

Search.defaultProps = {
  history: undefined,
};
