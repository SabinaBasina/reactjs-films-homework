// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';

// import * as actions from '../moduleDetailsActions';
import reducer from '../moduleDetailsReducers';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

describe('reducers', () => {
  // afterEach(() => {
  //   fetchMock.reset();
  //   fetchMock.restore();
  // });

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

  // it('async action 1', () => {
  //   fetchMock.getOnce('https://api.tvmaze.com/singlesearch/shows?q=nameTvShow&embed=episodes', {
  //     body: { data: [1, 2, 3], status: 'ok' },
  //     headers: { 'content-type': 'application/json' },
  //   });
  //   const expectedActions = [
  //     { type: 'IS_READY_EPISODES' },
  //     { type: 'SET_TVSHOWEPISODES', payload: [1, 2, 3] },
  //   ];
  //   const store = mockStore({ tvShowEpisodes: { } });
  //   return store.dispatch(actions.loadTvShowEpisodes()).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });

  // it('async action 2', () => {
  //   const store = mockStore({ tvShow: { } });
  //   return store.dispatch(actions.loadTvShowsDetails()).then(() => {
  //     expect(store.getActions()).toMatchSnapshot();
  //   });
  // });
});
