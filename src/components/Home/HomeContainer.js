import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from './Home';
import { getPage, getTvShows } from '../../moduleSelectors';
import { onDecrement, onIncrement } from '../../moduleActions/home';

const mapStateToProps = createStructuredSelector({
  page: getPage,
  tvShows: getTvShows,
});

const mapDispatchToProps = {
  onIncrement,
  onDecrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
