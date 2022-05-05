import { Component, OnDestroy, OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { AppStateService } from 'src/app/shared/app-state.service';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit, OnDestroy {
  constructor(
    public location: Location,
    private appStateService: AppStateService,
    private route: ActivatedRoute,
  ) {}

  public card: ISearchItem | undefined;

  ngOnInit() {
    this.appStateService.fetchCard(this.route.snapshot.params['id']);
    this.appStateService.card$.subscribe((val) => (this.card = val));
  }

  ngOnDestroy() {
    this.appStateService.card$.unsubscribe();
  }
}
