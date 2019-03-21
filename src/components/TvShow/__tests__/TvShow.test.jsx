import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TvShow from '../TvShow';

/* global test, expect */

test('TvShow test img is', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<TvShow data={{ image: { medium: 'medium' } }} />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});

test('TvShow test img no', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<TvShow data={{ }} />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});

test('TvShow test genres', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<TvShow data={{ genres: 'genres' }} />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});

test('TvShow test rating', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<TvShow data={{ rating: { average: 'rating' } }} />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
