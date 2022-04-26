export const ROUTH_PATHS = {
  AUTHORIZATION: 'authorization',
  CARD: ':id',
  HOME: 'video',
  ADMIN: 'new-video',
};
export const TOKEN = 'token';
export const UP_DIRECTION_DATE = 'upDirDate';

export const DOWN_DIRECTION_DATE = 'downDirDate';

export const UP_DIRECTION_VIEWS = 'upDirViews';

export const DOWN_DIRECTION_VIEWS = 'downDirViews';

export const URL_REG_EX =
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

export const PASSWORD_REG_EX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
export const DATE_REG_EX = /(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](19|20)\d\d/;
