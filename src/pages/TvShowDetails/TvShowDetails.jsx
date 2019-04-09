/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './TvShowDetails.scss';
import NoImage from '../../images/NoImage.jpg';
import Episodes from '../../components/Episodes';
import Loader from '../../components/Loader';

class TvShowDetails extends Component {
  componentDidMount() {
    const { id, loadTvShowsDetails } = this.props;
    loadTvShowsDetails(id);
  }

  render() {
    const { tvShow, isReadyTvShow } = this.props;
    return (
      <div>

        <Loader loading={!isReadyTvShow} />

        {isReadyTvShow
            && (
            <div className={styles.tvshow}>

              <h1>{tvShow.name}</h1>

              <div className={styles.information}>

                <img
                  src={tvShow.image ? tvShow.image.medium : NoImage}
                  className={styles.image}
                  alt=""
                />

                <div>
                  <p dangerouslySetInnerHTML={{ __html: tvShow.summary }} />
                  <br />
                  <b>Genres: </b>
                  {tvShow.genres && Array.prototype.join.call(tvShow.genres, ', ')}
                  <br />
                  <b>Country: </b>
                  {tvShow.network && tvShow.network.country.name}
                  <br />
                  <b>Premiered: </b>
                  <time>{tvShow.premiered}</time>
                </div>

              </div>


              <p className={styles.episodes}>Episodes</p>
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
  isReadyTvShow: PropTypes.bool,
  tvShow: PropTypes.instanceOf(Object),
};

TvShowDetails.defaultProps = {
  loadTvShowsDetails: () => { },
  id: 'undefined',
  isReadyTvShow: false,
  tvShow: undefined,
};
