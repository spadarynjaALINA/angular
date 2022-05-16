import { Component, OnDestroy, OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import { IVideoTransformed } from '../../models/search-item.model';
import { DataService } from 'src/app/youtube/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit, OnDestroy {
  constructor(
    public location: Location,
    private dataService: DataService,
    private route: ActivatedRoute,
  ) {}

  public card: IVideoTransformed | undefined;

  public subscription = new Subscription();

  ngOnInit() {
    this.subscription = this.dataService
      .getVideo(this.route.snapshot.params['id'])
      .subscribe((video: IVideoTransformed | undefined) => (this.card = video));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
