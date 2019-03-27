import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import TvShowPage from './TvShowPage';
import { loadTvShows } from '../../redux/actions/page';


const mapStateToProps = createStructuredSelector({
  tvShows: state => state.page.tvShows,
});

const mapDispatchToProps = {
  loadTvShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowPage);
