/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import styles from './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      value: '',
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
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
