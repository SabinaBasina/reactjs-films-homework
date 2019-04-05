import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from './Home';
import { getIsReadyTvShows } from '../../modules/moduleHome/moduleHomeSelectors';

const mapStateToProps = createStructuredSelector({
  isReadyTvShows: getIsReadyTvShows,
});

export default connect(mapStateToProps)(Home);
