import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Renderer from 'react-test-renderer';
import moxios from 'moxios';
import TvShowDetails from '../TvShowDetails';

describe('test', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('TvShowDetails test', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TvShowDetails />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  it('TvShowDetails test 2', (done) => {
    const tvShow = {
      image: {
        medium: [1, 2],
      },
    };
    const isReady = true;
    moxios.stubRequest('https://api.tvmaze.com/shows/id', {
      status: 200,
      response: { tvShow, isReady },
    });

    const renderer = Renderer.create(<TvShowDetails id="id" />);

    return moxios.wait(() => {
      const testInstance = renderer.toJSON();
      expect(testInstance).toMatchSnapshot();
      done();
    });
  });

  it('TvShowDetails test 3', (done) => {
    const tvShow = { };
    const isReady = true;
    moxios.stubRequest('https://api.tvmaze.com/shows/id', {
      status: 200,
      response: { tvShow, isReady },
    });

    const renderer = Renderer.create(<TvShowDetails id="id" />);

    return moxios.wait(() => {
      const testInstance = renderer.toJSON();
      expect(testInstance).toMatchSnapshot();
      done();
    });
  });
});
