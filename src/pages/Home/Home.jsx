/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Home.scss';
import TvShowPage from '../../components/TvShowPage';
import Loading from '../../images/Loading.gif';

class Home extends Component {
  render() {
    const {
      page,
      tvShows,
      onIncrement,
      onDecrement,
    } = this.props;

    return (

      <main>

        <TvShowPage page={page} />

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

              {page > 0
                && (
                  <button type="button" onClick={e => onDecrement(e)}>
                    &larr; Previous Page
                  </button>
                )
              }

              <button type="button" onClick={e => onIncrement(e)}>
                Next Page &rarr;
              </button>

            </div>
          )}


      </main>

    );
  }
}

export default Home;

Home.propTypes = {
  page: PropTypes.number,
  tvShows: PropTypes.instanceOf(Object),
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

Home.defaultProps = {
  page: 0,
  tvShows: undefined,
  onIncrement: () => { },
  onDecrement: () => { },
};
