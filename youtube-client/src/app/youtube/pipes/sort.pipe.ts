import { Pipe, PipeTransform } from '@angular/core';
import { IVideoTransformed } from 'src/app/youtube/models/search-item.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(cardList: IVideoTransformed[], search: string): IVideoTransformed[] {
    if (search === 'upDirViews') {
      const List = cardList
        .slice()
        .sort(
          (a: IVideoTransformed, b: IVideoTransformed) =>
            +b.statistic!.viewCount - +a.statistic!.viewCount,
        );

      return List;
    } else if (search === 'downDirViews') {
      const List = cardList
        .slice()
        .sort(
          (a: IVideoTransformed, b: IVideoTransformed) =>
            +a.statistic!.viewCount - +b.statistic!.viewCount,
        );

      return List;
    } else if (search === 'upDirDate') {
      const List = cardList
        .slice()
        .sort(
          (a: IVideoTransformed, b: IVideoTransformed) =>
            Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
        );
      return List;
    } else if (search === 'downDirDate') {
      const List = cardList
        .slice()
        .sort(
          (a: IVideoTransformed, b: IVideoTransformed) =>
            Date.parse(a.publishedAt) - Date.parse(b.publishedAt),
        );
      return List;
    }
    return cardList;
  }
}
