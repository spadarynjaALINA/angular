import { createFeatureSelector, createSelector } from '@ngrx/store';
import { YoutubeState } from './state.models';
const selectorYoutubeState = createFeatureSelector<YoutubeState>('youtubeState');

export const youtubeCardSelector = createSelector(
  selectorYoutubeState,
  (state) => state.youtubeCards,
);
export const customCardSelector = createSelector(
  selectorYoutubeState,
  (state) => state.customCards,
);
export const allCardsSelector = createSelector(selectorYoutubeState, (state) => [
  ...state.youtubeCards.cards,
  ...state.customCards,
]);
