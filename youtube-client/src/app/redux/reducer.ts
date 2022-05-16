import * as youtubeActions from './actions';
import { Action, createReducer, on } from '@ngrx/store';
import { YoutubeState } from './state.models';
import { initialYoutubeState } from './state';

const reducer = createReducer(
  initialYoutubeState,
  on(youtubeActions.getYoutubeCards, (state) => {
    return {
      ...state,
      youtubeCards: {
        ...state.youtubeCards,
        loading: true,
        loaded: false,
      },
    };
  }),
  on(youtubeActions.createCustomCard, (state, { customCard }) => {
    return { ...state, customCards: [...state.customCards, customCard] };
  }),

  on(youtubeActions.getCardListSuccessful, (state, { cards }) => {
    return {
      ...state,
      youtubeCards: {
        ...state.youtubeCards,
        cards: [...cards],
        loading: false,
        loaded: true,
      },
    };
  }),

  on(youtubeActions.getCardListFailed, (state, { error }) => {
    return {
      ...state,
      error,
      youtubeCards: {
        ...state.youtubeCards,
        loading: false,
        loaded: false,
      },
    };
  }),
);
export function Reducer(state: YoutubeState, action: Action) {
  return reducer(state, action);
}
