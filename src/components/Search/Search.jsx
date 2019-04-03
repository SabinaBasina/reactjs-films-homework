import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Search.scss';

class Search extends Component {
  tvInput = React.createRef();

  findTv = () => {
    const { onFindTv } = this.props;
    onFindTv(this.tvInput.current.value);
    this.tvInput.current.value = '';
  }

  render() {
    return (
      <div className="Search">
        <input
          className={styles.InputSearch}
          type="text"
          ref={this.tvInput}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              this.findTv();
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
  onFindTv: PropTypes.func,
};

Search.defaultProps = {
  onFindTv: () => { },
};
