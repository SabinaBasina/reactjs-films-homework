import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../modules/store';

import Signature from '../components/Signature';

const App = () => (
  <Provider store={store}>
    <Router>
      <Signature />
    </Router>
  </Provider>
);

export default App;
