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
  private isAuth: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLogin$.subscribe((val) => (this.isAuth = val));
  }

  canActivate(): boolean | Promise<boolean> {
    return this.isAuth ? true : this.router.navigate([ROUTH_PATHS.AUTHORIZATION]);
  }
}
