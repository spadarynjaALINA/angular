import { createFeatureSelector, createSelector } from '@ngrx/store';
import { YoutubeState } from '../state.models';

export const youtubeCardSelector = createSelector(
  createFeatureSelector<YoutubeState>('youtubeState'),
  (state) => state.youtubeCards,
);

export const customCardSelector = createSelector(
  createFeatureSelector<YoutubeState>('youtubeState'),
  (state) => state.customCards,
);
