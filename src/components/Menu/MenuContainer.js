import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Menu from './Menu';
import { getIsAuthentication } from '../../modules/moduleAuth/moduleAuthSelectors';

const mapStateToProps = createStructuredSelector({
  isAuthentication: getIsAuthentication,
});

export default connect(mapStateToProps)(Menu);
