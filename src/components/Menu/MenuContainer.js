import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Menu from './Menu';
import { loadIsAuthentication } from '../../modules/moduleAuth/moduleAuthActions';
import { getIsAuthentication } from '../../modules/moduleAuth/moduleAuthSelectors';

const mapStateToProps = createStructuredSelector({
  isAuthentication: getIsAuthentication,
});

const mapDispatchToProps = {
  loadIsAuthentication,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
