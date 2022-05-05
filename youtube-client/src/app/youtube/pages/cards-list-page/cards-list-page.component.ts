import { Component } from '@angular/core';
import { AppStateService } from 'src/app/shared/app-state.service';
import { ISearchItem } from '../../models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list-page.component.html',
  styleUrls: ['./cards-list-page.component.scss'],
})
export class CardsListPageComponent {
  public filterString = '';

  public sortBy = '';

  public cardList: ISearchItem[] | [] = [];

  constructor(public youtubeService: YoutubeService, public appStateService: AppStateService) {
    this.appStateService.filterString$.subscribe((query) => (this.filterString = query));
    this.appStateService.sortBy$.subscribe((query) => (this.sortBy = query));
    this.appStateService.cardList$.subscribe((videos) => {
      this.cardList = videos;
    });
  }
}
