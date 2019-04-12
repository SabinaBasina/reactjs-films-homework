import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Home from '../Home';

describe('Home', () => {
  test('Home snapshot', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Home />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('Home test pageNumber is', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Home isReadyTvShows pageNumber={1} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
