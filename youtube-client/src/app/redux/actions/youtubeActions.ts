import { createAction, props } from '@ngrx/store';
import { ICustomCard } from 'src/app/youtube/models/custom-card.model';
import { IVideoTransformed } from 'src/app/youtube/models/search-item.model';

export const createYoutubeRequest = createAction(
  '[CARD_LIST PAGE] CREATE YOUTUBE_REQUEST',
  props<{ youtubeCards: IVideoTransformed }>(),
);
export const createCustomCard = createAction(
  '[ADMIN PAGE] CREATE USER_CARD',
  props<{ customCards: ICustomCard }>(),
);

export const getCardListSuccessful = createAction(
  '[VIDEO EFFECT] SET FETCHED CARDS',
  props<{ videos: IVideoTransformed }>(),
);
export const getCardListFailed = createAction(
  '[VIDEO EFFECT]  FETCHED CARD WAS FAILED',
  props<{ error: Error }>(),
);
