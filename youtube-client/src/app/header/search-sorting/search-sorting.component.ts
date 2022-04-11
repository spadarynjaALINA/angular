import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-sorting',
  templateUrl: './search-sorting.component.html',
  styleUrls: ['./search-sorting.component.scss'],
})
export class SearchSortingComponent {
  @Output() searchValueSubmit = new EventEmitter<string>();

  private searchValue = '';

  searchButton(searchValue: string) {

    this.searchValueSubmit.emit(searchValue);
  }

  inputChange(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
  }
}
