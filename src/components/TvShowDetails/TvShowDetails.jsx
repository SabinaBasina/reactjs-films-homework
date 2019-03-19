import React, { Component } from 'react';
import http from 'axios';
import styles from './TvShowDetails.scss';
import Loading from '../TvShowPage/Loading.gif';
import NoImage from '../TvShow/NoImage.jpg';
import Episodes from '../Episodes/Episodes.jsx';

class TvShowDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tvShow: {},
      isReady: false,
    };

    http
      .get(`https://api.tvmaze.com/shows/${this.props.id}`)
      .then((response) => {
        this.setState({ tvShow: response.data, isReady: true });
      });
  }


  render() {
    return (
      <div>

        {!this.state.isReady
           && (
           <img
             src={Loading}
             className={styles.Ready}
           />
           )}

        {this.state.isReady

            && (
            <div className={styles.TvShow}>

              <h1>{this.state.tvShow.name}</h1>

              <div className={styles.Information}>

                <img
                  src={this.state.tvShow.image === undefined ? NoImage : this.state.tvShow.image.medium}
                  className={styles.TvShowImage}
                />

                <div>
                  <p dangerouslySetInnerHTML={{ __html: this.state.tvShow.summary }} />
                  <br />
                  <b>Genres:</b>
                  {' '}
                  {this.state.tvShow.genres && this.state.tvShow.genres.join(', ')}
                  <br />
                  <b>Country:</b>
                  {' '}
                  {this.state.tvShow.network && this.state.tvShow.network.country.name}
                  <br />
                  <b>Premiered:</b>
                  {' '}
                  <time>{this.state.tvShow.premiered}</time>
                </div>

              </div>


              <p className={styles.Episodes}>Episodes</p>
              <Episodes nameTvShow={this.state.tvShow.name} />

            </div>
            )
        }

      </div>
    );
  }
}

export default TvShowDetails;
