/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './TvShowDetails.scss';
import NoImage from '../../images/NoImage.jpg';
import Episodes from '../../components/Episodes';
import Loader from '../../components/Loader';
import { addFavorite, deleteFavorite, getFavorites } from '../../dbFavorite/favoritesService';

class TvShowDetails extends Component {
  state = {
    isFavorite: false,
    isFavoriteReady: false,
    isReadyTvShow: false,
  };

  async componentDidMount() {
    const { id, loadTvShowsDetails, loadIsAuthentication } = this.props;
    if (localStorage.token) await loadIsAuthentication(true);
    const { isAuthentication } = this.props;
    const favorites = isAuthentication ? await getFavorites(localStorage.id) : [];
    await loadTvShowsDetails(id);
    this.setState({
      isFavorite: favorites.includes(`${id}`),
      isFavoriteReady: true,
      isReadyTvShow: true,
    });
  }

  addFavorite = async () => {
    const { tvShow } = this.props;
    this.setState({ isFavoriteReady: false });
    await addFavorite(localStorage.id, tvShow.id);
    this.setState({ isFavorite: true, isFavoriteReady: true });
  }

  deleteFavorite = async () => {
    const { tvShow } = this.props;
    this.setState({ isFavoriteReady: false });
    await deleteFavorite(localStorage.id, tvShow.id);
    this.setState({ isFavorite: false, isFavoriteReady: true });
  }

  render() {
    const { tvShow, isAuthentication } = this.props;
    const {
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

                  {isAuthentication && (
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

export default TvShowDetails;

TvShowDetails.propTypes = {
  id: PropTypes.string,
  loadTvShowsDetails: PropTypes.func,
  loadIsAuthentication: PropTypes.func,
  tvShow: PropTypes.instanceOf(Object),
  isAuthentication: PropTypes.bool,
};

TvShowDetails.defaultProps = {
  loadTvShowsDetails: () => { },
  loadIsAuthentication: () => { },
  id: 'undefined',
  tvShow: undefined,
  isAuthentication: false,
};
