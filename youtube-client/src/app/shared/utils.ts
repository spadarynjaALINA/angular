import { ISearchItem } from '../youtube/models/search-item.model';

export function createToken(): string {
  return Math.random()
    .toString(36)
    .replace(/[^a-zA-Z0-9]+/g, '')
    .substring(0.1);
}
export function videoTransform({ id, snippet, statistics }: ISearchItem) {
  return {
    img: snippet.thumbnails.maxres?.url,
    title: snippet.title,
    id,
    publishedAt: snippet.publishedAt,
    description: snippet.description,
    statistic: {
      viewCount: statistics.viewCount,
      likeCount: statistics.likeCount,
      dislikeCount: statistics.dislikeCount,
      commentCount: statistics.commentCount,
    },
  };
}
