import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Loader from '../Loader';

test('Menu snapsphot', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Loader />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
