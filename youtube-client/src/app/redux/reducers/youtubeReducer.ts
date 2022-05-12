import * as youtubeActions from '../actions/youtubeActions';
import { Action, createReducer, on } from '@ngrx/store';
import { YoutubeState } from '../state.models';
import { initialYoutubeState } from '../state';

const reducer = createReducer(
  initialYoutubeState,
  on(youtubeActions.getYoutubeCards, (state) => {
    console.log('getYoutubeCards', state);
    return { ...state, loading: true };
  }),
  on(youtubeActions.createCustomCard, (state, { customCard }) => ({
    ...state,
    customCards: [...state.customCards, customCard],
    loading: false,
    loaded: true,
  })),

  on(youtubeActions.getCardListSuccessful, (state, { cards }) => ({
    ...state,
    youtubeCards: {
      ...state.youtubeCards,
      cards: [...cards],
      loading: false,
      loaded: true,
    },
  })),

  on(youtubeActions.getCardListFailed, (state, { error }) => {
    return { ...state, error, loading: false, loaded: false };
  }),
);
export function youtubeReducer(state: YoutubeState, action: Action) {
  return reducer(state, action);
}
