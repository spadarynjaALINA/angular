import { InjectionToken } from '@angular/core';

export const ROUTH_PATHS = {
  AUTHORIZATION: 'authorization',
  CARD: ':id',
  HOME: 'video',
  ADMIN: 'new-video',
};
export const URL_SEARCH = 'https://www.googleapis.com/youtube/v3/search?';
export const URL_STATISTICS = 'https://www.googleapis.com/youtube/v3/videos';
export const IS_LOGIN = 'isLogin';
export const TOKEN = 'AIzaSyCKc7WgnuYKWhwJzgrhmq2qPF5Q7IScK - c';
export const UP_DIRECTION_DATE = 'upDirDate';
export const injectUrl = new InjectionToken('URL');

export const injectToken = new InjectionToken('api');

export const apiData = [
  {
    provide: injectUrl,
    useValue: URL_SEARCH,
  },
  {
    provide: injectToken,
    useValue: TOKEN,
  },
];

export const DOWN_DIRECTION_DATE = 'downDirDate';

export const UP_DIRECTION_VIEWS = 'upDirViews';

export const DOWN_DIRECTION_VIEWS = 'downDirViews';

export const URL_REG_EX =
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

export const PASSWORD_REG_EX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
export const DATE_REG_EX = /(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](19|20)\d\d/;
// 'AIzaSyBGuFrQqKFZuZ_2EOIKg4AaGjGJoOXb38k';
