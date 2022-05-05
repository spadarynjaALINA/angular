import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { AppStateService } from 'src/app/shared/app-state.service';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(public youtubeService: YoutubeService, public appStateService: AppStateService) {}

  public searchString = new BehaviorSubject<string>('');

  ngOnInit() {
    this.searchString
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((value) => value.length > 2),
      )
      .subscribe((value) => this.appStateService.getCardList(value));
  }
}
