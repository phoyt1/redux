import {SET_LYRICS} from '../constants';

const initialState = {lyrics: ''};

export default function reducer (state = initialState, action) {
  switch (action.type){
    case SET_LYRICS:
      return Object.assign({}, state, {lyrics: action.lyrics})
    default:
      return state;
  }
}
