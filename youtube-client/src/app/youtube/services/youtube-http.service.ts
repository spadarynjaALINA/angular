import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { ISearchItem } from '../models/search-item.model';
import { API } from 'src/app/constants';
import { ISearchResponse, ISearchResponse2 } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeHttpService {
  constructor(private http: HttpClient) {}

  createSearchRequestIds(query: string): Observable<string[]> {
    const params = new HttpParams()
      .set('maxResults', API.MAX_RESULTS)
      .set('q', query || '')
      .set('type', API.TYPE)
      .set('key', API.KEY)
      .set('part', API.PATH);
    return this.http.get<ISearchResponse2>(API.SEARCH_URL, { params }).pipe(
      catchError(() => EMPTY),
      map((response) => response.items.map((items) => items.id.videoId)),
    );
  }

  createSearchRequestCards(ids: string[]): Observable<ISearchItem[]> {
    const IDS = ids.join(',');
    const params = new HttpParams()
      .set('key', API.KEY)
      .set('part', API.PATH_FOR_STAT)
      .set('id', IDS);

    return this.http.get<ISearchResponse>(API.VIDEOS_URL, { params }).pipe(
      catchError(() => EMPTY),
      map((response) => response.items),
    );
  }
}
