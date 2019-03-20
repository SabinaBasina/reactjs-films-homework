import React from 'react';
// import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signature from '../Signature';

/* global test, expect */

test('Signature test', () => {
  // const component = renderer.create(
  //     <Signature name='Name'></Signature>,
  // );
  // let tree = component.toJSON();
  const renderer = new ShallowRenderer();
  renderer.render(<Signature />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
