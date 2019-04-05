/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './TvShowDetails.scss';
import Loading from '../../images/Loading.gif';
import NoImage from '../../images/NoImage.jpg';
import Episodes from '../../components/Episodes';

class TvShowDetails extends Component {
  state = {
    readyTvShow: false,
  }

  componentDidMount() {
    const { id, loadTvShowsDetails, isReadyTvShow } = this.props;
    loadTvShowsDetails(id);
    this.onReady(isReadyTvShow);
  }

  componentDidUpdate(prevProps) {
    const { isReadyTvShow } = this.props;
    if (isReadyTvShow !== prevProps.isReadyTvShow) {
      this.onReady(isReadyTvShow);
    }
  }

  onReady = (newIsReady) => {
    this.setState({ readyTvShow: newIsReady });
  }

  render() {
    const { tvShow } = this.props;
    const { readyTvShow } = this.state;
    return (
      <div>

        {readyTvShow === false
           && (
           <img
             src={Loading}
             className={styles.Ready}
             alt="Loading TvShow"
           />
           )}

        {readyTvShow === true
            && (
            <div className={styles.TvShow}>

              <h1>{tvShow.name}</h1>

              <div className={styles.Information}>

                <img
                  src={tvShow.image ? tvShow.image.medium : NoImage}
                  className={styles.TvShowImage}
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
  isReadyTvShow: PropTypes.bool,
  tvShow: PropTypes.instanceOf(Object),
};

TvShowDetails.defaultProps = {
  loadTvShowsDetails: () => { },
  id: 'undefined',
  isReadyTvShow: false,
  tvShow: undefined,
};
