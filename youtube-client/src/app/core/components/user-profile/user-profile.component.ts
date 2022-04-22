import { Component } from '@angular/core';
import { ROUTH_PATHS } from 'src/app/constants';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  public auth = ROUTH_PATHS.AUTHORIZATION;

  exit() {
    localStorage.clear();
  }
}
