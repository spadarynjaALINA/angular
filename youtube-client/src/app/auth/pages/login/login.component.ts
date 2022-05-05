import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { regExValidator } from 'src/app/auth/validation';
import { PASSWORD_REG_EX } from 'src/app/constants';
import { ILoginForm } from '../../models/login.model';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private fb: FormBuilder, public authService: AuthService) {}

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
