import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signature from '../Signature';

jest.mock(
  '../../TvShowDetails/TvShowDetails',
  () => id => `mock data${JSON.stringify(id)}`,
);

test('Signature test', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signature />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
