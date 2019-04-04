import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from './Home';
import { getTvShows } from '../../modules/moduleHome/moduleHomeSelectors';

const mapStateToProps = createStructuredSelector({
  tvShows: getTvShows,
});

export default connect(mapStateToProps)(Home);
