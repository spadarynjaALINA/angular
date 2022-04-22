import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISearchItem } from '../models/search-item.model';
import { ISearchResponse } from '../models/search-response.model';
import * as cardList from '../pages/cards-list-page/card-list.json';
@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  public cardList: ISearchResponse = cardList;

  public searchString = new BehaviorSubject<string>('');

  public filterString = new BehaviorSubject<string>('');

  public sortBy = new BehaviorSubject<string>('');

  getCardList(): ISearchResponse {
    return this.cardList;
  }

  getCard(id: string): ISearchItem | undefined {
    return this.cardList.items.find((x) => x.id === id);
  }
}
