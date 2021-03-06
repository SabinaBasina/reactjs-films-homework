import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Renderer from 'react-test-renderer';

import Episodes from '../Episodes';


describe('Episodes', () => {
  it('Episodes is', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Episodes
      isReadyEpisodes
      tvShowEpisodes={{ _embedded: { episodes: [{ id: 1 }, { id: 2 }] } }}
    />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('Episodes snapshot', () => {
    const renderer = Renderer.create(<Episodes nameTvShow="nameTvShow" />);
    const testInstance = renderer.toJSON();
    expect(testInstance).toMatchSnapshot();
  });
});
