import { Input, Component } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.scss'],
})
export class MatCardComponent {
  @Input() public card: ISearchItem;

  date = new Date(Date.now());

  dateMonthAgo = this.date.setMonth(this.date.getMonth() - 1);

  date1 = new Date(Date.now());

  dateWeek: number = this.date1.setDate(this.date1.getDate() - 7);

  date2 = new Date(Date.now());

  dateSixMonthAgo = this.date2.setMonth(this.date2.getMonth() - 6);

  getDate(a: string): number {
    return new Date(a).getTime();
  }
}
