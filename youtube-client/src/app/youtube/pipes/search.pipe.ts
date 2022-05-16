import { Pipe, PipeTransform } from '@angular/core';
import { IVideoTransformed } from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(cardList: IVideoTransformed[], search: string = ''): IVideoTransformed[] {
    if (!search.trim()) {
      return cardList;
    }
    return cardList.filter((card) => {
      return card.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  }
}
