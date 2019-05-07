import React, { Component } from 'react';
import * as OktaSignIn from '@okta/okta-signin-widget';

import { authConfig } from './helpers';

class LoginPage extends Component {
    state = { user: null };

    widget = new OktaSignIn({
      baseUrl: authConfig.issuer.split('/oauth2')[0],
      clientId: authConfig.clientId,
      redirectUri: authConfig.redirectUri,
    });

    componentDidMount() {
      this.widget.session.get((response) => {
        if (response.status !== 'INACTIVE') {
          this.setState({ user: response.login });
        } else {
          this.showLogin();
        }
      });
    }

  showLogin = () => {
    this.widget.renderEl({ el: this.loginContainer },
      (response) => {
        this.setState({ user: response.claims.email });
        this.widget.remove();
      },
      (err) => {
        throw err;
      });
  }

  logout = () => {
    this.widget.signOut(() => {
      this.setState({ user: null });
      this.showLogin();
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        {user ? (
          <div className="container">
            <p>
              Welcome,
              {' '}
              {user}
              !
            </p>
            <button type="button" onClick={this.logout}>Logout</button>
          </div>
        ) : null}
        {user ? null : (
          <div ref={(div) => { this.loginContainer = div; }} />
        )}
      </div>
    );
  }
}

export default LoginPage;
