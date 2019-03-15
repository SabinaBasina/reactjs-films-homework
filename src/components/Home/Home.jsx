import React, { Component } from 'react';
import styles from './Home.scss';
import TvShowPage from '../TvShowPage/TvShowPage.jsx';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0
    };
  }

  increment() {
    this.setState({
      page: this.state.page + 1
    });
  }

  decrement() {
    this.setState({
      page: this.state.page - 1
    });
  }

  render() {    
    return ( 

      <main>    
          
        <TvShowPage page={this.state.page} />

        <div className={styles.Pager} > 
              
          {this.state.page > 0 &&
            <button onClick={(e) => this.decrement(e)}>
              &larr; Previous Page
            </button>
          }

          <button onClick={(e) => this.increment(e)}>
            Next Page &rarr;
          </button>

        </div>
          

      </main>
      
    );
  }
}

export default Home;