import { Component, Input } from '@angular/core';
import { AppStateService } from 'src/app/shared/app-state.service';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.scss'],
})
export class MatCardComponent {
  @Input() card: ISearchItem;

  constructor(public appStateService: AppStateService) {}
}
