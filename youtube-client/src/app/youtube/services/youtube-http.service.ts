import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { ISearchItem } from '../models/search-item.model';
import { ISearchResponse2 } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeHttpService {
  constructor(private http: HttpClient) {}

  private SEARCH_URL = 'search';

  private VIDEOS_URL = 'videos';

  private MAX_RESULTS = '15';

  private PATH = 'snippets';

  private TYPE = 'video';

  private KEY = 'AIzaSyCKc7WgnuYKWhwJzgrhmq2qPF5Q7IScK-c';

  createSearchRequest(query: string): Observable<ISearchItem[]> {
    console.log('request');
    const params = new HttpParams()
      .set('maxResults', this.MAX_RESULTS)
      .set('q', query)
      .set('type', this.TYPE)
      .set('key', this.KEY);
    return this.http.get<ISearchResponse2>(this.SEARCH_URL, { params }).pipe(
      catchError(() => EMPTY),
      map((response) => response.items),
      tap((response: any) => console.log(response)),
    );
  }
}
