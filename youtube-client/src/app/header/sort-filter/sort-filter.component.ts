import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss'],
})
export class SortFilterComponent {
  @Output() filterValueSubmit = new EventEmitter<string>();

  @Output() sortBySubmit = new EventEmitter<string>();

  public toggleSortBtn: undefined | boolean = undefined;

  private filterValue = '';

  private sortByType = '';

  public UP_DIRECTION_DATE = 'upDirDate';

  public DOWN_DIRECTION_DATE = 'downDirDate';

  public UP_DIRECTION_VIEWS = 'upDirViews';

  public DOWN_DIRECTION_VIEWS = 'downDirViews';

  inputFilterChange(event: Event): void {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValueSubmit.emit(this.filterValue);
  }

  toggleSort(event: Event): void {
    this.toggleSortBtn = !this.toggleSortBtn;
    if ((event.target as HTMLButtonElement).id === 'dateSort' && this.toggleSortBtn === true) {
      this.sortByType = this.UP_DIRECTION_DATE;
    } else if (
      (event.target as HTMLButtonElement).id === 'dateSort' &&
      this.toggleSortBtn === false
    ) {
      this.sortByType = this.DOWN_DIRECTION_DATE;
    } else if (
      (event.target as HTMLButtonElement).id === 'viewsSort' &&
      this.toggleSortBtn === true
    ) {
      this.sortByType = this.UP_DIRECTION_VIEWS;
    } else if (
      (event.target as HTMLButtonElement).id === 'viewsSort' &&
      this.toggleSortBtn === false
    ) {
      this.sortByType = this.DOWN_DIRECTION_VIEWS;
    }

    this.sortBySubmit.emit(this.sortByType);
  }
}
