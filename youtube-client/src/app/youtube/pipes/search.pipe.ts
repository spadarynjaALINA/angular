import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(cardList: ISearchItem[], search: string = ''): ISearchItem[] {
    if (!search.trim()) {
      return cardList;
    }
    return cardList.filter((card) => {
      return card.snippet.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
}
