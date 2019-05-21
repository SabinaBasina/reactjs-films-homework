import React, { Component } from 'react';
import * as OktaSignIn from '@okta/okta-signin-widget';

import { authConfig } from '../helpers';

class LoginPage extends Component {
    widget = new OktaSignIn({
      baseUrl: authConfig.issuer.split('/oauth2')[0],
      clientId: authConfig.clientId,
      redirectUri: authConfig.redirectUri,
      authParams: {
        responseType: ['id_token', 'token'],
        issuer: authConfig.issuer,
        display: 'page',
        scopes: authConfig.scope.split(' '),
      },
    });

    componentDidMount() {
      this.widget.renderEl(
        { el: '#sign-in-widget' },
        () => { },
        (err) => {
          throw err;
        },
      );
    }

    render() {
      return (
        <div>
          <div id="sign-in-widget" />
        </div>
      );
    }
}

export default LoginPage;
