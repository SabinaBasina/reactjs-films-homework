import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TvShowDetails from '../TvShowDetails';

/* global test, expect */

test('TvShowDetails test', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<TvShowDetails />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
