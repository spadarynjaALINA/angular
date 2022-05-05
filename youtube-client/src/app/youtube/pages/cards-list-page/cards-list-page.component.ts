import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppStateService } from 'src/app/shared/app-state.service';
import { ISearchItem } from '../../models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list-page.component.html',
  styleUrls: ['./cards-list-page.component.scss'],
})
export class CardsListPageComponent implements OnInit, OnDestroy {
  public filterString = '';

  public sortBy = '';

  public cardList: ISearchItem[] | [] = [];

  private subscriptions = new Subscription();

  constructor(public youtubeService: YoutubeService, public appStateService: AppStateService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.appStateService.filterString$.subscribe((query) => (this.filterString = query)),
    );
    this.subscriptions.add(
      this.appStateService.sortBy$.subscribe((query) => (this.sortBy = query)),
    );
    this.subscriptions.add(
      this.appStateService.cardList$.subscribe((videos) => {
        this.cardList = videos;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
