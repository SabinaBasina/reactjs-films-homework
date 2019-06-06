import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TvShowDetails from './TvShowDetails';
import { loadTvShowsDetails } from '../../modules/moduleDetails/moduleDetailsActions';
import { getTvShow } from '../../modules/moduleDetails/moduleDetailsSelectors';
import { getIsAuthentication } from '../../modules/moduleAuth/moduleAuthSelectors';
import { loadIsAuthentication } from '../../modules/moduleAuth/moduleAuthActions';

const mapStateToProps = createStructuredSelector({
  isAuthentication: getIsAuthentication,
  tvShow: getTvShow,
});

const mapDispatchToProps = {
  loadIsAuthentication,
  loadTvShowsDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowDetails);
