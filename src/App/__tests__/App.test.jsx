import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from '../App';

/* global test, expect */

test('App test', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
