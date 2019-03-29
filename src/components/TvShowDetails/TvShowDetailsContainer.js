import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TvShowDetails from './TvShowDetails';
import { loadTvShowsDetails } from '../../moduleActions/tvshowdetails';
import { getTvShow } from '../../moduleSelectors';

const mapStateToProps = createStructuredSelector({
  tvShow: getTvShow,
});

const mapDispatchToProps = {
  loadTvShowsDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowDetails);
