import { Component } from '@angular/core';
import { AppStateService } from 'src/app/shared/app-state.service';

import {
  UP_DIRECTION_DATE,
  DOWN_DIRECTION_DATE,
  UP_DIRECTION_VIEWS,
  DOWN_DIRECTION_VIEWS,
} from './../../../constants';
@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss'],
})
export class SortFilterComponent {
  constructor(public appStateService: AppStateService) {}

  public toggleSortBtn: undefined | boolean = undefined;

  private filterValue = '';

  private sortByType = '';

  inputFilterChange(event: Event): void {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.appStateService.filterString.next(this.filterValue);
  }

  toggleSort(event: Event): void {
    this.toggleSortBtn = !this.toggleSortBtn;
    if ((event.target as HTMLButtonElement).id === 'dateSort' && this.toggleSortBtn === true) {
      this.sortByType = UP_DIRECTION_DATE;
    } else if (
      (event.target as HTMLButtonElement).id === 'dateSort' &&
      this.toggleSortBtn === false
    ) {
      this.sortByType = DOWN_DIRECTION_DATE;
    } else if (
      (event.target as HTMLButtonElement).id === 'viewsSort' &&
      this.toggleSortBtn === true
    ) {
      this.sortByType = UP_DIRECTION_VIEWS;
    } else if (
      (event.target as HTMLButtonElement).id === 'viewsSort' &&
      this.toggleSortBtn === false
    ) {
      this.sortByType = DOWN_DIRECTION_VIEWS;
    }
    this.appStateService.sortBy.next(this.sortByType);
  }
}
