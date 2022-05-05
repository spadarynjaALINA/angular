import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { API } from 'src/app/constants';
import { createToken } from 'src/app/shared/utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogin$ = new BehaviorSubject(!!localStorage.getItem('isLogin'));

  constructor(public router: Router) {}

  public login(): void {
    localStorage.setItem(API.IS_LOGIN, createToken());
    this.router.navigate(['/']);
    this.isLogin$.next(true);
  }

  public logout(): void {
    localStorage.clear();
    this.isLogin$.next(false);
  }
}
