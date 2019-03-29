import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Search from './Search';
import { getSearchResult } from '../../moduleActions/search';
import { getValue } from '../../moduleSelectors';


const mapStateToProps = createStructuredSelector({
  value: getValue,
});

const mapDispatchToProps = {
  onFindTv: value => (dispatch) => {
    dispatch({ type: 'FIND_TV', payload: value });
    dispatch(getSearchResult());
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
