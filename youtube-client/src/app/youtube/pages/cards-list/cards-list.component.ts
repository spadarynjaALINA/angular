import { Component, OnInit } from '@angular/core';

import { ISearchResponse } from '../../models/search-response.model';
import { YoutubeService } from '../../services/youtube.service';
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {
  public searchString = '';

  public filterString = '';

  public sortBy = '';

  public cardList: ISearchResponse;

  constructor(private _youtubeService: YoutubeService) {}

  ngOnInit() {
    this.cardList = this._youtubeService.getCard();
    this._youtubeService.searchString.subscribe((val) => (this.searchString = val));
    this._youtubeService.filterString.subscribe((val) => (this.filterString = val));
    this._youtubeService.sortBy.subscribe((val) => (this.sortBy = val));
  }
}
