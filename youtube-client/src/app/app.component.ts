import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  public searchValue = '';

  public panelSearchValue = '';

  public sortBy = '';

  searchValueUpdate(value: string) {
    this.searchValue = value;
  }

  panelSearchValueUpdate(value: string) {
    this.panelSearchValue = value;
  }

  toggleSort(value: string) {
    this.sortBy = value;
  }
}
