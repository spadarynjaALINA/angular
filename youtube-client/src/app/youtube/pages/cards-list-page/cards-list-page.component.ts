import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { allCardsSelector } from 'src/app/redux/selectors/youtube-selectors';
import { YoutubeState } from 'src/app/redux/state.models';
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
    public youtubeService: YoutubeService,
    public appStateService: AppStateService,
    private store: Store<YoutubeState>,
  ) {}

  ngOnInit(): void {
    this.store.select(allCardsSelector).subscribe((cardList) => {
      if (cardList) {
        this.cardList = cardList;
      }
    });
    this.subscriptions.add(
      this.appStateService.filterString$.subscribe((query) => (this.filterString = query)),
    );
    this.subscriptions.add(
      this.appStateService.sortBy$.subscribe((query) => (this.sortBy = query)),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
