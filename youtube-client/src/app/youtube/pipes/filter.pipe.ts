import { Pipe, PipeTransform } from '@angular/core';
import { IVideoTransformed } from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(cardList: IVideoTransformed[], searchPanel: string = ''): IVideoTransformed[] {
    if (!searchPanel.trim()) {
      return cardList;
    }
    return cardList.filter((card) => {
      return card.title.toLowerCase().indexOf(searchPanel.toLowerCase()) !== -1;
    });
  }
}
