import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
import { Location } from '@angular/common';
import { YoutubeService } from '../../services/youtube.service';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit {
  constructor(public location: Location, private youtubeService: YoutubeService) {}

  public card: ISearchItem;

  public id: Observable<Params>;

  ngOnInit() {
    this.card = this.youtubeService.getCard();
  }

  goBack(): void {
    this.location.back();
  }
}
