import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../modules/store';
import Menu from '../Menu';
import Routes from '../Routes';

const App = () => (
  <Provider store={store}>
    <Router>
      <Menu />
      <Routes />
    </Router>
  </Provider>
);

export default App;
