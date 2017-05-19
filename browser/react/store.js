import {createStore} from 'redux';
import reducer from './reducers/root-reducer';

 //createStore(reducer);

// lyricsStore.dispatch()
export default createStore(
   reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
