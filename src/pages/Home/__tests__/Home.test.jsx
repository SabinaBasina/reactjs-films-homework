import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Home from '../Home';

describe('test', () => {
  test('Home test', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Home />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('Episode test pageNumber is', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Home isReadyTvShows pageNumber="1" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
