import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Episode from '../Episode';

test('Episode test img is', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Episode data={{ image: { medium: 'medium' } }} />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});

test('Episode test img no', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Episode data={{ }} />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
