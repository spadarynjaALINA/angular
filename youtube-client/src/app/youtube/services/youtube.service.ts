import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISearchItem } from '../models/search-item.model';
import { ISearchResponse } from '../models/search-response.model';
import * as cardList from './../pages/cards-list/card-list.json';
@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  cardsList: ISearchResponse = cardList;

  public searchString = new BehaviorSubject<string>('');

  public filterString = new BehaviorSubject<string>('');

  public sortBy = new BehaviorSubject<string>('');

  public id = new BehaviorSubject<string>('');

  public card: ISearchItem;

  getCard() {
    return this.cardsList;
  }
}
