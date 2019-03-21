/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import './Signature.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import TvShowDetails from '../TvShowDetails/TvShowDetails';

class Signature extends PureComponent {
  render() {
    return (
      <Router>
        <div>

          <Menu />

          <Route path="/" exact component={Home} />
          <Route
            path="/tvShowDetails/:id"
            render={props => <TvShowDetails id={props.match.params.id} />}
          />

        </div>
      </Router>
    );
  }
}

export default Signature;
