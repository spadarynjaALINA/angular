import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import { IVideoTransformed } from '../../models/search-item.model';
import { DataService } from 'src/app/shared/data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit {
  constructor(
    public location: Location,
    private dataService: DataService,
    private route: ActivatedRoute,
  ) {}

  public card: IVideoTransformed | undefined;

  public card$ = new Subject<IVideoTransformed>();

  ngOnInit() {
    this.dataService
      .getVideo(this.route.snapshot.params['id'])
      .subscribe((video) => (this.card = video));
  }
}
