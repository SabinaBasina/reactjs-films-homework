import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Search from '../Search';

/* global test, expect */

test('Search test', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Search />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
