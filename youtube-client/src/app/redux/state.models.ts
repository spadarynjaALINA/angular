import { ICustomCard } from '../youtube/models/custom-card.model';
import { IVideoTransformed } from '../youtube/models/search-item.model';
export interface AppState {
  youtube: YoutubeState;
}

export interface YoutubeState {
  youtubeCards: YoutubeCardsState;
  customCards: ICustomCard[];
  error: Error | null;
}

export interface ICustomCardState {
  customCards: ICustomCard[];
}
export interface YoutubeCardsState {
  cards: IVideoTransformed[];
  loading: boolean;
  loaded: boolean;
}
