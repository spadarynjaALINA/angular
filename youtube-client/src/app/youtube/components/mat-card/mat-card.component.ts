import { Input, Component } from '@angular/core';

import { ISearchItem } from 'src/app/youtube/models/search-item.model';

import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.scss'],
})
export class MatCardComponent {
  constructor(private youtubeService: YoutubeService) {}

  @Input() public card: ISearchItem;

  @Input() public cards: ISearchItem[];

  @Input() public id: number;

  public index: string;

  goToCard() {
    this.youtubeService.card = this.card;
  }
}
