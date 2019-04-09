/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Home.scss';
import TvShowPage from '../../components/TvShowPage';
import Loader from '../../components/Loader';

class Home extends Component {
  render() {
    const { isReadyTvShows, pageNumber } = this.props;

    return (

      <main>

        <TvShowPage page={pageNumber} />

        <Loader loading={!isReadyTvShows} />

        {isReadyTvShows
          && (
            <div className={styles.pager}>

              {pageNumber > 0
                && (
                  <Link to={`/page/${pageNumber - 1}`}>
                    <button type="button">
                      &larr; Previous Page
                    </button>
                  </Link>
                )
              }

              <Link to={`/page/${pageNumber + 1}`}>
                <button type="button">
                  Next Page &rarr;
                </button>
              </Link>

            </div>
          )
        }


      </main>

    );
  }
}

export default Home;

Home.propTypes = {
  isReadyTvShows: PropTypes.bool,
  pageNumber: PropTypes.number,
};

Home.defaultProps = {
  isReadyTvShows: false,
  pageNumber: 0,
};
