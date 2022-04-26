import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TOKEN } from './../../../constants';
import { createToken } from 'src/app/shared/utils';
import { FormBuilder, Validators } from '@angular/forms';
import { regExValidator } from './../../validation';
import { PASSWORD_REG_EX } from './../../../constants';
import { ILoginForm } from '../../models/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private fb: FormBuilder) {}

  public loginFields: ILoginForm[] = [
    {
      id: 'name',
      formControlName: 'name',
      type: 'text',
      messageError: {
        email: 'Please enter a valid email: example@email.com',
        required: 'Please enter a login email',
      },
    },
    {
      id: 'password',
      formControlName: 'password',
      type: 'password',
      messageError: {
        regEx:
          'Your password must be have at least 8 characters long, 1 uppercase, 1 lowercase character, 1 number, 1 special character, e.g., ! @ # ? ]',
        required: 'Please enter a password',
      },
    },
  ];

  public login = this.fb.group({
    name: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, regExValidator(PASSWORD_REG_EX)]],
  });

  userLogin() {
    localStorage.setItem(TOKEN, createToken());

    this.router.navigate(['/']);
  }



  createErrorMessage(loginField: ILoginForm): string | undefined {
    let message: string | undefined;
    switch (true) {
      case !!this.login?.get(loginField.id)?.errors?.['required']:
        message = loginField.messageError.required;
        break;
      case !!this.login?.get(loginField.id)?.errors?.['email']:
        message = loginField.messageError.email;
        break;

      case !!this.login?.get(loginField.id)?.errors?.['regEx']:
        message = loginField.messageError.regEx;
        break;
      default:
        message = '';
    }
    return message;
  }
}
