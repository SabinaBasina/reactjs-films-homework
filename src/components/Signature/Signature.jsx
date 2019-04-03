/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent, Fragment } from 'react';
import { Route } from 'react-router-dom';

import './Signature.scss';
import Home from '../../pages/Home';
import Menu from '../Menu';
import TvShowDetails from '../../pages/TvShowDetails';
import TvShowPage from '../TvShowPage';

class Signature extends PureComponent {
  render() {
    return (
      <Fragment>
        <Menu />
        <Route path="/" exact component={Home} />
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
  }
}

export default Signature;
