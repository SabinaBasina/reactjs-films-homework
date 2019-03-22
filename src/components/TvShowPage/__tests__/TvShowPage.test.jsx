import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TvShowPage from '../TvShowPage';


test('TvShowPage test', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<TvShowPage />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
