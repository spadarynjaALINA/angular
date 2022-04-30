import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { injectToken, injectUrl } from 'src/app/constants';
import { ISearchItem } from '../models/search-item.model';
import { ISearchResponse } from '../models/search-response.model';
import * as cardList from '../pages/cards-list-page/card-list.json';
import { YoutubeHttpService } from './youtube-http.service';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(
    private httpClient: HttpClient,
    @Inject(injectUrl) private apiUrl: string,
    @Inject(injectToken) private apiToken: string,
    public httpService: YoutubeHttpService,
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

  getYoutubeData(input: Event) {
    this.stream$ = fromEvent(input.target as HTMLInputElement, 'input').pipe(
      map((event) => (event.target as HTMLInputElement).value),
      debounceTime(500),
      distinctUntilChanged(),
      filter((value) => value.length > 2),
      switchMap((value) => {
        return this.httpService.createSearchRequest(value);
      }),
    );
    this.stream$.subscribe((value) => this.videos$$.next(value));
  }
}
