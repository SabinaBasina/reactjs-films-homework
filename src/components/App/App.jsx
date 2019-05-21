import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Security } from '@okta/okta-react';

import store from '../../modules/store';
import Menu from '../Menu';
import Routes from '../Routes';
import { redirectToLogin, authConfig } from '../../auth/helpers';

const App = () => (
  <Provider store={store}>
    <Router>
      <Security
        issuer={authConfig.issuer}
        client_id={authConfig.clientId}
        redirect_uri={authConfig.redirectUri}
        onAuthRequired={redirectToLogin}
      >
        <Menu />
        <Routes />
      </Security>
    </Router>
  </Provider>
);

export default App;
