import React, { Component } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import styles from './Signature.scss';


class Signature extends Component {
  render() {
    const { name } = this.props;
    return (
      <main>
        <h1>
          Hello,
          {name}
        </h1>
        <article className={styles.about}>
          <p className={styles.text}>
            Text1
          </p>
        </article>
      </main>
=======
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
>>>>>>> origin/part2
    );
  }
}

Signature.propTypes = {
  name: PropTypes.string,
<<<<<<< HEAD
};

Signature.defaultProps = {
  name: 'Name',
=======
>>>>>>> origin/part2
};

export default Signature;
