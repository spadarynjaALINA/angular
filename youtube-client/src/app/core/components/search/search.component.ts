import { Component } from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  // @Output() searchValueSubmit = new EventEmitter<string>();

  constructor(public youtubeService: YoutubeService) {}

  private searchValue = '';

  search(input: HTMLInputElement): void {
    this.searchValue = input.value;
    this.youtubeService.searchString.next(this.searchValue);
  }
}
