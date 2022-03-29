interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
export interface ISearchResponse {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
}
