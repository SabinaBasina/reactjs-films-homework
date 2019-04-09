import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../moduleDetailsActions';
import reducer from '../moduleDetailsReducers';
import * as selectors from '../moduleDetailsSelectors';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('moduleDetails', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('isReadyTvShow selector', () => {
    const mockParameters = {
      detailsReducers: {
        isReadyTvShow: false,
      },
    };
    expect(selectors.getIsReadyTvShow(mockParameters)).toEqual(false);
  });

  it('tvShowEpisodes selector', () => {
    const mockParameters = {
      detailsReducers: {
        tvShowEpisodes: { id: 1 },
      },
    };
    expect(selectors.getTvShowEpisodes(mockParameters)).toEqual({ id: 1 });
  });

  it('isReadyEpisodes selector', () => {
    const mockParameters = {
      detailsReducers: {
        isReadyEpisodes: false,
      },
    };
    expect(selectors.getIsReadyEpisodes(mockParameters)).toEqual(false);
  });

  it('tvShow selector', () => {
    const mockParameters = {
      detailsReducers: {
        tvShow: { id: 1 },
      },
    };
    expect(selectors.getTvShow(mockParameters)).toEqual({ id: 1 });
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle IS_READY_TVSHOW', () => {
    expect(
      reducer([], {
        type: 'IS_READY_TVSHOW',
      }),
    ).toMatchSnapshot();
  });

  it('should handle IS_READY_EPISODES', () => {
    expect(
      reducer([], {
        type: 'IS_READY_EPISODES',
      }),
    ).toMatchSnapshot();
  });

  it('should handle SET_TVSHOWEPISODES', () => {
    expect(
      reducer([], {
        type: 'SET_TVSHOWEPISODES',
      }),
    ).toMatchSnapshot();
  });

  it('should handle SET_TVSHOWDETAILS', () => {
    expect(
      reducer([], {
        type: 'SET_TVSHOWDETAILS',
      }),
    ).toMatchSnapshot();
  });

  it('async action loadTvShowEpisodes', (done) => {
    const tvShowEpisodes = { };
    moxios.stubRequest('https://api.tvmaze.com/singlesearch/shows?q=1&embed=episodes', {
      status: 200,
      response: { tvShowEpisodes },
    });

    const expectedActions = [
      { type: 'IS_READY_EPISODES', payload: false },
      { type: 'SET_TVSHOWEPISODES', payload: { tvShowEpisodes: {} } },
      { type: 'IS_READY_EPISODES', payload: true },
    ];

    const store = mockStore({ });
    store.dispatch(actions.loadTvShowEpisodes(1));

    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('async action loadTvShowsDetails', (done) => {
    const tvShow = { };
    moxios.stubRequest('https://api.tvmaze.com/shows/1', {
      status: 200,
      response: { tvShow },
    });

    const expectedActions = [
      { type: 'IS_READY_TVSHOW', payload: false },
      { type: 'SET_TVSHOWDETAILS', payload: { tvShow: {} } },
      { type: 'IS_READY_TVSHOW', payload: true },
    ];

    const store = mockStore({ });
    store.dispatch(actions.loadTvShowsDetails(1));

    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
