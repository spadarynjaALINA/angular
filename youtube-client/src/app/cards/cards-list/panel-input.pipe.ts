import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-item.model';

@Pipe({
  name: 'SearchPanelPipe',
})
export class SearchPanelPipe implements PipeTransform {
  transform(cardList: ISearchItem[], searchPanel: string = ''): ISearchItem[] {
    if (!searchPanel.trim()) {
      return cardList;
    }
    return cardList.filter((card) => {
      return card.snippet.title.toLowerCase().indexOf(searchPanel.toLowerCase()) !== -1;
    });
  }
}
