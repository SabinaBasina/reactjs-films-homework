import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TvShowDetails from './TvShowDetails';
import { loadTvShowsDetails } from '../../redux/actions/tvshowdetails';


const mapStateToProps = createStructuredSelector({
  tvShow: state => state.tvshowdetails.tvShow,
});

const mapDispatchToProps = {
  loadTvShowsDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowDetails);
