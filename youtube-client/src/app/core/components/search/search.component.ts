import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { getYoutubeCards } from 'src/app/redux/actions/youtubeActions';
import { YoutubeState } from 'src/app/redux/state.models';

import { AppStateService } from 'src/app/shared/app-state.service';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(
    public youtubeService: YoutubeService,
    public appStateService: AppStateService,
    private store: Store<YoutubeState>,
  ) {}

  public searchString$ = new BehaviorSubject<string>('');

  ngOnInit() {
    console.log(this.store);
    this.searchString$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((value) => value.length > 2),
      )
      .subscribe((searchString) => this.store.dispatch(getYoutubeCards({ searchString })));
  }
}
