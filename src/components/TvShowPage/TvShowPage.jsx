import React, { Component } from 'react';
// import http from 'axios';
import PropTypes from 'prop-types';
import TvShow from '../TvShow/TvShow';
import Search from '../Search';
import styles from './TvShowPage.scss';

class TvShowPage extends Component {
  componentDidMount() {
    const { loadTvShows } = this.props;
    loadTvShows();
  }

  componentDidUpdate(prevProps) {
    const { page, loadTvShows, tvShows } = this.props;
    if ((page !== prevProps.page) && tvShows) {
      loadTvShows();
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
              <TvShow data={tvShowData} />
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
  page: PropTypes.number,
  tvShows: PropTypes.arrayOf(PropTypes.array).isRequired,
};

TvShowPage.defaultProps = {
  loadTvShows: () => { },
  page: 0,
};
