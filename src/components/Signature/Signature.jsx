/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './Signature.scss';
import Home from '../../pages/Home';
import Menu from '../Menu';
import TvShowDetails from '../../pages/TvShowDetails';
import store from '../../modules/store';

class Signature extends PureComponent {
  render() {
    return (
      <Router>
        <div>

          <Menu />

          <Provider store={store}>

            <Route path="/" exact component={Home} />

            <Route
              path="/tvShowDetails/:id"
              render={props => <TvShowDetails id={props.match.params.id} />}
            />

          </Provider>

        </div>
      </Router>
    );
  }
}

export default Signature;
