import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TvShow from '../TvShow';
import Search from '../Search';
import styles from './TvShowPage.scss';

class TvShowPage extends Component {
  componentDidMount() {
    const { loadTvShows, searchValue, getSearchResult } = this.props;
    if (searchValue) {
      getSearchResult(searchValue);
    } else {
      loadTvShows();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      page,
      loadTvShows,
      searchValue,
      getSearchResult,
    } = this.props;

    if (page !== prevProps.page) {
      loadTvShows();
    }
    if (searchValue !== prevProps.searchValue) {
      getSearchResult(searchValue);
    }
  }

  render() {
    const { tvShows } = this.props;
    if (!tvShows) {
      return null;
    }

    return (

      <main className={styles.TvShows}>

        <div>
          <Search />
          <div className={styles.TvShowLibrary}>
            {tvShows.map(tvShowData => (
              <TvShow key={tvShowData.id} data={tvShowData} />
            ))}
          </div>
        </div>

      </main>

    );
  }
}

export default TvShowPage;

TvShowPage.propTypes = {
  loadTvShows: PropTypes.func,
  getSearchResult: PropTypes.func,
  page: PropTypes.number,
  searchValue: PropTypes.string,
  tvShows: PropTypes.instanceOf(Object),
};

TvShowPage.defaultProps = {
  loadTvShows: () => { },
  getSearchResult: () => { },
  page: 0,
  searchValue: null,
  tvShows: undefined,
};
