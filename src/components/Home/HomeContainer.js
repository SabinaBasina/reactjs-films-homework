import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from './Home';

const mapStateToProps = createStructuredSelector({
  page: state => state.page.page,
});

const mapDispatchToProps = {
  onIncrement: () => ({ type: 'INCREMENT' }),
  onDecrement: () => ({ type: 'DECREMENT' }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
