import React from 'react';
import Signature from '../Signature.jsx';
//import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

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

