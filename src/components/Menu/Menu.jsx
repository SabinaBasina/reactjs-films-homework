import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import { withAuth } from '@okta/okta-react';
import styles from "./Menu.scss";
//import { checkAuthentication } from '../../authentication/helpers.js';

class Menu extends Component {
  constructor(props) {
    super(props);

    //this.state = { isAuthenticated: null };

    //this.checkAuthentication = checkAuthentication.bind(this);
    //this.handleNavItemSelect = this.handleNavItemSelect.bind(this);
  }
  /*
  async componentDidMount() {
    this.checkAuthentication();
  }
  
  async componentDidUpdate() {
    this.checkAuthentication();
  }

  handleNavItemSelect(eventKey) {
    if (eventKey === 1) {
      this.props.auth.login('/');
    } else if (eventKey === 2) {
      this.props.auth.logout('/');
    } 
  }
*/
  render() {
    return(
      <header className={styles.Header}>
        
        <Link to="/">
          <button className={styles.HeaderName}>
            TvShows
          </button>            
        </Link>

        <Link to="/login">
          <button className={styles.HeaderLogin}>
            Login
          </button>
        </Link> 

      </header>
    
    );
  }
}

export default Menu;