import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Signature.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Menu from '../Menu/Menu.jsx';
import TvShowDetails from '../TvShowDetails/TvShowDetails.jsx';

class Signature extends Component {
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

Signature.propTypes = {
  name: PropTypes.string,
};

export default Signature;
