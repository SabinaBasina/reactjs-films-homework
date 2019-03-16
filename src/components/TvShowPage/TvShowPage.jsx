import React, { Component } from 'react';
import http from 'axios';
import TvShow from '../TvShow/TvShow.jsx';
import Search from '../Search/Search.jsx';
import styles from "./TvShowPage.scss";

class TvShowPage extends Component {
  constructor(props) {
    super(props);

    this.handleSearchQueryChanged = this.handleSearchQueryChanged.bind(this);

    this.state = {
      tvShows: [],
      isReady: false
    };
    this.loadTvShows(this.props.page);
  }

  componentWillReceiveProps(newProps) {
    this.loadTvShows(newProps.page);
  }

  loadTvShows(page) {
    this.setState({ isReady: false });
    http
      .get("https://api.tvmaze.com/shows?page=" + page)
      .then(response => { 
        window.scrollTo(0, 0);
        this.setState({ tvShows: response.data, isReady: true }); 
      });
  }
 
  handleSearchQueryChanged(newQuery) { 

    if (newQuery === "") {
      this.loadTvShows(0);
    }

    this.setState({ isReady: false });

    http
      .get("https://api.tvmaze.com/search/shows?q=" + newQuery)
      .then(response => { 
        this.setState({ tvShows: response.data.map(data => data.show), isReady: true }); 
      });
      
  }

  render() {
    
    return (
      
      <main className = {styles.TvShows}>        

        <Search onSearchQueryChanged={this.handleSearchQueryChanged}/>

        {!this.state.isReady && <h3 className="text-center top">Loading...</h3>}

        {this.state.isReady &&
        <div className={styles.TvShowLibrary}>
          {this.state.tvShows.map(tvShowData =>(
            <TvShow data={tvShowData} /> 
          ))} 
        </div>}

      </main>     
      
    );
  }
}

export default TvShowPage;