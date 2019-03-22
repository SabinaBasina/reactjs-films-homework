import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.scss';

class Search extends Component {
  state = {
    value: '',
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleClick = () => {
    const { onSearchQueryChanged } = this.props;
    const { value } = this.state;
    onSearchQueryChanged(value);
  }

  render() {
    const { value } = this.state;
    return (
      <div className="Search">
        <input
          className={styles.InputSearch}
          type="text"
          value={value}
          onChange={this.handleChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              this.handleClick();
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
  onSearchQueryChanged: PropTypes.func.isRequired,
};
