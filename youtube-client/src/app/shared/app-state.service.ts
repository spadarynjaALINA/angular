import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { ISearchItem } from '../youtube/models/search-item.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  public filterString$ = new BehaviorSubject<string>('');

  public sortBy$ = new BehaviorSubject<string>('');

  public cardList$ = new BehaviorSubject<ISearchItem[]>([]);

  public card$ = new Subject<ISearchItem>();

  constructor(public dataService: DataService, private router: Router) {}

  fetchCardList(query: string): void {
    this.dataService.searchVideo(query).subscribe((data) => {
      this.cardList$.next(data);
    });
  }

  fetchCard(id: string): void {
    this.dataService.getVideo(id).subscribe((data) => this.card$.next(data));
  }

  getCardList(query: string): void {
    this.fetchCardList(query);
    this.router.navigate(['/video']);
  }
}
