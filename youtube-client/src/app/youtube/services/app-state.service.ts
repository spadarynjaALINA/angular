import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  public filterString$ = new BehaviorSubject<string>('');

  public sortBy$ = new BehaviorSubject<string>('');
}
