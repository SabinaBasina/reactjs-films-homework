import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import TvShowPage from './TvShowPage';
import { loadTvShows } from '../../moduleActions/tvshowpage';
import { getTvShows } from '../../moduleSelectors';

const mapStateToProps = createStructuredSelector({
  tvShows: getTvShows,
});

const mapDispatchToProps = {
  loadTvShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowPage);
