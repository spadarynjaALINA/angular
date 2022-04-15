import { Directive, ElementRef, Input } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  published: number;

  constructor(private elementRef: ElementRef) {}

  date = new Date(Date.now());

  dateMonthAgo = this.date.setMonth(this.date.getMonth() - 1);

  date1 = new Date(Date.now());

  dateWeek: number = this.date1.setDate(this.date1.getDate() - 7);

  date2 = new Date(Date.now());

  dateSixMonthAgo = this.date2.setMonth(this.date2.getMonth() - 6);

  @Input('appColor') set setColor(card: ISearchItem) {
    this.published = new Date(card.snippet.publishedAt).getTime();
    if (this.published > this.dateWeek) {
      this.elementRef.nativeElement.style.backgroundColor = 'blue';
    }
    if (this.published > this.dateMonthAgo && this.published < this.dateWeek) {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
    if (this.published < this.dateSixMonthAgo) {
      this.elementRef.nativeElement.style.backgroundColor = 'red';
    }
  }
}
