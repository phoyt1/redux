import {createStore, applyMiddleware, combineReducers} from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

// applyMiddleware(loggerMiddleware)

// export default createStore(
//    reducer, /* preloadedState, */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  );


 const store = createStore(lyricsReducer, applyMiddleware(loggerMiddleware, thunkMiddleware))/* preloadedState, */

  export default store

combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
});
