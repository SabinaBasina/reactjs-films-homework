import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import TvShowPage from './TvShowPage';
import { loadTvShows, getSearchResult } from '../../modules/moduleHome/moduleHomeActions';
import { getTvShows } from '../../modules/moduleHome/moduleHomeSelectors';

const mapStateToProps = createStructuredSelector({
  tvShows: getTvShows,
});

const mapDispatchToProps = {
  loadTvShows,
  getSearchResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowPage);
