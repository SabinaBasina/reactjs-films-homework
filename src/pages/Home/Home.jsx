/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Home.scss';
import TvShowPage from '../../components/TvShowPage';
import Loading from '../../images/Loading.gif';

class Home extends Component {
  render() {
    const { isReadyTvShows, pageNumber } = this.props;

    return (

      <main>

        <TvShowPage page={Number(pageNumber)} />

        {isReadyTvShows === false
          && (
            <img
              src={Loading}
              className={styles.Ready}
              alt="Loading page"
            />
          )}

        {isReadyTvShows
          && (
            <div className={styles.Pager}>

              {pageNumber > 0
                && (
                  <Link to={`/page/${Number(pageNumber) - 1}`}>
                    <button type="button">
                      &larr; Previous Page
                    </button>
                  </Link>
                )
              }

              <Link to={`/page/${Number(pageNumber) + 1}`}>
                <button type="button">
                  Next Page &rarr;
                </button>
              </Link>

            </div>
          )}


      </main>

    );
  }
}

export default Home;

Home.propTypes = {
  isReadyTvShows: PropTypes.bool,
  pageNumber: PropTypes.string,
};

Home.defaultProps = {
  isReadyTvShows: false,
  pageNumber: '0',
};
