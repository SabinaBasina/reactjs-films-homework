import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Episodes from '../Episodes';

/* global test, expect */

test('Episodes test', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Episodes />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
