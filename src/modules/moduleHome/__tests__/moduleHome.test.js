import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../moduleHomeActions';
import reducer from '../moduleHomeReducers';
import * as selectors from '../moduleHomeSelectors';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('reducers', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('isReadyTvShows selector', () => {
    const mockParameters = {
      homeReducers: {
        isReadyTvShows: false,
      },
    };
    expect(selectors.getIsReadyTvShows(mockParameters)).toEqual(false);
  });

  it('tvShows selector', () => {
    const mockParameters = {
      homeReducers: {
        tvShows: { id: 1 },
      },
    };
    expect(selectors.getTvShows(mockParameters)).toEqual({ id: 1 });
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle IS_READY_TVSHOWS', () => {
    expect(
      reducer([], {
        type: 'IS_READY_TVSHOWS',
      }),
    ).toMatchSnapshot();
  });

  it('should handle SET_TVSHOWS', () => {
    expect(
      reducer([], {
        type: 'SET_TVSHOWS',
      }),
    ).toMatchSnapshot();
  });

  it('async action 1', (done) => {
    const tvShows = [{ show: 1 }, { show: 2 }];
    moxios.stubRequest('https://api.tvmaze.com/search/shows?q=1', {
      status: 200,
      response: tvShows,
    });

    const expectedActions = [
      { type: 'IS_READY_TVSHOWS', payload: false },
      { type: 'SET_TVSHOWS', payload: [1, 2] },
      { type: 'IS_READY_TVSHOWS', payload: true },
    ];

    const store = mockStore({ });
    store.dispatch(actions.getSearchResult(1));

    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('async action 2', (done) => {
    const scrollToSpy = jest.fn();
    global.scrollTo = scrollToSpy;
    const tvShows = { };
    moxios.stubRequest('https://api.tvmaze.com/shows?page=1', {
      status: 200,
      response: { tvShows },
    });

    const expectedActions = [
      { type: 'IS_READY_TVSHOWS', payload: false },
      { type: 'SET_TVSHOWS', payload: { tvShows: {} } },
      { type: 'IS_READY_TVSHOWS', payload: true },
    ];

    const store = mockStore({ });
    store.dispatch(actions.loadTvShows(1));

    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(scrollToSpy).toHaveBeenCalled();
      done();
    });
  });
});
