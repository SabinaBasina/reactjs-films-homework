import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Episodes from './Episodes';
import { loadTvShowEpisodes } from '../../modules/moduleDetails/moduleDetailsActions';
import { getTvShowEpisodes, getIsReadyEpisodes } from '../../modules/moduleDetails/moduleDetailsSelectors';

const mapStateToProps = createStructuredSelector({
  tvShowEpisodes: getTvShowEpisodes,
  isReadyEpisodes: getIsReadyEpisodes,
});

const mapDispatchToProps = {
  loadTvShowEpisodes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
