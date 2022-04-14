import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  public searchValue = '';

  public filterValue = '';

  public sortBy = '';

  searchValueUpdate(value: string): void {
    this.searchValue = value;
  }

  filterValueUpdate(value: string): void {
    this.filterValue = value;
  }

  toggleSort(value: string): void {
    this.sortBy = value;
  }
}
