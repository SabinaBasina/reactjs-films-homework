import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import Signature from '../Signature';
import TvShowDetails from '../../../pages/TvShowDetails';

jest.mock('../../../pages/Home', () => () => 'Home');
jest.mock('../../../pages/TvShowDetails', () => jest.fn(() => 'TvShowDetails'));


describe('1', () => {
  test('renders 1', () => {
    const component = TestRenderer.create(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Signature />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  test('renders 2', () => {
    const component = TestRenderer.create(
      <MemoryRouter initialEntries={['/tvShowDetails/1']} initialIndex={0}>
        <Signature />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
    expect(TvShowDetails.mock.calls[0][0]).toEqual({ id: '1' });
  });
});
