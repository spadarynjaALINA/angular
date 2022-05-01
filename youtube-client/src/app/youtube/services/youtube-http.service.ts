import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { ISearchItem } from '../models/search-item.model';

import { ISearchResponse, ISearchResponse2 } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeHttpService {
  constructor(private http: HttpClient) {}

  private SEARCH_URL = 'search';

  private VIDEOS_URL = 'videos';

  private MAX_RESULTS = '15';

  private PATH = 'snippet';

  private PATH_FOR_STAT = 'snippet,statistics';

  private TYPE = 'video';

  private KEY = 'AIzaSyCKc7WgnuYKWhwJzgrhmq2qPF5Q7IScK-c';

  createSearchRequestIds(query: string): Observable<string[]> {
    console.log('YoutubeHttpService');
    const params = new HttpParams()
      .set('maxResults', this.MAX_RESULTS)
      .set('q', query || '')
      .set('type', this.TYPE)
      .set('key', this.KEY)
      .set('part', this.PATH);
    return this.http.get<ISearchResponse2>(this.SEARCH_URL, { params }).pipe(
      catchError(() => EMPTY),
      map((response) => response.items.map((items) => items.id.videoId)),
    );
  }

  createSearchRequestCards(ids: string[]): Observable<ISearchItem[]> {
    const IDS = ids.join(',');

    const params = new HttpParams()
      .set('key', this.KEY)
      .set('part', this.PATH_FOR_STAT)
      .set('id', IDS);
    console.log(IDS, params);
    return this.http.get<ISearchResponse>(this.VIDEOS_URL, { params }).pipe(
      catchError(() => EMPTY),
      map((response) => response.items),
    );
  }
}
