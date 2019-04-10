import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Routes.scss';
import Home from '../../pages/Home';
import TvShowDetails from '../../pages/TvShowDetails';
import TvShowPage from '../TvShowPage';

const Routes = () => (
  <Fragment>
    <Route path="/" exact component={Home} />
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
