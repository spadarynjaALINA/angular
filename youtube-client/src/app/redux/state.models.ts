import { IVideoTransformed } from '../youtube/models/search-item.model';
export interface AppState {
  youtube: YoutubeState;
}

export interface YoutubeState {
  youtubeCards: YoutubeCardsState;
  customCards: IVideoTransformed[];
  error: string | null;
}

export interface ICustomCardState {
  customCards: IVideoTransformed[];
}
export interface YoutubeCardsState {
  cards: IVideoTransformed[];
  loading: boolean;
  loaded: boolean;
}
