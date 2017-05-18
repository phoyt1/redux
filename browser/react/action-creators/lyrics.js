import constants from '../constants';

export const setLyrics = (text) => {
  return {
    type: constants.SET_LYRICS,
    lyric: text
  }

}
