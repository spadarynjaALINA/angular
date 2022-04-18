import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  constructor(private router: Router) {}

  exit() {
    localStorage.clear();
  }

  toLogin() {
    this.router.navigate(['/authorization']);
  }
}
