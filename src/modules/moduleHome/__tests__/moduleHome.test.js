import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../moduleHomeActions';
import reducer from '../moduleHomeReducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('reducers', () => {
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

  it('async action 1', () => {
    const scrollToSpy = jest.fn();
    global.scrollTo = scrollToSpy;
    const store = mockStore({ tvShows: { } });
    return store.dispatch(actions.loadTvShows()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
      expect(scrollToSpy).toHaveBeenCalled();
    });
  });

  it('async action 2', () => {
    const store = mockStore({ tvShows: { } });
    return store.dispatch(actions.getSearchResult()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
