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

  public card: ISearchItem;

  public id: string;

  getCardList(): ISearchResponse {
    return this.cardList;
  }

  getCard(): ISearchItem {
    this.id = location.pathname.slice(6);
    this.card = this.cardList.items.filter((x) => x.id === this.id)[0];
    return this.card;
  }
}
