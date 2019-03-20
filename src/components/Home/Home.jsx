import React, { Component } from 'react';
import styles from './Home.scss';
import TvShowPage from '../TvShowPage/TvShowPage';

class Home extends Component {
  constructor(props) {
    super(props);

    this.onReady = this.onReady.bind(this);

    this.state = {
      page: 0,
      ready: false,
    };
  }

  onReady(isReady) {
    this.setState({
      ready: isReady,
    });
  }

  increment() {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  }

  decrement() {
    const { page } = this.state;
    this.setState({
      page: page - 1,
    });
  }

  render() {
    const { ready, page } = this.state;
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
