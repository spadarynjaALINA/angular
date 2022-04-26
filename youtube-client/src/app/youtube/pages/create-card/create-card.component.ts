import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { regExValidator } from 'src/app/auth/validation';
import { IAdminForm } from '../../models/form.model';
import { URL_REG_EX } from './../../../constants';
import { DATE_REG_EX } from './../../../constants';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent {
  constructor(public fb: FormBuilder) {}

  public fields: IAdminForm[] = [
    {
      id: 'title',
      formControlName: 'title',
      messageError: {
        minLength: 'The title is too short',
        maxLength: 'The title is too long',
        required: 'Please enter a title',
      },
    },
    {
      id: 'description',
      formControlName: 'description',
      messageError: {
        maxLength: 'The description is too long',
      },
    },
    {
      id: 'img',
      formControlName: 'img',
      messageError: {
        pattern: 'The image link is invalid',
        required: 'Please enter a link to the image',
      },
    },
    {
      id: 'link',
      formControlName: 'link',
      messageError: {
        pattern: 'The video link is invalid',
        required: 'Please enter a link to the video',
      },
    },
    {
      id: 'date',
      formControlName: 'date',
      messageError: {
        pattern: 'The date is invalid, format: DD/MM/YYYY',
        required: 'Please enter a creation date',
      },
    },
  ];

  public newCard = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    description: ['', Validators.maxLength(255)],
    img: ['', [Validators.required, regExValidator(URL_REG_EX)]],
    link: ['', [Validators.required, regExValidator(URL_REG_EX)]],
    date: ['', [Validators.required, regExValidator(DATE_REG_EX)]],
  });

  createNewCard() {
  }

  createErrorMessage(field: IAdminForm): string | undefined {
    let message: string | undefined;
    switch (true) {
      case !!this.newCard?.get(field.id)?.errors?.['required']:
        message = field.messageError.required;
        break;
      case !!this.newCard?.get(field.id)?.errors?.['minlength']:
        message = field.messageError.minLength;
        break;
      case !!this.newCard?.get(field.id)?.errors?.['maxlength']:
        message = field.messageError.maxLength;
        break;
      case !!this.newCard?.get(field.id)?.errors?.['regEx']:
        message = field.messageError.pattern;
        break;
      default:
        message = '';
    }
    return message;
  }
}
