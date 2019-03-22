/* eslint-disable no-shadow */
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Renderer from 'react-test-renderer';
import http from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Episodes from '../Episodes';

/* global test, expect, jest */

jest.mock(
  '../../Episode/Episode',
  () => data => `mock data${JSON.stringify(data)}`,
);

test.skip('Episodes test', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Episodes />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});

test('Episodes test 2', () => {
  const mock = new MockAdapter(http);
  const tvShow = {
    _embedded: {
      episodes: [{ data: 1 }, { data: 2 }],
    },
  };
  mock.onGet('https://api.tvmaze.com/singlesearch/shows?q=nameTvShow&embed=episodes')
    .reply(200, tvShow);

  const renderer = Renderer.create(<Episodes nameTvShow="nameTvShow" />);
  const testInstance = renderer.toJSON();
  expect(testInstance).toMatchSnapshot();
  // const res = testInstance.findByProps({class: 'episode'}).length;
  // //const res = testInstance.children.length;
  // console.log(res);
});
