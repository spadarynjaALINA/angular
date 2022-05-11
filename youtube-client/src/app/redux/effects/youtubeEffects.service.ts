import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { AppStateService } from 'src/app/shared/app-state.service';

import {
  createYoutubeRequest,
  getCardListFailed,
  getCardListSuccessful,
} from '../actions/youtubeActions';
@Injectable({ providedIn: 'any' })
export class YoutubeEffects {
  constructor(private actions: Actions, private appStateService: AppStateService) {}

  createYoutubeRequest = createEffect(() => this.actions.pipe(
      ofType(createYoutubeRequest),
      switchMap(() =>
        this.appStateService.getCardList('query').pipe(
          map((videos) => getCardListSuccessful({ videos })),
          catchError((error) => of(getCardListFailed({ error }))),
        ),
      ),
    );
  );
}
