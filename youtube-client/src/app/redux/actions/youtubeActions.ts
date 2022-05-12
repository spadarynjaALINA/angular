import { createAction, props } from '@ngrx/store';

import { IVideoTransformed } from 'src/app/youtube/models/search-item.model';

export const getYoutubeCards = createAction(
  '[YOUTUBE PAGE] CREATE YOUTUBE_REQUEST',
  props<{ searchString: string }>(),
);
export const createCustomCard = createAction(
  '[ADMIN PAGE] CREATE USER_CARD',
  props<{ customCard: IVideoTransformed }>(),
);
export const getCardListSuccessful = createAction(
  '[VIDEO EFFECT] SET FETCHED CARDS',
  props<{ cards: IVideoTransformed[] }>(),
);
export const getCardListFailed = createAction(
  '[VIDEO EFFECT]  FETCHED CARD WAS FAILED',
  props<{ error: string | null }>(),
);
