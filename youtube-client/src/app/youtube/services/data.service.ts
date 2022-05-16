import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';
import { allCardsSelector } from '../../redux/selectors';
import { YoutubeState } from '../../redux/state.models';
import { IVideoTransformed } from '../models/search-item.model';

import { YoutubeService } from './youtube.service';

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

  public getVideo(id: string): Observable<IVideoTransformed | undefined> {
    return this.store
      .select(allCardsSelector)
      .pipe(map((carlist) => carlist.find((item: IVideoTransformed) => item.id === id)));
  }
}
