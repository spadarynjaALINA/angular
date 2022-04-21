import { Component, OnInit } from '@angular/core';

import { ISearchResponse } from '../../models/search-response.model';
import { YoutubeService } from '../../services/youtube.service';
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list-page.component.html',
  styleUrls: ['./cards-list-page.component.scss'],
})
export class CardsListPageComponent implements OnInit {
  public searchString = '';

  public filterString = '';

  public sortBy = '';

  public cardList: ISearchResponse;

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.cardList = this.youtubeService.getCardList();
    this.youtubeService.searchString.subscribe((val) => (this.searchString = val));
    this.youtubeService.filterString.subscribe((val) => (this.filterString = val));
    this.youtubeService.sortBy.subscribe((val) => (this.sortBy = val));
  }
}
