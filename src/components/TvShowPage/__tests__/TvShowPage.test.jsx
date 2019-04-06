import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Renderer from 'react-test-renderer';

import TvShowPage from '../TvShowPage';

describe('test', () => {
  test('TvShowPage test 1', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TvShowPage isReadyTvShows tvShows={[{ id: 1 }, { id: 2 }]} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  it('TvShowPage test 2', () => {
    const renderer = Renderer.create(<TvShowPage searchValue="searchValue" />);
    const testInstance = renderer.toJSON();
    expect(testInstance).toMatchSnapshot();
  });

  it('TvShowPage test 3', () => {
    const renderer = Renderer.create(<TvShowPage page={1} />);
    const testInstance = renderer.toJSON();
    expect(testInstance).toMatchSnapshot();
  });

  it('TvShowPage componentDidUpdate: should not load tv shows', () => {
    const loadTvShows = jest.fn();
    TvShowPage.prototype.componentDidUpdate.call(
      { props: { page: '1', loadTvShows } },
      { page: '1' },
    );
    expect(loadTvShows).toHaveBeenCalledTimes(0);
  });

  it('TvShowPage componentDidUpdate: should load tv shows', () => {
    const loadTvShows = jest.fn();
    TvShowPage.prototype.componentDidUpdate.call(
      { props: { page: '1', loadTvShows } },
      { page: '2' },
    );
    expect(loadTvShows).toHaveBeenCalledTimes(1);
  });

  it('TvShowPage componentDidUpdate: should not load tv shows', () => {
    const getSearchResult = jest.fn();
    TvShowPage.prototype.componentDidUpdate.call(
      { props: { searchValue: 'searchValue_1', getSearchResult } },
      { searchValue: 'searchValue_1' },
    );
    expect(getSearchResult).toHaveBeenCalledTimes(0);
  });

  it('TvShowPage componentDidUpdate: should load tv shows', () => {
    const getSearchResult = jest.fn();
    TvShowPage.prototype.componentDidUpdate.call(
      { props: { searchValue: 'searchValue_1', getSearchResult } },
      { searchValue: 'searchValue_2' },
    );
    expect(getSearchResult).toHaveBeenCalledTimes(1);
  });
});
