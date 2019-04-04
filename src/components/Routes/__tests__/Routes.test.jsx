import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import Routes from '../Routes';
import TvShowDetails from '../../../pages/TvShowDetails';
import Home from '../../../pages/Home';
import TvShowPage from '../../TvShowPage';

jest.mock('../../../pages/TvShowDetails', () => jest.fn(() => 'TvShowDetails'));
jest.mock('../../TvShowPage', () => jest.fn(() => 'TvShowPage'));
jest.mock('../../../pages/Home', () => jest.fn(() => 'Home'));


describe('1', () => {
  test('renders 1', () => {
    const component = TestRenderer.create(
      <MemoryRouter initialEntries={['/tvShowDetails/1']} initialIndex={0}>
        <Routes />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
    expect(TvShowDetails.mock.calls[0][0]).toEqual({ id: '1' });
  });

  test('renders 2', () => {
    const component = TestRenderer.create(
      <MemoryRouter initialEntries={['/search/a']} initialIndex={0}>
        <Routes />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
    expect(TvShowPage.mock.calls[0][0]).toEqual({ searchValue: 'a' });
  });

  test('renders 3', () => {
    const component = TestRenderer.create(
      <MemoryRouter initialEntries={['/page/1']} initialIndex={0}>
        <Routes />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
    expect(Home.mock.calls[0][0]).toEqual({ pageNumber: '1' });
  });
});
