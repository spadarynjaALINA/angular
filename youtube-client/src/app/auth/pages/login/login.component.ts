import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN } from './../../../constants';
import { createToken } from 'src/app/shared/utils';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  userLogin() {
    localStorage.setItem(TOKEN, createToken());

    this.router.navigate(['/']);
  }
}
