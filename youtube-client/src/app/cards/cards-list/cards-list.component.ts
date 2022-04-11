import { Component, Input } from '@angular/core';
import * as cardList from './card-list.json';
import { ISearchResponse } from './../../models/search-response.model';
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent {
  @Input() public searchValue: string;

  @Input() public panelSearchValue: string;

  @Input() public sortBy: string;

  cardsList: ISearchResponse = cardList;

  clik() {
    console.log(this.sortBy, cardList);
  }
}
