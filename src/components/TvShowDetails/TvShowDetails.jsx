/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './TvShowDetails.scss';
import Loading from '../TvShowPage/Loading.gif';
import NoImage from '../TvShow/NoImage.jpg';
import Episodes from '../Episodes/Episodes';

class TvShowDetails extends Component {
  state = {
    isReady: true,
  }

  componentDidMount() {
    const { id, loadTvShowsDetails } = this.props;
    loadTvShowsDetails(id);
  }


  render() {
    const { isReady } = this.state;
    const { tvShow } = this.props;

    if (!tvShow) {
      return null;
    }

    return (
      <div>

        {!isReady
           && (
           <img
             src={Loading}
             className={styles.Ready}
             alt="Loading page"
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
  loadTvShowsDetails: PropTypes.func,
  tvShow: PropTypes.objectOf(PropTypes.object).isRequired,
};

TvShowDetails.defaultProps = {
  loadTvShowsDetails: () => { },
  id: 'undefined',
};
