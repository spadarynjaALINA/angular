import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private _tokenService: TokenService) {}

  setToken() {
    localStorage.setItem('token', this._tokenService.token());

    this.router.navigate(['/']);
  }
}
