export class CustomCardModel {
  constructor(
    public id: number = 0,
    public title: string = '',
    public description: string = '',
    public img: string = '',
    public video: string = '',
    public date: number = 0,
  ) {}
}
export interface ICustomCard {
  id: number;
  title: string;
  description: string;
  img: string;
  video: string;
  date: number;
}
