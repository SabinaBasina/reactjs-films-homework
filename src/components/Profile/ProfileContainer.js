import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Profile from './Profile';
import { loadFavoritesTvShows } from '../../modules/moduleProfile/moduleProfileActions';
import { getTvShowsFavorites } from '../../modules/moduleProfile/moduleProfileSelectors';
import { getIsAuthentication } from '../../modules/moduleAuth/moduleAuthSelectors';

const mapStateToProps = createStructuredSelector({
  isAuthentication: getIsAuthentication,
  tvShowsFavorites: getTvShowsFavorites,
});

const mapDispatchToProps = {
  loadFavoritesTvShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
