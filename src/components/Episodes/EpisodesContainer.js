import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Episodes from './Episodes';
import { loadTvShowEpisodes } from '../../redux/actions/episodes';
import { getTvShowEpisodes } from '../../redux/selectors';

const mapStateToProps = createStructuredSelector({
  tvShowEpisodes: getTvShowEpisodes,
});

const mapDispatchToProps = {
  loadTvShowEpisodes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
