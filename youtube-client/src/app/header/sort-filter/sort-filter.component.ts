import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss'],
})
export class SortFilterComponent {
  @Output() filterValueSubmit = new EventEmitter<string>();

  @Output() sortBySubmit = new EventEmitter<string>();

  @Output() isClickSubmit: undefined | boolean = undefined;

  private filterValue = '';

  private sortByType = '';

  inputFilterChange(event: Event): void {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValueSubmit.emit(this.filterValue);
  }

  toggleSort(event: Event): void {
    this.isClickSubmit = !this.isClickSubmit;
    if ((event.target as HTMLButtonElement).id === 'dateSort' && this.isClickSubmit === true) {
      this.sortByType = 'upDirDate';
    } else if (
      (event.target as HTMLButtonElement).id === 'dateSort' &&
      this.isClickSubmit === false
    ) {
      this.sortByType = 'downDirDate';
    } else if (
      (event.target as HTMLButtonElement).id === 'viewsSort' &&
      this.isClickSubmit === true
    ) {
      this.sortByType = 'upDirViews';
    } else if (
      (event.target as HTMLButtonElement).id === 'viewsSort' &&
      this.isClickSubmit === false
    ) {
      this.sortByType = 'downDirViews';
    }

    this.sortBySubmit.emit(this.sortByType);
  }
}
