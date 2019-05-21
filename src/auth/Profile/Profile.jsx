import React, { Component, Fragment } from 'react';
import { withAuth } from '@okta/okta-react';
import PropTypes from 'prop-types';

import { checkAuthentication } from '../helpers';
import { getFavorites } from '../db/helpers';
import TvShow from '../../components/TvShow';
import styles from './Profile.scss';
import Loader from '../../components/Loader';

class Profile extends Component {
  state = {
    authenticated: null,
    user: null,
    isReadyFavoritesTvShows: false,
  };

  checkAuthentication = checkAuthentication.bind(this);

  async componentDidMount() {
    await this.checkAuthentication();
    const { user } = this.state;
    const { loadFavoritesTvShows } = this.props;
    const ids = await getFavorites(user.email);
    await loadFavoritesTvShows(ids);
    this.setState({ isReadyFavoritesTvShows: true });
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    const { authenticated, isReadyFavoritesTvShows } = this.state;
    const { tvShowsFavorites } = this.props;
    return (
      <div className={styles.tvshows}>

        <Loader loading={!isReadyFavoritesTvShows} />

        {authenticated && isReadyFavoritesTvShows
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
      </div>
    );
  }
}

export default withAuth(Profile);

Profile.propTypes = {
  tvShowsFavorites: PropTypes.instanceOf(Object),
  loadFavoritesTvShows: PropTypes.func,
};

Profile.defaultProps = {
  loadFavoritesTvShows: () => { },
  tvShowsFavorites: undefined,
};
