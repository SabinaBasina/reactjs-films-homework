import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from './Home';
import { getPage, getTvShows } from '../../modules/moduleHome/moduleHomeSelectors';
import { onDecrement, onIncrement } from '../../modules/moduleHome/moduleHomeActions';

const mapStateToProps = createStructuredSelector({
  page: getPage,
  tvShows: getTvShows,
});

const mapDispatchToProps = {
  onIncrement,
  onDecrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
