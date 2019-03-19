import React, { Component } from 'react';
import http from 'axios';
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
    this.loadTvShows(this.props.page);
  }

  componentDidUpdate(prevProps) {
    if ((this.props.page !== prevProps.page) && this.state.isReady) {
      this.loadTvShows(this.props.page);
    }
  }


  loadTvShows(page) {
    this.setReadyState(false);

    http
      .get(`https://api.tvmaze.com/shows?page=${page}`)
      .then((response) => {
        window.scrollTo(0, 0);
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

  setReadyState(newIsReady) {
    this.setState({ isReady: newIsReady });
    this.props.onReady(newIsReady);
  }

  render() {
    return (

      <main className={styles.TvShows}>

        {!this.state.isReady
           && (
             <img
               src={Loading}
               className={styles.Ready}
             />
           )}

        {this.state.isReady
        && (
          <div>
            <Search onSearchQueryChanged={this.handleSearchQueryChanged} />
            <div className={styles.TvShowLibrary}>
              {this.state.tvShows.map(tvShowData => (
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
