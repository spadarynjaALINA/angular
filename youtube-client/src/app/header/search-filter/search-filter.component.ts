import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent {
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
      this.sortByType = 'dateH';
    } else if (
      (event.target as HTMLButtonElement).id === 'dateSort' &&
      this.isClickSubmit === false
    ) {
      this.sortByType = 'dateL';
    } else if (
      (event.target as HTMLButtonElement).id === 'viewsSort' &&
      this.isClickSubmit === true
    ) {
      this.sortByType = 'viewsH';
    } else if (
      (event.target as HTMLButtonElement).id === 'viewsSort' &&
      this.isClickSubmit === false
    ) {
      this.sortByType = 'viewsL';
    }

    this.sortBySubmit.emit(this.sortByType);
  }
}
