/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withAuth } from '@okta/okta-react';

import styles from './TvShowDetails.scss';
import NoImage from '../../images/NoImage.jpg';
import Episodes from '../../components/Episodes';
import Loader from '../../components/Loader';
import { checkAuthentication } from '../../auth/helpers';
import { addFavorite, deleteFavorite, getFavorites } from '../../auth/db/helpers';

class TvShowDetails extends Component {
  state = {
    authenticated: null,
    isFavorite: false,
    isFavoriteReady: false,
    isReadyTvShow: false,
  };

  checkAuthentication = checkAuthentication.bind(this);

  addFavorite = this.addFavorite.bind(this);

  deleteFavorite = this.deleteFavorite.bind(this);

  async componentDidMount() {
    await this.checkAuthentication();
    const { id, loadTvShowsDetails } = this.props;
    const { authenticated, user } = this.state;
    const favorites = authenticated ? await getFavorites(user.email) : [];
    await loadTvShowsDetails(id);
    this.setState({
      isFavorite: favorites.includes(`${id}`),
      isFavoriteReady: true,
      isReadyTvShow: true,
    });
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async addFavorite() {
    const { user } = this.state;
    const { tvShow } = this.props;
    this.setState({ isFavoriteReady: false });
    await addFavorite(user.email, tvShow.id);
    this.setState({ isFavorite: true, isFavoriteReady: true });
  }

  async deleteFavorite() {
    const { user } = this.state;
    const { tvShow } = this.props;
    this.setState({ isFavoriteReady: false });
    await deleteFavorite(user.email, tvShow.id);
    this.setState({ isFavorite: false, isFavoriteReady: true });
  }

  render() {
    const { tvShow } = this.props;
    const {
      authenticated,
      isFavorite,
      isFavoriteReady,
      isReadyTvShow,
    } = this.state;

    return (
      <div>

        <Loader loading={!isReadyTvShow} />

        {isReadyTvShow
          && (
            <div className={styles.tvshow}>

              <h1>{tvShow.name}</h1>

              <div className={styles.information}>
                <div className={styles.image}>
                  <img
                    src={tvShow.image ? tvShow.image.medium : NoImage}
                    alt=""
                  />

                  {authenticated && (
                    <div>
                      {!isFavoriteReady
                        && (
                          <button
                            disabled
                            type="button"
                            className={styles.loadingTvShow}
                          >
                            Loading...
                          </button>
                        )}
                      {isFavoriteReady && !isFavorite && (
                        <button
                          type="button"
                          className={styles.addTvShow}
                          onClick={this.addFavorite}
                        >
                          Add
                        </button>
                      )}
                      {isFavoriteReady && isFavorite && (
                        <button
                          type="button"
                          className={styles.addTvShow}
                          onClick={this.deleteFavorite}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  )}

                </div>

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

export default withAuth(TvShowDetails);

TvShowDetails.propTypes = {
  id: PropTypes.string,
  loadTvShowsDetails: PropTypes.func,
  tvShow: PropTypes.instanceOf(Object),
};

TvShowDetails.defaultProps = {
  loadTvShowsDetails: () => { },
  id: 'undefined',
  tvShow: undefined,
};
