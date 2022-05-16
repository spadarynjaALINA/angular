import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { regExValidator } from 'src/app/auth/validation';
import { IAdminForm } from '../../models/form.model';
import { URL_REG_EX } from '../../../constants';
import { IVideoTransformed } from '../../models/search-item.model';
import { Store } from '@ngrx/store';
import { YoutubeState } from 'src/app/redux/state.models';
import { createCustomCard } from 'src/app/redux/actions';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.scss'],
})
export class AdminPageComponent {
  constructor(public fb: FormBuilder, private store: Store<YoutubeState>) {}

  public customCard: IVideoTransformed;

  public counter = 0;

  public isSubmit$ = new BehaviorSubject<boolean>(false);

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
      id: 'video',
      formControlName: 'video',
      messageError: {
        pattern: 'The video link is invalid',
        required: 'Please enter a link to the video',
      },
    },
  ];

  public newCard = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    description: ['', Validators.maxLength(255)],
    img: ['', [Validators.required, regExValidator(URL_REG_EX)]],
    video: ['', [Validators.required, regExValidator(URL_REG_EX)]],
  });

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

  customCardSubmit() {
    const dateNow = new Date();
    this.customCard = {
      img: this.newCard.value.img,
      title: this.newCard.value.title,
      id: this.counter.toString(),
      description: this.newCard.value.description,
      publishedAt: dateNow.toString(),
      statistic: { viewCount: '0' },
    };
    this.counter++;
    this.isSubmit$.next(true);
    this.newCard.reset();
    this.store.dispatch(createCustomCard({ customCard: this.customCard }));
  }
}
