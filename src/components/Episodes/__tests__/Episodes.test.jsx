import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Renderer from 'react-test-renderer';
import moxios from 'moxios';
import Episodes from '../Episodes';

jest.mock(
  '../../Episode/Episode',
  () => data => `mock data${JSON.stringify(data)}`,
);

describe('test', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('Episodes test', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Episodes />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  it('Episodes test 2', (done) => {
    const tvShow = {
      _embedded: {
        episodes: [{ data: 1 }, { data: 2 }],
      },
    };
    moxios.stubRequest('https://api.tvmaze.com/singlesearch/shows?q=nameTvShow&embed=episodes', {
      status: 200,
      response: tvShow,
    });

    const renderer = Renderer.create(<Episodes nameTvShow="nameTvShow" />);

    return moxios.wait(() => {
      const testInstance = renderer.toJSON();
      expect(testInstance).toMatchSnapshot();
      done();
    });
  });
});
