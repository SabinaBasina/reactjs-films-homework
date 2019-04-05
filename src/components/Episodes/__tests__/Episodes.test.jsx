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

  // it('Episodes componentDidUpdate: should not onReady', () => {
  //   // const onReady = jest.fn();
  //   Episodes.prototype.componentDidUpdate.call(
  //     { props: { isReadyEpisodes: true } },
  //     { isReadyEpisodes: true },
  //   );
  //   expect(Episodes.prototype.componentDidUpdate.calledOnce).to.equal(false);
  // });

  // it('Episodes componentDidUpdate: should onReady', () => {
  //   const onReady = jest.fn();
  //   Episodes.prototype.componentDidUpdate.call(
  //     { props: { isReadyEpisodes: true } },
  //     { isReadyEpisodes: false, onReady },
  //   );
  //   expect(Episodes.prototype.componentDidUpdate.calledOnce).to.equal(true);
  // });
});
