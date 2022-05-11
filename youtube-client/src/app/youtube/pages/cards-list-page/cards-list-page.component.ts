import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/redux/state.models';
import { AppStateService } from 'src/app/shared/app-state.service';
import { IVideoTransformed } from '../../models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list-page.component.html',
  styleUrls: ['./cards-list-page.component.scss'],
})
export class CardsListPageComponent implements OnInit, OnDestroy {
  public filterString = '';

  public sortBy = '';

  public cardList: IVideoTransformed[] | [] = [];

  private subscriptions = new Subscription();

  constructor(
    private store: Store<AppState>,
    public youtubeService: YoutubeService,
    public appStateService: AppStateService,
  ) {
    console.log(this.store);
  }

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
