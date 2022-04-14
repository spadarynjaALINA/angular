import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() searchValueSubmit = new EventEmitter<string>();

  private searchValue = '';

  searchButton(searchValue: string) {
    this.searchValueSubmit.emit(searchValue);
  }

  inputChange(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
  }
}
