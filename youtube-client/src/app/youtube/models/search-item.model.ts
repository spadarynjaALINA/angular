interface ISize {
  url: string;
  width: number;
  height: number;
}
interface IThumbnails {
  default: ISize;
  medium: ISize;
  high: ISize;
  standard: ISize;
  maxres: ISize;
}
interface ILocalized {
  title: string;
  description: string;
}

export interface Iid {
  kind: string;
  videoId: string;
}
interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
}
export interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
export interface ISearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

export interface Ivideo {
  kind: string;
  etag: string;
  id: Iid;
  snippet: ISnippet;
}
