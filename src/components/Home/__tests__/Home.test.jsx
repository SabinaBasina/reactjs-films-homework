import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Home from '../Home';

/* global test, expect */

test('Home test', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Home />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
