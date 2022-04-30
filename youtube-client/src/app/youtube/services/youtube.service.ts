import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  filter,
  fromEvent,
  map,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { injectToken, injectUrl } from 'src/app/constants';
import { ISearchItem } from '../models/search-item.model';
import { ISearchResponse, ISearchResponse2 } from '../models/search-response.model';
import * as cardList from '../pages/cards-list-page/card-list.json';
import { ajax } from 'rxjs/ajax';
@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(
    private httpClient: HttpClient,
    @Inject(injectUrl) private apiUrl: string,
    @Inject(injectToken) private apiToken: string,
  ) {
    this.videos$ = this.videos$$.asObservable();
  }

  public videos$: Observable<ISearchItem[]>;

  public videos$$ = new Subject<ISearchItem[]>();

  public cardList: ISearchResponse = cardList;

  public searchString = new BehaviorSubject<string>('');

  public stream$: Observable<any>;

  public filterString = new BehaviorSubject<string>('');

  public sortBy = new BehaviorSubject<string>('');

  public urlData: string;

  public inputValue: string;

  getCard(id: string): ISearchItem | undefined {
    return this.cardList.items.find((card) => card.id === id);
  }

  createStream(input: Event) {
    this.stream$ = fromEvent(input.target as HTMLInputElement, 'input').pipe(
      map((event) => (event.target as HTMLInputElement).value),
      debounceTime(500),
      distinctUntilChanged(),
      filter((value) => value.length > 2),
      switchMap((value) => {
        return ajax
          .getJSON<ISearchResponse2>(
            `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCKc7WgnuYKWhwJzgrhmq2qPF5Q7IScK-c&type=video&part=snippet&maxResults=15&q=${value}`,
          )
          .pipe(
            catchError(() => EMPTY),
            map((response) => response.items),
          );
      }),
    );
    this.stream$.subscribe((response) => {
      this.videos$$.next(response as unknown as ISearchItem[]);
      console.log(response, this.videos$$, '-response');
    });
    console.log(this.stream$);
  }

  getYoutubeData(value: string): string {
    const queryParams = [
      'part=snippet',
      `q=${value}`,
      'regionCode=ru',
      'maxResults=20',
      'type=video',
      `key=${this.apiToken}`,
    ];
    return `${this.apiUrl}?${queryParams.join('&')}`;
  }
}
