import { Component } from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(public youtubeService: YoutubeService) {}

  private searchValue = '';

  search(event: Event): void {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.youtubeService.searchString.next(this.searchValue);
    this.youtubeService.inputValue = (event.target as HTMLInputElement).value;
    this.youtubeService.createStream(event);
  }
}
