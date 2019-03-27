import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Search from './Search';
import { getSearchResult } from '../../redux/actions/search';


const mapStateToProps = createStructuredSelector({
  value: state => state.search.value,
});

const mapDispatchToProps = {
  onFindTv: value => (dispatch) => {
    dispatch({ type: 'FIND_TV', payload: value });
    dispatch(getSearchResult());
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
