/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ROUTH_PATHS } from '../../constants';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    let isAuth = false;
    this.authService.isLogin$.subscribe((val) => (isAuth = val));
    if (isAuth) return true;
    console.log(this.authService.isLogin$);
    this.router.navigate([ROUTH_PATHS.AUTHORIZATION]);
    return false;
  }
}
