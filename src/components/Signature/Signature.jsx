/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './Signature.scss';
import Home from '../Home';
import Menu from '../Menu';
import TvShowDetails from '../TvShowDetails';
import reducer from '../../moduleReducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

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
