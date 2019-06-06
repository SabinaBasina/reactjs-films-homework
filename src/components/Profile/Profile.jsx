import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getFavorites } from '../../dbFavorite/favoritesService';
import TvShow from '../TvShow';
import styles from './Profile.scss';
import Loader from '../Loader';

class Profile extends Component {
  state = {
    isReadyFavoritesTvShows: false,
  };

  async componentDidMount() {
    const { loadFavoritesTvShows } = this.props;
    const ids = await getFavorites(localStorage.id);
    await loadFavoritesTvShows(ids);
    this.setState({ isReadyFavoritesTvShows: true });
  }

  render() {
    const { isReadyFavoritesTvShows } = this.state;
    const { tvShowsFavorites, isAuthentication } = this.props;
    return (
      <div className={styles.tvshows}>

        <Loader loading={!isReadyFavoritesTvShows} />

        {isAuthentication && isReadyFavoritesTvShows
          && (
            <Fragment>
              <p className={styles.favorites}>Favorites</p>
              <div className={styles.library}>
                {tvShowsFavorites.map(tvShowData => (
                  <TvShow key={tvShowData.id} data={tvShowData} />
                ))}
              </div>
            </Fragment>
          )}

        {!isAuthentication && isReadyFavoritesTvShows && (
          <Link to="/login">
            <button type="button" className={styles.log}>
              Login &rarr;
            </button>
          </Link>
        )}

      </div>
    );
  }
}

export default Profile;

Profile.propTypes = {
  tvShowsFavorites: PropTypes.instanceOf(Object),
  loadFavoritesTvShows: PropTypes.func,
  isAuthentication: PropTypes.bool,
};

Profile.defaultProps = {
  loadFavoritesTvShows: () => { },
  tvShowsFavorites: undefined,
  isAuthentication: false,
};
