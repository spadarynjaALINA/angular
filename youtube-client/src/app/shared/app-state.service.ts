import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { IVideoTransformed } from '../youtube/models/search-item.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  public filterString$ = new BehaviorSubject<string>('');

  public sortBy$ = new BehaviorSubject<string>('');

  public card$ = new Subject<IVideoTransformed>();

  constructor(public dataService: DataService, private router: Router) {}
}
