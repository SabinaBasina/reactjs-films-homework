import React, { Component } from 'react';
import http from 'axios';
import TvShow from '../TvShow/TvShow.jsx';
import Search from '../Search/Search.jsx';
import styles from './TvShowPage.scss';
import Loading from './Loading.gif';

class TvShowPage extends Component {
  constructor(props) {
    super(props);

    this.handleSearchQueryChanged = this.handleSearchQueryChanged.bind(this);
    this.readyChange = this.readyChange.bind(this);

    this.state = {
      tvShows: [],
      isReady: false
    };    
  }

  componentDidMount() {
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

    this.setState({ isReady: false});
    
    http
      .get("https://api.tvmaze.com/search/shows?q=" + newQuery)
      .then(response => { 
        this.setState({ tvShows: response.data.map(data => data.show), isReady: true}); 
      });
  }

  readyChange(ready) {
    this.props.onReady(ready);
  }

  render() {
    return (
      
      <main className = {styles.TvShows}>   

        {/* <button onClick={
          this.readyChange
        }>Запустить бумеранг</button>  */}

        {!this.state.isReady && 
           <img 
             src = {Loading}
             className={styles.Ready} 
           />}

        {this.state.isReady && 
        <div>
          <Search onSearchQueryChanged={this.handleSearchQueryChanged} />
          <div className={styles.TvShowLibrary}>
            {this.state.tvShows.map(tvShowData =>(
              <TvShow data={tvShowData} /> 
            ))}
          </div>
        </div>}

      </main>     
      
    );
  }
}

export default TvShowPage;