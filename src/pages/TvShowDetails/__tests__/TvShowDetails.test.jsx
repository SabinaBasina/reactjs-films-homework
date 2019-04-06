import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Renderer from 'react-test-renderer';

import TvShowDetails from '../TvShowDetails';

describe('test', () => {
  it('TvShowDetails test 1', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TvShowDetails />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  it('TvShowDetails test id is', () => {
    const renderer = Renderer.create(<TvShowDetails id="1" />);
    const testInstance = renderer.toJSON();
    expect(testInstance).toMatchSnapshot();
  });

  test('Episode test img is', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TvShowDetails isReadyTvShow tvShow={{ image: { medium: 'medium' } }} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('Episode test img no', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TvShowDetails isReadyTvShow tvShow={{ }} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('Episode test genres is', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TvShowDetails isReadyTvShow tvShow={{ genres: 'genres' }} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('Episode test country is', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TvShowDetails isReadyTvShow tvShow={{ network: { country: { name: 'name' } } }} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
