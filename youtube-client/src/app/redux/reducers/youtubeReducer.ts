import * as youtubeActions from '../actions/youtubeActions';
import { Action, createReducer, on } from '@ngrx/store';
import { YoutubeState } from '../state.models';
import { initialYoutubeState } from '../state';

const reducer = createReducer(
  initialYoutubeState,
  on(youtubeActions.createYoutubeRequest, (state) => {
    console.log('state work', state);
    return { ...state, loading: true };
  }),

  on(youtubeActions.getCardListSuccessful, (state, { videos }) => {
    console.log('state work', state);
    return { ...state, videos, loading: false, loaded: true };
  }),
  on(youtubeActions.getCardListFailed, (state, { error }) => {
    return { ...state, error, loading: false, loaded: false };
  }),
);
export function youtubeReducer(state: YoutubeState, action: Action) {
  return reducer(state, action);
}
