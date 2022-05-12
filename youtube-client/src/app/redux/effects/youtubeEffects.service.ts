import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { DataService } from 'src/app/shared/data.service';

import {
  getYoutubeCards,
  getCardListFailed,
  getCardListSuccessful,
} from '../actions/youtubeActions';
@Injectable({ providedIn: 'any' })
export class YoutubeEffects {
  constructor(private actions: Actions, private dataService: DataService) {}

  createYoutubeRequest = createEffect(() =>
    this.actions.pipe(
      ofType(getYoutubeCards),
      switchMap(({ searchString }) =>
        this.dataService.searchVideo(searchString).pipe(
          map((cards) => getCardListSuccessful({ cards })),
          catchError((error) => of(getCardListFailed({ error }))),
        ),
      ),
    ),
  );
}
