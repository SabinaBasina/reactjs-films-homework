import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Home.scss';
import TvShowPage from '../TvShowPage';

class Home extends Component {
  state = {
    ready: false,
  }

  onReady = (isReady) => {
    this.setState({
      ready: isReady,
    });
  }

  increment = () => {
    const { onIncrement } = this.props;
    onIncrement();
  }

  decrement = () => {
    const { onDecrement } = this.props;
    onDecrement();
  }

  render() {
    const { ready } = this.state;
    const { page } = this.props;
    return (

      <main>

        <TvShowPage
          onReady={this.onReady}
          page={page}
        />

        {ready
          && (
            <div className={styles.Pager}>

              {page > 0
                && (
                  <button type="button" onClick={e => this.decrement(e)}>
                    &larr; Previous Page
                  </button>
                )
              }

              <button type="button" onClick={e => this.increment(e)}>
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
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

Home.defaultProps = {
  page: 'undefined',
  onIncrement: 'undefined',
  onDecrement: 'undefined',
};
