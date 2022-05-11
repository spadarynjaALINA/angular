import { Component, Input } from '@angular/core';
import { IVideoTransformed } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-card-statistic',
  templateUrl: './card-statistic.component.html',
  styleUrls: ['./card-statistic.component.scss'],
})
export class CardStatisticComponent {
  @Input() public card: IVideoTransformed;
}
