import { YoutubeState } from './state.models';

export const initialYoutubeState: YoutubeState = {
  youtubeCards: {
    cards: [],
    loading: false,
    loaded: false,
  },
  customCards: [],
  error: null,
};
