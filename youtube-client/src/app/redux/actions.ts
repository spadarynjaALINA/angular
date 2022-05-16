import { createAction, props } from '@ngrx/store';

import { IVideoTransformed } from 'src/app/youtube/models/search-item.model';

export const getYoutubeCards = createAction(
  '[YOUTUBE CARDS REQUEST] CREATE YOUTUBE_REQUEST',
  props<{ searchString: string }>(),
);
export const createCustomCard = createAction(
  '[CUSTOM CARDS] CREATE USER_CARD',
  props<{ customCard: IVideoTransformed }>(),
);
export const getCardListSuccessful = createAction(
  '[CARD_LIST FETCH SUCCESSFUL] SET FETCHED CARDS',
  props<{ cards: IVideoTransformed[] }>(),
);
export const getCardListFailed = createAction(
  '[CARD_LIST FETCH FAILED]  FETCHED CARD WAS FAILED',
  props<{ error: string | null }>(),
);
