import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import TvShowPage from './TvShowPage';
import { loadTvShows, getSearchResult } from '../../modules/moduleHome/moduleHomeActions';
import { getTvShows, getIsReadyTvShows } from '../../modules/moduleHome/moduleHomeSelectors';

const mapStateToProps = createStructuredSelector({
  tvShows: getTvShows,
  isReadyTvShows: getIsReadyTvShows,
});

const mapDispatchToProps = {
  loadTvShows,
  getSearchResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowPage);
