import React from 'react';
// import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signature from '../Signature';

/* global test, expect */

test('Signature test', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signature />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
