import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ISearchItem } from '../../models/search-item.model';

import { YoutubeService } from '../../services/youtube.service';
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list-page.component.html',
  styleUrls: ['./cards-list-page.component.scss'],
})
export class CardsListPageComponent {
  public searchString = '';

  public filterString = '';

  public sortBy = '';

  public cardList = new BehaviorSubject<ISearchItem[]>([]);

  constructor(public youtubeService: YoutubeService) {
    this.youtubeService.videos$.subscribe((val) => this.cardList.next(val));
    this.youtubeService.searchString.subscribe((val) => (this.searchString = val));
    this.youtubeService.filterString.subscribe((val) => (this.filterString = val));
    this.youtubeService.sortBy.subscribe((val) => (this.sortBy = val));
    console.log(
      this.youtubeService.stream$,
      this.youtubeService.videos$,
      this.youtubeService.videos$$,
      this.cardList,
      'cardlist',
    );
  }
}
