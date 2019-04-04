import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Search from '../Search';

test('Search test', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Search />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});