import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN } from './../../../constants';
import { createToken } from 'src/app/shared/utils';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  public regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

  public login = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(
      null,
      Validators.compose([Validators.required, Validators.pattern(this.regex)]),
    ),
  });

  userLogin() {
    localStorage.setItem(TOKEN, createToken());

    this.router.navigate(['/']);
  }

  info() {
    console.log(this.login.get('name')?.errors?.['email']);
  }
}
