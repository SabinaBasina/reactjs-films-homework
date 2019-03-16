import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from './Signature.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Home/Home.jsx';
import Menu from '../Menu/Menu.jsx';
import TvShowDetails from '../TvShowDetails/TvShowDetails.jsx';

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
          <div>

            <Menu/>

            <Route path='/' exact={true} component={Home}/>
            <Route path="/tvShowDetails/:id" 
              render={(props)=> <TvShowDetails id={props.match.params.id}/> }/>

          </div>
        </Router>  
      </main>          
    );
  }
}

Signature.propTypes = {
  name: PropTypes.string
};

export default Signature;