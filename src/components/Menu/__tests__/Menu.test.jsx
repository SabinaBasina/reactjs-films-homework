import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Menu from '../Menu';

test('Menu test', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Menu />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
