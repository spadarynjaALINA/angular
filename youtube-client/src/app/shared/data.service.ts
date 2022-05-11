import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { IVideoTransformed } from '../youtube/models/search-item.model';
import { YoutubeService } from '../youtube/services/youtube.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private youtubeService: YoutubeService) {}

  public searchVideo(query: string): Observable<IVideoTransformed[]> {
    return this.youtubeService
      .getVideoIds(query)
      .pipe(switchMap((ids) => this.youtubeService.getVideoById(ids)));
  }

  public getVideo(id: string): Observable<IVideoTransformed> {
    return this.youtubeService.getVideoById([id]).pipe(map((video) => video[0]));
  }
}
