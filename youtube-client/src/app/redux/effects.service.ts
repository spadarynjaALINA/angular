import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, Observable, of, switchMap } from 'rxjs';

import { DataService } from 'src/app/youtube/services/data.service';

import { getYoutubeCards, getCardListFailed, getCardListSuccessful } from './actions';
@Injectable({ providedIn: 'any' })
export class Effects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  createYoutubeRequest: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
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
