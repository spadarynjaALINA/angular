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

  search(input: string): void {
    this.searchValue = input;
    this.youtubeService.searchString.next(this.searchValue);
  }
}
