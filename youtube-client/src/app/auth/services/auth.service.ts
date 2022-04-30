import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogin$: Observable<boolean>;

  private isLogin$$ = new BehaviorSubject(!!localStorage.getItem('isLogin'));

  public isExit$: Observable<boolean>;

  private isExit$$ = new BehaviorSubject(!localStorage.getItem('isLogin'));

  constructor() {
    this.isLogin$ = this.isLogin$$.asObservable();

    this.isExit$ = this.isExit$$.asObservable();
  }

  public login() {
    this.isLogin$$.next(true);
    this.isExit$$.next(false);
  }

  public exit() {
    this.isLogin$$.next(false);
    this.isExit$$.next(true);
  }
}
