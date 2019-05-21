import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ImplicitCallback } from '@okta/okta-react';

import './Routes.scss';
import Home from '../../pages/Home';
import TvShowDetails from '../../pages/TvShowDetails';
import TvShowPage from '../TvShowPage';
import LoginPage from '../../auth/LoginPage';
import Profile from '../../auth/Profile';


const Routes = () => (
  <Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={LoginPage} />
    <Route path="/profile" component={Profile} />
    <Route path="/implicit/callback" component={ImplicitCallback} />
    <Route
      path="/page/:pageNumber"
      render={props => <Home pageNumber={Number(props.match.params.pageNumber)} />}
    />
    <Route
      path="/search/:searchValue"
      render={props => <TvShowPage searchValue={props.match.params.searchValue} />}
    />
    <Route
      path="/tvShowDetails/:id"
      render={props => <TvShowDetails id={props.match.params.id} />}
    />
  </Fragment>
);

export default Routes;

Routes.propTypes = {
  match: PropTypes.instanceOf(Object),
};

Routes.defaultProps = {
  match: undefined,
};
