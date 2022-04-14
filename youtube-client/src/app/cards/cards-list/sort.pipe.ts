import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from 'src/app/models/search-item.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(cardList: ISearchItem[], search: string): ISearchItem[] {
    if (search === 'upDirViews') {
      const List = cardList.sort(
        (a: ISearchItem, b: ISearchItem) => +b.statistics.viewCount - +a.statistics.viewCount,
      );

      return List;
    } else if (search === 'downDirViews') {
      const List = cardList.sort(
        (a: ISearchItem, b: ISearchItem) => +a.statistics.viewCount - +b.statistics.viewCount,
      );

      return List;
    } else if (search === 'upDirDate') {
      const List = cardList.sort(
        (a: ISearchItem, b: ISearchItem) =>
          Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt),
      );
      return List;
    } else if (search === 'downDirDate') {
      const List = cardList.sort(
        (a: ISearchItem, b: ISearchItem) =>
          Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),
      );
      return List;
    }
    return cardList;
  }
}
