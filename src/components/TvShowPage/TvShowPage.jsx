import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import TvShow from '../TvShow';
import Search from '../Search';
import styles from './TvShowPage.scss';

class TvShowPage extends Component {
  componentDidMount() {
    const {
      page,
      loadTvShows,
      searchValue,
      getSearchResult,
    } = this.props;

    if (searchValue) {
      getSearchResult(searchValue);
    } else {
      loadTvShows(page);
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
      loadTvShows(page);
    }
    if (searchValue !== prevProps.searchValue) {
      getSearchResult(searchValue);
    }
  }

  render() {
    const { tvShows, isReadyTvShows } = this.props;
    if (!tvShows) {
      return null;
    }

    return (
      <main className={styles.tvshows}>

        {isReadyTvShows
            && (
            <Fragment>
              <Search />
              <div className={styles.library}>
                {tvShows.map(tvShowData => (
                  <TvShow key={tvShowData.id} data={tvShowData} />
                ))}
              </div>
            </Fragment>
            )}

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
  isReadyTvShows: PropTypes.bool,
};

TvShowPage.defaultProps = {
  loadTvShows: () => { },
  getSearchResult: () => { },
  page: 0,
  searchValue: null,
  tvShows: undefined,
  isReadyTvShows: false,
};
