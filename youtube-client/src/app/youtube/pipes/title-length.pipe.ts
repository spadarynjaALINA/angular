import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleLength',
})
export class TitleLengthPipe implements PipeTransform {
  transform(title: string, length: number): string {
    if (length < 50) return title;
    const newTitle = title.slice(0, 50);
    return `${newTitle}...`;
  }
}
