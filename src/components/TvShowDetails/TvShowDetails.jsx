/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import http from 'axios';
import PropTypes from 'prop-types';
import styles from './TvShowDetails.scss';
import Loading from '../TvShowPage/Loading.gif';
import NoImage from '../TvShow/NoImage.jpg';
import Episodes from '../Episodes/Episodes';

class TvShowDetails extends Component {
  state = {
    tvShow: {},
    isReady: false,
  }

  componentDidMount() {
    const { id } = this.props;

    http
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        this.setState({ tvShow: response.data, isReady: true });
      });
  }


  render() {
    const { isReady, tvShow } = this.state;
    return (
      <div>

        {!isReady
           && (
           <img
             src={Loading}
             className={styles.Ready}
             alt=""
           />
           )}

        {isReady

            && (
            <div className={styles.TvShow}>

              <h1>{tvShow.name}</h1>

              <div className={styles.Information}>

                <img
                  src={tvShow.image === undefined ? NoImage : tvShow.image.medium}
                  className={styles.TvShowImage}
                  alt=""
                />

                <div>
                  <p dangerouslySetInnerHTML={{ __html: tvShow.summary }} />
                  <br />
                  <b>Genres:</b>
                  {tvShow.genres && Array.prototype.join.call(tvShow.genres, ', ')}
                  <br />
                  <b>Country:</b>
                  {tvShow.network && tvShow.network.country.name}
                  <br />
                  <b>Premiered:</b>
                  <time>{tvShow.premiered}</time>
                </div>

              </div>


              <p className={styles.Episodes}>Episodes</p>
              <Episodes nameTvShow={tvShow.name} />

            </div>
            )
        }

      </div>
    );
  }
}

export default TvShowDetails;

TvShowDetails.propTypes = {
  id: PropTypes.string,
};

TvShowDetails.defaultProps = {
  id: 'undefined',
};
