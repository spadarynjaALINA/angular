import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';
import { customCardSelector } from '../redux/selectors/youtube-selectors';
import { YoutubeState } from '../redux/state.models';
import { IVideoTransformed } from '../youtube/models/search-item.model';
import { YoutubeService } from '../youtube/services/youtube.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private youtubeService: YoutubeService, private store: Store<YoutubeState>) {}

  public searchVideo(query: string): Observable<IVideoTransformed[]> {
    return this.youtubeService
      .getVideoIds(query)
      .pipe(switchMap((ids) => this.youtubeService.getVideoById(ids)));
  }

  public getVideo(id: string): Observable<IVideoTransformed> {
    return id.length > 3
      ? this.youtubeService.getVideoById([id]).pipe(map((video) => video[0]))
      : this.store.select(customCardSelector).pipe(map((cardList) => cardList[+id]));
  }
}
