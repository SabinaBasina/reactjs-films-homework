import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TvShow from '../TvShow';
import Search from '../Search';
import styles from './TvShowPage.scss';

class TvShowPage extends Component {
  state = {
    readyTvShows: false,
  }

  componentDidMount() {
    const {
      page,
      loadTvShows,
      searchValue,
      getSearchResult,
      isReadyTvShows,
    } = this.props;

    if (searchValue) {
      getSearchResult(searchValue);
    } else {
      loadTvShows(page);
    }
    this.onReady(isReadyTvShows);
  }

  componentDidUpdate(prevProps) {
    const {
      page,
      loadTvShows,
      searchValue,
      getSearchResult,
      isReadyTvShows,
    } = this.props;

    if (page !== prevProps.page) {
      loadTvShows(page);
    }
    if (searchValue !== prevProps.searchValue) {
      getSearchResult(searchValue);
    }
    if (isReadyTvShows !== prevProps.isReadyTvShows) {
      this.onReady(isReadyTvShows);
    }
  }

  onReady = (newIsReady) => {
    this.setState({ readyTvShows: newIsReady });
  }

  render() {
    const { tvShows } = this.props;
    const { readyTvShows } = this.state;

    if (!tvShows) {
      return null;
    }

    return (
      <main className={styles.TvShows}>

        {readyTvShows
            && (
            <div>
              <Search />
              <div className={styles.TvShowLibrary}>
                {tvShows.map(tvShowData => (
                  <TvShow key={tvShowData.id} data={tvShowData} />
                ))}
              </div>
            </div>
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
