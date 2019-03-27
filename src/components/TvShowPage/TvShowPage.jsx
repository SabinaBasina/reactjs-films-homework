import React, { Component } from 'react';
// import http from 'axios';
import PropTypes from 'prop-types';
import TvShow from '../TvShow/TvShow';
import Search from '../Search';
import styles from './TvShowPage.scss';
import Loading from './Loading.gif';

class TvShowPage extends Component {
  state = {
    isReady: false,
  };


  componentDidMount() {
    const { loadTvShows } = this.props;
    loadTvShows();
    this.setReadyState(true);
  }

  componentDidUpdate(prevProps) {
    const { page, loadTvShows } = this.props;
    const { isReady } = this.state;
    if ((page !== prevProps.page) && isReady) {
      loadTvShows();
    }
  }

  setReadyState = (newIsReady) => {
    const { onReady } = this.props;
    this.setState({ isReady: newIsReady });
    onReady(newIsReady);
  }

  render() {
    // const { isReady } = this.state;
    const { tvShows } = this.props;

    if (!tvShows) {
      return null;
    }
    return (

      <main className={styles.TvShows}>

        {!tvShows
          && (
            <img
              src={Loading}
              className={styles.Ready}
              alt="Loading page"
            />
          )}

        {tvShows
          && (
            <div>
              <Search />
              <div className={styles.TvShowLibrary}>
                {tvShows.map(tvShowData => (
                  <TvShow data={tvShowData} />
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
  onReady: PropTypes.func,
  page: PropTypes.number,
  tvShows: PropTypes.arrayOf(PropTypes.array).isRequired,
};

TvShowPage.defaultProps = {
  loadTvShows: () => { },
  onReady: () => { },
  page: 0,
};
