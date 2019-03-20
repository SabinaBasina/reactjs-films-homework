import React, { Component } from 'react';
import http from 'axios';
import PropTypes from 'prop-types';
import TvShow from '../TvShow/TvShow';
import Search from '../Search/Search';
import styles from './TvShowPage.scss';
import Loading from './Loading.gif';

class TvShowPage extends Component {
  constructor(props) {
    super(props);

    this.handleSearchQueryChanged = this.handleSearchQueryChanged.bind(this);
    this.setReadyState = this.setReadyState.bind(this);

    this.state = {
      tvShows: [],
      isReady: false,
    };
  }

  componentDidMount() {
    const { page } = this.props;
    this.loadTvShows(page);
  }

  componentDidUpdate(prevProps) {
    const { page } = this.props;
    const { isReady } = this.state;
    if ((page !== prevProps.page) && isReady) {
      this.loadTvShows(page);
    }
  }

  setReadyState(newIsReady) {
    const { onReady } = this.props;
    this.setState({ isReady: newIsReady });
    onReady(newIsReady);
  }

  loadTvShows(page) {
    this.setReadyState(false);

    http
      .get(`https://api.tvmaze.com/shows?page=${page}`)
      .then((response) => {
        this.setState({ tvShows: response.data });
        this.setReadyState(true);
      });
  }

  handleSearchQueryChanged(newQuery) {
    if (newQuery === '') {
      this.loadTvShows(0);
    }

    this.setReadyState(false);

    http
      .get(`https://api.tvmaze.com/search/shows?q=${newQuery}`)
      .then((response) => {
        this.setState({ tvShows: response.data.map(data => data.show) });
        this.setReadyState(true);
      });
  }


  render() {
    const { isReady, tvShows } = this.state;
    return (

      <main className={styles.TvShows}>

        {!isReady
           && (
             <img
               src={Loading}
               className={styles.Ready}
               alt=""
             />
           )}

        {isReady
        && (
          <div>
            <Search onSearchQueryChanged={this.handleSearchQueryChanged} />
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
  onReady: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
