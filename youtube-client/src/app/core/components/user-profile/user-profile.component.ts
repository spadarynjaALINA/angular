import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ROUTH_PATHS } from 'src/app/constants';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  constructor(public authService: AuthService) {
    console.log(this.authService.isExit$, this.authService.isLogin$);
  }

  public auth = ROUTH_PATHS.AUTHORIZATION;

  public admin = ROUTH_PATHS.ADMIN;

  exit() {
    localStorage.clear();
    this.authService.exit();
  }
}
