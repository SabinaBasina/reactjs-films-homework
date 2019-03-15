import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from './Signature.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Home/Home.jsx';

class Signature extends Component {
  render() {
    return (
      <main>
        {/* <h1>Hello, {this.props.name}</h1>
        <article className = {styles.about}>
          <p className = {styles.text}>
            Text1
          </p>
        </article> */}
        <Router>
          <Route path='/' exact={true} component={Home}/>
        </Router>  
      </main>          
    );
  }
}

Signature.propTypes = {
  name: PropTypes.string
};

export default Signature;