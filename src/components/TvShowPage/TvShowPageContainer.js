import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import TvShowPage from './TvShowPage';
import { loadTvShows } from '../../modules/moduleHome/moduleHomeActions';
import { getTvShows } from '../../modules/moduleHome/moduleHomeSelectors';

const mapStateToProps = createStructuredSelector({
  tvShows: getTvShows,
});

const mapDispatchToProps = {
  loadTvShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowPage);
