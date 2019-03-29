import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Episodes from './Episodes';
import { loadTvShowEpisodes } from '../../moduleActions/episodes';
import { getTvShowEpisodes } from '../../moduleSelectors';

const mapStateToProps = createStructuredSelector({
  tvShowEpisodes: getTvShowEpisodes,
});

const mapDispatchToProps = {
  loadTvShowEpisodes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
