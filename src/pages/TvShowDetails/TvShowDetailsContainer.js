import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TvShowDetails from './TvShowDetails';
import { loadTvShowsDetails } from '../../modules/moduleDetails/moduleDetailsActions';
import { getTvShow, getIsReadyTvShow } from '../../modules/moduleDetails/moduleDetailsSelectors';

const mapStateToProps = createStructuredSelector({
  tvShow: getTvShow,
  isReadyTvShow: getIsReadyTvShow,
});

const mapDispatchToProps = {
  loadTvShowsDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowDetails);
