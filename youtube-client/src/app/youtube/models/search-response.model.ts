import { ISearchItem } from './search-item.model';

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
export interface ISearchResponse {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: ISearchItem[];
}
export interface ISearchResponse2 {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: ISearchItem[];
}
