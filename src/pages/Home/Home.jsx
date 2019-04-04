/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Home.scss';
import TvShowPage from '../../components/TvShowPage';
import Loading from '../../images/Loading.gif';

class Home extends Component {
  render() {
    const { tvShows, pageNumber } = this.props;

    return (

      <main>

        <TvShowPage page={Number(pageNumber)} />

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
            <div className={styles.Pager}>

              {Number(pageNumber) > 0
                && (
                  <Link to={(Number(pageNumber) - 1 === 0) ? '/' : `/page/${Number(pageNumber) - 1}`}>
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
  tvShows: PropTypes.instanceOf(Object),
  pageNumber: PropTypes.string,
};

Home.defaultProps = {
  tvShows: undefined,
  pageNumber: '0',
};
