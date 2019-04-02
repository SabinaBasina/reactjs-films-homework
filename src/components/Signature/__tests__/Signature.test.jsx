import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter as MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Signature from '../Signature';
import store from '../../../modules/store';
// import TvShowDetails from '../../../pages/TvShowDetails';


test('renders', () => {
  const component = TestRenderer.create(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/tvShowDetails/:id']} initialIndex={1}>
        <Signature />
        <Route
          path="/tvShowDetails/:id"
          render={({ match }) => <div>{match.params.id}</div>}
        />
      </MemoryRouter>
    </Provider>,
  );
  expect(component).toMatchSnapshot();
});
