import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Renderer from 'react-test-renderer';

import Episodes from '../Episodes';


describe('test', () => {
  it('Episodes test 1', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Episodes
      tvShowEpisodes={{ _embedded: { episodes: [{ id: 1 }, { id: 2 }] } }}
    />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('Episodes test 2', () => {
    const renderer = Renderer.create(<Episodes nameTvShow="nameTvShow" />);
    const testInstance = renderer.toJSON();
    expect(testInstance).toMatchSnapshot();
  });

  it('Episodes componentDidUpdate: should not load tv show episodes', () => {
    const loadTvShowEpisodes = jest.fn();
    Episodes.prototype.componentDidUpdate.call(
      { props: { nameTvShow: 'nameTvShow_1', loadTvShowEpisodes } },
      { nameTvShow: 'nameTvShow_1' },
    );
    expect(loadTvShowEpisodes).toHaveBeenCalledTimes(0);
  });

  it('Episodes componentDidUpdate: should load tv show episodes', () => {
    const loadTvShowEpisodes = jest.fn();
    const scrollTo = jest.fn();
    // eslint-disable-next-line no-undef
    window.scrollTo = scrollTo;
    Episodes.prototype.componentDidUpdate.call(
      { props: { nameTvShow: 'nameTvShow_1', loadTvShowEpisodes } },
      { nameTvShow: 'nameTvShow_2' },
    );
    expect(loadTvShowEpisodes).toHaveBeenCalledTimes(1);
    expect(scrollTo).toHaveBeenCalledTimes(1);
  });
});
